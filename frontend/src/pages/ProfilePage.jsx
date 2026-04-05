import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { useNotifications } from '../context/NotificationContext';
import Sidebar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';
import './ProfilePage.css';

// ── CUSTOM DROPDOWN COMPONENT (FIXED POSITIONING) ──
const CustomDropdown = ({ label, options, value, onChange, placeholder = "Select...", dark = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`p-custom-sel ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
      <div className="p-sel-display" onClick={() => setIsOpen(!isOpen)}>
        <span>{value || placeholder}</span>
        <span className="p-sel-arrow">
          <svg viewBox="0 0 12 8"><polyline points="1,1 6,7 11,1"/></svg>
        </span>
      </div>
      {isOpen && (
        <div className="p-sel-options">
          {options.map(opt => (
            <div 
              key={opt} 
              className={`p-sel-opt ${value === opt ? 'selected' : ''}`}
              onClick={() => { onChange(opt); setIsOpen(false); }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function ProfilePage() {
  const { notify } = useNotifications();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    fieldStudy: '',
    college: '',
    year: '',
    cgpa: '',
    dreamRole: '',
    expLevel: '',
    companyType: '',
    techStack: '',
    projectsBuilt: '',
    github: '',
    placementStage: 'Preparing for Interviews',
    studyHours: '2-4h',
    confidence: 'Medium',
    skills: ["React", "Tailwind", "Node.js"],
    weakAreas: ["DSA", "System Design"]
  });

  const [loading, setLoading] = useState(true);
  const [newSkill, setNewSkill] = useState('');
  const [showSkillInput, setShowSkillInput] = useState(false);
  const [newWeakArea, setNewWeakArea] = useState('');
  const [showWeakInput, setShowWeakInput] = useState(false);

  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const snap = await getDoc(doc(db, "users", user.uid));
          if (snap.exists()) {
            const data = snap.data();
            // Pre-fill from onboarding if fields are missing in profile but exist in root
            setUserData({
              name: data.name || user.displayName || '',
              email: user.email || '',
              phone: data.phone || '',
              fieldStudy: data.fieldStudy || data.course || '',
              college: data.college || '',
              year: data.year || (data.classYear ? `Class of ${data.classYear}` : ''),
              cgpa: data.cgpa || '',
              dreamRole: data.dreamRole || '',
              expLevel: data.expLevel || 'Intermediate',
              companyType: data.companyType || 'Product-based',
              techStack: data.techStack || '',
              projectsBuilt: data.projectsBuilt || '3-5',
              github: data.github || '',
              placementStage: data.placementStage || 'Preparing for Interviews',
              studyHours: data.studyHours || '2-4h',
              confidence: data.confidence || 'Medium',
              skills: data.skills || ["React", "Tailwind", "Node.js"],
              weakAreas: data.weakAreas || ["DSA", "System Design"],
              gender: data.gender || 'other'
            });
          } else {
            // New user case
            setUserData(prev => ({ ...prev, name: user.displayName || '', email: user.email || '' }));
          }
        } catch (err) {
          console.error("Error loading profile:", err);
        }
      } else {
        navigate('/login');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth, db, navigate]);

  const handleInputChange = (field, value) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const addTag = (type) => {
    if (type === 'skill') {
      if (newSkill.trim() && !userData.skills.includes(newSkill.trim())) {
        setUserData(prev => ({ ...prev, skills: [...prev.skills, newSkill.trim()] }));
        setNewSkill('');
        setShowSkillInput(false);
      }
    } else {
      if (newWeakArea.trim() && !userData.weakAreas.includes(newWeakArea.trim())) {
        setUserData(prev => ({ ...prev, weakAreas: [...prev.weakAreas, newWeakArea.trim()] }));
        setNewWeakArea('');
        setShowWeakInput(false);
      }
    }
  };

  const removeTag = (type, index) => {
    const list = type === 'skill' ? 'skills' : 'weakAreas';
    setUserData(prev => ({ ...prev, [list]: prev[list].filter((_, i) => i !== index) }));
  };

  const toggleWeakArea = (area) => {
    setUserData(prev => {
      const exists = prev.weakAreas.includes(area);
      if (exists) return { ...prev, weakAreas: prev.weakAreas.filter(a => a !== area) };
      return { ...prev, weakAreas: [...prev.weakAreas, area] };
    });
  };

  const saveProfile = async () => {
    const user = auth.currentUser;
    if (!user) return;
    try {
      await setDoc(doc(db, "users", user.uid), { ...userData, updatedAt: new Date().toISOString() }, { merge: true });
      notify("✅ Profile settings saved successfully!");
    } catch (err) {
      console.error("Error saving profile:", err);
      alert("❌ Save failed. Try again.");
    }
  };

  if (loading) return <div className="loading-screen">Loading Profile...</div>;

  return (
    <div className="profile-layout dashboard-layout">
      <Navbar userData={userData} />
      <div className="shell">
        <Sidebar userData={userData} />
        <main className="profile-main" style={{ flex: 1, overflowY: 'auto' }}>
          
          <div className="profile-hero">
            <h1>Build Your <span>Trajectory</span></h1>
            <p>Your profile is the catalyst for your next big career milestone.</p>
          </div>

          <div className="profile-content">
            {/* Row 1: Basic & Academic */}
            <div className="profile-row">
              <div className="profile-card">
                <div className="profile-card-title">🏠 Basic Information</div>
                <div className="p-field">
                  <label className="p-label">Full Name</label>
                  <input type="text" className="p-input" value={userData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
                </div>
                <div className="p-field">
                  <label className="p-label">Email Address</label>
                  <input type="email" className="p-input" value={userData.email} readOnly disabled />
                </div>
                <div className="p-field">
                  <label className="p-label">Contact No.</label>
                  <input type="tel" className="p-input" value={userData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="profile-card">
                <div className="profile-card-title">🎓 Academic Background</div>
                <div className="p-field">
                  <label className="p-label">Field of Study</label>
                  <input type="text" className="p-input" value={userData.fieldStudy} onChange={(e) => handleInputChange('fieldStudy', e.target.value)} placeholder="e.g. Computer Science" />
                </div>
                <div className="p-field">
                  <label className="p-label">College Name</label>
                  <input type="text" className="p-input" value={userData.college} onChange={(e) => handleInputChange('college', e.target.value)} placeholder="Enter your university" />
                </div>
                <div className="p-field-row">
                  <div>
                    <label className="p-label">Current Year</label>
                    <CustomDropdown 
                      options={["1st Year", "2nd Year", "3rd Year", "Final Year", "Graduated"]}
                      value={userData.year}
                      onChange={(val) => handleInputChange('year', val)}
                    />
                  </div>
                  <div>
                    <label className="p-label">CGPA</label>
                    <input type="number" step="0.01" className="p-input" value={userData.cgpa} onChange={(e) => handleInputChange('cgpa', e.target.value)} placeholder="0.00" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Career Aspirations */}
            <div className="profile-card">
              <div className="profile-card-title">⚡ Career Aspirations</div>
              <div className="profile-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <div className="p-field">
                  <label className="p-label">Target Role</label>
                  <CustomDropdown 
                    options={['SDE-1', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Data Scientist', 'Product Manager', 'DevOps Engineer', 'UI/UX Designer']}
                    value={userData.dreamRole}
                    onChange={(val) => handleInputChange('dreamRole', val)}
                  />
                </div>
                <div className="p-field">
                  <label className="p-label">Experience Level</label>
                  <CustomDropdown 
                    options={['Beginner', 'Intermediate', 'Advanced']}
                    value={userData.expLevel}
                    onChange={(val) => handleInputChange('expLevel', val)}
                  />
                </div>
                <div className="p-field">
                  <label className="p-label">Target Company Type</label>
                  <CustomDropdown 
                    options={['Product-based', 'Startup', 'Service-based', 'FAANG', 'MNC']}
                    value={userData.companyType}
                    onChange={(val) => handleInputChange('companyType', val)}
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Skills & Readiness */}
            <div className="profile-row" style={{ gridTemplateColumns: '1fr 330px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="profile-card">
                  <div className="profile-card-title">🛠 Skills & Tech Stack</div>
                  <div className="p-field">
                    <label className="p-label">Core Skills</label>
                    <div className="p-tags">
                      {userData.skills.map((s, i) => (
                        <span key={s} className="p-tag">
                          {s} <span className="remove" onClick={() => removeTag('skill', i)}>✕</span>
                        </span>
                      ))}
                      {!showSkillInput ? (
                        <button className="p-add-tag-btn" onClick={() => setShowSkillInput(true)}>+ Add Skill</button>
                      ) : (
                        <div className="p-tag-input-wrap">
                          <input 
                            type="text" className="p-input" value={newSkill} 
                            onChange={(e) => setNewSkill(e.target.value)} 
                            onKeyDown={(e) => e.key === 'Enter' && addTag('skill')}
                            autoFocus
                          />
                          <button onClick={() => addTag('skill')}>Add</button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-field" style={{ marginTop: '16px' }}>
                    <label className="p-label">Preferred Tech Stack</label>
                    <input type="text" className="p-input" value={userData.techStack} onChange={(e) => handleInputChange('techStack', e.target.value)} placeholder="e.g. MERN (MongoDB, Express, React, Node)" />
                  </div>
                </div>

                <div className="profile-card">
                  <div className="profile-card-title">📁 Project Portfolio</div>
                  <div className="p-field-row">
                    <div>
                      <label className="p-label">Projects Built</label>
                      <CustomDropdown 
                        options={['0', '1-2', '3-5', '6-10', '10+']}
                        value={userData.projectsBuilt}
                        onChange={(val) => handleInputChange('projectsBuilt', val)}
                      />
                    </div>
                    <div>
                      <label className="p-label">GitHub Repository</label>
                      <input type="text" className="p-input" value={userData.github} onChange={(e) => handleInputChange('github', e.target.value)} placeholder="github.com/username" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="profile-card p-readiness-card">
                <div className="profile-card-title">🎯 Readiness Factor</div>
                <div className="p-field">
                  <label className="p-label">Placement Stage</label>
                  <CustomDropdown 
                    options={['Just Started', 'Preparing for Interviews', 'Actively Applying', 'Got Offers']}
                    value={userData.placementStage}
                    onChange={(val) => handleInputChange('placementStage', val)}
                  />
                </div>
                <div className="p-field">
                  <label className="p-label">Daily Availability</label>
                  <CustomDropdown 
                    options={['Less than 1h', '1-2h', '2-4h', '4-6h', '6h+']}
                    value={userData.studyHours}
                    onChange={(val) => handleInputChange('studyHours', val)}
                  />
                </div>
                <div className="p-field">
                  <label className="p-label">Interview Confidence</label>
                  <div className="p-confidence-group">
                    {['Low', 'Medium', 'High'].map(c => (
                      <button 
                        key={c} 
                        className={`p-conf-btn ${userData.confidence === c ? 'active' : ''}`}
                        onClick={() => handleInputChange('confidence', c)}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: Growth */}
            <div className="profile-card">
              <div className="profile-card-title">🌱 Growth Opportunity (Weak Areas)</div>
              <div className="p-growth-inner">
                <div>
                  <p className="p-growth-desc">Identifying your growth areas helps us tailor your placement roadmap. Select areas where you need more mentorship.</p>
                  <div className="p-growth-checks">
                    {["DSA", "System Design", "Resume Building", "Communication", "LeetCode / CP", "Networking"].map(area => (
                      <div 
                        key={area} 
                        className={`p-check-item ${userData.weakAreas.includes(area) ? 'checked' : ''}`}
                        onClick={() => toggleWeakArea(area)}
                      >
                        <div className="p-cb">✓</div>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-tags" style={{ marginTop: '12px' }}>
                    {userData.weakAreas.filter(a => !["DSA", "System Design", "Resume Building", "Communication", "LeetCode / CP", "Networking"].includes(a)).map((w, i) => (
                      <span key={w} className="p-tag" style={{ borderStyle: 'solid' }}>
                        {w} <span className="remove" onClick={() => removeTag('weak', userData.weakAreas.indexOf(w))}>✕</span>
                      </span>
                    ))}
                    {!showWeakInput ? (
                      <button className="p-add-tag-btn" onClick={() => setShowWeakInput(true)}>+ Add Weak Area</button>
                    ) : (
                      <div className="p-tag-input-wrap">
                        <input 
                          type="text" className="p-input" value={newWeakArea} 
                          onChange={(e) => setNewWeakArea(e.target.value)} 
                          onKeyDown={(e) => e.key === 'Enter' && addTag('weak')}
                          autoFocus
                        />
                        <button onClick={() => addTag('weak')}>Add</button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-growth-visual">
                  <div className="plant-icon">🌿</div>
                  <div className="gv-text">Personalized Roadmap<br/>Awaits You</div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="profile-footer-actions">
              <button className="p-btn-discard" onClick={() => window.location.reload()}>Discard Changes</button>
              <button className="p-btn-save" onClick={saveProfile}>Save Profile Changes</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
