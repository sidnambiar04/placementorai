import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import logoIcon from '../assets/icons/logowithout_bg.png';
import './RegisterPage.css';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to setup after registration
      navigate('/setup');
    } catch (err) {
      console.error("Registration failed:", err);
      alert(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/setup');
    } catch (err) {
      console.error("Google Sign-In failed:", err);
    }
  };

  return (
    <div className="register-page">
      <nav className="register-nav">
        <Link to="/" className="logo">
          <img src={logoIcon} alt="Logo" style={{height: '36px'}} />
          <span className="logo-text">
            <span className="place">Place</span><span className="mentor">mentor.ai</span>
          </span>
        </Link>
        <div style={{display: 'flex', gap: '20px'}}>
             <Link to="/login" style={{textDecoration: 'none', color: 'var(--dark)', fontWeight: '600'}}>Log In</Link>
        </div>
      </nav>

      <main className="register-main">
        <div className="hero-left">
          <span className="badge">Future of Work</span>
          <h1 className="hero-title">
            Your Career<br/>
            <span className="accent">Catalyst</span> Starts<br/>
            Here.
          </h1>
          <p className="hero-sub" style={{color: 'var(--muted)', lineHeight: '1.6'}}>
            Join 50,000+ ambitious professionals using AI to navigate their placement journey and land roles at top-tier companies.
          </p>
          <div className="hero-img">
             <img src={logoIcon} alt="Hero" style={{width: '60%', opacity: '0.8'}} />
          </div>
        </div>

        <div className="hero-right">
          <div className="register-card">
            <h2 style={{fontFamily: 'Fraunces, serif', fontSize: '1.7rem', fontWeight: '700', marginBottom: '6px'}}>Join Placementor.ai</h2>
            <p style={{fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '24px'}}>Start your career takeoff today.</p>

            <button className="google-btn" onClick={handleGoogleSignIn}>
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg" alt="G" style={{width: '18px'}} />
              Continue with Google
            </button>

            <div className="divider"><span>OR WITH EMAIL</span></div>

            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@email.com" required />
              </div>
              <div className="form-group">
                <label>Set Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" required />
              </div>
              <button type="submit" className="btn-register">Register</button>
            </form>

            <p className="login-link" style={{textAlign: 'center', fontSize: '0.84rem', color: 'var(--muted)'}}>
              Already have an account? <Link to="/login" style={{color: 'var(--orange)', fontWeight: 'bold', textDecoration: 'none'}}>Login</Link>
            </p>
          </div>
        </div>
      </main>

      <footer style={{background: 'var(--dark)', color: 'white', padding: '28px 10%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span className="footer-logo" style={{fontWeight: 'bold'}}>Placementor.ai</span>
        <span style={{fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)'}}>© 2024 Placementor.ai. Accelerating Career Growth.</span>
      </footer>
    </div>
  );
}
