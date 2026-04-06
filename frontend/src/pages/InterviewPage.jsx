import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useNotifications } from '../context/NotificationContext';
import { API_ENDPOINTS } from '../utils/apiConfig';
import './InterviewPage.css';

// ── CIRCULAR SCORE RING ──
const ScoreRing = ({ score, size = 160, stroke = 14 }) => {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const color = score >= 70 ? '#e07b30' : score >= 45 ? '#e0a030' : '#c0392b';
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#f0e0d4" strokeWidth={stroke} />
      <circle
        cx={size/2} cy={size/2} r={r} fill="none"
        stroke={color} strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={circ} strokeDashoffset={offset}
        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1)' }}
      />
      <text x="50%" y="46%" textAnchor="middle" dominantBaseline="middle"
        style={{ fontSize: size * 0.22 + 'px', fontWeight: 800, fill: '#1a1108', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {score}
      </text>
      <text x="50%" y="64%" textAnchor="middle" dominantBaseline="middle"
        style={{ fontSize: size * 0.1 + 'px', fill: '#8d7664', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 500 }}>
        / 100
      </text>
    </svg>
  );
};

// ── ROLE OPTIONS ──
const ROLES = [
  'Software Engineer', 'Frontend Developer', 'Backend Developer',
  'Full Stack Engineer', 'Data Scientist', 'DevOps Engineer',
  'System Architect', 'Product Manager', 'UI/UX Designer',
  'Machine Learning Engineer',
];

const LEVELS = ['Fresher', 'Intermediate', 'Senior', 'Lead / Architect'];

