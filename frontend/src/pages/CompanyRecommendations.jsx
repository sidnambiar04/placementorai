import React, { useEffect, useState, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useNotifications } from '../context/NotificationContext';
import { API_ENDPOINTS } from '../utils/apiConfig';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import './CompanyRecommendations.css';

const AVATAR_COLORS = [
  '#1a2540','#2d4a7a','#8b3a0f','#1a6b45','#6b2fa0','#c2541a','#0f5a6b','#3a2d0f'
];

function getInitial(name) {
  return (name || 'C').charAt(0).toUpperCase();
}
function getAvatarColor(name) {
  const idx = (name || '').charCodeAt(0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[idx];
}

export default function CompanyRecommendations() {
  const { notify } = useNotifications();
  const [companies, setCompanies]   = useState([]);
  const [loading, setLoading]       = useState(false);
  const [userData, setUserData]     = useState({ name: 'Demo', dreamRole: 'Software Engineer', expLevel: 'Beginner' });
  const [resumeAnalysis, setResumeAnalysis] = useState(null);
  const [activeTab, setActiveTab]   = useState('match'); // 'match' | 'hiring'
  const [sortBy, setSortBy]         = useState('match');  // 'match' | 'vacancies'
  const [pageLoading, setPageLoading] = useState(true);
  const [generated, setGenerated]   = useState(false);
  const auth = getAuth();
  const db   = getFirestore();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const snap = await getDoc(doc(db, 'users', user.uid));
        if (snap.exists()) {
          const data = snap.data();
          setUserData(data);
          if (data.resumeAnalysis) {
            setResumeAnalysis(data.resumeAnalysis);
          }
        }
      }
      setPageLoading(false);
    });
    return () => unsub();
  }, [auth, db]);

  const fetchCompanies = async () => {
    setLoading(true);
    setGenerated(false);
    try {
      const res = await fetch(API_ENDPOINTS.RECOMMEND_COMPANIES, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          role: userData.dreamRole || 'Software Engineer',
          skills: resumeAnalysis
            ? [...(resumeAnalysis.metrics ? Object.keys(resumeAnalysis.metrics) : [])]
            : [],
          experience: userData.expLevel || 'Beginner',
          resumeContext: resumeAnalysis || null,
        }),
      });

      if (!res.ok) throw new Error('API failed');
      const raw = await res.json();
      // Backend sometimes returns { companies: [...] } or directly [...]
      const list = Array.isArray(raw) ? raw : (raw.companies || []);
      // Sort by matchScore desc
      list.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
      setCompanies(list);
      setGenerated(true);
      notify("💼 Fresh job opportunities recommended based on your profile!");
    } catch (err) {
      console.error(err);
      // Use fallback mock
      setCompanies(getFallbackCompanies(userData.dreamRole));
      setGenerated(true);
    } finally {
      setLoading(false);
    }
  };

  const displayCompanies = [...companies].sort((a, b) =>
    sortBy === 'match' ? (b.matchScore || 0) - (a.matchScore || 0) : (b.vacancies || 0) - (a.vacancies || 0)
  ).filter(c =>
    activeTab === 'match' ? (c.matchScore || 0) >= 85 : (c.vacancies || 0) >= 5
  );

  const featured     = displayCompanies[0] || null;
  const rest         = displayCompanies.slice(1);

  if (pageLoading) return <div className="rc-page-loading">Loading...</div>;

  return (
    <div className="dashboard-layout">
      <Navbar userData={userData} />
      <div className="shell">
        <Sidebar userData={userData} />
        <main className="rc-main">

          {/* ── Header ── */}
          <div className="rc-header-row">
            <div>
              <h1 className="rc-title">Job<br/>Opportunities</h1>
              <p className="rc-sub">
                {generated
                  ? `Based on your profile as ${userData.dreamRole || 'a developer'} · ${userData.expLevel || 'Beginner'}`
                  : 'AI-powered matching based on your profile and resume evaluation'}
              </p>
            </div>
            {!generated && (
              <button className="rc-find-btn" onClick={fetchCompanies} disabled={loading}>
                {loading ? <><span className="rc-spinner"/> Finding Jobs...</> : '✦ Find Opportunities'}
              </button>
            )}
          </div>

          {/* Resume-powered badge */}
          {resumeAnalysis && (
            <div className="rc-powered-badge">
              <span>📄</span>
              <span>Personalised using your Resume Evaluation — ATS Score: <strong>{resumeAnalysis.atsScore}/100</strong></span>
            </div>
          )}

          {/* Controls */}
          {generated && (
            <>
              <div className="rc-controls">
                <div className="rc-filters">
                  <span>Role: <strong>{userData.dreamRole}</strong></span>
                  <span className="rc-sep">·</span>
                  <span>Level: <strong>{userData.expLevel}</strong></span>
                </div>
                <div className="rc-sort-wrap">
                  <span className="rc-sort-label">Sort by:</span>
                  <button className={`rc-sort-btn ${sortBy === 'match' ? 'active' : ''}`} onClick={() => setSortBy('match')}>Relevance</button>
                  <button className={`rc-sort-btn ${sortBy === 'vacancies' ? 'active' : ''}`} onClick={() => setSortBy('vacancies')}>Most Openings</button>
                </div>
              </div>

              <div className="rc-tab-row">
                <button className={`rc-tab ${activeTab === 'match' ? 'active' : 'inactive'}`} onClick={() => setActiveTab('match')}>High Match</button>
                <button className={`rc-tab ${activeTab === 'hiring' ? 'active' : 'inactive'}`} onClick={() => setActiveTab('hiring')}>High Hiring</button>
                <button className="rc-refresh-link" onClick={fetchCompanies}>↻ Refresh</button>
              </div>
            </>
          )}

          {/* Loading State */}
          {loading && (
            <div className="rc-loading-state">
              <div className="rc-loading-spinner"/>
              <div className="rc-loading-text">AI is scanning the job market for your best matches...</div>
            </div>
          )}

          {/* Results */}
          {generated && !loading && (
            <>
              {/* Powered by Resume Evaluation Badge (User Screenshot Style) */}
              {resumeAnalysis && (
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' }}>
                  <div className="rc-powered-badge">
                    <span role="img" aria-label="doc">📄</span> Personalised using your Resume Evaluation — ATS Score: {resumeAnalysis.finalScore || '72'}/100
                  </div>
                </div>
              )}

              {/* Featured Card (top match) */}
              {featured && (
                <div className="rc-featured-card">
                  <div className="rc-feat-badge">
                    <svg viewBox="0 0 16 16" fill="#fff"><path d="M8 1l2.06 4.18L15 6.27l-3.5 3.41.83 4.82L8 12.18l-4.33 2.32.83-4.82L1 6.27l4.94-.09z"/></svg>
                    Top Match Company
                  </div>
                  <div className="rc-feat-top">
                    <div className="rc-feat-avatar" style={{background: getAvatarColor(featured.company)}}>
                      {getInitial(featured.company)}
                    </div>
                    <div>
                      <div className="rc-feat-name">{featured.company}</div>
                      <div className="rc-feat-sub">{featured.role}</div>
                    </div>
                  </div>
                  <p className="rc-feat-desc">{featured.reason}</p>
                  <div className="rc-feat-stats">
                    <div className="rc-stat-box">
                      <div className="rc-stat-label">Salary Est.</div>
                      <div className="rc-stat-val">{featured.salaryRange || 'Competitive'}</div>
                    </div>
                    <div className="rc-stat-box">
                      <div className="rc-stat-label">Openings</div>
                      <div className="rc-stat-val">{featured.vacancies || 'Multiple'}</div>
                    </div>
                    <div className="rc-stat-box">
                      <div className="rc-stat-label">Work Mode</div>
                      <div className="rc-stat-val">{(featured.role || '').split('•')[1]?.trim() || 'Flexible'}</div>
                    </div>
                  </div>
                  {/* Required skills in featured card */}
                  {(featured.requiredSkills || []).length > 0 && (
                    <div className="rc-feat-skills">
                      <div className="rc-skill-label">Required Skills</div>
                      <div className="rc-skill-tags">
                        {(featured.requiredSkills || []).map(s => (
                          <span key={s} className={`rc-skill-tag ${(featured.matchedSkills || []).includes(s) ? 'matched' : 'required'}`}>{s}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <a href={featured.applicationUrl || '#'} target="_blank" rel="noopener noreferrer" className="rc-priority-btn">
                    🎯 Priority Application →
                  </a>
                </div>
              )}

              {/* Cards Grid */}
              <div className="rc-cards-grid">
                {rest.map((c, i) => (
                  <CompanyCard key={i} company={c} />
                ))}
              </div>

              {displayCompanies.length === 0 && (
                <div className="rc-empty">
                  No companies match this filter. Try switching tabs or refreshing.
                </div>
              )}

              {/* Market Insight */}
              <div className="rc-market-insight">
                <div>
                  <div className="rc-mi-label">Market Insight</div>
                  <div className="rc-mi-val">AI & Infrastructure Growth</div>
                </div>
                <span className="rc-mi-badge">✦ High Demand for {userData.dreamRole || 'Developers'}</span>
              </div>
            </>
          )}

          {/* Empty / CTA State */}
          {!generated && !loading && (
            <div className="rc-cta-card">
              <div className="rc-cta-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#c2673a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
              </div>
              <div className="rc-cta-title">Find Your Best Opportunities</div>
              <p className="rc-cta-sub">
                {resumeAnalysis
                  ? 'Your resume evaluation is ready! Click below for hyper-personalised company matches.'
                  : 'Click below to get AI-powered company recommendations based on your role and experience.'}
              </p>
              <button className="rc-find-btn" onClick={fetchCompanies} disabled={loading}>
                {loading ? <><span className="rc-spinner"/> Finding Jobs...</> : '✦ Find Opportunities'}
              </button>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

function CompanyCard({ company: c }) {
  return (
    <div className="rc-company-card">
      <div className="rc-card-top">
        <div className="rc-avatar" style={{background: getAvatarColor(c.company)}}>{getInitial(c.company)}</div>
      </div>

      <div className="rc-co-name">{c.company}</div>
      <div className="rc-co-role">{c.role}</div>

      <div className="rc-vacancies">
        <svg viewBox="0 0 24 24" fill="none" stroke="#c2673a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
        {c.vacancies || 'Multiple'} Openings
        {c.salaryRange && <span className="rc-salary">· {c.salaryRange}</span>}
      </div>

      {/* Required Skills */}
      {(c.requiredSkills || []).length > 0 && (
        <>
          <div className="rc-skill-section-label">Required Skills</div>
          <div className="rc-skill-tags" style={{marginBottom: '8px'}}>
            {(c.requiredSkills || []).map(s => (
              <span key={s} className={`rc-skill-tag ${(c.matchedSkills || []).includes(s) ? 'matched' : 'required'}`}>{s}</span>
            ))}
          </div>
        </>
      )}

      {/* Missing Skills */}
      {(c.missingSkills || []).length > 0 && (
        <>
          <div className="rc-skill-section-label">Missing Skills</div>
          <div className="rc-skill-tags" style={{marginBottom: '10px'}}>
            {(c.missingSkills || []).map(s => (
              <span key={s} className="rc-skill-tag missing">{s}</span>
            ))}
          </div>
        </>
      )}

      <div className="rc-recruiter-quote">
        <span className="rc-quote-icon">✦</span>
        {c.reason}
      </div>

      <a
        href={c.applicationUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="rc-apply-btn"
      >
        Apply Now →
      </a>
    </div>
  );
}

function getFallbackCompanies(role) {
  return [
    { company: 'Razorpay', role: `${role} • Bangalore / Hybrid`, matchScore: 95, vacancies: 8, salaryRange: '₹22L–₹38L', requiredSkills: ['React', 'Node.js', 'Redis', 'PostgreSQL'], matchedSkills: ['React', 'Node.js'], missingSkills: ['Redis'], reason: 'Leading local fintech startup with a focus on developer-first products.', applicationUrl: 'https://razorpay.com/jobs/' },
    { company: 'Swiggy', role: `${role} • Remote / Hybrid`, matchScore: 92, vacancies: 12, salaryRange: '₹18L–₹32L', requiredSkills: ['React', 'Node.js', 'Docker', 'Redis'], matchedSkills: ['React', 'Node.js'], missingSkills: ['Redis'], reason: 'Hyper-growth local consumer tech company with a great culture.', applicationUrl: 'https://careers.swiggy.com/' },
    { company: 'CRED', role: `${role} • Bangalore / Remote`, matchScore: 89, vacancies: 5, salaryRange: '₹25L–₹45L', requiredSkills: ['React Native', 'TypeScript', 'Node.js', 'System Design'], matchedSkills: ['TypeScript', 'Node.js'], missingSkills: ['React Native'], reason: 'Selectively hiring for engineering quality and premium user experiences.', applicationUrl: 'https://careers.cred.club/' },
    { company: 'Zomato', role: `${role} • Gurgaon / Remote`, matchScore: 87, vacancies: 7, salaryRange: '₹15L–₹28L', requiredSkills: ['React', 'Node.js', 'GraphQL', 'AWS'], matchedSkills: ['React', 'Node.js'], missingSkills: ['GraphQL'], reason: 'Prominent local food-tech brand with complex architectural challenges.', applicationUrl: 'https://www.zomato.com/careers' },
    { company: 'Groww', role: `${role} • Bangalore`, matchScore: 85, vacancies: 6, salaryRange: '₹20L–₹32L', requiredSkills: ['React', 'Go', 'Kubernetes', 'PostgreSQL'], matchedSkills: ['React'], missingSkills: ['Go'], reason: 'Modern tech stack in the high-growth wealth-tech sector.', applicationUrl: 'https://groww.in/careers' },
    { company: 'Meesho', role: `${role} • Remote`, matchScore: 83, vacancies: 10, salaryRange: '₹18L–₹30L', requiredSkills: ['Java', 'React', 'Spring Boot', 'MySQL'], matchedSkills: ['React'], missingSkills: ['Java'], reason: 'Pioneering social commerce in India with massive scale.', applicationUrl: 'https://meesho.io/careers' }
  ];
}
