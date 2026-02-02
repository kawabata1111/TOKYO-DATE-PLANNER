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

// LINEアイコンコンポーネント
const LineIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" style={{ width: size, height: size }} className="fill-current">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
  </svg>
);

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
      <a
        href="https://line.me/R/ti/p/@784rpvaz?ts=01311117&oat_content=url"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#06C755] rounded-full flex items-center justify-center text-white hover:bg-[#05a648] transition-all duration-300"
      >
        <LineIcon size={24} />
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