import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { ProblemSection, ServiceSection } from './components/home/ServiceShowcase';
import { SuccessSection, ProfileSection } from './components/home/SocialProof';
import { PricingSection, FaqSection } from './components/home/Offerings';
import { ContactSection } from './components/home/ContactForm';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-gold selection:text-white">
      <Navbar />
      
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

      <Footer />
    </div>
  );
}

export default App;
