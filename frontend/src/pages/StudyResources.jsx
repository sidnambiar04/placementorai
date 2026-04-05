import React, { useState, useEffect, useMemo } from 'react';
import { getAuth } from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  query, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  doc, 
  deleteDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { useNotifications } from '../context/NotificationContext';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import { API_ENDPOINTS } from '../utils/apiConfig';
import './StudyResources.css';

export default function StudyResources() {
  const { notify } = useNotifications();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState('Frontend Developer');
  const [level, setLevel] = useState('Beginner');
  const [topic, setTopic] = useState('');
  const [userData, setUserData] = useState({ firstName: 'User', dreamRole: 'Developer' });

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    if (!auth.currentUser) return;
    
    // Fetch user data for navbar/sidebar
    const userDocRef = doc(db, 'users', auth.currentUser.uid);
    const unsubscribeUser = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserData(data);
        setRole(data.dreamRole || data.role || 'Developer');
        setLevel(data.expLevel || 'Beginner');
      }
    });

    // Subscribe to study resources
    const q = query(collection(db, 'users', auth.currentUser.uid, 'studyResources'));
    const unsubscribeResources = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setResources(docs);
    });

    return () => {
      unsubscribeUser();
      unsubscribeResources();
    };
  }, [auth.currentUser, db]);

  const stats = useMemo(() => {
    const total = resources.length;
    const done = resources.filter(r => r.completed).length;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);
    return { total, done, rem: total - done, pct };
  }, [resources]);

  const handleSearch = async () => {
    if (!auth.currentUser) return;
    setLoading(true);

    try {
      const response = await fetch(API_ENDPOINTS.STUDY_RESOURCES_GENERATE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, level, topic }),
      });

      if (!response.ok) throw new Error('Failed to generate resources');

      const data = await response.json();
      const newTopics = data.topics || [];

      // Save each new topic to Firestore
      for (const t of newTopics) {
        await addDoc(collection(db, 'users', auth.currentUser.uid, 'studyResources'), {
          ...t,
          completed: false,
          createdAt: serverTimestamp(),
        });
        notify(`⭐ New study resource generated: ${t.topic}`);
      }
      notify("📚 All personalized study materials have been curated!");

      setTopic(''); // Clear specific topic input
    } catch (err) {
      console.error(err);
      alert('Error generating resources. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleDone = async (id, currentStatus) => {
    if (!auth.currentUser) return;
    const docRef = doc(db, 'users', auth.currentUser.uid, 'studyResources', id);
    await updateDoc(docRef, { completed: !currentStatus });
  };

  const removeResource = async (id) => {
    if (!auth.currentUser) return;
    if (!window.confirm('Remove this resource?')) return;
    const docRef = doc(db, 'users', auth.currentUser.uid, 'studyResources', id);
    await deleteDoc(docRef);
  };

  // Donut chart stroke-dashoffset calculation
  const circumference = 2 * Math.PI * 52; // ~326.7
  const offset = circumference - (stats.pct / 100) * circumference;

  return (
    <div className="dashboard-layout">
      <Navbar userData={userData} />
      <div className="shell">
        <Sidebar userData={userData} />
        <main className="dash-content study-resources-container">
          <div className="sr-layout">
            {/* ── LEFT ── */}
            <div className="sr-left">
              <h1 className="sr-page-title">Study Resources</h1>
              <p className="sr-page-sub">Personalized learning materials based on your skill gaps</p>

              <div className="sr-input-card">
                <div className="sr-input-row">
                  <div className="sr-input-group">
                    <label>Your Role</label>
                    <input 
                      type="text" 
                      value={role} 
                      onChange={(e) => setRole(e.target.value)} 
                      placeholder="e.g. Frontend Developer"
                    />
                  </div>
                  <div className="sr-input-group">
                    <label>Your Level</label>
                    <select value={level} onChange={(e) => setLevel(e.target.value)}>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div className="sr-search-row">
                  <div className="sr-search-icon">
                    <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                  <input 
                    type="text" 
                    value={topic} 
                    onChange={(e) => setTopic(e.target.value)} 
                    placeholder="Specific topic to study (optional)…"
                  />
                </div>

                <button className="sr-search-btn" onClick={handleSearch} disabled={loading}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  {loading ? 'Generating...' : 'Search Resources with AI'}
                </button>
              </div>

              {loading && (
                <div className="sr-loading-wrap">
                  <div className="sr-spinner"></div>
                  <p className="sr-loading-text">AI is curating your personalized resources…</p>
                </div>
              )}

              <div className="sr-resources-wrap">
                {resources.map((res, index) => (
                  <ResourceCard 
                    key={res.id} 
                    resource={res} 
                    index={index}
                    onToggleDone={() => toggleDone(res.id, res.completed)}
                    onRemove={() => removeResource(res.id)}
                  />
                ))}
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div className="sr-right">
              <div className="sr-progress-card">
                <div className="sr-progress-title">Your Progress</div>
                <div className="sr-donut-wrap">
                  <svg width="130" height="130" viewBox="0 0 130 130">
                    <circle className="sr-donut-bg" cx="65" cy="65" r="52"/>
                    <circle 
                      className="sr-donut-fill" 
                      cx="65" cy="65" r="52" 
                      style={{ strokeDashoffset: offset }}
                    />
                  </svg>
                  <div className="sr-donut-center">
                    <div className="sr-donut-pct">{stats.pct}%</div>
                    <div className="sr-donut-label">Overall</div>
                  </div>
                </div>
                <div className="sr-progress-stats">
                  <div className="sr-stat-row">
                    <div className="sr-stat-dot done"></div>
                    <span className="sr-stat-name">Completed Topics</span>
                    <span className="sr-stat-val">{stats.done}</span>
                  </div>
                  <div className="sr-stat-row">
                    <div className="sr-stat-dot rem"></div>
                    <span className="sr-stat-name">Remaining</span>
                    <span className="sr-stat-val">{stats.rem}</span>
                  </div>
                </div>
                <div className="sr-progress-quote">
                  {stats.total === 0 
                    ? "Search for resources to start tracking your progress." 
                    : stats.pct === 100 
                      ? "You've completed all your resources! 🎉" 
                      : stats.pct >= 50 
                        ? "Great progress! Keep that momentum going." 
                        : "Every topic you complete brings you closer to your goal."
                  }
                </div>
              </div>

              <div className="sr-profile-badge">
                <div className="sr-pb-avatar">
                  {userData?.fullName?.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || (auth.currentUser?.email?.[0].toUpperCase())}
                </div>
                <div>
                  <div className="sr-pb-label">User Profile</div>
                  <div className="sr-pb-val">{userData?.fullName || auth.currentUser?.email?.split('@')[0]}</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function ResourceCard({ resource, index, onToggleDone, onRemove }) {
  const videos = resource.videos || [];
  const notes = resource.notes || [];
  const projects = resource.projects || [];

  return (
    <div className={`sr-resource-card ${resource.completed ? 'done' : ''}`}>
      <div className="sr-rc-header">
        <span className="sr-rc-tag">{resource.tag || 'RECOMMENDED'}</span>
        <button className="sr-rc-close" onClick={onRemove} title="Remove">
          <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      
      <div className="sr-rc-title">{resource.topic}</div>
      <div className="sr-rc-subtitle">AI-curated resources for this topic</div>
      
      <div className="sr-rc-body">
        {/* Videos Section */}
        <div className="sr-rc-section">
          <div className="sr-rc-section-label">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg> Videos
          </div>
          {videos.slice(0, 2).map((v, i) => (
            <a key={i} className="sr-rc-item" href={v.url} target="_blank" rel="noopener noreferrer">
              <div className="sr-rc-item-left">
                <div className="sr-rc-item-icon">
                  <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <span className="sr-rc-item-name">{v.title}</span>
                  <span className="sr-rc-item-meta">{v.meta}</span>
                </div>
              </div>
              <div className="sr-rc-item-arrow">
                <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </a>
          ))}
        </div>

        {/* Notes Section */}
        <div className="sr-rc-section">
          <div className="sr-rc-section-label">
            <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> Notes & Docs
          </div>
          {notes.slice(0, 2).map((n, i) => (
            <a key={i} className="sr-rc-item" href={n.url} target="_blank" rel="noopener noreferrer">
              <div className="sr-rc-item-left">
                <div className="sr-rc-item-icon note">
                  <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <span className="sr-rc-item-name">{n.title}</span>
                  <span className="sr-rc-item-meta">{n.meta}</span>
                </div>
              </div>
              <div className="sr-rc-item-arrow">
                <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </a>
          ))}
        </div>

        {/* Projects Section */}
        <div className="sr-rc-section">
          <div className="sr-rc-section-label">
            <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Project Ideas
          </div>
          {projects.slice(0, 2).map((p, i) => (
            <a key={i} className="sr-rc-item" href={p.url} target="_blank" rel="noopener noreferrer">
              <div className="sr-rc-item-left">
                <div className="sr-rc-item-icon proj">
                  <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <span className="sr-rc-item-name">{p.title}</span>
                  <span className="sr-rc-item-meta">{p.meta}</span>
                </div>
              </div>
              <div className="sr-rc-item-arrow">
                <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="sr-rc-footer">
        <button 
          className={`sr-rc-mark-btn ${resource.completed ? 'done-state' : ''}`}
          onClick={onToggleDone}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          {resource.completed ? 'Completed ✓' : 'Mark as Completed'}
        </button>
        <button className="sr-rc-bookmark">
          <svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </button>
      </div>
    </div>
  );
}
