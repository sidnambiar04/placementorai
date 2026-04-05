import React, { useState, useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNotifications } from '../context/NotificationContext';
import { API_ENDPOINTS } from '../utils/apiConfig';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import './SkillGapPage.css';

const ROLES = [
  'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
  'Data Scientist', 'SDE-1', 'UI/UX Designer', 'Mobile Developer',
  'Product Manager', 'DevOps Engineer', 'Software Engineer',
  'Machine Learning Engineer', 'Cloud Architect'
];

const EXP_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

export default function SkillGapPage() {
  const { notify } = useNotifications();
  const [userData, setUserData] = useState({ name: 'Demo', dreamRole: 'Software Engineer', expLevel: 'Beginner' });
  const [role, setRole] = useState('Software Engineer');
  const [expLevel, setExpLevel] = useState('Beginner');
  const [knownSkills, setKnownSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [addingSkill, setAddingSkill] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [roleDropOpen, setRoleDropOpen] = useState(false);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasResumeAnalysis, setHasResumeAnalysis] = useState(false);
  const [resumeAnalysis, setResumeAnalysis] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const skillInputRef = useRef(null);
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const snap = await getDoc(doc(db, 'users', user.uid));
        if (snap.exists()) {
          const data = snap.data();
          setUserData(data);
          if (data.dreamRole) setRole(data.dreamRole);
          if (data.expLevel) setExpLevel(data.expLevel);
          if (data.resumeAnalysis) {
            setHasResumeAnalysis(true);
            setResumeAnalysis(data.resumeAnalysis);
          }
          if (data.skillGapReport) {
            setReport(data.skillGapReport);
          }
        }
      }
      setPageLoading(false);
    });
    return () => unsub();
  }, [auth, db]);

  const addSkill = () => {
    const s = newSkill.trim();
    if (s && !knownSkills.includes(s)) {
      setKnownSkills(prev => [...prev, s]);
    }
    setNewSkill('');
    setAddingSkill(false);
  };

  const removeSkill = (skill) => setKnownSkills(prev => prev.filter(s => s !== skill));

  const handleAnalyze = async () => {
    setLoading(true);
    setReport(null);
    try {
      const payload = {
        name: userData.name || 'Candidate',
        dreamRole: role,
        experienceLevel: expLevel,
        knownSkills,
        previousAnalysis: resumeAnalysis || null,
      };
      const res = await fetch(API_ENDPOINTS.SKILL_GAP_ANALYZE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Analysis failed');
      const data = await res.json();
      setReport(data.report);
      
      // Persist results to Firestore for page-load recall
      const user = auth.currentUser;
      if (user) {
        await updateDoc(doc(db, "users", user.uid), {
          skillGapReport: data.report
        });
      }

      notify("📊 Skill gap analysis complete! Your roadmap is ready.");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getReadinessColor = (r) => r === 'High' ? '#22c55e' : r === 'Medium' ? '#f59e0b' : '#ef4444';
  const getBarColor = (level) => level === 'high' ? '#22c55e' : level === 'mid' ? '#f59e0b' : '#ef4444';
  const getPriorityColor = (p) => p === 'High' ? '#fee2e2' : p === 'Medium' ? '#fef3c7' : '#f0fdf4';
  const getPriorityText = (p) => p === 'High' ? '#c0392b' : p === 'Medium' ? '#b45309' : '#166534';

  if (pageLoading) return <div className="sg-loading">Loading...</div>;

  return (
    <div className="dashboard-layout">
      <Navbar userData={userData} />
      <div className="shell">
        <Sidebar userData={userData} />
        <main className="sg-main">

          {/* ── HERO INPUT SECTION ── */}
          <div className="sg-hero">
            <div className="sg-hero-top">
              <div className="sg-hero-text">
                <h1 className="sg-headline">Map Your <em>Momentum.</em></h1>
                <p className="sg-subtext">
                  Define your destination and let AI audit your current stack.
                  We don't just find gaps — we build the bridge to your next career milestone.
                </p>
                {hasResumeAnalysis && (
                  <div className="sg-resume-badge">
                    <span>✦</span> Powered by your Resume Evaluation — results are personalised!
                  </div>
                )}
              </div>
              <div className="sg-figure">
                <div className="sg-holo-lines">
                  <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="160" height="140" rx="4" fill="none" stroke="#00e5ff" strokeWidth=".8"/>
                    <line x1="20" y1="55" x2="180" y2="55" stroke="#00e5ff" strokeWidth=".5"/>
                    <line x1="20" y1="90" x2="180" y2="90" stroke="#00e5ff" strokeWidth=".5"/>
                    <line x1="20" y1="125" x2="180" y2="125" stroke="#00e5ff" strokeWidth=".5"/>
                    <line x1="65" y1="20" x2="65" y2="160" stroke="#00e5ff" strokeWidth=".5"/>
                    <line x1="115" y1="20" x2="115" y2="160" stroke="#00e5ff" strokeWidth=".5"/>
                    <circle cx="65" cy="55" r="3" fill="#00e5ff"/>
                    <circle cx="115" cy="90" r="3" fill="#00e5ff"/>
                    <circle cx="150" cy="55" r="3" fill="#00e5ff"/>
                    <rect x="30" y="30" width="30" height="16" rx="2" fill="#00e5ff" fillOpacity=".15" stroke="#00e5ff" strokeWidth=".6"/>
                    <rect x="30" y="62" width="22" height="8" rx="2" fill="#00e5ff" fillOpacity=".1" stroke="#00e5ff" strokeWidth=".6"/>
                    <rect x="30" y="76" width="30" height="8" rx="2" fill="#00e5ff" fillOpacity=".1" stroke="#00e5ff" strokeWidth=".6"/>
                  </svg>
                </div>
                <div className="sg-stick-figure">
                  <svg viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="40" cy="108" rx="18" ry="4" fill="rgba(0,200,220,.25)"/>
                    <circle cx="40" cy="14" r="12" fill="#e0e8f0" stroke="#c8d8e8" strokeWidth="1"/>
                    <rect x="28" y="26" width="24" height="32" rx="8" fill="#d0dce8"/>
                    <line x1="28" y1="34" x2="12" y2="52" stroke="#c8d8e8" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="52" y1="34" x2="66" y2="46" stroke="#c8d8e8" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="66" y1="46" x2="72" y2="38" stroke="#c8d8e8" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="34" y1="58" x2="28" y2="80" stroke="#c8d8e8" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="28" y1="80" x2="22" y2="90" stroke="#c8d8e8" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="46" y1="58" x2="52" y2="80" stroke="#c8d8e8" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="52" y1="80" x2="58" y2="90" stroke="#c8d8e8" strokeWidth="5" strokeLinecap="round"/>
                    <rect x="58" y="28" width="18" height="22" rx="3" fill="rgba(0,220,255,.15)" stroke="#00dcff" strokeWidth="1"/>
                    <line x1="60" y1="34" x2="74" y2="34" stroke="#00dcff" strokeWidth=".8" opacity=".7"/>
                    <line x1="60" y1="38" x2="74" y2="38" stroke="#00dcff" strokeWidth=".8" opacity=".7"/>
                    <line x1="60" y1="42" x2="70" y2="42" stroke="#00dcff" strokeWidth=".8" opacity=".7"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* ── BOTTOM INPUT CARDS ── */}
            <div className="sg-cards-row">
              {/* Role Card */}
              <div className="sg-field-card">
                <div className="sg-field-label">
                  <div className="sg-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#c2673a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
                  </div>
                  Target Role
                </div>
                <input
                  className="sg-role-input"
                  type="text"
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  placeholder="e.g. Frontend Developer"
                />
              </div>

              {/* Experience Card */}
              <div className="sg-field-card">
                <div className="sg-field-label">
                  <div className="sg-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#c2673a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </div>
                  Experience
                </div>
                <div className="sg-exp-pills">
                  {EXP_LEVELS.map(level => (
                    <button key={level} className={`sg-pill ${expLevel === level ? 'active' : 'inactive'}`} onClick={() => setExpLevel(level)}>{level}</button>
                  ))}
                </div>
              </div>

              {/* Known Skills Card */}
              <div className="sg-field-card">
                <div className="sg-field-label">
                  <div className="sg-ico sg-ico-filled">
                    <svg viewBox="0 0 24 24" fill="#c2673a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                  Known Skills
                </div>
                <div className="sg-skills-wrap">
                  {knownSkills.map(skill => (
                    <div key={skill} className="sg-skill-tag">
                      {skill}
                      <button className="sg-remove" onClick={() => removeSkill(skill)}>×</button>
                    </div>
                  ))}
                  {addingSkill ? (
                    <input
                      ref={skillInputRef}
                      className="sg-skill-input"
                      value={newSkill}
                      onChange={e => setNewSkill(e.target.value)}
                      onKeyDown={e => { if (e.key === 'Enter') addSkill(); if (e.key === 'Escape') { setAddingSkill(false); setNewSkill(''); } }}
                      onBlur={addSkill}
                      placeholder="e.g. React"
                      autoFocus
                    />
                  ) : (
                    <button className="sg-add-skill" onClick={() => setAddingSkill(true)}>+ Add skill</button>
                  )}
                </div>
              </div>
            </div>

            {/* Resume Upload & CTA */}
            <div className="sg-bottom-row">
              <label className="sg-upload-zone">
                <svg viewBox="0 0 24 24" fill="none" stroke="#c2673a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                <span>{resumeFile ? resumeFile.name : (hasResumeAnalysis ? '✓ Using your evaluated resume' : 'Upload Resume (optional — for better results)')}</span>
                <input type="file" accept=".pdf,.docx,.png,.jpg" style={{display:'none'}} onChange={e => setResumeFile(e.target.files[0])} />
              </label>
              <button className="sg-cta-btn" onClick={handleAnalyze} disabled={loading}>
                {loading ? (
                  <><span className="sg-spinner" /> Analysing...</>
                ) : (
                  <>✦ Analyse Skill Gap</>
                )}
              </button>
            </div>
          </div>

          {/* ── RESULTS SECTION ── */}
          {report && (
            <div className="sg-results">
              {/* Header row */}
              <div className="sg-results-header">
                <div>
                  <div className="sg-results-title">Skill Gap Report</div>
                  <div className="sg-results-sub">{role} · {expLevel}</div>
                </div>
                <div className="sg-readiness-badge" style={{background: getReadinessColor(report.readiness) + '22', color: getReadinessColor(report.readiness), border: `1.5px solid ${getReadinessColor(report.readiness)}44`}}>
                  {report.readiness} Readiness
                </div>
              </div>

              {/* Summary */}
              <p className="sg-summary">{report.summary}</p>

              {/* Stat Row */}
              <div className="sg-stat-row">
                <div className="sg-stat-card">
                  <div className="sg-stat-num">{report.atsScore}<span className="sg-stat-denom">/100</span></div>
                  <div className="sg-stat-label">Profile Score</div>
                </div>
                <div className="sg-stat-card">
                  <div className="sg-stat-num">{report.skillMatch}<span className="sg-stat-denom">%</span></div>
                  <div className="sg-stat-label">Skill Match</div>
                </div>
                <div className="sg-stat-card">
                  <div className="sg-stat-num">{(report.skillsMissing || []).length}</div>
                  <div className="sg-stat-label">Gaps Found</div>
                </div>
                <div className="sg-stat-card">
                  <div className="sg-stat-num">{(report.skillsHave || []).length}</div>
                  <div className="sg-stat-label">Skills Confirmed</div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="sg-skills-grid">
                <div className="sg-skills-panel sg-have-panel">
                  <div className="sg-panel-label">✓ Skills You Have</div>
                  <div className="sg-pills-wrap">
                    {(report.skillsHave || []).map(s => (
                      <span key={s} className="sg-result-tag sg-have-tag">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="sg-skills-panel sg-missing-panel">
                  <div className="sg-panel-label">✗ Skill Gaps</div>
                  <div className="sg-pills-wrap">
                    {(report.skillsMissing || []).map(s => (
                      <span key={s} className="sg-result-tag sg-missing-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category Breakdown */}
              {(report.categories || []).length > 0 && (
                <div className="sg-section">
                  <div className="sg-section-title">Category Breakdown</div>
                  <div className="sg-categories">
                    {(report.categories || []).map((cat, i) => (
                      <div key={i} className="sg-cat-card">
                        <div className="sg-cat-top">
                          <span className="sg-cat-icon">{cat.icon}</span>
                          <span className="sg-cat-name">{cat.name}</span>
                          <span className="sg-cat-pct" style={{color: getBarColor(cat.level)}}>{cat.pct}%</span>
                        </div>
                        <div className="sg-bar-track">
                          <div className="sg-bar-fill" style={{width: `${cat.pct}%`, background: getBarColor(cat.level)}} />
                        </div>
                        <div className="sg-cat-sub">{cat.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Learning Roadmap */}
              {(report.roadmap || []).length > 0 && (
                <div className="sg-section">
                  <div className="sg-section-title">Learning Roadmap</div>
                  <div className="sg-roadmap">
                    {(report.roadmap || []).map((step, i) => (
                      <div key={i} className="sg-roadmap-item">
                        <div className="sg-roadmap-num">{String(step.rank).padStart(2, '0')}</div>
                        <div className="sg-roadmap-content">
                          <div className="sg-roadmap-name">{step.name}</div>
                          <div className="sg-roadmap-desc">{step.desc}</div>
                        </div>
                        <div className="sg-priority-badge" style={{background: getPriorityColor(step.priority), color: getPriorityText(step.priority)}}>{step.priority}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Insights + Weak Areas */}
              <div className="sg-bottom-grid">
                {(report.insights || []).length > 0 && (
                  <div className="sg-section">
                    <div className="sg-section-title">💡 Key Insights</div>
                    {(report.insights || []).map((ins, i) => (
                      <div key={i} className="sg-insight-card">
                        <div className="sg-insight-title">{ins.title}</div>
                        <div className="sg-insight-desc">{ins.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
                {(report.weakAreas || []).length > 0 && (
                  <div className="sg-section">
                    <div className="sg-section-title">⚠️ Weak Areas</div>
                    {(report.weakAreas || []).map((area, i) => (
                      <div key={i} className="sg-weak-card">
                        <div className="sg-weak-icon">{area.icon}</div>
                        <div>
                          <div className="sg-weak-title">{area.title}</div>
                          <div className="sg-weak-desc">{area.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Top Companies */}
              {(report.topCompanies || []).length > 0 && (
                <div className="sg-section">
                  <div className="sg-section-title">🏢 Companies Hiring for This Role</div>
                  <div className="sg-companies">
                    {(report.topCompanies || []).map((co, i) => (
                      <div key={i} className="sg-company-chip">{co}</div>
                    ))}
                  </div>
                </div>
              )}

              {/* Download CTA */}
              <div className="sg-download-section">
                <button 
                  className="sg-download-btn" 
                  onClick={() => { window.print(); notify("📥 Skill gap report saved as PDF."); }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Full Analysis (PDF)
                </button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
