import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Sidebar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';
import './DashboardPage.css';

const NEWS_ITEMS = [
  "AI & ML roles up 34% in 2025 — highest demand in 5 years",
  "Google hiring 12,000 engineers globally this quarter",
  "React 19 released — new compiler boosts performance by 40%",
  "Top skill in demand: System Design + LLM integration",
  "Infosys opening 8,000 fresher positions across India this month",
  "Python overtakes Java as most-used backend language in job listings",
  "TCS, Wipro, HCL conducting mega off-campus drives in June 2025"
];

const ROLE_SKILLS = {
  "Frontend Developer":   ["HTML/CSS", "JavaScript (ES6+)", "React & Redux"],
  "Backend Developer":    ["Node.js", "REST APIs", "Databases (SQL/NoSQL)"],
  "Full Stack Developer": ["React", "Node.js", "System Design"],
  "Data Scientist":       ["Python", "ML Algorithms", "Data Analysis"],
  "SDE-1":                ["DSA", "System Design", "Core CS Concepts"],
  "UI/UX Designer":       ["Figma", "User Research", "Prototyping"],
  "Mobile Dev":           ["React Native / Flutter", "APIs", "App Architecture"],
  "Product Manager":      ["Product Strategy", "User Stories", "Metrics & KPIs"],
  "DevOps Engineer":      ["Docker", "CI/CD Pipelines", "Cloud (AWS/GCP)"],
  "Software Engineer":    ["DSA", "System Design", "Core CS Concepts"],
};

// ── COMPACT RADAR CHART FOR DASHBOARD (ENLARGED) ──
const RadarChart = ({ metrics }) => {
  const size = 220;
  const center = size / 2;
  const radius = 80;
  const keys = ['keywords', 'format', 'completeness', 'role', 'impact'];
  const labels = ['Key', 'Fmt', 'Cmp', 'Rol', 'Imp'];
  
  const getPoint = (index, value, maxRadius) => {
    const angle = (Math.PI * 2 * index) / keys.length - Math.PI / 2;
    const r = (value / 100) * maxRadius;
    return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle) };
  };

  const points = keys.map((key, i) => getPoint(i, metrics?.[key] || 0, radius));
  const pointsStr = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[0.4, 0.7, 1].map((step, i) => (
        <circle key={i} cx={center} cy={center} r={radius * step} fill="none" stroke="#e5e7eb" strokeWidth="1" />
      ))}
      <polygon points={pointsStr} fill="rgba(194, 103, 58, 0.15)" stroke="#c2673a" strokeWidth="2" />
      {labels.map((label, i) => {
        const p = getPoint(i, radius + 15, radius);
        return <text key={i} x={p.x} y={p.y} textAnchor="middle" fontSize="13" fontWeight="800" fill="#8a6a50" dominantBaseline="middle">{label}</text>;
      })}
    </svg>
  );
};