// ══════════════════════════════════════════════
//  MAIN PAGE COMPONENT
// ══════════════════════════════════════════════
export default function InterviewPage() {
  const auth = getAuth();
  const db = getFirestore();
  const { notify } = useNotifications();

  const [userData, setUserData] = useState({ name: 'Candidate' });
  const [phase, setPhase] = useState('setup'); // 'setup' | 'interview' | 'results'

  // Setup
  const [role, setRole] = useState('Software Engineer');
  const [level, setLevel] = useState('Intermediate');
  const [generating, setGenerating] = useState(false);

  // Interview
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 mins
  const timerRef = useRef(null);

  // Results
  const [results, setResults] = useState(null);
  const [filterResult, setFilterResult] = useState('all'); // 'all' | 'critical'

  const resultRef = useRef(null);

  // Load user data
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      getDoc(doc(db, 'users', user.uid)).then(snap => {
        if (snap.exists()) {
            const data = snap.data();
            setUserData(data);
            if(data.dreamRole) setRole(data.dreamRole);
        }
      });
    }
  }, [auth, db]);

  // Timer
  useEffect(() => {
    if (phase !== 'interview') return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { handleSubmit(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [phase]);

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  // ── PHASE: SETUP → START ──
  const handleStart = async () => {
    setGenerating(true);
    let difficulty = 'medium';
    if(level === 'Fresher') difficulty = 'easy';
    if(level === 'Senior' || level === 'Lead / Architect') difficulty = 'hard';

    try {
        const res = await fetch(API_ENDPOINTS.INTERVIEW_GENERATE, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ role, experienceLevel: level, difficulty })
        });
        
        if (!res.ok) throw new Error("Failed to generate questions. AI Quota limit reached?");
        const data = await res.json();
        
        setQuestions(data.questions || []);
        setAnswers({});
        setCurrentQ(0);
        setTimeLeft(30 * 60);
        setPhase('interview');
    } catch (e) {
        alert(e.message);
    } finally {
        setGenerating(false);
    }
  };

  // ── ANSWER HANDLERS ──
  const handleMCQ = (questionId, optKey) => {
    setAnswers(prev => ({ ...prev, [questionId]: { selected: optKey } }));
  };

  const handleSubjective = (questionId, text) => {
    setAnswers(prev => ({ ...prev, [questionId]: { text } }));
  };

  // ── SUBMIT ──
  const handleSubmit = async () => {
    clearInterval(timerRef.current);
    
    // Formatting answers to simple { qId: answer } dictionary for backend
    const formattedAnswers = {};
    Object.keys(answers).forEach(qId => {
        formattedAnswers[qId] = answers[qId]?.selected || answers[qId]?.text || "";
    });

    try {
        setResults({ loading: true });
        setPhase('results');

        const res = await fetch(API_ENDPOINTS.INTERVIEW_SUBMIT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ questions, answers: formattedAnswers, role })
        });
        
        if (!res.ok) throw new Error("Failed to evaluate. Please try again.");
        const data = await res.json();
        
        // Map backend formatting to local representation
        setResults({
            total: Math.round(data.percentage || data.overallScore * 10),
            mcqScore: data.perQuestion.filter(q => questions.find(x => x.id === q.questionId)?.type === 'mcq' && q.isCorrect).length,
            mcqMax: 6,
            subjectiveScore: data.perQuestion.filter(q => questions.find(x => x.id === q.questionId)?.type === 'text').reduce((sum, q) => sum + (q.score || 0), 0),
            subjectiveMax: 4,
            percentile: data.englishProficiency ? `English: ${data.englishProficiency}` : 'Successfully Assessed',
            feedbacks: data.perQuestion.map(aiEval => {
                const q = questions.find(x => x.id === aiEval.questionId) || {};
                const ans = answers[q.id];
                const gaveCorrect = aiEval.isCorrect;
                
                let userAnswer = ans?.text || (ans?.selected ? q.options?.[ans.selected] : "Not answered");
                
                return {
                    id: aiEval.questionId,
                    number: aiEval.questionId,
                    type: q.type,
                    question: q.question,
                    userAnswer,
                    correct: gaveCorrect,
                    feedback: aiEval.feedback,
                    tag: gaveCorrect ? 'CORRECT' : (q.type === 'mcq' ? 'INCORRECT' : 'NEEDS WORK'),
                    tagType: gaveCorrect ? 'green' : (q.type === 'mcq' ? 'red' : 'yellow')
                };
            })
        });

        setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    } catch (e) {
        alert(e.message);
        setPhase('interview');
        setResults(null);
    }
  };

  const answeredCount = Object.keys(answers).filter(k => {
    const a = answers[k];
    return a?.selected !== undefined || (a?.text && a.text.trim().length > 0);
  }).length;

  const q = questions[currentQ];

  // ────────────────────────────
  //  RENDER: SETUP PHASE
  // ────────────────────────────
  if (phase === 'setup') {
    return (
      <div className="dashboard-layout">
        <Navbar userData={userData} />
        <div className="shell">
          <Sidebar userData={userData} />
          <main className="iv-main">
            <div className="iv-setup-wrap">
              <div className="iv-setup-badge">⚡ AI-Powered Interview</div>
              <h1 className="iv-setup-title">Configure Your <span>Interview</span></h1>
              <p className="iv-setup-sub">Tell us your target role and experience level. We'll generate 10 tailored questions — 6 MCQ + 4 Subjective — just for you.</p>

              <div className="iv-setup-card">
                <div className="iv-setup-field">
                  <label>Target Role</label>
                  <div className="iv-select-wrap">
                    <select value={role} onChange={e => setRole(e.target.value)}>
                      {ROLES.map(r => <option key={r}>{r}</option>)}
                    </select>
                    <span className="iv-select-arrow">
                      <svg viewBox="0 0 12 8"><polyline points="1,1 6,7 11,1"/></svg>
                    </span>
                  </div>
                </div>

                <div className="iv-setup-field">
                  <label>Experience Level</label>
                  <div className="iv-level-grid">
                    {LEVELS.map(l => (
                      <button
                        key={l}
                        className={`iv-level-btn ${level === l ? 'active' : ''}`}
                        onClick={() => setLevel(l)}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="iv-setup-preview">
                  <div className="iv-preview-item">
                    <span className="iv-preview-icon">📋</span>
                    <div>
                      <div className="iv-preview-label">6 MCQ Questions</div>
                      <div className="iv-preview-sub">Technical accuracy check</div>
                    </div>
                  </div>
                  <div className="iv-preview-item">
                    <span className="iv-preview-icon">✍️</span>
                    <div>
                      <div className="iv-preview-label">4 Subjective Questions</div>
                      <div className="iv-preview-sub">Problem solving & English comms</div>
                    </div>
                  </div>
                  <div className="iv-preview-item">
                    <span className="iv-preview-icon">⏱</span>
                    <div>
                      <div className="iv-preview-label">30 Minutes</div>
                      <div className="iv-preview-sub">Auto-submits when time's up</div>
                    </div>
                  </div>
                </div>

                <button className="iv-start-btn" onClick={handleStart} disabled={generating}>
                  {generating ? (
                    <><span className="iv-btn-spinner"></span> Generating AI Questions...</>
                  ) : (
                    <>🚀 Start Interview — {role} ({level})</>
                  )}
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  // ────────────────────────────
  //  RENDER: RESULTS PHASE
  // ────────────────────────────
  if (phase === 'results') {
      if (results?.loading) {
        return (
            <div className="dashboard-layout">
              <Navbar userData={userData} />
              <div className="shell">
                <Sidebar userData={userData} />
                <main className="iv-main" style={{alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{textAlign: 'center', color: '#8d7664'}}>
                        <div className="iv-btn-spinner" style={{borderColor: '#c2673a', borderTopColor: 'transparent', width: '40px', height: '40px', margin: '0 auto 20px'}}></div>
                        <h2>Evaluating your Answers...</h2>
                        <p>AI is reviewing your technical and communication skills.</p>
                    </div>
                </main>
              </div>
            </div>
        );
      }

    const filtered = filterResult === 'critical'
      ? results.feedbacks.filter(f => !f.correct)
      : results.feedbacks;

    return (
      <div className="dashboard-layout">
        <Navbar userData={userData} />
        <div className="shell">
          <Sidebar userData={userData} />
          <main className="iv-main" ref={resultRef}>

            <div className="iv-results-layout">
              {/* ── LEFT PANEL ── */}
              <aside className="iv-results-left">
                <h2 className="iv-results-perf-title">Performance<br/>Summary</h2>
                <p className="iv-results-role">{role} — {level}</p>

                <div className="iv-score-ring-wrap">
                  <ScoreRing score={results.total} size={170} />
                </div>

                <div className="iv-percentile-pill">{results.percentile}</div>

                <div className="iv-score-breakdown">
                  <div className="iv-score-box">
                    <div className="iv-score-box-label">MCQ FOCUS</div>
                    <div className="iv-score-box-val">{results.mcqScore}/{results.mcqMax}</div>
                    <div className="iv-score-box-sub">Technical Accuracy</div>
                  </div>
                  <div className="iv-score-box">
                    <div className="iv-score-box-label">SUBJECTIVE</div>
                    <div className="iv-score-box-val">{results.subjectiveScore}/{results.subjectiveMax}</div>
                    <div className="iv-score-box-sub">Problem Solving</div>
                  </div>
                </div>

                <button className="iv-download-btn" onClick={() => {
                  window.print();
                  notify && notify("📥 Interview report saved as PDF.");
                }}>
                  Download Report (PDF)
                </button>
                <button className="iv-try-btn" onClick={() => { setPhase('setup'); setResults(null); }}>
                  Try Another Interview →
                </button>
                <button className="iv-dash-btn" onClick={() => window.history.back()}>
                  Go back to Dashboard
                </button>
              </aside>

              {/* ── RIGHT PANEL ── */}
              <div className="iv-results-right">
                <div className="iv-results-header">
                  <div>
                    <h2 className="iv-results-title">AI Feedback Report</h2>
                    <p className="iv-results-desc">Detailed analysis of your responses and methodology</p>
                  </div>
                  <div className="iv-filter-group">
                    <span className="iv-filter-label">Filter by:</span>
                    <button className={`iv-filter-btn ${filterResult === 'all' ? 'active' : ''}`} onClick={() => setFilterResult('all')}>All</button>
                    <button className={`iv-filter-btn ${filterResult === 'critical' ? 'active-critical' : ''}`} onClick={() => setFilterResult('critical')}>Critical</button>
                  </div>
                </div>

                <div className="iv-feedback-list">
                  {filtered.map((item, idx) => (
                    <div className={`iv-feedback-card ${item.type}`} key={item.id}>
                      <div className="iv-fb-qtype-row">
                        <span className={`iv-qtype-badge ${item.tagType}`}>
                          QUESTION {String(item.number).padStart(2,'0')} • {item.type.toUpperCase()}
                        </span>
                      </div>

                      <h3 className="iv-fb-question">"{item.question}"</h3>

                      <div className="iv-fb-response-block">
                        <div className="iv-fb-response-label">YOUR RESPONSE</div>
                        <p className="iv-fb-response-text">"{item.userAnswer}"</p>
                      </div>

                      <div className={`iv-fb-ai-block ${item.tagType}`}>
                        <div className="iv-fb-ai-label">
                          <span className="iv-fb-ai-icon">
                            {item.tagType === 'green' ? '✦' : item.tagType === 'yellow' ? '💡' : '⚠️'}
                          </span>
                          <span>{item.tagType === 'green' ? 'AI Feedback' : item.tagType === 'yellow' ? 'Growth Opportunity' : 'Needs Work'}</span>
                          {item.type === 'mcq' && (
                            <span className={`iv-correct-badge ${item.tagType}`}>{item.tag}</span>
                          )}
                        </div>
                        <p className="iv-fb-ai-text">{item.feedback}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    );
  }

  // ────────────────────────────
  //  RENDER: INTERVIEW PHASE
  // ────────────────────────────
  return (
    <div className="dashboard-layout">
      <Navbar userData={userData} />
      <div className="shell">
        <Sidebar userData={userData} />
        <main className="iv-main">

          {/* ── TOP BAR ── */}
          <div className="iv-topbar">
            <div className="iv-topbar-left">
              <span className="iv-topbar-role">{role}</span>
              <span className="iv-topbar-level">{level}</span>
            </div>
            <div className="iv-progress-dots">
              {questions.map((_, i) => {
                const a = answers[questions[i]?.id];
                const done = a?.selected !== undefined || (a?.text && a.text.trim().length > 0);
                return (
                  <button
                    key={i}
                    className={`iv-dot ${i === currentQ ? 'current' : ''} ${done ? 'done' : ''}`}
                    onClick={() => setCurrentQ(i)}
                    title={`Q${i+1}`}
                  >
                    {i+1}
                  </button>
                );
              })}
            </div>
            <div className={`iv-timer ${timeLeft < 300 ? 'urgent' : ''}`}>
              ⏱ {formatTime(timeLeft)}
            </div>
          </div>

          {/* ── QUESTION AREA ── */}
          <div className="iv-question-wrap">
            <div className="iv-q-header">
              <h2 className="iv-q-counter">Question {currentQ + 1} of {questions.length}</h2>
              <div className="iv-progress-bar-wrap">
                <div className="iv-progress-bar" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
              </div>
            </div>

            {q && (
              <div className={`iv-question-card ${q.type}`} key={q.id}>
                <div className="iv-q-type-tag">{q.type === 'mcq' ? '🔘 Multiple Choice' : '✍️ Subjective Response'}</div>
                <p className="iv-q-text">
                  {q.question}
                </p>

                {/* MCQ Options */}
                {q.type === 'mcq' && q.options && (
                  <div className="iv-options-list">
                    {Object.entries(q.options).map(([optKey, optText]) => {
                      const selected = answers[q.id]?.selected === optKey;
                      return (
                        <button
                          key={optKey}
                          className={`iv-option ${selected ? 'selected' : ''}`}
                          onClick={() => handleMCQ(q.id, optKey)}
                        >
                          <span className={`iv-option-radio ${selected ? 'filled' : ''}`}>
                            {selected && <span className="iv-radio-inner" />}
                          </span>
                          <span className="iv-option-text">{optText}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Subjective Textarea */}
                {q.type === 'text' && (
                  <div className="iv-subjective-wrap">
                    <label className="iv-subj-label">ELABORATE ON YOUR REASONING (SUBJECTIVE RESPONSE)</label>
                    <div className="iv-textarea-box">
                      <textarea
                        rows={6}
                        value={answers[q.id]?.text || ''}
                        onChange={e => handleSubjective(q.id, e.target.value)}
                        placeholder="Describe your thinking process clearly..."
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── NAV BUTTONS ── */}
            <div className="iv-nav-bar">
              <button
                className="iv-nav-btn prev"
                onClick={() => setCurrentQ(c => Math.max(0, c - 1))}
                disabled={currentQ === 0}
              >
                ← Previous
              </button>

              <div className="iv-nav-center">
                <span className="iv-answered-count">{answeredCount} / {questions.length} answered</span>
                {answeredCount === questions.length && (
                  <button className="iv-submit-btn" onClick={handleSubmit}>
                    ✨ Submit Interview
                  </button>
                )}
              </div>

              {currentQ < questions.length - 1 ? (
                <button
                  className="iv-nav-btn next"
                  onClick={() => setCurrentQ(c => Math.min(questions.length - 1, c + 1))}
                >
                  Next Question →
                </button>
              ) : (
                <button className="iv-nav-btn next submit" onClick={handleSubmit}>
                  Finish & Submit →
                </button>
              )}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
