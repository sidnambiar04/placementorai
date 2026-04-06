import React, { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import './ContributorsPage.css';

const contributors = [
  {
    name: 'Sidharth Nambiar',
    title: 'Full Stack Lead',
    description: [
      'Led the end-to-end backend architecture, Firebase integration, AI orchestration, and deployment.',
      'Built Resume Evaluation, Skill Gap Analysis, Resource Recommendation, and core hosting infrastructure.',
      'Coordinated full-stack feature delivery and polished the app flow across frontend and backend.',
    ],
    featured: true,
  },
  {
    name: 'Vishnu Nair',
    title: 'AI Experience Owner',
    description: [
      'Delivered the Mock Interview and Career Roadmap experiences with rich UI and backend integration.',
      'Built AI flows, question generation, evaluation pipelines, and hosted the production service.',
      'Owned the feature polish from end-user interaction to cloud deployment.',
    ],
    featured: true,
  },
  {
    name: 'More Krupa',
    title: 'Job Opportunities Specialist',
    description: [
      'Designed and developed the job opportunities feature and matching experience.',
      'Connected candidate profiles to relevant company roles and placement recommendations.',
    ],
  },
  {
    name: 'Ayush Nair',
    title: 'Dashboard Designer',
    description: [
      'Built the dashboard page with progress insights, quick actions, and personalized summaries.',
      'Ensured the analytics layout is clean, responsive, and easy to navigate.',
    ],
  },
  {
    name: 'Noel Tony',
    title: 'Onboarding Creator',
    description: [
      'Created the onboarding page and guided first-time setup experience.',
      'Delivered an intuitive workflow for new users to configure their profile and goals.',
    ],
  },
  {
    name: 'Suyash Nair',
    title: 'Companies Page Builder',
    description: [
      'Built the companies page and employer discovery interface.',
      'Made it easy for students to browse hiring partners and opportunity categories.',
    ],
  },
  {
    name: 'Rutuja Nangare',
    title: 'Profile Page Owner',
    description: [
      'Designed and implemented the profile page with editable career preferences.',
      'Focused on personalisation and a polished user profile experience.',
    ],
  },
  {
    name: 'Aditya Nair',
    title: 'Settings Page Developer',
    description: [
      'Built the settings page and account configuration controls.',
      'Delivered privacy, preferences, and user management flows with smooth UX.',
    ],
  },
  {
    name: 'Sreeshant Nair',
    title: 'Landing Page Designer',
    description: [
      'Crafted the landing page with strong brand storytelling and product positioning.',
      'Set the platform tone with hero messaging, visual polish, and conversion-focused layout.',
    ],
  },
  {
    name: 'Sanskar Mishra',
    title: 'Auth Flow Engineer',
    description: [
      'Built the login and register flows with secure authentication and access control.',
      'Ensured the sign-in/signup experience is fast, reliable, and user-friendly.',
    ],
  },
  {
    name: 'Anand Nair',
    title: 'Success Stories Lead',
    description: [
      'Created the success story page and alumni showcase with polished testimonial design.',
      'Helped present placement wins and user success in a compelling format.',
    ],
  },
];

export default function ContributorsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.cp-card, .cp-hero-content').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contributors-page">
      <Navbar />
      <main className="cp-shell">
        <section className="cp-hero">
          <div className="cp-hero-copy cp-hero-content">
            <span className="cp-badge">Team Spotlight</span>
            <h1>Meet the Placementor.ai contributors</h1>
            <p>
              A collaborative builder team powering resume audits, placement coaching, mock interviews,
              company recommendations, and end-to-end deployment.
            </p>
          </div>
        </section>

        <section className="cp-grid">
          {contributors.map((member) => (
            <article
              key={member.name}
              className={`cp-card ${member.featured ? 'featured' : ''}`}
            >
              <div className="cp-card-top">
                <div className="cp-avatar">{member.name.split(' ').map((w) => w[0]).join('').toUpperCase()}</div>
                <div>
                  <h2>{member.name}</h2>
                  <p className="cp-role">{member.title}</p>
                </div>
              </div>
              <div className="cp-card-copy">
                {member.description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
