import React, { useState, useEffect } from 'react';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useNotifications } from '../context/NotificationContext';
import Sidebar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';
import avatarBoy from "../assets/icons/avatar_boy.png";
import avatarGirl from "../assets/icons/avatar_girl.png";
import './SettingsPage.css';

export default function SettingsPage() {
  const auth = getAuth();
  const db = getFirestore();
  const { notify } = useNotifications();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Form State
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  
  const [matchMsg, setMatchMsg] = useState({ text: '', type: '' });
  const [updateStatus, setUpdateStatus] = useState({ state: 'idle', msg: '' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const snap = await getDoc(doc(db, "users", user.uid));
          if (snap.exists()) {
            setUserData({ ...snap.data(), email: user.email });
          } else {
            setUserData({ name: user.displayName || 'User', email: user.email });
          }
        } catch (err) {
          console.error("Error loading user data:", err);
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth, db]);

  const handleMatchCheck = (confirmVal) => {
    setConfirmPw(confirmVal);
    if (!confirmVal) {
      setMatchMsg({ text: '', type: '' });
      return;
    }
    if (newPw === confirmVal) {
      setMatchMsg({ text: '✓ Passwords match', type: 'ok' });
    } else {
      setMatchMsg({ text: '✕ Passwords do not match', type: 'err' });
    }
  };

  const handleUpdatePassword = async () => {
    const user = auth.currentUser;
    if (!user || !currentPw || !newPw || newPw !== confirmPw) return;

    setUpdateStatus({ state: 'loading', msg: 'Updating password...' });

    try {
      // 1. Re-authenticate
      const credential = EmailAuthProvider.credential(user.email, currentPw);
      await reauthenticateWithCredential(user, credential);

      // 2. Update Password
      await updatePassword(user, newPw);
      notify("🔐 Password updated successfully!");
      setUpdateStatus({ state: 'success', msg: '✓ Password Updated!' });
      
      // Reset form
      setCurrentPw('');
      setNewPw('');
      setConfirmPw('');
      setMatchMsg({ text: '', type: '' });

      setTimeout(() => setUpdateStatus({ state: 'idle', msg: '' }), 3000);
    } catch (error) {
      console.error("Password update error:", error);
      let errorMsg = "Update failed. Please check your current password.";
      if (error.code === 'auth/wrong-password') errorMsg = "Incorrect current password.";
      if (error.code === 'auth/weak-password') errorMsg = "New password is too weak (min 6 chars).";
      
      setUpdateStatus({ state: 'error', msg: errorMsg });
      setTimeout(() => setUpdateStatus({ state: 'idle', msg: '' }), 5000);
    }
  };

  if (loading) return <div className="loading-screen">Loading Settings...</div>;

  const getAvatar = () => {
    if (userData?.gender === 'female') return avatarGirl;
    if (userData?.gender === 'male') return avatarBoy;
    return null;
  };

  return (
    <div className="dashboard-layout">
      <Navbar userData={userData} />
      <div className="shell">
        <Sidebar userData={userData} />
        <main className="profile-main">
          
          <div className="settings-main">
            {/* Left: User Profile Summary */}
            <div className="profile-summary-card">
              <div className="ps-avatar-wrap">
                {getAvatar() ? (
                  <img src={getAvatar()} alt="avatar" />
                ) : (
                  <div className="ps-emoji">🧑💼</div>
                )}
              </div>
              <div className="ps-name">{userData?.name || 'User'}</div>
              <div className="ps-email">{userData?.email}</div>
            </div>

            {/* Right: Security Card */}
            <div className="security-card">
              <div className="card-header">
                <div className="header-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="card-title">Security  & Password</div>
              </div>

              <div className="s-field">
                <label className="s-label">Current Password</label>
                <div className="s-input-wrap">
                  <input 
                    type={showCurrent ? "text" : "password"} 
                    value={currentPw}
                    onChange={(e) => setCurrentPw(e.target.value)}
                    placeholder="••••••••"
                  />
                  <button className="eye-btn" onClick={() => setShowCurrent(!showCurrent)}>
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      {showCurrent ? (
                        <>
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>
                        </>
                      ) : (
                        <>
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <div className="s-field">
                <label className="s-label">New Password</label>
                <div className="s-input-wrap">
                  <input 
                    type={showNew ? "text" : "password"} 
                    value={newPw}
                    onChange={(e) => setNewPw(e.target.value)}
                    placeholder="Min. 6 characters"
                  />
                  <button className="eye-btn" onClick={() => setShowNew(!showNew)}>
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      {showNew ? (
                        <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></>
                      ) : (
                        <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <div className="s-field">
                <label className="s-label">Confirm Password</label>
                <div className="s-input-wrap">
                  <input 
                    type={showConfirm ? "text" : "password"} 
                    value={confirmPw}
                    onChange={(e) => handleMatchCheck(e.target.value)}
                    placeholder="Repeat new password"
                  />
                  <button className="eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      {showConfirm ? (
                        <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></>
                      ) : (
                        <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                      )}
                    </svg>
                  </button>
                </div>
                <div className={`match-msg ${matchMsg.type}`}>{matchMsg.text}</div>
              </div>

              {updateStatus.msg && (
                <div style={{ 
                  color: updateStatus.state === 'error' ? '#c0392b' : '#2e9e4f', 
                  fontSize: '13px', 
                  fontWeight: '600', 
                  marginTop: '10px',
                  textAlign: 'center'
                }}>
                  {updateStatus.msg}
                </div>
              )}

              <button 
                className="update-btn" 
                disabled={updateStatus.state === 'loading' || !currentPw || !newPw || newPw !== confirmPw}
                onClick={handleUpdatePassword}
              >
                {updateStatus.state === 'loading' ? 'Updating…' : 'Update Password'}
              </button>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
