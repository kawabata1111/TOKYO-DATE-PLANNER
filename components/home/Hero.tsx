import React from 'react';
import { motion } from 'framer-motion';

// 星のコンポーネント
const Star: React.FC<{ delay: number; duration: number; size: number; top: string; left: string }> = ({
  delay, duration, size, top, left
}) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{ width: size, height: size, top, left }}
    animate={{
      opacity: [0.2, 1, 0.2],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// 星のデータ
const stars = [
  { delay: 0, duration: 3, size: 2, top: '15%', left: '10%' },
  { delay: 0.5, duration: 4, size: 3, top: '25%', left: '25%' },
  { delay: 1, duration: 3.5, size: 2, top: '10%', left: '35%' },
  { delay: 1.5, duration: 4.5, size: 1.5, top: '40%', left: '15%' },
  { delay: 0.3, duration: 3, size: 2.5, top: '55%', left: '8%' },
  { delay: 2, duration: 4, size: 2, top: '70%', left: '20%' },
  { delay: 0.8, duration: 3.5, size: 1.5, top: '80%', left: '30%' },
  { delay: 1.2, duration: 4, size: 3, top: '20%', left: '5%' },
  { delay: 0.6, duration: 3, size: 2, top: '45%', left: '28%' },
  { delay: 1.8, duration: 4.5, size: 2, top: '65%', left: '12%' },
  { delay: 2.2, duration: 3.5, size: 1.5, top: '35%', left: '38%' },
  { delay: 0.9, duration: 4, size: 2.5, top: '85%', left: '5%' },
  { delay: 1.4, duration: 3, size: 2, top: '5%', left: '20%' },
  { delay: 2.5, duration: 4.5, size: 1.5, top: '50%', left: '35%' },
  { delay: 0.2, duration: 3.5, size: 3, top: '75%', left: '40%' },
];

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#050505] flex items-center">
      {/* Background with Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#050505]" />
        {/* Twinkling Stars - Left Side */}
        <div className="absolute inset-0 w-1/2">
          {stars.map((star, i) => (
            <Star key={i} {...star} />
          ))}
        </div>
      </div>

      {/* Hero Image - Elegant Woman / Date Scene */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 top-0 h-full w-full md:w-3/5 z-0"
      >
        <img
          src="/images/hero.png"
          alt="Romantic dinner with Tokyo night view"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="!hidden md:!flex items-center gap-6 mb-12"
          >
            <span className="h-[1px] w-12 bg-white/20"></span>
            <span className="text-white tracking-[0.4em] text-xs uppercase font-light">Dating & Matchmaking Service</span>
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
                className="block font-light"
              >
                Find Your
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="block italic text-gold-gradient font-display pr-4"
              >
                One.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white text-sm md:text-base leading-relaxed md:leading-loose font-light max-w-md border-l border-white/10 pl-4 md:pl-8 mb-16 whitespace-nowrap md:whitespace-normal"
          >
            運命の出会いを、東京で。<br className="block"/>
            30代・40代のための、大人の恋活・婚活サポート。<br className="block"/>
            理想のパートナーとの出会いをプロデュースします。
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            <a
              href="/#contact"
              className="px-12 py-4 bg-white text-dark font-display tracking-widest text-sm hover:bg-gray-200 transition-colors"
            >
              無料相談を予約
            </a>
            <a
              href="/#services"
              className="px-12 py-4 border border-white/20 text-white font-display tracking-widest text-sm hover:border-gold hover:text-gold transition-colors"
            >
              サービスを見る
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
