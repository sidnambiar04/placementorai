import React from 'react';

export default function CompanyCard({ company, role, matchScore, reason }) {
  return (
    <div className="company-card">
      <div className="company-header">
        <div className="company-info">
          <h3>{company}</h3>
          <p>{role}</p>
        </div>
        <div className="match-badge">
          {matchScore}% Match
        </div>
      </div>
      <p className="match-reason">{reason}</p>
      <button className="btn-ghost">View Details</button>
    </div>
  );
}
