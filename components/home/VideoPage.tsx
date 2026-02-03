import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoPlayer: React.FC<{ src: string; vertical: boolean; cropRight?: boolean }> = ({ src, vertical, cropRight }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className={`relative ${cropRight ? 'overflow-hidden' : ''}`}>
      <video
        ref={videoRef}
        controls
        className={`${vertical ? 'w-full h-auto' : 'w-full max-h-[90vh] object-contain'}`}
        style={cropRight ? { clipPath: 'inset(0 2px 0 0)' } : undefined}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        playsInline
      >
        <source src={src} type="video/mp4" />
        お使いのブラウザは動画再生に対応していません。
      </video>
      {!isPlaying && (
        <div
          className="absolute top-0 left-0 right-0 bottom-12 flex items-center justify-center bg-black/30 cursor-pointer"
          onClick={handleClick}
        >
          <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
            <Play className="w-10 h-10 text-black ml-1" fill="black" />
          </div>
        </div>
      )}
    </div>
  );
};

export const VideoPage: React.FC = () => {
  const videos = [
    { src: '/videos/intro1.mp4', title: '紹介動画 1', vertical: false },
    { src: '/videos/intro4.mp4', title: '紹介動画 4', vertical: true },
    { src: '/videos/intro3.mp4', title: '紹介動画 3', vertical: true },
    { src: '/videos/intro5.mp4', title: '紹介動画 5', vertical: true, cropRight: true },
    { src: '/videos/intro2.mp4', title: '紹介動画 2', vertical: true },
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
              className={`overflow-hidden flex justify-center ${video.vertical ? 'max-w-sm mx-auto' : ''}`}
            >
              <VideoPlayer src={video.src} vertical={video.vertical} cropRight={video.cropRight} />
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
