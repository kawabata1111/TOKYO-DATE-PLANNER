import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'コンセプト', href: '/#concept' },
    { name: 'サービス', href: '/#services' },
    { name: 'お客様の声', href: '/#testimonials' },
    { name: '料金', href: '/#pricing' },
    { name: 'よくある質問', href: '/#faq' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 border-b ${scrolled ? 'bg-[#242424]/90 backdrop-blur-xl border-white/5 py-4' : 'bg-transparent border-transparent py-6 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="z-50 relative group">
            <h1 className="font-display text-xl md:text-2xl tracking-[0.2em] text-white font-bold">
              TOKYO <span className="text-gold font-light">DATE</span> PLANNER
            </h1>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs text-white hover:text-white transition-colors tracking-[0.2em] uppercase font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="/#contact"
              className="px-6 py-2 border border-white/20 text-white text-xs tracking-widest hover:border-gold hover:text-gold transition-all duration-300"
            >
              ご予約
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-50 hover:text-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-[#242424] z-40 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-10 text-center">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl text-white font-display font-light tracking-widest hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="/#contact" 
                onClick={() => setIsOpen(false)}
                className="mt-8 text-gold text-sm tracking-[0.3em] uppercase border-b border-gold pb-2 inline-block mx-auto"
              >
                無料相談を予約
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};