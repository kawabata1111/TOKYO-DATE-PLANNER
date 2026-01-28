import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Instagram, ArrowUp } from 'lucide-react';
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

// フローティングSNSアイコン & トップに戻るボタン
const FloatingSocial = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-center">
      <a href="#" className="w-12 h-12 bg-[#242424] border border-white/20 rounded-full flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300">
        <Instagram size={20} />
      </a>
      <a href="#" className="w-12 h-12 bg-[#242424] border border-white/20 rounded-full flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <button
        onClick={scrollToTop}
        className="w-16 h-16 bg-gold border border-gold rounded-full flex items-center justify-center text-dark hover:bg-gold/80 transition-all duration-300"
      >
        <ArrowUp size={28} />
      </button>
    </div>
  );
};

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
        <FloatingSocial />
      </div>
    </Router>
  );
}

export default App;