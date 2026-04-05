import React from 'react';

// Color palette for topic blocks
const BLOCK_COLORS = [
  { bg: '#4A2C0A', text: '#FFD700' },
  { bg: '#3D1F08', text: '#FFC107' },
  { bg: '#5C3317', text: '#FFE066' },
  { bg: '#6B3A0F', text: '#FFD700' },
  { bg: '#2E1A06', text: '#FFA500' },
];

function getDirectUrl(name, type) {
  const q = encodeURIComponent(name);
  if (type === 'video') return `https://www.youtube.com/results?search_query=${q}+tutorial`;
  if (type === 'notes') return `https://www.google.com/search?q=${q}+documentation`;
  return `https://www.google.com/search?q=${q}`;
}

export default function ResourceCard({ card, index }) {
  const blockColor = BLOCK_COLORS[index % BLOCK_COLORS.length];

  return (
    <div className="sr-resource-card">
      <div className="header-block" style={{ background: blockColor.bg, color: blockColor.text, borderRadius: '15px', padding: '20px', marginBottom: '15px' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{card.skill}</div>
        <div>{card.priority}</div>
      </div>
      
      <div className="links">
        {card.videos?.map((v, i) => (
          <a key={i} href={getDirectUrl(v, 'video')} className="sr-link-action" target="_blank" rel="noreferrer">
             <span className="sr-link-text">▶ {v}</span>
          </a>
        ))}
        {card.notes?.map((n, i) => (
          <a key={i} href={getDirectUrl(n, 'notes')} className="sr-link-action" target="_blank" rel="noreferrer">
             <span className="sr-link-text">📄 {n}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
