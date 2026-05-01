import React from 'react';
import { Link } from 'react-router-dom';
import { advisors } from './advisorData';

const styles = `
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .fade-in {
    animation: fadeUp 0.8s ease forwards;
  }
  .fade-in-delay-1 { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
  .fade-in-delay-2 { animation-delay: 0.4s; opacity: 0; animation-fill-mode: forwards; }
  .fade-in-delay-3 { animation-delay: 0.6s; opacity: 0; animation-fill-mode: forwards; }
  .advisor-photo-frame {
    position: relative;
  }
  .advisor-photo-frame::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, #c9a050 0%, #e6c875 50%, #c9a050 100%);
    z-index: 0;
    border-radius: 2px;
  }
  .advisor-photo-frame img {
    position: relative;
    z-index: 1;
  }
  .advisor-card-overlay {
    background: linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.4) 60%, transparent 100%);
  }
  .founder-card-overlay {
    background: linear-gradient(to right, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.05) 100%);
  }
`;

export const AdvisorsPage: React.FC = () => {
  const founder = advisors[0];
  const femaleAdvisors = advisors.slice(1);

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-[#050505] text-white font-sans">
        {/* ヘッダー */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-sm border-b border-gold/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="font-display text-2xl tracking-widest text-gold-gradient">
              TOKYO DATE PLANNER
            </Link>
            <Link
              to="/"
              className="text-sm tracking-widest text-gray-400 hover:text-gold transition-colors duration-300"
            >
              ← Home
            </Link>
          </div>
        </header>

        {/* HERO */}
        <section className="pt-32 pb-20 px-6 text-center">
          <div className="fade-in">
            <p className="text-xs tracking-[0.4em] text-gold/60 mb-4 uppercase">Our Team</p>
            <h1 className="font-display text-5xl md:text-7xl tracking-[0.2em] text-gold-gradient mb-4">
              OUR ADVISORS
            </h1>
            <p className="font-display text-2xl text-gold/70 mb-3 tracking-widest">Advisors</p>
            <p className="text-gray-400 tracking-widest text-sm">アドバイザー紹介</p>
          </div>
          <div className="mt-8 w-px h-16 bg-gradient-to-b from-gold/60 to-transparent mx-auto"></div>
        </section>

        {/* Founderカード */}
        <section className="max-w-6xl mx-auto px-6 mb-24 fade-in fade-in-delay-1">
          <Link to={`/advisors/${founder.id}`} className="block group">
            <div className="relative overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* 写真 */}
                <div className="relative h-80 md:h-[500px] overflow-hidden">
                  <img
                    src={founder.photo}
                    alt={founder.nameJa}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: founder.photoPosition }}
                  />
                  <div className="founder-card-overlay absolute inset-0"></div>
                </div>

                {/* 情報 */}
                <div className="flex flex-col justify-center p-10 md:p-16 bg-dark-surface/50">
                  <p className="text-xs tracking-[0.4em] text-gold/60 mb-6 uppercase">Founder</p>
                  <h2 className="font-display text-4xl md:text-5xl text-gold-gradient tracking-widest mb-3">
                    {founder.nameEn}
                  </h2>
                  <p className="text-lg text-gray-300 mb-2 tracking-wider">{founder.nameJa}</p>
                  <p className="text-sm text-gold/70 tracking-widest mb-8">{founder.tagline}</p>
                  <div className="w-12 h-px bg-gold/40 mb-8"></div>
                  <p className="text-sm text-gray-400 tracking-widest group-hover:text-gold transition-colors duration-300">
                    View Profile →
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* 女性アドバイザーグリッド */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="text-center mb-12 fade-in fade-in-delay-2">
            <p className="text-xs tracking-[0.4em] text-gold/60 mb-3 uppercase">Female Advisors</p>
            <h2 className="font-display text-3xl text-gold-gradient tracking-widest">Our Advisors</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-in fade-in-delay-3">
            {femaleAdvisors.map((advisor) => (
              <Link
                key={advisor.id}
                to={`/advisors/${advisor.id}`}
                className="block group"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={advisor.photo}
                    alt={advisor.nameJa}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: advisor.photoPosition }}
                  />
                  <div className="advisor-card-overlay absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <p className="text-xs tracking-[0.3em] text-gold/70 mb-1 uppercase">
                      {advisor.listTitle}
                    </p>
                    <p className="font-display text-xl text-white tracking-wider">{advisor.nameEn}</p>
                    <p className="text-sm text-gray-300">{advisor.nameJa}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* フッター */}
        <footer className="border-t border-gold/10 py-10 px-6 text-center">
          <p className="font-display text-xl text-gold-gradient tracking-widest mb-2">
            TOKYO DATE PLANNER
          </p>
          <p className="text-xs text-gray-600 tracking-widest">
            &copy; {new Date().getFullYear()} TOKYO DATE PLANNER. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};
