import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text' | 'gold';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyle = "px-10 py-4 transition-all duration-500 font-serif tracking-widest text-sm relative overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-dark hover:bg-gray-200",
    gold: "bg-gold-gradient text-dark font-bold shadow-[0_0_20px_rgba(201,160,80,0.3)] hover:shadow-[0_0_30px_rgba(201,160,80,0.5)] hover:scale-[1.02]",
    outline: "border border-gray-600 text-white hover:border-gold hover:text-gold",
    text: "text-gray-400 hover:text-gold underline-offset-8 hover:underline decoration-gold/50"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, noPadding = false }) => {
  return (
    <section id={id} className={`relative ${noPadding ? '' : 'py-24 md:py-40'} px-6 md:px-12 bg-[#050505] overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center', light = false }) => {
  const alignClass = align === 'left' ? 'items-start text-left' : align === 'right' ? 'items-end text-right' : 'items-center text-center';
  
  return (
    <div className={`flex flex-col mb-24 ${alignClass} relative group`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={`flex items-center gap-4 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
           <span className="h-[1px] w-8 bg-gold/50"></span>
           <span className="text-gold/80 text-[10px] tracking-[0.4em] font-sans font-medium uppercase">
            {subtitle}
          </span>
           <span className="h-[1px] w-8 bg-gold/50"></span>
        </div>
        
        <h2 className={`text-3xl md:text-5xl font-serif leading-tight font-feature-settings ${light ? 'text-white' : 'text-white'}`}>
          {title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
      </motion.div>
    </div>
  );
};
