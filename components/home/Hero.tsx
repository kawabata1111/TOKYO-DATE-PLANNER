import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#050505] flex items-center">
      {/* Abstract Background - Pure Dark Studio (No Particles/Lights) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 完全な漆黒。光の粒やグラデーションノイズを一切排除 */}
        <div className="absolute inset-0 bg-[#050505]" />
      </div>

      {/* Hero Image - High Fashion / Studio Style */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 top-0 h-full w-full md:w-3/5 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2574&auto=format&fit=crop" 
          alt="Gentleman in suit" 
          className="w-full h-full object-cover object-top opacity-50 filter grayscale brightness-75 contrast-125"
        />
        {/* 画像と背景の境界を完全になじませる - ノイズが出ないようシンプルなグラデーションのみ */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#050505] via-[#050505]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-6 mb-12"
          >
            <span className="h-[1px] w-12 bg-white/20"></span>
            <span className="text-gray-400 tracking-[0.4em] text-xs uppercase font-medium">Premium Styling Service</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-10 tracking-wide"
          >
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Refine Your
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="block italic text-gold-gradient font-display pr-4"
              >
                Presence.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gray-400 text-sm md:text-base leading-loose font-serif max-w-md border-l border-white/10 pl-8 mb-16"
          >
            自信は、細部に宿る。<br/>
            30代・40代のための、戦略的婚活スタイリング。<br/>
            「選ばれる男」への最短ルートをデザインします。
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            <a 
              href="#contact"
              className="px-12 py-4 bg-white text-dark font-display tracking-widest text-sm hover:bg-gray-200 transition-colors"
            >
              BOOK CONSULTATION
            </a>
            <a 
              href="#services"
              className="px-12 py-4 border border-white/20 text-white font-display tracking-widest text-sm hover:border-gold hover:text-gold transition-colors"
            >
              VIEW SERVICES
            </a>
          </motion.div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 z-20"
      >
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-white/10"></div>
          <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll to explore</span>
        </div>
      </motion.div>
    </div>
  );
};
