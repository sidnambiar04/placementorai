import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  collection, deleteDoc, doc, getDoc, getDocs,
  getFirestore, query, serverTimestamp, setDoc, where,
} from 'firebase/firestore';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import { API_ENDPOINTS } from '../utils/apiConfig';
import './CareerRoadmapPage.css';

const ROLE_OPTIONS = [
  'Computer Science Student',
  'Electronics Student',
  'Mechanical Student',
  'Working Professional',
  'Other',
];

function formatDate(value) {
  if (!value) return '-';
  if (typeof value === 'string') return value;
  if (value?.toDate) return value.toDate().toLocaleDateString();
  return String(value);
}

export default function CareerRoadmapPage() {
  const auth = getAuth();
  const db = getFirestore();

  const [userData, setUserData] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState('');

  const [roadmaps, setRoadmaps] = useState([]);
  const [activeRoadmap, setActiveRoadmap] = useState(null);
  const [expanded, setExpanded] = useState({});

  const [form, setForm] = useState({
    currentRoleSelect: 'Computer Science Student',
    currentRoleCustom: '',
    targetRole: '',
    skills: '',
    timeline: '6 months',
    weakAreas: '',
  });

  // ── Load user + saved roadmaps on mount ──
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) { setPageLoading(false); return; }

      try {
        const snap = await getDoc(doc(db, 'users', user.uid));
        if (snap.exists()) {
          const data = snap.data();
          setUserData(data);
          setForm(prev => ({
            ...prev,
            targetRole: data.dreamRole ? `${data.dreamRole} at a product company` : '',
          }));
        }
      } catch (e) { console.error(e); }

      await loadRoadmaps(user.uid, true);
      setPageLoading(false);
    });
    return () => unsub();
  }, []);

  // ── Load from Firestore (no API call) ──
  async function loadRoadmaps(uid, setActiveOnLoad = false) {
    try {
      const q = query(collection(db, 'career_roadmaps'), where('user_id', '==', uid));
      const snap = await getDocs(q);
      const rows = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      rows.sort((a, b) => (b.created_at?.seconds || 0) - (a.created_at?.seconds || 0));
      setRoadmaps(rows);
      // Show latest saved roadmap immediately — no API call
      if (setActiveOnLoad && rows.length > 0) {
        setActiveRoadmap(rows[0]);
      }
    } catch (e) {
      console.error('Failed to load roadmaps:', e);
    }
  }

  // ── Generate new roadmap (only on button click) ──
  async function handleGenerate() {
    const user = auth.currentUser;
    if (!user) return;

    const currentRole = form.currentRoleSelect === 'Other'
      ? form.currentRoleCustom.trim()
      : form.currentRoleSelect;

    if (!currentRole || !form.targetRole.trim() || !form.skills.trim() || !form.timeline.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');
    setGenerating(true);

    try {
      const res = await fetch(API_ENDPOINTS.CAREER_ROADMAP_GENERATE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentRole,
          targetRole: form.targetRole.trim(),
          skills: form.skills.trim(),
          timeline: form.timeline.trim(),
          weakAreas: form.weakAreas.trim(),
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || 'Failed to generate roadmap.');
      }

      const data = await res.json();
      const roadmap = data.roadmap || {};

      // Save to Firestore
      const ref = doc(collection(db, 'career_roadmaps'));
      const docData = {
        id: ref.id,
        user_id: user.uid,
        target_role: form.targetRole.trim(),
        current_role: currentRole,
        skills: form.skills.trim(),
        timeline: form.timeline.trim(),
        roadmap_json: roadmap,
        created_at: serverTimestamp(),
      };
      await setDoc(ref, docData);

      // Show immediately without waiting for reload
      setActiveRoadmap({ ...docData, created_at: new Date() });
      setExpanded({});
      await loadRoadmaps(user.uid);

    } catch (e) {
      setError(e.message || 'Could not generate roadmap. Please try again.');
    } finally {
      setGenerating(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this roadmap?')) return;
    try {
      await deleteDoc(doc(db, 'career_roadmaps', id));
      const updated = roadmaps.filter(r => r.id !== id);
      setRoadmaps(updated);
      if (activeRoadmap?.id === id) {
        setActiveRoadmap(updated[0] || null);
      }
    } catch (e) {
      setError('Failed to delete roadmap.');
    }
  }

  function togglePhase(i) {
    setExpanded(prev => ({ ...prev, [i]: !prev[i] }));
  }

  const phases = activeRoadmap?.roadmap_json?.phases || [];

  if (pageLoading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'DM Sans, sans-serif', color: '#8e7f78' }}>
        Loading your roadmap...
      </div>
    );
  }

  return (
    <div className="dashboard-layout">
      <Navbar userData={userData} />
      <div className="shell">
        <Sidebar userData={userData} />

        <main className="cr-main">
          <div className="cr-header">
            <h1>AI Career Roadmap</h1>
            <p>Generate a personalized, phase-wise placement roadmap. Your roadmap is saved and loads instantly every visit.</p>
          </div>

          {error && (
            <div className="cr-error" style={{ background: '#fde8e8', border: '1px solid #f5c6c6', borderRadius: '10px', padding: '12px 16px', color: '#c0392b', marginBottom: '20px', fontSize: '14px' }}>
              {error}
            </div>
          )}

          <div className="cr-layout">

            {/* ── FORM ── */}
            <section className="cr-form-card">
              <h2>Generate Roadmap</h2>

              <label>Current Role / Domain</label>
              <select value={form.currentRoleSelect} onChange={e => setForm(p => ({ ...p, currentRoleSelect: e.target.value }))}>
                {ROLE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
              </select>

              {form.currentRoleSelect === 'Other' && (
                <input
                  type="text"
                  placeholder="Enter your current role"
                  value={form.currentRoleCustom}
                  onChange={e => setForm(p => ({ ...p, currentRoleCustom: e.target.value }))}
                />
              )}

              <label>Target Role <span style={{ color: '#f15a22' }}>*</span></label>
              <input
                type="text"
                value={form.targetRole}
                onChange={e => setForm(p => ({ ...p, targetRole: e.target.value }))}
                placeholder="e.g. Backend Developer at a product company"
              />

              <label>Current Skills <span style={{ color: '#f15a22' }}>*</span></label>
              <textarea
                rows={3}
                value={form.skills}
                onChange={e => setForm(p => ({ ...p, skills: e.target.value }))}
                placeholder="e.g. DSA, Python, SQL, REST APIs"
              />

              <label>Timeline Goal <span style={{ color: '#f15a22' }}>*</span></label>
              <input
                type="text"
                value={form.timeline}
                onChange={e => setForm(p => ({ ...p, timeline: e.target.value }))}
                placeholder="e.g. 6 months"
              />

              <label>Weak Areas / Focus <span style={{ color: '#8e7f78', fontSize: '11px' }}>(Optional)</span></label>
              <textarea
                rows={3}
                value={form.weakAreas}
                onChange={e => setForm(p => ({ ...p, weakAreas: e.target.value }))}
                placeholder="e.g. System design, Communication"
              />

              <button
                className="cr-primary-btn"
                onClick={handleGenerate}
                disabled={generating}
                style={{ opacity: generating ? 0.7 : 1 }}
              >
                {generating ? '⏳ Generating...' : '🗺 Generate Roadmap'}
              </button>

              {generating && (
                <p style={{ fontSize: '12px', color: '#8e7f78', textAlign: 'center', marginTop: '8px' }}>
                  AI is building your roadmap — this takes ~15 seconds.
                </p>
              )}
            </section>

            {/* ── OUTPUT ── */}
            <section className="cr-output-card">
              <h2>Roadmap Output</h2>

              {!activeRoadmap && !generating && (
                <div className="cr-empty">
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>🗺</div>
                  <p>No roadmap yet. Fill the form and click Generate.</p>
                </div>
              )}

              {generating && (
                <div className="cr-empty">
                  <div style={{ fontSize: '40px', marginBottom: '12px', animation: 'spin 1s linear infinite', display: 'inline-block' }}>⏳</div>
                  <p>Building your personalized roadmap...</p>
                </div>
              )}

              {activeRoadmap && !generating && (
                <>
                  <div className="cr-meta">
                    <span><strong>Target:</strong> {activeRoadmap.target_role}</span>
                    <span><strong>Timeline:</strong> {activeRoadmap.timeline}</span>
                    <span><strong>Saved:</strong> {formatDate(activeRoadmap.created_at)}</span>
                  </div>

                  {activeRoadmap.roadmap_json?.is_mock && (
                    <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', color: '#856404', marginBottom: '14px' }}>
                      ⚠️ Showing a sample roadmap (AI quota reached). Generate again later for a personalized one.
                    </div>
                  )}

                  {activeRoadmap.roadmap_json?.summary && (
                    <div className="cr-summary">{activeRoadmap.roadmap_json.summary}</div>
                  )}

                  <div className="cr-timeline">
                    {phases.length === 0 && (
                      <p style={{ color: '#8e7f78', fontSize: '14px' }}>No phases found in this roadmap.</p>
                    )}
                    {phases.map((phase, i) => (
                      <div className="cr-phase" key={i}>
                        <button className="cr-phase-head" onClick={() => togglePhase(i)}>
                          <div className="cr-phase-index">{String(i + 1).padStart(2, '0')}</div>
                          <div className="cr-phase-info">
                            <h3>{phase.title}</h3>
                            <p>{phase.duration}</p>
                          </div>
                          <div className="cr-phase-toggle">{expanded[i] ? '▲ Hide' : '▼ Show'}</div>
                        </button>

                        {expanded[i] && (
                          <div className="cr-phase-body">
                            {(phase.goals || []).length > 0 && (
                              <div>
                                <h4>🎯 Goals</h4>
                                <ul>{phase.goals.map((g, j) => <li key={j}>{g}</li>)}</ul>
                              </div>
                            )}
                            {(phase.resources || []).length > 0 && (
                              <div>
                                <h4>📚 Resources</h4>
                                <ul>
                                  {phase.resources.map((r, j) => (
                                    <li key={j}>
                                      {r?.url
                                        ? <a href={r.url} target="_blank" rel="noreferrer">{r.title || r.url}</a>
                                        : r?.title || String(r)
                                      }
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {(phase.milestones || []).length > 0 && (
                              <div>
                                <h4>🏁 Milestones</h4>
                                <ul>{phase.milestones.map((m, j) => <li key={j}>{m}</li>)}</ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {(activeRoadmap.roadmap_json?.tips || []).length > 0 && (
                    <div style={{ marginTop: '20px', background: '#fff4ef', borderRadius: '12px', padding: '16px' }}>
                      <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#f15a22', marginBottom: '10px' }}>💡 Tips</h4>
                      <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {activeRoadmap.roadmap_json.tips.map((tip, i) => (
                          <li key={i} style={{ fontSize: '13px', color: '#5a3e30' }}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </section>
          </div>

          {/* ── HISTORY ── */}
          <section className="cr-history-card">
            <div className="cr-history-head">
              <h2>My Saved Roadmaps</h2>
              <span style={{ fontSize: '13px', color: '#8e7f78' }}>{roadmaps.length} saved</span>
            </div>

            {roadmaps.length === 0 ? (
              <div className="cr-empty">No saved roadmaps yet. Generate your first one!</div>
            ) : (
              <div className="cr-history-list">
                {roadmaps.map(item => (
                  <div
                    className="cr-history-item"
                    key={item.id}
                    style={{ borderLeft: activeRoadmap?.id === item.id ? '3px solid #f15a22' : '3px solid transparent' }}
                  >
                    <div className="cr-history-item-main">
                      <strong>{item.target_role}</strong>
                      <span>{item.timeline}</span>
                      <span>{formatDate(item.created_at)}</span>
                    </div>
                    <div className="cr-history-actions">
                      <button
                        className="cr-secondary-btn"
                        onClick={() => { setActiveRoadmap(item); setExpanded({}); }}
                      >
                        Open
                      </button>
                      <button className="cr-danger-btn" onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

        </main>
      </div>
    </div>
  );
}