import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
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
import { VideoPage } from './components/home/VideoPage';
import { AdvisorsPage } from './components/advisors/AdvisorsPage';
import { AdvisorDetail } from './components/advisors/AdvisorDetail';

// トップに戻るボタン
const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gold border border-gold rounded-full flex items-center justify-center text-dark hover:bg-gold/80 transition-all duration-300"
    >
      <ArrowUp size={28} />
    </button>
  );
};

const HomePage = () => (
  <main>
    <Hero />
    <ProblemSection />
    <ServiceSection />
    <SuccessSection />
    <PricingSection />
    <FaqSection />
    <ContactSection />
  </main>
);

const MainLayout = () => (
  <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-gold selection:text-white">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/legal" element={<LegalPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/thanks" element={<ThanksPage />} />
      <Route path="/video" element={<VideoPage />} />
    </Routes>
    <Footer />
    <ScrollToTop />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/advisors" element={<AdvisorsPage />} />
        <Route path="/advisors/:id" element={<AdvisorDetail />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;