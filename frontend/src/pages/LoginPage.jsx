import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import logoIcon from '../assets/icons/logowithout_bg.png';
import avatarBoy from '../assets/icons/avatar_boy.png';
import corporateMan from '../assets/icons/corporateman.png';
import corporateWomen from '../assets/icons/corporatewomen.png';
import './LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [view, setView] = useState('login'); // 'login' | 'register'
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  
  // Fields Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirm, setRegConfirm] = useState('');
  
  // Password Visibility toggles
  const [showPw, setShowPw] = useState(false);
  const [showRegPw, setShowRegPw] = useState(false);
  const [showRegConfirmPw, setShowRegConfirmPw] = useState(false);

  const auth = getAuth();
  const db = getFirestore();
  const googleProvider = new GoogleAuthProvider();

  // Helper clear
  const clearMessages = () => {
    setErrorMsg('');
    setSuccessMsg('');
  };

  const triggerError = (msg) => {
    setErrorMsg('⚠ ' + msg);
    setSuccessMsg('');
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  const triggerSuccess = (msg) => {
    setSuccessMsg('✓ ' + msg);
    setErrorMsg('');
  };

  function friendlyError(err) {
    console.error("Firebase Auth Error:", err);
    if (!err) return "Something went wrong. Please try again.";
    const code = err.code || "unknown";
    const map = {
      "auth/user-not-found":        "No account found with this email.",
      "auth/wrong-password":        "Incorrect password. Try again.",
      "auth/email-already-in-use":  "This email is already registered.",
      "auth/invalid-email":         "Please enter a valid email address.",
      "auth/weak-password":         "Password should be at least 6 characters.",
      "auth/popup-closed-by-user":  "Google sign-in was cancelled.",
      "auth/network-request-failed":"Network error. Check your connection.",
      "auth/invalid-credential":    "Invalid credentials provided.",
    };
    return map[code] || `Error: ${err.message || code || "Something went wrong."}`;
  }

  const syncWithBackend = async (user) => {
    try {
      const idToken = await user.getIdToken(true);
      const res = await fetch('http://localhost:8000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken })
      });
      if (!res.ok) {
        console.warn("Backend sync failed. Status:", res.status);
        return { isNewUser: false };
      }
      return await res.json();
    } catch (err) {
      console.error("Error communicating with backend:", err);
      return { isNewUser: false };
    }
  };

  const handleGoogleSignIn = async () => {
    clearMessages();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const backendData = await syncWithBackend(result.user);
      if (backendData?.isNewUser) {
        navigate('/onboarding');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      if(err.code !== "auth/popup-closed-by-user") {
        triggerError(friendlyError(err));
      }
    }
  };

  const handleEmailLogin = async (e) => {
    if(e) e.preventDefault();
    clearMessages();
    if (!email || !password) { triggerError("Please fill in all fields."); return; }
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      await syncWithBackend(result.user);
      navigate('/dashboard');
    } catch (err) { 
      triggerError(friendlyError(err)); 
      setLoading(false); 
    }
  };

  const handleEmailRegister = async (e) => {
    if(e) e.preventDefault();
    clearMessages();
    if (!regName || !regEmail || !regPassword || !regConfirm) { triggerError("Please fill in all fields."); return; }
    if (regPassword !== regConfirm) { triggerError("Passwords do not match."); return; }
    if (regPassword.length < 6)  { triggerError("Password must be at least 6 characters."); return; }
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, regEmail, regPassword);
      await updateProfile(result.user, { displayName: regName });
      await syncWithBackend(result.user);
      navigate('/onboarding');
    } catch (err) { 
      triggerError(friendlyError(err)); 
      setLoading(false); 
    }
  };

  const handleForgotPassword = async () => {
    if (!email) { triggerError("Enter your email first, then click Forgot password."); return; }
    try {
      await sendPasswordResetEmail(auth, email);
      triggerSuccess("Reset link sent! Check your inbox.");
    } catch (err) { triggerError(friendlyError(err)); }
  };

  return (
    <div className="login-page-wrapper">
      
      {/* ══ LEFT HERO PANEL ══ */}
      <div className="login-hero-panel">
        <div className="login-hero-badge">Future of Work</div>
        <h1 className="login-hero-headline">
          Your Career<br />
          <span className="accent">Growth</span> Starts<br />
          Here.
        </h1>
        <p className="login-hero-desc">
          Join 50,000+ ambitious professionals using AI to navigate their placement journey and land roles at top-tier companies.
        </p>

        {/* Hero image */}
        <div className="login-hero-img-wrap">
          <img src={view === 'login' ? corporateMan : corporateWomen} alt="Professional using Placementor.ai" />
        </div>
      </div>

      {/* ══ RIGHT AUTH PANEL ══ */}
      <div className="auth-panel">
        <Link to="/" className="login-brand">
          <img src={logoIcon} alt="Logo" className="login-brand-icon" />
          <div className="login-brand-name">
            Place<span>mentor.ai</span>
          </div>
        </Link>
        <div className="login-brand-sub">Accelerate your career velocity today.</div>

        <div className={`auth-card ${shake ? 'shake' : ''}`}>
          
          {/* ── LOGIN VIEW ── */}
          {view === 'login' && (
            <div className="auth-view active">
              {errorMsg && <div className="auth-msg error">{errorMsg}</div>}
              {successMsg && <div className="auth-msg success">{successMsg}</div>}

              <button className="btn-google" onClick={handleGoogleSignIn}>
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                Continue with Google
              </button>

              <div className="auth-divider"><span>OR WITH EMAIL</span></div>

              <form onSubmit={handleEmailLogin}>
                <div className="field-group">
                  <div className="field-header"><label className="field-label">Email Address</label></div>
                  <input className="field-input" type="email" placeholder="name@example.com" value={email} onChange={e => {setEmail(e.target.value); clearMessages();}} />
                </div>

                <div className="field-group">
                  <div className="field-header">
                    <label className="field-label">Password</label>
                    <span className="field-link" onClick={handleForgotPassword}>Forgot password?</span>
                  </div>
                  <div className="pw-wrap">
                    <input className="field-input" type={showPw ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={e => {setPassword(e.target.value); clearMessages();}} />
                    <button type="button" className="pw-toggle" onClick={() => setShowPw(!showPw)}>{showPw ? '🙈' : '👁'}</button>
                  </div>
                </div>

                <button type="submit" className={`btn-primary ${loading ? 'loading' : ''}`} disabled={loading}>
                  <div className="spinner"></div>
                  <span className="btn-text">Login</span>
                </button>
              </form>

              <div className="bottom-link">
                New user? <span onClick={() => { setView('register'); clearMessages(); }}>Register</span>
              </div>
            </div>
          )}

          {/* ── REGISTER VIEW ── */}
          {view === 'register' && (
            <div className="auth-view active">
              <span className="back-link" onClick={() => { setView('login'); clearMessages(); }}>← Back to Login</span>

              {errorMsg && <div className="auth-msg error">{errorMsg}</div>}
              {successMsg && <div className="auth-msg success">{successMsg}</div>}

              <button className="btn-google" onClick={handleGoogleSignIn}>
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                Continue with Google
              </button>

              <div className="auth-divider"><span>OR WITH EMAIL</span></div>

              <form onSubmit={handleEmailRegister}>
                <div className="field-group">
                  <label className="field-label" style={{display:'block', marginBottom:'7px'}}>Full Name</label>
                  <input className="field-input" type="text" placeholder="Your full name" value={regName} onChange={e => {setRegName(e.target.value); clearMessages();}} />
                </div>

                <div className="field-group">
                  <label className="field-label" style={{display:'block', marginBottom:'7px'}}>Email Address</label>
                  <input className="field-input" type="email" placeholder="name@example.com" value={regEmail} onChange={e => {setRegEmail(e.target.value); clearMessages();}} />
                </div>

                <div className="field-group">
                  <label className="field-label" style={{display:'block', marginBottom:'7px'}}>Password</label>
                  <div className="pw-wrap">
                    <input className="field-input" type={showRegPw ? 'text' : 'password'} placeholder="Min. 6 characters" value={regPassword} onChange={e => {setRegPassword(e.target.value); clearMessages();}} />
                    <button type="button" className="pw-toggle" onClick={() => setShowRegPw(!showRegPw)}>{showRegPw ? '🙈' : '👁'}</button>
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label" style={{display:'block', marginBottom:'7px'}}>Confirm Password</label>
                  <div className="pw-wrap">
                    <input className="field-input" type={showRegConfirmPw ? 'text' : 'password'} placeholder="Repeat password" value={regConfirm} onChange={e => {setRegConfirm(e.target.value); clearMessages();}} />
                    <button type="button" className="pw-toggle" onClick={() => setShowRegConfirmPw(!showRegConfirmPw)}>{showRegConfirmPw ? '🙈' : '👁'}</button>
                  </div>
                </div>

                <button type="submit" className={`btn-primary ${loading ? 'loading' : ''}`} disabled={loading}>
                  <div className="spinner"></div>
                  <span className="btn-text">Create Account</span>
                </button>
              </form>

              <div className="bottom-link">
                Already have an account? <span onClick={() => { setView('login'); clearMessages(); }}>Login</span>
              </div>
            </div>
          )}

        </div>{/* /auth-card */}

        <div className="auth-footer">
          By continuing you agree to our
          <a href="#">Terms of Service</a> &amp; <a href="#">Privacy Policy</a>
        </div>

      </div>{/* /auth-panel */}
    </div>
  );
}
