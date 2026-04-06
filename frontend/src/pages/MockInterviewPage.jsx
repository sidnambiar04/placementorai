import React, { useEffect, useMemo, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
  serverTimestamp,
} from 'firebase/firestore';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import { API_ENDPOINTS } from '../utils/apiConfig';
import { generateMockInterviewReportPdf } from '../utils/mockInterviewPdf';
import './MockInterviewPage.css';

function toDisplayDate(value) {
  if (!value) return '-';
  if (typeof value === 'string') return value;
  if (value?.toDate) return value.toDate().toLocaleDateString();
  return String(value);
}

function getReadableError(err, fallback) {
  const msg = String(err?.message || '').toLowerCase();
  if (msg.includes('failed to fetch') || msg.includes('networkerror')) {
    return 'Cannot connect to backend server at http://localhost:8000. Start backend and try again.';
  }
  return err?.message || fallback;
}

export default function MockInterviewPage() {
  const auth = getAuth();
  const db = getFirestore();

  const [userData, setUserData] = useState({ name: 'Candidate', dreamRole: 'Software Engineer' });
  const [pageLoading, setPageLoading] = useState(true);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const [tab, setTab] = useState('interview');
  const [started, setStarted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [evaluation, setEvaluation] = useState(null);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setPageLoading(false);
        return;
      }

      try {
        const userSnap = await getDoc(doc(db, 'users', user.uid));
        if (userSnap.exists()) {
          setUserData((prev) => ({ ...prev, ...userSnap.data() }));
        }
      } catch (err) {
        console.error('Failed to fetch user profile:', err);
      }

      await loadHistory(user.uid);
      setPageLoading(false);
    });

    return () => {
      window.speechSynthesis?.cancel();
      unsub();
    };
  }, [auth, db]);

  useEffect(() => {
    if (!started || !currentQuestion || evaluation) return;
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const prefix = currentQuestion.type === 'mcq' ? 'Multiple choice question.' : 'Written response question.';
    const optionsText =
      currentQuestion.type === 'mcq' && currentQuestion.options
        ? ` Option A: ${currentQuestion.options.a}. Option B: ${currentQuestion.options.b}. Option C: ${currentQuestion.options.c}. Option D: ${currentQuestion.options.d}.`
        : '';
    const speechText = `${prefix} ${currentQuestion.question}.${optionsText}`;

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);

    return () => {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    };
  }, [started, currentQuestion, evaluation]);

  const progress = useMemo(() => {
    if (!questions.length) return 0;
    return Math.round(((currentIndex + 1) / questions.length) * 100);
  }, [questions.length, currentIndex]);

  const canGoNext = useMemo(() => {
    if (!currentQuestion) return false;
    const value = answers[String(currentQuestion.id)];
    if (currentQuestion.type === 'mcq') return Boolean(value);
    return Boolean(value && String(value).trim());
  }, [answers, currentQuestion]);

  async function loadHistory(uid) {
    setHistoryLoading(true);
    try {
      const q = query(collection(db, 'mock_interviews'), where('user_id', '==', uid));
      const snap = await getDocs(q);
      const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      rows.sort((a, b) => {
        const at = a.created_at?.seconds || 0;
        const bt = b.created_at?.seconds || 0;
        return bt - at;
      });
      setHistory(rows);
    } catch (err) {
      console.error('Failed to load mock interview history:', err);
    } finally {
      setHistoryLoading(false);
    }
  }

  async function handleStartInterview() {
    setError('');
    setEvaluation(null);
    setCurrentIndex(0);
    setAnswers({});
    setIsGenerating(true);

    try {
      const response = await fetch(API_ENDPOINTS.MOCK_INTERVIEW_GENERATE, { method: 'POST' });
      if (!response.ok) throw new Error('Unable to generate interview questions right now.');
      const data = await response.json();
      const generated = Array.isArray(data.questions) ? data.questions : [];

      if (generated.length !== 10) {
        throw new Error('AI returned an invalid interview set. Please try again.');
      }

      setQuestions(generated);
      setStarted(true);
    } catch (err) {
      setError(getReadableError(err, 'Failed to start interview.'));
    } finally {
      setIsGenerating(false);
    }
  }

  async function handleSubmitInterview() {
    if (!auth.currentUser) return;
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(API_ENDPOINTS.MOCK_INTERVIEW_SUBMIT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questions, answers }),
      });
      if (!response.ok) throw new Error('Evaluation failed. Please retry.');

      const evalData = await response.json();
      setEvaluation(evalData);

      const interviewRef = doc(collection(db, 'mock_interviews'));
      const createdDate = new Date().toLocaleDateString();
      await setDoc(interviewRef, {
        id: interviewRef.id,
        user_id: auth.currentUser.uid,
        date: createdDate,
        total_score: evalData.totalScore ?? 0,
        mcq_score: evalData.mcqScore ?? 0,
        english_score: evalData.englishScore ?? 0,
        questions_json: questions,
        answers_json: answers,
        ai_feedback_json: evalData,
        pdf_report_url: null,
        created_at: serverTimestamp(),
      });

      await loadHistory(auth.currentUser.uid);
    } catch (err) {
      setError(getReadableError(err, 'Could not submit interview.'));
    } finally {
      setIsSubmitting(false);
    }
  }

  function downloadCurrentReport() {
    generateMockInterviewReportPdf({
      candidateName: userData.name || userData.fullName || 'Candidate',
      interviewDate: new Date().toLocaleDateString(),
      evaluation,
      questions,
      answers,
    });
  }

  function downloadHistoryReport(row) {
    generateMockInterviewReportPdf({
      candidateName: userData.name || userData.fullName || 'Candidate',
      interviewDate: row.date || toDisplayDate(row.created_at),
      evaluation: row.ai_feedback_json,
      questions: row.questions_json || [],
      answers: row.answers_json || {},
    });
  }

  if (pageLoading) {
    return <div className="mi-loading-screen">Loading...</div>;
  }

  return (
    <div className="dashboard-layout">
      <Navbar userData={userData} />
      <div className="shell">
        <Sidebar userData={userData} />

        <main className="mi-main">
          <div className="mi-page-header">
            <h1>AI Mock Interview</h1>
            <p>Practice with 10 AI-generated placement questions and get a detailed performance report.</p>
          </div>

          <div className="mi-tabs">
            <button className={`mi-tab ${tab === 'interview' ? 'active' : ''}`} onClick={() => setTab('interview')}>
              Interview
            </button>
            <button className={`mi-tab ${tab === 'history' ? 'active' : ''}`} onClick={() => setTab('history')}>
              History
            </button>
          </div>

          {error && <div className="mi-error">{error}</div>}

          {tab === 'interview' && (
            <div className="mi-start-card">
              <h2>Placement Practice Session</h2>
              <p>
                The session includes 6 MCQs and 4 writing questions. Each question is read aloud, and your report
                includes section-wise scores, strengths, and improvement areas.
              </p>
              <button className="mi-primary-btn" onClick={handleStartInterview} disabled={isGenerating}>
                {isGenerating ? 'Generating Interview...' : 'Start Interview'}
              </button>
            </div>
          )}

          {tab === 'history' && (
            <div className="mi-history-card">
              <h2>Interview History</h2>
              {historyLoading ? <div className="mi-inline-loading">Loading history...</div> : null}
              {!historyLoading && history.length === 0 ? <div className="mi-empty">No interviews completed yet.</div> : null}

              {!historyLoading && history.length > 0 && (
                <div className="mi-history-table-wrap">
                  <table className="mi-history-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Total Score</th>
                        <th>MCQ Score</th>
                        <th>English Score</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((row) => (
                        <tr key={row.id}>
                          <td>{row.date || toDisplayDate(row.created_at)}</td>
                          <td>{row.total_score ?? '-'}</td>
                          <td>{row.mcq_score ?? '-'}</td>
                          <td>{row.english_score ?? '-'}</td>
                          <td>
                            <button className="mi-secondary-btn" onClick={() => downloadHistoryReport(row)}>
                              View Report
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {started && (
            <section className="mi-overlay">
              <div className="mi-overlay-top">
                <div className="mi-progress-meta">
                  <span>
                    Question {Math.min(currentIndex + 1, questions.length)} of {questions.length}
                  </span>
                  <button
                    className="mi-secondary-btn"
                    onClick={() => {
                      setStarted(false);
                      window.speechSynthesis?.cancel();
                    }}
                  >
                    Exit
                  </button>
                </div>
                <div className="mi-progress-track">
                  <div className="mi-progress-fill" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {!evaluation && currentQuestion && (
                <div className="mi-overlay-content">
                  <div className="mi-avatar-panel">
                    <div className={`mi-avatar ${isSpeaking ? 'speaking' : 'idle'}`}>
                      <div className="mi-avatar-head">
                        <span className="eye left" />
                        <span className="eye right" />
                        <span className="mouth" />
                      </div>
                      <div className="mi-avatar-body" />
                      <div className="mi-wave w1" />
                      <div className="mi-wave w2" />
                      <div className="mi-wave w3" />
                    </div>
                    <p>{isSpeaking ? 'Reading question...' : 'Listening mode'}</p>
                  </div>

                  <div className="mi-question-panel">
                    <div className="mi-question-badge">{currentQuestion.type === 'mcq' ? 'MCQ' : 'Written'}</div>
                    <h3>{currentQuestion.question}</h3>

                    {currentQuestion.type === 'mcq' && currentQuestion.options && (
                      <div className="mi-options">
                        {['a', 'b', 'c', 'd'].map((key) => (
                          <button
                            key={key}
                            className={`mi-option ${answers[String(currentQuestion.id)] === key ? 'selected' : ''}`}
                            onClick={() => setAnswers((prev) => ({ ...prev, [String(currentQuestion.id)]: key }))}
                          >
                            <span>{key.toUpperCase()}</span>
                            <span>{currentQuestion.options[key]}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {currentQuestion.type === 'text' && (
                      <textarea
                        className="mi-textarea"
                        rows={7}
                        placeholder="Type your response here..."
                        value={answers[String(currentQuestion.id)] || ''}
                        onChange={(e) =>
                          setAnswers((prev) => ({ ...prev, [String(currentQuestion.id)]: e.target.value }))
                        }
                      />
                    )}

                    <div className="mi-nav-row">
                      <button
                        className="mi-secondary-btn"
                        disabled={currentIndex === 0}
                        onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                      >
                        Previous
                      </button>

                      {currentIndex < questions.length - 1 ? (
                        <button
                          className="mi-primary-btn"
                          disabled={!canGoNext}
                          onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1))}
                        >
                          Next Question
                        </button>
                      ) : (
                        <button className="mi-primary-btn" disabled={!canGoNext || isSubmitting} onClick={handleSubmitInterview}>
                          {isSubmitting ? 'Submitting...' : 'Submit Interview'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {evaluation && (
                <div className="mi-result-panel">
                  <h2>Interview Completed</h2>
                  <p>Your interview has been evaluated by Placementor AI.</p>

                  <div className="mi-result-grid">
                    <div className="mi-metric">
                      <span>Total Score</span>
                      <strong>{evaluation.totalScore ?? '-'}/100</strong>
                    </div>
                    <div className="mi-metric">
                      <span>MCQ Score</span>
                      <strong>
                        {evaluation.mcqScore ?? '-'} / {evaluation.mcqTotal ?? '-'}
                      </strong>
                    </div>
                    <div className="mi-metric">
                      <span>English Score</span>
                      <strong>{evaluation.englishScore ?? '-'} / 10</strong>
                    </div>
                  </div>

                  <div className="mi-summary">
                    <h4>AI Summary</h4>
                    <p>{evaluation.overallSummary || 'Summary unavailable.'}</p>
                  </div>

                  <div className="mi-result-actions">
                    <button className="mi-primary-btn" onClick={downloadCurrentReport}>
                      Download Report
                    </button>
                    <button
                      className="mi-secondary-btn"
                      onClick={() => {
                        setStarted(false);
                        setTab('history');
                      }}
                    >
                      Go To History
                    </button>
                  </div>
                </div>
              )}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
