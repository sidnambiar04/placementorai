import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Navbar from '../components/common/Navbar';
import './SuccessStories.css';

const TESTIMONIALS = [
  { name: 'Sidharth Nambiar', role: 'SDE at Google', initial: 'SN', color: '#e07b20', quote: 'The personalized mentorship and structured roadmap at Placementor.ai were game-changers. I went from scattered preparation to focused results in just 3 months.' },
  { name: 'Vishnu Nair', role: 'Backend Engineer at Meta', initial: 'VN', color: '#c2541a', quote: 'Placementor helped me bridge the gap between design theory and industry expectations. The portfolio reviews were incredibly detailed and helpful.' },
  { name: 'Krupa More', role: 'Software Engineer at Amazon', initial: 'KM', color: '#d96820', quote: 'The mock interviews were brutal but effective. I felt so much more confident during the real thing. Highly recommend for any engineer!' },
  { name: 'Rutuja Nangare', role: 'Backend Developer at Stripe', initial: 'RN', color: '#b84e1a', quote: 'I transitioned from a different field into tech. Placementor provided the foundational skills and the confidence I needed to land my first role.' },
  { name: 'Ayush Nair', role: 'Data Analyst at Mitts', initial: 'AN', color: '#e08030', quote: 'The community is amazing. Whenever I felt stuck, there was always someone to guide me or a resource to help me push through.' },
  { name: 'Noel Tony', role: 'Frontend Lead at Apple', initial: 'NT', color: '#c96030', quote: 'I came for the job hunt but stayed for the lifelong learning. Placementor teaches you HOW to learn and grow indefinitely.' },
  { name: 'Sreeshant Nair', role: 'Full Stack Dev at Netflix', initial: 'SN', color: '#d45a1a', quote: 'From resume to final round, Placementor had a resource for every step. The AI-driven skill gap analysis alone was worth it.' },
  { name: 'Sanskar Mishra', role: 'ML Engineer at OpenAI', initial: 'SM', color: '#e07040', quote: 'Placementor\'s roadmap kept me on track even during the toughest prep weeks. Structured, focused, and incredibly effective.' },
  { name: 'Aditya Nair', role: 'DevOps Engineer at Microsoft', initial: 'AN', color: '#bf5020', quote: 'The interview preparation content is top-notch. Real-world scenarios, industry mentors, and a supportive peer community — everything I needed.' },
  { name: 'Anand Nair', role: 'Product Manager at Flipkart', initial: 'AN', color: '#ca6228', quote: 'What sets Placementor apart is the human touch. Mentors genuinely care about your growth, not just ticking boxes.' },
  { name: 'Suyash Nair', role: 'Cloud Architect at AWS', initial: 'SN', color: '#d96030', quote: 'Got my dream role within 2 months of joining. The mock interviews and the resume feedback loop were exactly what I was missing.' },
];

export default function SuccessStories() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      unsub();
      observer.disconnect();
    };
  }, [auth]);

  const handleCtaClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="success-container">
      <Navbar hideAuth={true} />

      {/* ══ HERO ══ */}
      <section className="ss-hero">
        <div className="ss-hero-badge">Transforming Careers</div>
        <h1>Real Journeys.<span>Real Results.</span></h1>
        <p>From classrooms to dream boardrooms. Discover how thousands of students leveraged Placementor.ai to break into the world's most innovative tech companies.</p>
      </section>

      {/* ══ STATS ══ */}
      <div className="ss-stats reveal">
        <div className="ss-stat-item">
          <div className="ss-stat-num">10k+</div>
          <div className="ss-stat-label">Placements Achieved</div>
        </div>
        <div className="ss-stat-item">
          <div className="ss-stat-num">4.9/5</div>
          <div className="ss-stat-label">Student Satisfaction</div>
        </div>
        <div className="ss-stat-item">
          <div className="ss-stat-num">95%</div>
          <div className="ss-stat-label">Placement Success Rate</div>
        </div>
      </div>

      <div className="ss-divider"></div>

      {/* ══ SUCCESS WALL ══ */}
      <section className="ss-section">
        <h2 className="ss-section-title reveal">Student Success Wall</h2>
        <p className="ss-section-sub reveal">Real stories from our community of achievers.</p>

        <div className="ss-cards-grid">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="ss-testimonial-card reveal">
              <div className="ss-tc-header">
                <div className="ss-tc-avatar" style={{ background: t.color }}>{t.initial}</div>
                <div>
                  <div className="ss-tc-name">{t.name}</div>
                  <div className="ss-tc-role">{t.role}</div>
                </div>
              </div>
              <p className="ss-tc-quote">{t.quote}</p>
              <div className="ss-stars">★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <div className="ss-cta-section reveal">
        <h2>Ready to write your story?</h2>
        <p>Join thousands of students who have already accelerated their careers. Your dream role is one click away.</p>
        <button className="ss-cta-btn" onClick={handleCtaClick}>
          Get Started for Free
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" />
          </svg>
        </button>
      </div>

      {/* FOOTER */}
      <footer className="landing-footer" style={{ borderTop: '1px solid var(--border)', background: 'white' }}>
        <div className="landing-footer-brand" style={{ fontWeight: '800', fontFamily: 'Plus Jakarta Sans', fontSize: '1.2rem' }}>
          <span className="place" style={{ color: '#1a1108' }}>Place</span><span className="mentor" style={{ color: '#f15a22' }}>mentor.ai</span>
        </div>
        <div className="landing-footer-copy">© 2026  Placementor.ai. Fueling Career Momentum.</div>
        <div className="landing-footer-links">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
          <Link to="/">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
}
