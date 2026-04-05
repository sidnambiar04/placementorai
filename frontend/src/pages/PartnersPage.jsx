import React, { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import companyImg from '../assets/icons/company.png';
import './PartnersPage.css';

export default function PartnersPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="partners-container">
      <Navbar hideAuth={true} />

      {/* ── HERO ── */}
      <section className="pp-hero">
        <div className="pp-hero-content">
          <div className="pp-badge reveal">World Class Network</div>
          <h1 className="reveal">Our Elite <span>Partners</span></h1>
          <p className="reveal">Connecting you with top-tier Indian companies across all sectors. Your career trajectory, powered by industry titans.</p>
          <div className="pp-hero-btns reveal">
            <button className="pp-btn-primary">Explore Network</button>
            <button className="pp-btn-secondary">Partner With Us</button>
          </div>
        </div>
        <div className="pp-hero-img-wrap reveal">
          <img src={companyImg} alt="Elite Partners" className="pp-main-img" />
        </div>
      </section>

      {/* ── TECH GIANTS ── */}
      <section className="pp-section">
        <div className="pp-section-header reveal">
          <h2>Tech & Engineering Giants</h2>
          <span>01 / Tech Sector</span>
        </div>
        <div className="pp-grid">
          <PartnerCard 
            logo="TCS" 
            name="Tata Consultancy Services" 
            role="Systems Engineer (SDE), Digital" 
            tag="Mass Recruiter"
            color="#fff"
            avatarColor="#2d4a7a"
          />
          <PartnerCard 
            logo="GOOG" 
            name="Google India" 
            role="Software Engineer, Cloud Consultant" 
            tag="FAANG"
            color="#fff"
            avatarColor="#8b3a0f"
          />
          <PartnerCard 
            logo="MSFT" 
            name="Microsoft India" 
            role="SDE-1, Data & AI Specialist" 
            tag="Big Tech"
            color="#fff"
            avatarColor="#1a2540"
          />
        </div>
      </section>

      {/* ── MBA LEADERS ── */}
      <section className="pp-section">
        <div className="pp-section-header reveal">
          <h2>MBA & Management Leaders</h2>
          <span>02 / Business</span>
        </div>
        <div className="pp-grid horizontal">
          <PartnerCardLarge 
            logo="DLT" 
            name="Deloitte" 
            desc="Strategy, Risk Advisory, and Human Capital" 
            tags={['CONSULTING', 'FINANCE']}
            avatarColor="#e0e0e0"
          />
          <PartnerCardLarge 
            logo="RIL" 
            name="Reliance" 
            desc="Management Trainees, Operations, Retail" 
            tags={['CONGLOMERATE', 'LEADERSHIP']}
            avatarColor="#f5d9c0"
          />
        </div>
        <div className="pp-mini-grid reveal">
          <div className="pp-mini-item"><strong>ICICI Bank</strong><span>Banking Trainee</span></div>
          <div className="pp-mini-item"><strong>HDFC Bank</strong><span>Relationship Mgr</span></div>
          <div className="pp-mini-item"><strong>McKinsey</strong><span>Assoc. Consultant</span></div>
          <div className="pp-mini-item"><strong>Aditya Birla</strong><span>Leadership Prog.</span></div>
        </div>
      </section>

      {/* ── STARTUPS ── */}
      <section className="pp-section">
        <div className="pp-section-header reveal">
          <h2>Rising Startups & Unicorns</h2>
        </div>
        <div className="pp-startup-grid reveal">
          <StartupItem icon="🍴" name="Zomato" role="PRODUCT & OPS" />
          <StartupItem icon="💳" name="Razorpay" role="BACKEND & DEV" />
          <StartupItem icon="🎓" name="BYJU'S" role="ACADEMIC SPECIALIST" />
          <StartupItem icon="🚲" name="Swiggy" role="SUPPLY CHAIN" />
          <StartupItem icon="💰" name="Paytm" role="FINTECH DEV" />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="pp-cta reveal">
        <div className="pp-cta-inner">
          <h2>Your dream company is waiting.</h2>
          <p>Skip the generic application process. Get personalized placement training tailored to these elite partners.</p>
          <button className="pp-cta-btn">Get Started with Placementor.ai</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pp-footer">
        <div className="pp-footer-top">
          <div className="pp-footer-brand" style={{ fontWeight: '800', fontFamily: 'Plus Jakarta Sans', fontSize: '1.2rem' }}>
            <span style={{ color: '#1a1108' }}>Place</span><span style={{ color: '#f15a22' }}>mentor.ai</span>
          </div>
          <div className="pp-footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Partner Program</a>
            <a href="#">Contact Support</a>
          </div>
        </div>
        <div className="pp-footer-bottom">
          © 2026 Placementor.ai. Accelerating Futures.
        </div>
      </footer>
    </div>
  );
}

function PartnerCard({ logo, name, role, tag, avatarColor }) {
  return (
    <div className="pp-card reveal">
      <div className="pp-card-header">
        <div className="pp-card-avatar" style={{ background: avatarColor }}>{logo}</div>
        <span className="pp-card-tag">{tag}</span>
      </div>
      <div className="pp-card-body">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
      <button className="pp-card-btn">View Opportunities →</button>
    </div>
  );
}

function PartnerCardLarge({ logo, name, desc, tags, avatarColor }) {
  return (
    <div className="pp-card-large reveal">
        <div className="pp-cl-avatar" style={{ background: avatarColor }}>{logo}</div>
        <div className="pp-cl-content">
            <h3>{name}</h3>
            <p>{desc}</p>
            <div className="pp-cl-tags">
                {tags.map(t => <span key={t}>{t}</span>)}
            </div>
            <button className="pp-cl-btn">View Roles</button>
        </div>
    </div>
  );
}

function StartupItem({ icon, name, role }) {
  return (
    <div className="pp-startup-item">
      <div className="pp-si-icon">{icon}</div>
      <div className="pp-si-name">{name}</div>
      <div className="pp-si-role">{role}</div>
    </div>
  );
}
