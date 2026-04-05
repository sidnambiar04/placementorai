import React, { useEffect, useMemo, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  serverTimestamp,
  setDoc,
  where,
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

function getReadableError(err, fallback) {
  const msg = String(err?.message || '').toLowerCase();
  if (msg.includes('failed to fetch') || msg.includes('networkerror')) {
    return 'Cannot connect to backend server at http://localhost:8000. Start backend and try again.';
  }
  return err?.message || fallback;
}

export default function CareerRoadmapPage() {
  const auth = getAuth();
  const db = getFirestore();

  const [userData, setUserData] = useState({ name: 'Candidate', dreamRole: 'Software Engineer' });
  const [pageLoading, setPageLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [error, setError] = useState('');

  const [roadmaps, setRoadmaps] = useState([]);
  const [activeRoadmap, setActiveRoadmap] = useState(null);
  const [expanded, setExpanded] = useState({});

  const [form, setForm] = useState({
    currentRoleSelect: 'Computer Science Student',
    currentRoleCustom: '',
    targetRole: 'Backend Developer at a product company',
    skills: '',
    timeline: '6 months',
    weakAreas: '',
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setPageLoading(false);
        return;
      }

      try {
        const userSnap = await getDoc(doc(db, 'users', user.uid));
        if (userSnap.exists()) {
          const data = userSnap.data();
          setUserData((prev) => ({ ...prev, ...data }));
          setForm((prev) => ({
            ...prev,
            currentRoleSelect: 'Computer Science Student',
            targetRole: data.dreamRole ? `${data.dreamRole} at a product company` : prev.targetRole,
          }));
        }
      } catch (err) {
        console.error('Failed to fetch user data:', err);
      }

      await loadRoadmaps(user.uid);
      setPageLoading(false);
    });

    return () => unsub();
  }, [auth, db]);

  async function loadRoadmaps(uid) {
    setHistoryLoading(true);
    try {
      const q = query(collection(db, 'career_roadmaps'), where('user_id', '==', uid));
      const snap = await getDocs(q);
      const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      rows.sort((a, b) => {
        const at = a.created_at?.seconds || 0;
        const bt = b.created_at?.seconds || 0;
        return bt - at;
      });
      setRoadmaps(rows);
      if (rows.length > 0 && !activeRoadmap) {
        setActiveRoadmap(rows[0]);
      }
    } catch (err) {
      console.error('Failed to load roadmaps:', err);
    } finally {
      setHistoryLoading(false);
    }
  }

  const resolvedCurrentRole = useMemo(() => {
    if (form.currentRoleSelect === 'Other') {
      return form.currentRoleCustom.trim();
    }
    return form.currentRoleSelect;
  }, [form.currentRoleCustom, form.currentRoleSelect]);

  async function handleGenerateRoadmap() {
    if (!auth.currentUser) return;

    setError('');
    if (!resolvedCurrentRole || !form.targetRole.trim() || !form.skills.trim() || !form.timeline.trim()) {
      setError('Please fill current role, target role, skills, and timeline.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_ENDPOINTS.CAREER_ROADMAP_GENERATE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentRole: resolvedCurrentRole,
          targetRole: form.targetRole.trim(),
          skills: form.skills.trim(),
          timeline: form.timeline.trim(),
          weakAreas: form.weakAreas.trim(),
        }),
      });

      if (!response.ok) throw new Error('Failed to generate roadmap. Please try again.');
      const data = await response.json();
      const roadmap = data.roadmap || {};

      const roadmapRef = doc(collection(db, 'career_roadmaps'));
      await setDoc(roadmapRef, {
        id: roadmapRef.id,
        user_id: auth.currentUser.uid,
        target_role: form.targetRole.trim(),
        current_role: resolvedCurrentRole,
        skills: form.skills.trim(),
        timeline: form.timeline.trim(),
        roadmap_json: roadmap,
        created_at: serverTimestamp(),
      });

      await loadRoadmaps(auth.currentUser.uid);
      setActiveRoadmap({
        id: roadmapRef.id,
        user_id: auth.currentUser.uid,
        target_role: form.targetRole.trim(),
        current_role: resolvedCurrentRole,
        skills: form.skills.trim(),
        timeline: form.timeline.trim(),
        roadmap_json: roadmap,
      });
      setExpanded({});
    } catch (err) {
      setError(getReadableError(err, 'Could not generate roadmap.'));
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteRoadmap(id) {
    if (!auth.currentUser) return;
    if (!window.confirm('Delete this saved roadmap?')) return;

    try {
      await deleteDoc(doc(db, 'career_roadmaps', id));
      await loadRoadmaps(auth.currentUser.uid);
      if (activeRoadmap?.id === id) {
        setActiveRoadmap(null);
      }
    } catch (err) {
      setError('Failed to delete roadmap.');
    }
  }

  function togglePhase(index) {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  const phases = activeRoadmap?.roadmap_json?.phases || [];

  if (pageLoading) {
    return <div className="cr-loading-screen">Loading...</div>;
  }

  return (
    <div className="dashboard-layout">
      <Navbar userData={userData} />
      <div className="shell">
        <Sidebar userData={userData} />

        <main className="cr-main">
          <div className="cr-header">
            <h1>AI Career Roadmap</h1>
            <p>Build your personalized, phase-wise placement roadmap and save every version for later.</p>
          </div>

          {error && <div className="cr-error">{error}</div>}

          <div className="cr-layout">
            <section className="cr-form-card">
              <h2>Generate Roadmap</h2>

              <label>Current Role / Domain</label>
              <select
                value={form.currentRoleSelect}
                onChange={(e) => setForm((prev) => ({ ...prev, currentRoleSelect: e.target.value }))}
              >
                {ROLE_OPTIONS.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>

              {form.currentRoleSelect === 'Other' && (
                <input
                  type="text"
                  placeholder="Enter your current role"
                  value={form.currentRoleCustom}
                  onChange={(e) => setForm((prev) => ({ ...prev, currentRoleCustom: e.target.value }))}
                />
              )}

              <label>Target Role</label>
              <input
                type="text"
                value={form.targetRole}
                onChange={(e) => setForm((prev) => ({ ...prev, targetRole: e.target.value }))}
                placeholder="Backend Developer at a product company"
              />

              <label>Current Skills</label>
              <textarea
                rows={3}
                value={form.skills}
                onChange={(e) => setForm((prev) => ({ ...prev, skills: e.target.value }))}
                placeholder="DSA, Python, SQL, REST APIs"
              />

              <label>Timeline Goal</label>
              <input
                type="text"
                value={form.timeline}
                onChange={(e) => setForm((prev) => ({ ...prev, timeline: e.target.value }))}
                placeholder="6 months"
              />

              <label>Weak Areas / Focus (Optional)</label>
              <textarea
                rows={3}
                value={form.weakAreas}
                onChange={(e) => setForm((prev) => ({ ...prev, weakAreas: e.target.value }))}
                placeholder="Communication, system design"
              />

              <button className="cr-primary-btn" onClick={handleGenerateRoadmap} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Roadmap'}
              </button>
            </section>

            <section className="cr-output-card">
              <h2>Roadmap Output</h2>
              {!activeRoadmap && <div className="cr-empty">Generate or select a roadmap to view details.</div>}

              {activeRoadmap && (
                <>
                  <div className="cr-meta">
                    <span>
                      <strong>Target:</strong> {activeRoadmap.target_role}
                    </span>
                    <span>
                      <strong>Timeline:</strong> {activeRoadmap.timeline}
                    </span>
                    <span>
                      <strong>Generated:</strong> {formatDate(activeRoadmap.created_at)}
                    </span>
                  </div>

                  {activeRoadmap.roadmap_json?.summary ? (
                    <div className="cr-summary">{activeRoadmap.roadmap_json.summary}</div>
                  ) : null}

                  <div className="cr-timeline">
                    {phases.map((phase, index) => (
                      <div className="cr-phase" key={`${phase.title}-${index}`}>
                        <button className="cr-phase-head" onClick={() => togglePhase(index)}>
                          <div className="cr-phase-index">{String(index + 1).padStart(2, '0')}</div>
                          <div className="cr-phase-info">
                            <h3>{phase.title}</h3>
                            <p>{phase.duration}</p>
                          </div>
                          <div className="cr-phase-toggle">{expanded[index] ? 'Hide' : 'Show'}</div>
                        </button>

                        {expanded[index] && (
                          <div className="cr-phase-body">
                            <div>
                              <h4>Goals</h4>
                              <ul>
                                {(phase.goals || []).map((goal, i) => (
                                  <li key={`goal-${i}`}>{goal}</li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4>Resources</h4>
                              <ul>
                                {(phase.resources || []).map((resource, i) => (
                                  <li key={`resource-${i}`}>
                                    {resource?.url ? (
                                      <a href={resource.url} target="_blank" rel="noreferrer">
                                        {resource.title || resource.url}
                                      </a>
                                    ) : (
                                      resource?.title || '-'
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4>Milestones</h4>
                              <ul>
                                {(phase.milestones || []).map((milestone, i) => (
                                  <li key={`milestone-${i}`}>{milestone}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>
          </div>

          <section className="cr-history-card">
            <div className="cr-history-head">
              <h2>My Roadmaps</h2>
              {historyLoading ? <span>Loading...</span> : null}
            </div>

            {!historyLoading && roadmaps.length === 0 ? <div className="cr-empty">No saved roadmaps yet.</div> : null}

            {roadmaps.length > 0 && (
              <div className="cr-history-list">
                {roadmaps.map((item) => (
                  <div className="cr-history-item" key={item.id}>
                    <div className="cr-history-item-main">
                      <strong>{item.target_role}</strong>
                      <span>{item.timeline}</span>
                      <span>{formatDate(item.created_at)}</span>
                    </div>
                    <div className="cr-history-actions">
                      <button className="cr-secondary-btn" onClick={() => setActiveRoadmap(item)}>
                        Open
                      </button>
                      <button className="cr-danger-btn" onClick={() => handleDeleteRoadmap(item.id)}>
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
