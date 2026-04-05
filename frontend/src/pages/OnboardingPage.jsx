import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import logoIcon from '../assets/icons/logowithout_bg.png';
import avatarBoy from '../assets/icons/avatar_boy.png';
import avatarGirl from '../assets/icons/avatar_girl.png';
import './OnboardingPage.css';

const COURSES = [
  { group: '🎓 Engineering', options: ['B.Tech / B.E. — Computer Science', 'B.Tech / B.E. — Information Technology', 'B.Tech / B.E. — Electronics & Communication', 'B.Tech / B.E. — Mechanical', 'B.Tech / B.E. — Civil', 'M.Tech / M.E.'] },
  { group: '💼 Management', options: ['MBA — General Management', 'MBA — Finance', 'MBA — Marketing', 'MBA — HR'] },
  { group: '🔬 Science', options: ['B.Sc — Computer Science', 'B.Sc — Data Science', 'B.Sc — Mathematics', 'MCA', 'M.Sc — Computer Science'] },
  { group: '📚 Other', options: ['BCA', 'BBA', 'B.Com', 'BA', 'Other (specify below)'] }
];

const ROLES = ['SDE-1', 'Data Scientist', 'UI/UX Designer', 'Mobile Dev', 'Product Manager', 'DevOps Engineer', 'Software Engineer'];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    course: '',
    manualCourse: '',
    dreamRole: '',
    classYear: '',
    expLevel: 'Intermediate'
  });
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setFormData(prev => ({ ...prev, name: user.displayName || '' }));
      // Load existing data from Firestore
      const loadData = async () => {
        try {
          const snap = await getDoc(doc(db, "users", user.uid));
          if (snap.exists()) {
            const d = snap.data();
            setFormData(prev => ({
              ...prev,
              name: d.name || user.displayName || '',
              gender: d.gender || '',
              age: d.age || '',
              course: d.course || '',
              manualCourse: d.manualCourse || '',
              dreamRole: d.dreamRole || '',
              classYear: d.classYear || '',
              expLevel: d.expLevel || 'Intermediate'
            }));
          }
        } catch (e) {
          console.warn("Could not load user data:", e);
        }
      };
      loadData();
    }
  }, [auth.currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectGender = (gender) => setFormData(prev => ({ ...prev, gender }));
  const selectExp = (expLevel) => setFormData(prev => ({ ...prev, expLevel }));
  const selectRole = (dreamRole) => setFormData(prev => ({ ...prev, dreamRole }));

  const toggleDropdown = (id) => setDropdownOpen(dropdownOpen === id ? null : id);

  const selectCourse = (course) => {
    setFormData(prev => ({ ...prev, course }));
    setDropdownOpen(null);
  };

  const selectClassYear = (year) => {
    setFormData(prev => ({ ...prev, classYear: year }));
    setDropdownOpen(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest('.custom-select')) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const saveAndContinue = async (toStep) => {
    const user = auth.currentUser;
    if (user) {
      const payload = {};
      if (formData.name) payload.name = formData.name;
      if (formData.age) payload.age = formData.age;
      if (formData.gender) payload.gender = formData.gender;
      if (formData.course) {
        payload.course = formData.course === 'Other (specify below)' ? (formData.manualCourse || 'Other') : formData.course;
      }
      if (formData.dreamRole) payload.dreamRole = formData.dreamRole;
      if (formData.classYear) payload.classYear = formData.classYear;
      if (formData.expLevel) payload.expLevel = formData.expLevel;

      try {
        await setDoc(doc(db, "users", user.uid), payload, { merge: true });
      } catch (e) {
        console.warn("Save failed:", e);
      }
    }
    setStep(toStep);
    window.scrollTo(0, 0);
  };

  const handleLaunch = async () => {
    const user = auth.currentUser;
    if (!user) return;
    try {
      await setDoc(doc(db, "users", user.uid), {
        ...formData,
        course: formData.course === 'Other (specify below)' ? (formData.manualCourse || 'Other') : formData.course,
        onboardingComplete: true,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      navigate('/dashboard');
    } catch (err) {
      console.error("Error saving onboarding data:", err);
    }
  };

  const goToStep = (n) => {
    setStep(n);
    window.scrollTo(0, 0);
  };

  // Derived values for launch page
  const displayName = formData.name || 'Demo Student';
  const displayRole = formData.dreamRole || 'Software Engineer';
  const displayCourse = formData.course === 'Other (specify below)' ? (formData.manualCourse || 'Other') : (formData.course || 'Computer Science');
  const displayYear = formData.classYear || '2025';

  const getAvatarSrc = () => {
    if (formData.gender === 'male') return avatarBoy;
    if (formData.gender === 'female') return avatarGirl;
    return null;
  };

  const progressWidth = step === 1 ? '33%' : step === 2 ? '66%' : '100%';
  const progressText = step === 1 ? '33% complete' : step === 2 ? '66% complete' : '100% complete 🎉';

  // Sidebar component
  const Sidebar = () => (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-progress-label">Setup Progress</div>
        <div className="sidebar-step-label">Step {step} of 3</div>
      </div>

      <div className={`sidebar-item ${step === 1 ? 'active' : ''} ${step > 1 ? 'done' : ''}`} onClick={() => goToStep(1)}>
        <div className="step-num"><span>1</span></div>
        <div className="step-label-wrap">
          Identity
          <span className="step-desc">Who you are</span>
        </div>
      </div>
      <div className={`sidebar-item ${step === 2 ? 'active' : ''} ${step > 2 ? 'done' : ''}`} onClick={() => goToStep(2)}>
        <div className="step-num"><span>2</span></div>
        <div className="step-label-wrap">
          Calibration
          <span className="step-desc">Your experience & timeline</span>
        </div>
      </div>
      <div className={`sidebar-item ${step === 3 ? 'active' : ''}`} onClick={() => goToStep(3)}>
        <div className="step-num"><span>3</span></div>
        <div className="step-label-wrap">
          Launch
          <span className="step-desc">Dashboard activation</span>
        </div>
      </div>

      <div className="sidebar-progress-bar" style={{ marginTop: 'auto', paddingBottom: '4px' }}>
        <div className="progress-track"><div className="progress-fill" style={{ width: progressWidth }}></div></div>
        <div className="progress-pct">{progressText}</div>
      </div>
    </aside>
  );

  return (
    <div className="onboarding-container">

      {/* ═══ STEP 1 — IDENTITY ═══ */}
      {step === 1 && (
        <div className="page active">
          <nav className="onboarding-nav">
            <Link to="/" className="logo">
              <img src={logoIcon} alt="logo" className="logo-icon" />
              <span className="logo-text"><span className="place">Place</span><span className="mentor">mentor.ai</span></span>
            </Link>
          </nav>

          <div className="app-body">
            <Sidebar />
            <div className="main-content">
              <div className="onboarding-card">
                <div className="step-breadcrumb">
                  <div className="crumb active"><span className="crumb-dot"></span>Identity</div>
                  <div className="crumb-line"></div>
                  <div className="crumb"><span className="crumb-dot"></span>Calibration</div>
                  <div className="crumb-line"></div>
                  <div className="crumb"><span className="crumb-dot"></span>Launch</div>
                </div>

                <div className="section-title">Identity<span style={{ color: 'var(--orange)' }}>.</span></div>
                <div className="section-sub">Tell us about yourself so we can personalize your experience.</div>

                {/* Full Name */}
                <div className="field-group">
                  <label className="field-label">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. Rahul Sharma" />
                </div>

                {/* Gender + Age */}
                <div className="field-row">
                  <div className="field-group" style={{ flex: 2 }}>
                    <label className="field-label">Gender</label>
                    <div className="gender-pills">
                      {[
                        { id: 'male', icon: '♂️', label: 'Male' },
                        { id: 'female', icon: '♀️', label: 'Female' },
                        { id: 'other', icon: '⚧️', label: 'Other' }
                      ].map(g => (
                        <div key={g.id} className={`gender-pill ${formData.gender === g.id ? 'selected' : ''}`} onClick={() => selectGender(g.id)}>
                          <span className="g-icon">{g.icon}</span>
                          <span className="g-label">{g.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="field-group" style={{ flex: 1 }}>
                    <label className="field-label">Age</label>
                    <input type="number" name="age" value={formData.age} onChange={handleInputChange} placeholder="e.g. 21" min="15" max="35" />
                  </div>
                </div>

                {/* Course */}
                <div className="field-group">
                  <label className="field-label">Course Pursuing</label>
                  <div className="custom-select">
                    <div className={`cs-trigger ${dropdownOpen === 'course' ? 'open' : ''}`} onClick={(e) => { e.stopPropagation(); toggleDropdown('course'); }}>
                      <span className={formData.course ? 'cs-value' : 'cs-placeholder'}>
                        {formData.course || 'Select your course'}
                      </span>
                      <div className="cs-arrow">▼</div>
                    </div>
                    <div className={`cs-dropdown ${dropdownOpen === 'course' ? 'open' : ''}`}>
                      {COURSES.map(group => (
                        <React.Fragment key={group.group}>
                          <div className="cs-group-label">{group.group}</div>
                          {group.options.map(opt => (
                            <div key={opt} className={`cs-option ${formData.course === opt ? 'selected' : ''}`} onClick={() => selectCourse(opt)}>
                              {opt} {formData.course === opt && <span className="cs-check">✓</span>}
                            </div>
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {formData.course === 'Other (specify below)' && (
                  <div className="field-group">
                    <label className="field-label">Specify Your Course</label>
                    <input type="text" name="manualCourse" value={formData.manualCourse} onChange={handleInputChange} placeholder="Enter your course name" />
                  </div>
                )}

                <div className="section-divider"></div>

                <div className="section-title">Define your dream<span style={{ color: 'var(--orange)' }}>.</span></div>
                <div className="section-sub">Which career path should Placementor.ai optimize for you?</div>

                <div className="field-group">
                  <div className="role-input-wrap">
                    <span className="bag-icon">💼</span>
                    <input type="text" name="dreamRole" value={formData.dreamRole} onChange={handleInputChange} placeholder="e.g. Frontend Engineer, Product Manager" />
                  </div>
                </div>

                <div className="role-chips">
                  {ROLES.map(role => (
                    <div key={role} className={`chip ${formData.dreamRole === role ? 'sel' : ''}`} onClick={() => selectRole(role)}>+ {role}</div>
                  ))}
                </div>

                <button className="cta-btn" onClick={() => saveAndContinue(2)}>
                  Continue Setup <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>

          <footer className="onboarding-footer">
            <span>© 2025 PLACEMENTOR.AI.</span>
            <div className="footer-links">
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Service</Link>
              <Link to="#">Help Center</Link>
            </div>
          </footer>
        </div>
      )}

      {/* ═══ STEP 2 — CALIBRATION ═══ */}
      {step === 2 && (
        <div className="page active">
          <nav className="onboarding-nav">
            <Link to="/" className="logo">
              <img src={logoIcon} alt="logo" className="logo-icon" />
              <span className="logo-text"><span className="place">Place</span><span className="mentor">mentor.ai</span></span>
            </Link>
          </nav>

          <div className="app-body">
            <Sidebar />
            <div className="main-content">
              <div className="onboarding-card">
                <div className="step-breadcrumb">
                  <div className="crumb done"><span className="crumb-dot"></span>Identity</div>
                  <div className="crumb-line done"></div>
                  <div className="crumb active"><span className="crumb-dot"></span>Calibration</div>
                  <div className="crumb-line"></div>
                  <div className="crumb"><span className="crumb-dot"></span>Launch</div>
                </div>

                <div className="section-title" style={{ textAlign: 'left' }}>Calibration<span style={{ color: 'var(--orange)' }}>.</span></div>
                <div className="section-sub" style={{ textAlign: 'left', marginBottom: '28px' }}>We tailor our AI responses based on your timeline and experience level.</div>

                <label className="field-label" style={{ marginBottom: '10px' }}>Timeline Integration</label>
                <div className="field-group">
                  <div className="custom-select">
                    <div className={`cs-trigger ${dropdownOpen === 'class' ? 'open' : ''}`} onClick={(e) => { e.stopPropagation(); toggleDropdown('class'); }}>
                      <span className={formData.classYear ? 'cs-value' : 'cs-placeholder'}>
                        {formData.classYear ? `Class of ${formData.classYear}` : 'Select Class of'}
                      </span>
                      <div className="cs-arrow">▼</div>
                    </div>
                    <div className={`cs-dropdown ${dropdownOpen === 'class' ? 'open' : ''}`}>
                      {['2024', '2025', '2026', '2027', '2028'].map(yr => (
                        <div key={yr} className={`cs-option ${formData.classYear === yr ? 'selected' : ''}`} onClick={() => selectClassYear(yr)}>
                          Class of {yr} {formData.classYear === yr && <span className="cs-check">✓</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <label className="field-label" style={{ margin: '24px 0 14px' }}>Experience Level</label>
                <div className="exp-cards">
                  {[
                    { id: 'Beginner', icon: '🌱', desc: 'Starting from zero. Learning core concepts and building fundamentals.' },
                    { id: 'Intermediate', icon: '📈', desc: 'Active in the field. Seeking to refine skills and expand reach.' },
                    { id: 'Advanced', icon: '🏆', desc: 'Expert practitioner. Focusing on leadership and strategic impact.' }
                  ].map(lvl => (
                    <div key={lvl.id} className={`exp-card ${formData.expLevel === lvl.id ? 'selected' : ''}`} onClick={() => selectExp(lvl.id)}>
                      <div className="exp-icon">{lvl.icon}</div>
                      <div className="exp-name">{lvl.id}</div>
                      <div className="exp-desc">{lvl.desc}</div>
                      <div className="exp-badge">SELECTED</div>
                    </div>
                  ))}
                </div>

                <button className="cta-btn" onClick={() => saveAndContinue(3)}>
                  Finalize Path <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>

          <footer className="onboarding-footer">
            <span>© 2025 PLACEMENTOR.AI.</span>
            <div className="footer-links">
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Service</Link>
              <Link to="#">Help Center</Link>
            </div>
          </footer>
        </div>
      )}

      {/* ═══ STEP 3 — LAUNCH ═══ */}
      {step === 3 && (
        <div className="page active">
          <nav className="onboarding-nav">
            <Link to="/" className="logo">
              <img src={logoIcon} alt="logo" className="logo-icon" />
              <span className="logo-text"><span className="place">Place</span><span className="mentor">mentor.ai</span></span>
            </Link>
          </nav>

          <div className="app-body">
            <Sidebar />
            <div className="main-content">
              <div className="onboarding-card">
                <div className="launch-wrap">
                  <div className="launch-rocket">🚀</div>
                  <div className="launch-title">Systems Online.</div>
                  <div className="launch-sub">Your personalized AI dashboard is ready.<br />We've calibrated your trajectory based on your profile.</div>

                  <div className="user-preview">
                    <div className="user-avatar-wrap">
                      <div className="user-avatar">
                        {getAvatarSrc() ? (
                          <img src={getAvatarSrc()} alt="avatar" />
                        ) : (
                          <span>🧑‍💼</span>
                        )}
                      </div>
                      <div className="user-check">✓</div>
                    </div>
                    <div className="user-info">
                      <div className="user-name">
                        <span>{displayName}</span>
                        <span className="ready-badge">READY</span>
                      </div>
                      <div className="user-meta">Class of {displayYear} • {displayCourse}</div>
                      <div className="user-role">🎯 {displayRole}</div>
                    </div>
                  </div>

                  <button className="launch-btn" onClick={handleLaunch}>
                    <span className="rocket-icon">🚀</span>
                    Launch Dashboard →
                  </button>
                  <button className="back-to-edit" onClick={() => goToStep(1)}>← Back to Edit</button>
                </div>
              </div>
            </div>
          </div>

          <footer className="onboarding-footer">
            <span>© 2025 PLACEMENTOR.AI.</span>
            <div className="footer-links">
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Service</Link>
              <Link to="#">Help Center</Link>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
