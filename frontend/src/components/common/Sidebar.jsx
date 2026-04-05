import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import './Sidebar.css';

export default function Sidebar({ userData }) {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleMouseMove = (e) => {
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100 + '%';
    const y = ((e.clientY - rect.top) / rect.height) * 100 + '%';
    item.style.setProperty('--x', x);
    item.style.setProperty('--y', y);
  };

  const handleLogout = () => {
    signOut(auth).then(() => navigate('/'));
  };

  return (
    <aside className="sidebar">
      {/* MAIN MENU */}

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({isActive}) => `s-item ${isActive ? 'active' : ''}`} onMouseMove={handleMouseMove}>
          <span className="s-icon icon-dashboard">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="7" height="7" rx="1.5"/>
              <rect x="11" y="2" width="7" height="7" rx="1.5"/>
              <rect x="2" y="11" width="7" height="7" rx="1.5"/>
              <rect x="11" y="11" width="7" height="7" rx="1.5"/>
            </svg>
          </span>
          Dashboard
        </NavLink>

        <NavLink to="/resume-audit" className={({isActive}) => `s-item ${isActive ? 'active' : ''}`} onMouseMove={handleMouseMove}>
          <span className="s-icon">
            <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>
          </span>
          Resume Evaluation
        </NavLink>

        <NavLink to="/skill-gap" className={({isActive}) => `s-item ${isActive ? 'active' : ''}`} onMouseMove={handleMouseMove}>
          <span className="s-icon">
            <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </span>
          Skill Gap Analysis
        </NavLink>

        <NavLink to="/mock-interview" className={({isActive}) => `s-item ${isActive ? 'active' : ''}`} onMouseMove={handleMouseMove}>
          <span className="s-icon">
            <svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9"/><polyline points="12 7 12 12 15 14"/><path d="M19 3v5h-5"/></svg>
          </span>
          Mock Interview
        </NavLink>

        <NavLink to="/recommendations" className={({isActive}) => `s-item ${isActive ? 'active' : ''}`} onMouseMove={handleMouseMove}>
          <span className="s-icon">
            <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          </span>
          Job Opportunities
        </NavLink>

        <NavLink to="/career-roadmap" className={({isActive}) => `s-item ${isActive ? 'active' : ''}`} onMouseMove={handleMouseMove}>
          <span className="s-icon">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </span>
          Career Roadmap
        </NavLink>

        <NavLink to="/resources" className={({isActive}) => `s-item ${isActive ? 'active' : ''}`} onMouseMove={handleMouseMove}>
          <span className="s-icon">
            <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </span>
          Resources
        </NavLink>
      </nav>

      <div className="divider"></div>

      <nav className="sidebar-bottom">
        <div className="s-item" onClick={handleLogout} onMouseMove={handleMouseMove}>
          <span className="s-icon">
            <svg viewBox="0 0 24 24" style={{width:'18px', height:'18px', stroke:'currentColor', fill:'none', strokeWidth:'1.7', strokeLinecap:'round', strokeLinejoin:'round'}}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </span>
          Logout
        </div>
      </nav>
    </aside>
  );
}
