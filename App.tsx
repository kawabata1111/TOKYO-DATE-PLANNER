import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { ProblemSection, ServiceSection } from './components/home/ServiceShowcase';
import { SuccessSection, ProfileSection } from './components/home/SocialProof';
import { PricingSection, FaqSection } from './components/home/Offerings';
import { ContactSection } from './components/home/ContactForm';
import { Footer } from './components/layout/Footer';
import { LegalPage } from './components/legal/LegalPage';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { ThanksPage } from './components/home/ThanksPage';

const HomePage = () => (
  <main>
    <Hero />
    <ProblemSection />
    <ServiceSection />
    <SuccessSection />
    <PricingSection />
    <ProfileSection />
    <FaqSection />
    <ContactSection />
  </main>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-gold selection:text-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/thanks" element={<ThanksPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;