import React, { useState, useEffect } from 'react';
import { Instagram, ExternalLink, Play } from 'lucide-react';

// stand.fmアイコン（他より少し大きめに表示）
const StandFmIcon = ({ size = 24 }: { size?: number }) => (
  <img
    src="/images/standfm-icon.png"
    alt="stand.fm"
    style={{ width: size * 1.4, height: size * 1.4 }}
    className="invert"
  />
);

// LINEアイコン
const LineIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" style={{ width: size, height: size }} className="fill-current">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
  </svg>
);

const socialLinks = [
  {
    name: '公式LP',
    href: 'https://tokyodateplanner.com/',
    icon: ExternalLink,
    color: 'hover:text-gold',
    external: true
  },
  {
    name: '紹介動画',
    href: '/video',
    icon: Play,
    color: 'hover:text-gold',
    external: false
  },
  {
    name: 'stand.fm',
    href: 'https://stand.fm/channels/69724fe28d01e8272ccc2c13',
    icon: StandFmIcon,
    color: 'hover:text-yellow-400',
    external: true
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/tokyodateplanner?igsh=ZHU0bTZ0a3h0dThy&utm_source=qr',
    icon: Instagram,
    color: 'hover:text-pink-400',
    external: true
  },
  {
    name: 'LINE',
    href: 'https://line.me/R/ti/p/@784rpvaz?ts=01311117&oat_content=url',
    icon: LineIcon,
    color: 'hover:text-[#06C755]',
    external: true
  },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 border-b ${scrolled ? 'bg-[#242424]/90 backdrop-blur-xl border-white/5 py-3' : 'bg-transparent border-transparent py-3 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-center md:justify-between items-center relative min-h-[64px] md:min-h-0">
        {/* Logo - Desktop: always visible / Mobile: hidden on scroll */}
        <a href="/" className={`z-50 group flex items-center gap-3 transition-all duration-500 md:opacity-100 md:relative ${scrolled ? 'opacity-0 pointer-events-none md:pointer-events-auto md:left-auto md:translate-x-0' : 'opacity-100'} md:static`}>
          <img src="/images/logo.png" alt="TOKYO DATE PLANNER" className="h-16 md:h-20" />
          <h1 className="hidden md:block font-display text-xl md:text-2xl tracking-[0.2em] text-white font-bold">
            TOKYO <span className="text-gold font-light">DATE</span> PLANNER
          </h1>
        </a>

        {/* Mobile - Icons (appear on scroll) */}
        <div className={`flex md:hidden w-full justify-evenly items-center transition-all duration-500 absolute inset-x-0 top-1/2 -translate-y-1/2 px-2 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex flex-col items-center gap-1 min-w-[50px]"
            >
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white">
                <link.icon size={14} />
              </div>
              <span className="text-[7px] text-white tracking-wider whitespace-nowrap">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Desktop - Icons (always visible) */}
        <div className="hidden md:flex items-center gap-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white">
                <link.icon size={20} />
              </div>
              <span className="text-[10px] text-white tracking-wider">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};