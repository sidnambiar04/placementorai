import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import logoIcon from '../assets/icons/logowithout_bg.png';
import heroImg from '../assets/icons/hero_flying_man_latest.png';
import './LandingPage.css';

export default function LandingPage() {
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      unsubscribe();
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleCtaClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-wrapper">
      {/* ══ NAV ══ */}
      <nav className={`landing-nav ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="landing-logo">
          <img src={logoIcon} alt="Placementor Logo" className="landing-logo-icon" />
          <span className="landing-logo-text">
            <span className="place">Place</span><span className="mentor">mentor.ai</span>
          </span>
        </Link>
        <div className="landing-nav-links">
          <Link to="/" className="landing-nav-link active">Features</Link>
          <Link to="/success-stories" className="landing-nav-link">Success Stories</Link>
          <Link to="/partners" className="landing-nav-link">Companies</Link>
          <Link to="/about-us" className="landing-nav-link">About Us</Link>
        </div>
        {user ? (
          <Link to="/dashboard" className="landing-btn-login">Dashboard</Link>
        ) : (
          <Link to="/login" className="landing-btn-login">Login</Link>
        )}
      </nav>

      {/* ══ HERO ══ */}
      <section className="landing-hero">
        {/* Hero man image acting as full background */}
        <img
          src={heroImg} 
          alt="Career hero"
          className="landing-hero-img"
          onError={(e) => { e.target.style.display = 'none'; }}
        />

        {/* Content */}
        <div className="landing-hero-content">
          <div className="landing-hero-chip">🚀 Your Ultimate Interview Wingman</div>

          <h1 className="landing-hero-title">
            From Student to<br/>
            <span className="accent">Industry-Ready</span>
          </h1>

          <p className="landing-hero-sub">
            Crush your placements with AI-driven resume fixes,<br />
            realistic mock interviews, and<br />
            personalized career roadmaps.
          </p>

          <div className="landing-hero-actions">
            <button className="landing-btn-cta" onClick={handleCtaClick}>
              {user ? 'Go to Dashboard' : 'Get Started for Free'}
            </button>
            <button className="landing-btn-secondary" onClick={scrollToFeatures}>
              See How It Works <span>→</span>
            </button>
          </div>

          <div className="landing-hero-stats">
            <div className="stat-item">
              <div className="stat-val">12<span className="accent-text">k+</span></div>
              <div className="stat-label">Students placed</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">95<span className="accent-text">%</span></div>
              <div className="stat-label">Interview success rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">500<span className="accent-text">+</span></div>
              <div className="stat-label">Partner companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section className="landing-features" id="features">
        <div className="landing-features-header reveal">
          <div className="landing-features-title">
            Everything you need. More than<br/><span className="accent">just a resume checker.</span>
          </div>
          <div className="landing-features-sub">
            Our Generative AI acts as your dedicated mentor, giving you real-time feedback and
            guided preparation exactly when you need it.
          </div>
        </div>

        <div className="landing-features-grid">
          <div className="landing-feature-card reveal">
            <div className="landing-feature-icon fi-1">📄</div>
            <div className="landing-feature-name">Smart Resume Evaluation</div>
            <div className="landing-feature-desc">ATS score optimisation and deep skill analysis to get you past the initial gatekeepers.</div>
          </div>
          <div className="landing-feature-card reveal">
            <div className="landing-feature-icon fi-2">🎙️</div>
            <div className="landing-feature-name">AI Mock Interviews</div>
            <div className="landing-feature-desc">Experience real-world coding and behavioural scenarios with instant, actionable feedback.</div>
          </div>
          <div className="landing-feature-card reveal">
            <div className="landing-feature-icon fi-3">📖</div>
            <div className="landing-feature-name">Personalised Roadmap</div>
            <div className="landing-feature-desc">A strategic week-by-week learning trajectory tailored to your target industry roles.</div>
          </div>
          <div className="landing-feature-card reveal">
            <div className="landing-feature-icon fi-4">📊</div>
            <div className="landing-feature-name">Performance Dashboard</div>
            <div className="landing-feature-desc">Track your interview scores and readiness levels through visualised growth metrics.</div>
          </div>
          <div className="landing-feature-card reveal">
            <div className="landing-feature-icon fi-5">🎯</div>
            <div className="landing-feature-name">Skill Gap Analysis</div>
            <div className="landing-feature-desc">Identify exactly which technical and soft skills you're missing for your dream role.</div>
          </div>
          <div className="landing-feature-card reveal">
            <div className="landing-feature-icon fi-6">💼</div>
            <div className="landing-feature-name">AI Job Matching</div>
            <div className="landing-feature-desc">Discover high-relevance career opportunities tailored to your unique profile and goals.</div>
          </div>
          <div className="landing-feature-card reveal">
            <div className="landing-feature-icon fi-7">📚</div>
            <div className="landing-feature-name">Curated Study Resources</div>
            <div className="landing-feature-desc">Access hand-picked videos, documentation, and projects to bridge your learning gaps.</div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="landing-cta-section">
        <div className="landing-cta-box reveal">
          <div className="landing-cta-title">Ready to land your dream job?</div>
          <div className="landing-cta-sub">
            Join thousands of students securing their future with Placementor.ai's
            cutting-edge career intelligence.
          </div>
          <button className="landing-btn-cta-white" onClick={handleCtaClick}>
             {user ? 'Return to Dashboard' : 'Start Preparing Now'}
          </button>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="landing-footer">
        <div className="landing-footer-top">
          <h3>DEVELOPMENT</h3>
          <div className="landing-footer-dev-card">
            <p>Developed as part of academic learning and exploration at:</p>
            <h4>Pillai College of Engineering (PCE)</h4>
            <a href="https://www.pce.ac.in" target="_blank" rel="noreferrer">
              VISIT WEBSITE <span>→</span>
            </a>
          </div>

          <div className="landing-footer-associates-card reveal">
            <p>Crafted by the associates and builders behind Placementor.ai.</p>
            <h4>Meet the team that shaped this project</h4>
            <Link to="/contributors" className="landing-footer-associates-btn">
              VIEW CONTRIBUTORS <span>→</span>
            </Link>
          </div>
        </div>

        <div className="landing-footer-bottom">
          <div>
            <div className="landing-footer-brand" style={{ fontWeight: '800', fontFamily: 'Plus Jakarta Sans', fontSize: '1.2rem' }}>
              <span className="place" style={{ color: '#1a1108' }}>Place</span><span className="mentor" style={{ color: '#f15a22' }}>mentor.ai</span>
            </div>
            <div className="landing-footer-copy">© 2026 Placementor.ai. All rights reserved.</div>
          </div>
          <div className="landing-footer-links">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Careers</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
