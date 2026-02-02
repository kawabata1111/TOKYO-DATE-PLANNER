import React from 'react';
import { motion } from 'framer-motion';

export const VideoPage: React.FC = () => {
  const videos = [
    { src: '/videos/intro1.mp4', title: '紹介動画 1' },
    { src: '/videos/intro2.mp4', title: '紹介動画 2' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-gold/60 text-xs font-bold tracking-[0.3em] mb-6 uppercase">Introduction</h3>
          <h1 className="text-4xl md:text-6xl font-serif text-white font-light">紹介動画</h1>
        </motion.div>

        <div className="space-y-16">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-[#1a1a1a] border border-white/10 overflow-hidden flex justify-center"
            >
              <video
                controls
                className="w-full max-h-[70vh] object-contain"
                poster=""
              >
                <source src={video.src} type="video/mp4" />
                お使いのブラウザは動画再生に対応していません。
              </video>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="/"
            className="inline-block px-8 py-3 border border-white/20 text-white text-sm tracking-widest hover:border-gold hover:text-gold transition-all duration-300"
          >
            トップに戻る
          </a>
        </motion.div>
      </div>
    </div>
  );
};
