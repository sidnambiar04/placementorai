import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ResumeAuditPage from './pages/ResumeAuditPage';
import SkillGapPage from './pages/SkillGapPage';
import StudyResources from './pages/StudyResources';
import CompanyRecommendations from './pages/CompanyRecommendations';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import OnboardingPage from './pages/OnboardingPage';
import SettingsPage from './pages/SettingsPage';
import SuccessStories from './pages/SuccessStories';
import PartnersPage from './pages/PartnersPage';
import InterviewPage from './pages/InterviewPage';
import CareerRoadmapPage from './pages/CareerRoadmapPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/setup" element={<OnboardingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/resume-audit" element={<ResumeAuditPage />} />
        <Route path="/skill-gap" element={<SkillGapPage />} />
        <Route path="/resources" element={<StudyResources />} />
        <Route path="/recommendations" element={<CompanyRecommendations />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/mock-interview" element={<InterviewPage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/career-roadmap" element={<CareerRoadmapPage />} />
        <Route path="/roadmap" element={<CareerRoadmapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
