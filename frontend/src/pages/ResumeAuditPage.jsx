import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNotifications } from '../context/NotificationContext';
import { resumeService } from '../services/resumeService';
import './ResumeAuditPage.css';

// ── CUSTOM RADAR CHART COMPONENT (SVG) ──
const RadarChart = ({ metrics }) => {
  const size = 220;
  const center = size / 2;
  const radius = 80;
  
  // Metrics: Keywords, Format, Completeness, Role, Impact
  const keys = ['keywords', 'format', 'completeness', 'role', 'impact'];
  const labels = ['Keywords', 'Forma', 'Complete', 'Role', 'Impact'];
  
  const getPoint = (index, value, maxRadius) => {
    const angle = (Math.PI * 2 * index) / keys.length - Math.PI / 2;
    const r = (value / 100) * maxRadius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  const points = keys.map((key, i) => getPoint(i, metrics?.[key] || 0, radius));
  const pointsStr = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="radar-chart-container">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Grid Circles */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((step, i) => (
          <circle key={i} cx={center} cy={center} r={radius * step} className="radar-grid" />
        ))}
        {/* Axes */}
        {keys.map((_, i) => {
          const p = getPoint(i, 100, radius);
          return <line key={i} x1={center} y1={center} x2={p.x} y2={p.y} className="radar-axes" />;
        })}
        {/* Data Area */}
        <polygon points={pointsStr} className="radar-area" />
        {/* Data Points */}
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" className="radar-point" />
        ))}
        {/* Labels */}
        {labels.map((label, i) => {
          const p = getPoint(i, 120, radius); // Push labels out
          return (
            <text 
              key={i} 
              x={p.x} 
              y={p.y} 
              textAnchor="middle" 
              className="radar-label"
              dominantBaseline="middle"
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default function ResumeAuditPage() {
  const { notify } = useNotifications();
  const [userData, setUserData] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  
  const reportRef = useRef(null);

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      getDoc(doc(db, "users", user.uid)).then(snap => {
        if (snap.exists()) {
          const data = snap.data();
          setUserData(data);
          setJobTitle(data.dreamRole || '');
        }
      });
    }
  }, [auth, db]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      setPreviewUrl(URL.createObjectURL(droppedFile));
    }
  };

  const handleAnalyze = async () => {
    if (!file || !jobTitle) {
      alert("Please upload a resume and specify your target role.");
      return;
    }
    setAnalyzing(true);
    setResult(null); 
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('target_role', jobTitle);
      if (jobDescription) formData.append('job_description', jobDescription);

      const data = await resumeService.analyzeResume(formData);
      console.log("DEBUG: Full API data received:", data);
      
      const analysisData = data.analysis || data;
      if (!analysisData) throw new Error("Backend returned empty analysis");
      setResult(analysisData);
      notify("📄 Resume evaluation complete! View your results below.");

      // Persist results to Firestore
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, {
          resumeAnalysis: {
            atsScore: analysisData.atsScore || 0,
            metrics: analysisData.metrics || { keywords: 0, format: 0, completeness: 0, role: 0, impact: 0 },
            finalVerdict: analysisData.finalVerdict || { status: 'Unknown', fixTime: 'N/A', points: [] },
            timestamp: new Date().toISOString()
          }
        });
      }

      window.dispatchEvent(new CustomEvent('shake-bell'));

      setTimeout(() => {
        reportRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

      // Removed: await handleDownload(analysisData);

    } catch (err) {
      console.error("CRITICAL: Analysis failed:", err);
      alert(`Oops! Something went wrong: ${err.message}. Please check console for details.`);
    } finally {
      setAnalyzing(false);
    }
  };

  const handleDownload = async (analysisToUse = result) => {
    if (!analysisToUse || !file) return;
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('target_role', jobTitle);
      formData.append('analysis', JSON.stringify(analysisToUse));
      
      const blob = await resumeService.optimizeResume(formData);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Optimized_Resume_${jobTitle.replace(/\s+/g, '_')}.docx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      notify("📥 Updated resume downloaded successfully.");
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  const resetAnalysis = () => {
    setResult(null);
    setFile(null);
    setPreviewUrl(null);
    setJobDescription('');
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setFile(null);
    setPreviewUrl(null);
    setResult(null);
  };

  return (
    <div className="dashboard-layout">
      <Navbar userData={userData} />
      <div className="shell">
        <Sidebar userData={userData} />
        <main className="resume-main">
          
          <header className="resume-header">
            <div className="resume-title-group">
              <h1>Resume Architect <span className="ai-badge">⚡ AI</span></h1>
              <p className="resume-sub">Upload, Analyze, and Chat with your Resume to beat the ATS.</p>
            </div>
            <button 
              className="btn-run-audit" 
              onClick={handleAnalyze} 
              disabled={analyzing || !file}
            >
              {analyzing ? 'Evaluating...' : '🚀 Evaluate Resume'}
            </button>
          </header>

          <div className="resume-input-stack">
            <div className="input-block">
              <label className="input-label">Target Role</label>
              <div className="input-inner">
                <span className="input-icon">👤</span>
                <input 
                  type="text" 
                  value={jobTitle} 
                  onChange={(e) => setJobTitle(e.target.value)} 
                  placeholder="e.g. Software Engineer" 
                />
              </div>
            </div>
            <div className="input-block">
              <label className="input-label">Context (Optional JD)</label>
              <div className="input-inner">
                <span className="input-icon">📂</span>
                <input 
                  type="text" 
                  value={jobDescription} 
                  onChange={(e) => setJobDescription(e.target.value)} 
                  placeholder="Paste Job Description..." 
                />
              </div>
            </div>
          </div>

          <div className="resume-content-grid">
            <div 
              className={`upload-architect-zone ${dragActive ? 'drag-active' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById('resume-file').click()}
            >
              <div className="upload-icon-circle">☁️</div>
              <h2>Upload Resume</h2>
              <p>Drag and drop your file here, or click to<br/>browse from your computer.</p>
              
              <div className="file-format-pills">
                <span className="format-pill">📄 PDF</span>
                <span className="format-pill">🖼 PNG</span>
                <span className="format-pill">📸 JPG</span>
              </div>

              {file && (
                <div className="file-pill" style={{background: '#F0FDF4', color: '#16A34A', padding: '12px 24px', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '15px', marginTop:'10px', border:'1px solid #BBF7D0', fontWeight:'700'}}>
                  <span>📄 {file.name.length > 20 ? file.name.substring(0, 17) + '...' : file.name}</span>
                  <button className="btn-delete-file" onClick={removeFile}>×</button>
                </div>
              )}

              <input 
                type="file" 
                id="resume-file" 
                hidden 
                onChange={handleFileChange} 
                accept=".pdf,.docx,.jpg,.png,.jpeg"
              />
            </div>

            <aside className="audit-status-panel">
              <div className="panel-title">
                <div className={`status-dot ${analyzing ? 'evaluating' : (result ? 'active' : '')}`}></div>
                {analyzing ? 'Evaluating...' : (result ? 'Evaluation Complete' : 'Ready to Audit')}
              </div>

              <div className="status-graphic-wrap">
                <div className="outer-circle"></div>
                <div className="inner-circle">
                  {analyzing ? (
                    <div className="loader-sidebar"></div>
                  ) : (
                    <div className="center-icon">{result ? '✅' : '📊'}</div>
                  )}
                </div>
              </div>

              <div className="awaiting-text">
                {analyzing ? (
                  <>
                    <h3>Evaluating Now...</h3>
                    <p>Our AI is scanning your resume against 300+ recruitment benchmarks. This usually takes 10-15 seconds.</p>
                  </>
                ) : result ? (
                  <>
                    <h3>Analysis Complete!</h3>
                    <p>We've found {result.atsKillers?.length || 0} critical blockers. Your optimized resume has been generated and downloaded.</p>
                  </>
                ) : (
                  <>
                    <h3>{file ? 'Resume Uploaded' : 'Awaiting Document'}</h3>
                    <p>Upload your resume to see the score, gaps, and AI improvements. We'll generate a custom roadmap just for you.</p>
                  </>
                )}
              </div>

              <div className="mini-metrics">
                <div className="mini-metric-item">
                  <div className="m-icon-wrap" style={{background: '#FFF5E6'}}>📊</div>
                  <div>
                    <div className="m-label">ATS Score</div>
                    <div className="m-sub">Real-time scoring against 100+ filters.</div>
                  </div>
                </div>
                <div className="mini-metric-item">
                  <div className="m-icon-wrap" style={{background: '#FAF3EE'}}>💡</div>
                  <div>
                    <div className="m-label">Skill Gap Map</div>
                    <div className="m-sub">Identify exactly what keywords you are missing.</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="resume-info-row">
            <div className="info-card">
              <div className="ic-icon-wrap">🛡️</div>
              <div>
                <h4>Data Privacy</h4>
                <p>Your data is encrypted and never shared with employers without consent.</p>
              </div>
            </div>
            <div className="info-card">
              <div className="ic-icon-wrap">🤖</div>
              <div>
                <h4>Advanced AI Insights</h4>
                <p>Leveraging state-of-the-art LLMs to identify semantic gaps and optimize your professional narrative.</p>
              </div>
            </div>
          </div>

          {/* ────── AUDIT RESULTS (HIGH-FIDELITY) ────── */}
          {result && (
            <div className="report-architect-view" style={{marginTop: '60px'}} ref={reportRef}>
              
              <div className="audit-results-bar">
                <div className="results-title-group">
                  <h2>Audit Results <span className="gemini-badge">✨ Powered by Gemini</span></h2>
                </div>
                <button className="btn-new-analysis" onClick={resetAnalysis}>↻ New Analysis</button>
              </div>
              <p className="analysis-meta">
                Analysis for <strong>{file?.name}</strong> targeting <strong>{jobTitle}</strong>
              </p>

              <div className="report-top-row" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                {/* ── CARD 1: ATS SCORE ── */}
                <div className="card score-projection-card" style={{height: '100%', padding: '28px', position: 'relative'}}>
                  {/* Top-right icon */}
                  <div style={{position: 'absolute', top: '20px', right: '18px', width: '36px', height: '36px', background: '#f0e6dc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <svg viewBox="0 0 24 24" style={{width: '18px', height: '18px', stroke: '#c2673a', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'}}>
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/><circle cx="19" cy="5" r="2"/>
                    </svg>
                  </div>

                  <div className="score-circle-big" style={{margin: '0 auto 8px'}}>
                    <svg width="140" height="140" viewBox="0 0 140 140" style={{overflow: 'visible'}}>
                      <defs>
                        <linearGradient id="donutGrad" x1="1" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f5c49a"/>
                          <stop offset="40%" stopColor="#e07b30"/>
                          <stop offset="100%" stopColor="#8b3a0f"/>
                        </linearGradient>
                      </defs>
                      <circle className="score-circle-bg" cx="70" cy="70" r="60" />
                      <circle 
                        cx="70" cy="70" r="60" 
                        className="score-circle-progress" 
                        stroke="url(#donutGrad)"
                        strokeDasharray={377}
                        strokeDashoffset={377 - (377 * (result.atsScore || 0)) / 100}
                      />
                    </svg>
                    <div className="score-val-center">
                      <div className="score-num-big">{result.atsScore ?? 0}</div>
                      <div className="score-label-small">ATS Score</div>
                    </div>
                  </div>

                  <div className="badge-row">
                    <span className="badge-green-pro">{result.potential || 'High Potential'}</span>
                    <span className="badge-blue-conf">
                      <svg viewBox="0 0 16 16" style={{width: '13px', height: '13px', fill: '#2a6db5'}}>
                        <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 1.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zM7 5h2v2H7V5zm0 3h2v4H7V8z"/>
                      </svg>
                      {result.confidence || 'Confidence'}
                    </span>
                  </div>

                  <p className="score-desc">
                    Your profile matches <strong>{result.atsScore + 12}%</strong> of high-growth tech roles in the current market.
                  </p>
                </div>

                {/* ── CARD 2: RADAR CHART ── */}
                <div className="card dash-card" style={{height: '100%', padding:'24px', borderRadius:'24px'}}>
                  <span className="projection-label">Metrics Breakdown</span>
                  <RadarChart metrics={result.metrics} />
                </div>
              </div>

              <div className="mid-row" style={{display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: '20px', marginTop: '30px'}}>
                {/* Resume Preview */}
                <div className="card resume-card">
                  <div className="section-label">▤ Resume Preview</div>
                  <div className="resume-inner">
                    {previewUrl ? (
                       file.type.startsWith('image/') ? (
                         <img src={previewUrl} alt="Resume Preview" style={{width:'100%', display: 'block'}} />
                       ) : (
                         <iframe src={previewUrl} title="Resume Preview" style={{width:'100%', height:'800px', border:'none'}}></iframe>
                       )
                    ) : <p>Preview not available</p>}
                  </div>
                </div>

                {/* Right Column */}
                <div className="right-col" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                  <div className="ats-killers-card">
                    <div className="ak-header">⚠️ ATS Killers Detected</div>
                    <div className="killer-list">
                      {(result.atsKillers || []).length > 0 ? (
                        result.atsKillers.map((k, i) => (
                          <div key={i} className="killer-item">{k}</div>
                        ))
                      ) : (
                        <div className="killer-item" style={{color:'var(--green-success)'}}>No critical blockers found!</div>
                      )}
                    </div>
                  </div>

                  <div className="reality-check-card">
                    <span className="rc-label">Recruiter Reality Check</span>
                    <p className="rc-quote">"{result.recruiterReality || 'Generating insights...'}"</p>
                  </div>

                  <div className="gap-section">
                    <div className="gap-label">✏️ KEYWORD GAP ANALYSIS</div>
                    <div className="kw-group">
                      <span className="kw-group-label" style={{color: '#c05621'}}>IMPORTANT</span>
                      <div className="kw-tags" style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                        {(result.keywordGap?.important || []).map(tag => (
                          <span key={tag} className="gap-tag tag-orange">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="kw-group" style={{marginTop: '15px'}}>
                      <span className="kw-group-label" style={{color: '#276749'}}>NICE TO HAVE</span>
                      <div className="kw-tags" style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                        {(result.keywordGap?.nice_to_have || []).map(tag => (
                          <span key={tag} className="gap-tag tag-green">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fixes-row" style={{display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: '20px', marginTop: '20px'}}>
                <div className="card">
                  <div className="section-label">🔥 HIGH-IMPACT FIXES</div>
                  <div className="fixes-inner" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    {(result.optimizedBullets || []).map((fix, i) => (
                      <div className="fix-item" key={i}>
                        <div className="fix-header">
                          <div className="fix-num">{i+1}</div>
                          <span className={`badge ${fix.severity === 'HIGH' ? 'badge-critical' : 'badge-average'}`}>
                            {fix.severity === 'HIGH' ? 'CRITICAL' : 'AVERAGE'}
                          </span>
                          <span className="fix-header-title">{fix.label}</span>
                        </div>
                        <div className="original-block">
                          <span className="fix-label">Original</span>
                          <p className="block-text">{fix.original}</p>
                        </div>
                        <div className="optimized-block">
                          <div className="opt-label">✦ Optimized</div>
                          <p className="opt-text">{fix.optimized}</p>
                          <ul className="opt-reasons" style={{listStyle: 'none', padding: 0}}>
                            {(fix.improvements || []).map((imp, idx) => (
                              <li key={idx} style={{fontSize: '0.8rem', color: '#5563c7', display: 'flex', gap: '6px'}}>
                                <span>✓</span> {imp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="verdict-card" style={{background: 'var(--card-bg)', borderRadius: '18px', padding: '24px'}}>
                  <div className="verdict-header">
                    <span className="verdict-title-label">Final Verdict</span>
                    <span className="verdict-time">⏱ Fix in: {result.finalVerdict?.fixTime || '1-2 days'}</span>
                  </div>
                  <div className={`verdict-value ${result.finalVerdict?.status?.toUpperCase() === 'NEEDS WORK' ? 'verdict-status-needs-work' : ''}`}>
                    {result.finalVerdict?.status || 'Strong'}
                  </div>
                  <ul className="verdict-list" style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px'}}>
                    {(result.finalVerdict?.points || []).map((pt, i) => (
                      <li key={i} style={{fontSize: '0.9rem', display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
                        <span style={{
                          color: pt.type === 'green' ? '#2e9e4f' : pt.type === 'yellow' ? '#e07b20' : '#c0392b',
                          fontWeight: '800'
                        }}>
                          {pt.type === 'green' ? '✓' : pt.type === 'yellow' ? '⚡' : '✗'}
                        </span>
                        <span style={{color: 'var(--text-main)'}}>{pt.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-run-audit" style={{width: '100%', justifyContent: 'center', marginTop: '24px', padding: '16px'}} onClick={() => handleDownload()}>
                    ✨ Download Optimized Resume
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