export default function DashboardPage() {
  const [userData, setUserData] = useState({
    name: 'Demo',
    dreamRole: 'Software Engineer',
    expLevel: 'Beginner',
    gender: 'other'
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const snap = await getDoc(doc(db, "users", user.uid));
          if (snap.exists()) {
            const data = snap.data();
            setUserData({
              name: data.name || user.displayName || 'Demo',
              dreamRole: data.dreamRole || 'Software Engineer',
              expLevel: data.expLevel || 'Beginner',
              gender: data.gender || 'other',
              resumeAnalysis: data.resumeAnalysis || null
            });

            if (!data.onboardingComplete) {
              navigate('/setup');
            }
          } else {
            navigate('/setup');
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth, db, navigate]);

  if (loading) return <div className="loading-screen">Loading...</div>;

  const firstName = userData.name.split(' ')[0];
  const skills = ROLE_SKILLS[userData.dreamRole] || ["Core Concepts", "Problem Solving", "Communication"];

  return (
    <div className="dashboard-layout">
      <Navbar userData={userData} />
      <div className="shell">
        <Sidebar userData={userData} />
        <main className="dashboard-main">
          
          {/* Hero Section */}
          <div className="hero-card">
            <h1 className="hero-heading">
              Hi {firstName} <span className="wave">👋</span>, Ready to<br/>
              crack your first interview?
            </h1>
            <div className="hero-tags">
              <span className={`hero-tag ${userData.dreamRole === 'Mobile Dev' ? 'tag-green' : ''}`}>
                {userData.dreamRole}
              </span>
              <span className={`hero-tag ${userData.expLevel === 'Beginner' ? 'tag-green' : ''}`}>
                {userData.expLevel}
              </span>
            </div>
            <div className="hero-actions">
              <button className="btn-hero btn-hero-primary" onClick={() => navigate('/mock-interview')}>
                <span className="hero-play-icon">
                  <svg viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9"/></svg>
                </span>
                Start First Interview
              </button>
              <button className="btn-hero btn-hero-secondary" onClick={() => navigate('/profile')}>
                Complete Profile
              </button>
            </div>
          </div>

          {/* News Ticker */}
          <div className="news-strip">
            <div className="news-label">🔴 LIVE &nbsp; Tech News</div>
            <div className="news-divider"></div>
            <div className="news-ticker-wrap">
              <div className="news-ticker">
                {/* Double mapping for seamless loop effect */}
                {[...NEWS_ITEMS, ...NEWS_ITEMS].map((item, i) => (
                  <span key={i} className="news-item">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Next Steps + Status */}
          <div className="row-2">
            <div className="dash-card">
              <div className="card-header">
                <span className="card-title">Next Steps</span>
                <span className="new-badge">2 NEW</span>
              </div>
              <div className="step-item">
                <div className="step-icon">👤</div>
                <div className="step-info">
                  <div className="step-name">Complete your profile</div>
                  <div className="step-sub">Boost visibility by 40%</div>
                </div>
              </div>
              <div className="step-item">
                <div className="step-icon">🎙️</div>
                <div className="step-info">
                  <div className="step-name">Try your first interview</div>
                  <div className="step-sub">Get instant AI feedback</div>
                </div>
              </div>
            </div>

            <div className="dash-card resume-feature-card" onClick={() => navigate('/resume-audit')}>
              <div className="rf-icon">📄</div>
              <div className="rf-content">
                <div className="rf-title">Evaluate Resume Now</div>
                <div className="rf-sub">Get your ATS score & skill gap analysis in seconds.</div>
              </div>
              <button className="btn-evaluate-mini">✦ Evaluate Now</button>
            </div>

            <div className="empty-card" onClick={() => navigate('/mock-interview')}>
              <div className="empty-icon">📊</div>
              <div className="empty-title">No interviews attempted yet</div>
              <div className="empty-sub">Your journey is just beginning.<br/>Let's make it legendary.</div>
              <button className="btn-mock">▶ Start Mock Interview</button>
            </div>
          </div>


          {/* Resume Analysis Stats (Real-time) */}
          {userData.resumeAnalysis && (
            <>
              <div className="section-label" style={{marginBottom: '12px'}}>Latest Resume Evaluation</div>
              <div className="resume-stats-row" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr', gap: '20px', marginBottom: '20px', animation: 'fadeUp 0.5s ease both'}}>
                {/* ATS SCORE CARD */}
                <div className="card score-projection-card" style={{padding: '32px', position: 'relative', background: '#faf5f0', borderRadius: '18px', border: '1px solid #e8d8cc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                  <span style={{fontSize: '1rem', fontWeight: 800, color: '#1a1108', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', alignSelf: 'flex-start'}}>ATS Score</span>
                  <div style={{position: 'absolute', top: '20px', right: '20px', width: '36px', height: '36px', background: '#f0e6dc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <svg viewBox="0 0 24 24" style={{width: '18px', height: '18px', stroke: '#c2673a', fill: 'none', strokeWidth: 2}}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/><circle cx="19" cy="5" r="2"/></svg>
                  </div>
                  <div className="score-circle-big" style={{width: '140px', height: '140px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <svg width="140" height="140" viewBox="0 0 140 140">
                      <defs>
                        <linearGradient id="dbGradFinal" x1="1" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f5c49a"/><stop offset="40%" stopColor="#e07b30"/><stop offset="100%" stopColor="#8b3a0f"/>
                        </linearGradient>
                      </defs>
                      <circle cx="70" cy="70" r="60" style={{fill: 'none', stroke: '#f0e0d4', strokeWidth: 12}} />
                      <circle cx="70" cy="70" r="60" style={{fill: 'none', stroke: 'url(#dbGradFinal)', strokeWidth: 14, strokeLinecap: 'round', strokeDasharray: 377, strokeDashoffset: 377 - (377 * userData.resumeAnalysis.atsScore) / 100, transform: 'rotate(-90deg)', transformOrigin: 'center'}} />
                    </svg>
                    <div className="score-val-center" style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                      <div className="score-num-big" style={{fontSize: '2.8rem', fontWeight: 800, color: '#1a1008'}}>{userData.resumeAnalysis.atsScore}</div>
                      <div className="score-label-small" style={{fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: '#b8a090', marginTop: '4px'}}>ATS Score</div>
                    </div>
                  </div>
                </div>

                {/* METRICS BREAKDOWN */}
                <div className="card dash-card" style={{padding: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fff', borderRadius: '18px', border: '1px solid #e8d8cc'}}>
                  <span className="card-title" style={{alignSelf: 'flex-start', fontSize: '1rem', fontWeight: 800, color: '#1a1108', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px'}}>Metrics Breakdown</span>
                  <RadarChart metrics={userData.resumeAnalysis.metrics || {}} />
                </div>

                {/* FINAL VERDICT CARD */}
                <div className="verdict-card" style={{background: '#faf3ee', borderRadius: '18px', padding: '28px', display: 'flex', flexDirection: 'column', border: '1px solid #e8d8cc', cursor: 'default', transition: 'all 0.3s ease'}} onMouseEnter={e => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(194,103,58,0.15)'; Array.from(e.currentTarget.querySelectorAll('li')).forEach((li,i) => { li.style.transform=`translateX(${6}px)`; li.style.transitionDelay=`${i*40}ms`; }); }} onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; Array.from(e.currentTarget.querySelectorAll('li')).forEach(li => { li.style.transform='translateX(0)'; li.style.transitionDelay='0ms'; }); }}>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'center'}}>
                    <span style={{fontSize: '1.2rem', fontWeight: 900, color: '#1a1108', textTransform: 'uppercase', letterSpacing: '0.02em', fontFamily: "'DM Sans', sans-serif"}}>Verdict</span>
                    <span style={{fontSize: '0.8rem', color: '#b8a090', fontWeight: 600}}>⏱ {userData.resumeAnalysis.finalVerdict?.fixTime}</span>
                  </div>
                  
                  <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px'}}>
                    {(userData.resumeAnalysis.finalVerdict?.points || []).map((pt, i) => (
                      <li key={i} style={{fontSize: '0.88rem', display: 'flex', gap: '10px', lineHeight: '1.4', color: '#4a3728', transition: 'transform 0.3s ease', transform: 'translateX(0)'}}>
                        <span style={{color: pt.type === 'green' ? '#2e9e4f' : pt.type === 'yellow' ? '#e07b20' : '#c0392b', fontWeight: '900', fontSize: '1.1rem', flexShrink: 0}}>
                          {pt.type === 'green' ? '✓' : pt.type === 'yellow' ? '⚡' : '✗'}
                        </span>
                        {pt.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Recommended Actions (3x2 Grid) */}
          <div className="section-label">Recommended Actions</div>
          <div className="actions-grid">
            <div className="action-card" onClick={() => navigate('/resume-audit')}>
              <div className="action-icon">📄</div>
              <div className="action-name">Upload Resume</div>
              <div className="action-desc">Get AI-driven feedback on your CV.</div>
            </div>
            <div className="action-card" onClick={() => navigate('/mock-interview')}>
              <div className="action-icon">🎤</div>
              <div className="action-name">Start Mock Interview</div>
              <div className="action-desc">Practice role-specific questions.</div>
            </div>
            <div className="action-card" onClick={() => navigate('/skill-gap')}>
              <div className="action-icon">🔍</div>
              <div className="action-name">Check Skill Gaps</div>
              <div className="action-desc">Identify what's holding you back.</div>
            </div>
            <div className="action-card" onClick={() => navigate('/recommendations')}>
              <div className="action-icon">🏢</div>
              <div className="action-name">Job Opportunities</div>
              <div className="action-desc">Get AI-matched company targets.</div>
            </div>
            <div className="action-card" onClick={() => navigate('/resources')}>
              <div className="action-icon">📚</div>
              <div className="action-name">Study Resources</div>
              <div className="action-desc">Personalized links to master gaps.</div>
            </div>
            <div className="action-card" onClick={() => navigate('/career-roadmap')}>
              <div className="action-icon">🗺️</div>
              <div className="action-name">Career Roadmap</div>
              <div className="action-desc">See your path to Senior Dev.</div>
            </div>
          </div>

          {/* Skill Insights + Roadmap Preview */}
          <div className="row-bottom">
            <div className="skill-card">
              <div className="sc-title">Skill Insights</div>
              <div className="sc-desc">
                Based on your role as a <span className="sc-role-highlight">{userData.dreamRole}</span>, focus on:
              </div>
              <div className="skill-tags">
                {skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>

            <div className="roadmap-card">
              <div className="roadmap-header">
                <span className="roadmap-title">Career Roadmap</span>
                <span className="preview-badge">PREVIEW</span>
              </div>
              <div className="roadmap-steps">
                <div className="rm-step">
                  <div className="rm-num done">01</div>
                  <span className="rm-text">Week 1: Fundamentals</span>
                </div>
                <div className="rm-step dim">
                  <div className="rm-num active">02</div>
                  <span className="rm-text">Week 2: Advanced Projects</span>
                </div>
              </div>
              <button className="btn-roadmap" onClick={() => navigate('/resources')}>Generate Full Roadmap</button>
            </div>
          </div>

          {/* Resources CTA */}
          <div className="resources-cta">
            <div className="rcs-icon">📚</div>
            <div className="rcs-title">Ready to find the best resources?</div>
            <div className="rcs-sub">
              Our AI curates personalised videos, notes, and practice projects based on your skill gaps and dream role. Start learning smarter today.
            </div>
            <button className="btn-resources" onClick={() => navigate('/resources')}>Explore Resources →</button>
          </div>

          {/* Motivational Cards */}
          <div className="motivational">
            <div className="motive-card">
              <div className="motive-icon">💪</div>
              <div>
                <div className="motive-title">Consistency beats talent</div>
                <div className="motive-desc">
                  Even 15 minutes of practice every day leads to massive results over a month. Keep going, <span className="motive-name">{firstName}</span>!
                </div>
              </div>
            </div>
            <div className="motive-card">
              <div className="motive-icon">🎯</div>
              <div>
                <div className="motive-title">Practice daily for best results!</div>
                <div className="motive-desc">
                  The AI adapts to your progress. Regular use ensures the mock interviews stay challenging and relevant.
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
