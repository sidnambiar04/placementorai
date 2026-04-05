import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useNotifications } from '../../context/NotificationContext';
import logoIcon from "../../assets/icons/logowithout_bg.png";
import avatarBoy from "../../assets/icons/avatar_boy.png";
import avatarGirl from "../../assets/icons/avatar_girl.png";
import './Navbar.css';

export default function Navbar({ userData, hideAuth }) {
  const navigate = useNavigate();
  const auth = getAuth();
  const { notifications, isRinging, toast, markAllAsRead, clearAll } = useNotifications();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => navigate('/'));
  };

  const handleBellClick = () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown) {
      markAllAsRead();
    }
  };

  const formatTime = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <nav className="dash-nav">
      <Link to="/" className="logo">
        <img src={logoIcon} alt="Logo" className="logo-img" />
        <span className="logo-text" style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          <span className="place" style={{ color: '#1a1108' }}>Place</span><span className="mentor" style={{ color: '#f15a22' }}>mentor.ai</span>
        </span>
      </Link>

      {!hideAuth && (
        <div className="nav-right" style={{ marginLeft: 'auto', position: 'relative' }}>
          
          {/* Notification Bell */}
          <div ref={dropdownRef}>
            <button 
              className={`nav-icon-btn ${isRinging ? 'ringing' : ''}`} 
              title="Notifications"
              onClick={handleBellClick}
            >
              🔔
              {unreadCount > 0 && <span className="notif-badge">{unreadCount}</span>}
            </button>
  
            {showDropdown && (
              <div className="notif-dropdown">
                <div className="notif-header">
                  <h4>Notifications</h4>
                  {notifications.length > 0 && (
                    <button className="clear-btn" onClick={clearAll}>Clear all</button>
                  )}
                </div>
                
                <div className="notif-list">
                  {notifications.length > 0 ? (
                    notifications.map(n => (
                      <div key={n.id} className={`notif-item ${!n.read ? 'unread' : ''}`}>
                        <div className="notif-msg">{n.message}</div>
                        <span className="notif-time">{formatTime(n.timestamp)}</span>
                      </div>
                    ))
                  ) : (
                    <div className="notif-empty">No new notifications</div>
                  )}
                </div>
              </div>
            )}
          </div>
  
          <button className="nav-icon-btn" title="Settings" onClick={() => navigate('/settings')}>⚙️</button>
          
          <div className="nav-avatar" onClick={() => navigate('/profile')}>
            {userData?.photoURL ? (
              <img src={userData.photoURL} alt="avatar" />
            ) : (
              userData?.gender === 'female' ? <img src={avatarGirl} alt="avatar" /> : userData?.gender === 'male' ? <img src={avatarBoy} alt="avatar" /> : '🧑💼'
            )}
          </div>
        </div>
      )}
  
      {/* Real-time Toast Pop-up */}
      {toast && (
        <div className="nav-toast">
          <div className="nav-toast-ring">⚡</div>
          <div className="nav-toast-content">
            <div className="nav-toast-type">{toast.type || 'Event'}</div>
            <div className="nav-toast-msg">{toast.message}</div>
          </div>
        </div>
      )}
    </nav>
  );
}
