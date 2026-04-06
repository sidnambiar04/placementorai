import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import logoIcon from '../assets/icons/logowithout_bg.png';
import './AboutUsPage.css';

const ABOUT_VIDEO_EMBED = 'https://www.youtube.com/embed/6dhxOChyGSg';

export default function AboutUsPage() {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handlePrimaryCta = () => {
    if (user) {
      navigate('/dashboard');
      return;
    }
    navigate('/login');
  };

  return (
    <div className="about-wrapper">
      <nav className="about-nav">
        <Link to="/" className="about-logo">
          <img src={logoIcon} alt="Placementor Logo" className="about-logo-icon" />
          <span className="about-logo-text">
            <span className="place">Place</span><span className="mentor">mentor.ai</span>
          </span>
        </Link>

        <button className="about-nav-cta" onClick={handlePrimaryCta}>
          {user ? 'Dashboard' : 'Get Started'}
        </button>
      </nav>

      <main className="about-shell">
        <section className="about-hero">
          <div className="about-chip">About Placementor.ai</div>
          <h1>Built to turn placement anxiety into interview confidence.</h1>
          <p>
            Placementor.ai combines practical AI workflows with student-first design to help you prepare smarter,
            communicate better, and convert opportunities into offers.
          </p>
          <div className="about-hero-actions">
            <button className="about-btn-primary" onClick={handlePrimaryCta}>
              Start Your Preparation
            </button>
            <Link to="/contributors" className="about-btn-secondary">
              Meet the Team
            </Link>
          </div>
        </section>

        <section className="about-grid">
          <article className="about-card">
            <h3>Why We Built This</h3>
            <p>
              Students often have talent but miss structured guidance. We created Placementor.ai to bridge that gap
              through personalized learning loops and actionable interview feedback.
            </p>
          </article>

          <article className="about-card">
            <h3>How It Helps</h3>
            <p>
              From resume audits and skill-gap analysis to mock interviews and role-based roadmaps, every feature is
              focused on helping you move from preparation to placement.
            </p>
          </article>

          <article className="about-card">
            <h3>Design Philosophy</h3>
            <p>
              Clarity over complexity. We use warm visuals, focused content, and measurable progress cues so students
              can stay motivated while preparing consistently.
            </p>
          </article>
        </section>

        <section className="about-video-section">
          <div className="about-video-copy">
            <span className="about-video-badge">Product Walkthrough</span>
            <h2>Watch Placementor.ai in action</h2>
            <p>
              Preview the platform flow from onboarding to mock interview evaluation. The video below is fully
              playable and responsive across desktop and mobile screens.
            </p>
          </div>

          <div className="about-video-wrap" aria-label="Placementor product video">
            <iframe
              src={ABOUT_VIDEO_EMBED}
              title="Placementor.ai Product Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>
      </main>
    </div>
  );
}
