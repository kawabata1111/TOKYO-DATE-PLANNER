import React from 'react';
import { Section, SectionHeading } from '../ui/Common';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <Section id="concept" className="bg-[#050505]" noPadding>
      <div className="flex flex-col md:flex-row min-h-[80vh]">
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative min-h-[400px] overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=2670&auto=format&fit=crop" 
            alt="Gentleman adjusting tie" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
          />
          {/* 黒に溶け込ませるグラデーション */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent" />
          <div className="absolute inset-0 bg-[#050505]/20" />
        </div>
        
        {/* Text Side */}
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-[#050505] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gold/60 text-xs font-medium tracking-[0.4em] mb-8 uppercase">The Philosophy</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 leading-tight font-feature-settings">
              Logic & <br/>
              Aesthetics.
            </h2>
            <p className="text-gray-400 leading-8 font-serif mb-8 text-sm md:text-base border-l border-white/10 pl-6">
              婚活における「清潔感」や「第一印象」。<br/>
              これらは曖昧な感覚ではなく、明確なロジックで構築可能です。<br/>
            </p>
            <p className="text-gray-400 leading-8 font-serif text-sm md:text-base border-l border-white/10 pl-6">
              TOKYO DATE PLANNERは、感性だけに頼らない<br/>
              「再現性の高い魅力」をプロデュースします。<br/>
              自信は、準備された戦略から生まれます。
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export const ServiceSection: React.FC = () => {
  const services = [
    {
      id: "01",
      title: "Fashion Consulting",
      jpTitle: "ファッションコンサル",
      desc: "買い物同行・ワードローブ診断で、大人の色気と清潔感を演出する服装をトータルサポート。トレンドを追うのではなく、「あなたに似合い、女性に選ばれる」スタイルを構築します。",
      img: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=2574&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Photography",
      jpTitle: "プロフィール写真撮影",
      desc: "スタジオでの硬い写真ではなく、自然光やロケーションを活かした「好印象な一枚」を。マッチングアプリや相談所での反応率を劇的に変えるプロの撮影技術。",
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2528&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Matching Events",
      jpTitle: "出会いの場の提供",
      desc: "質の高い婚活イベントやパーティーを企画・運営。ただ集まるだけでなく、自然な会話が生まれる空間をコーディネートし、良質な出会いの機会を提供します。",
      img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2669&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Communication",
      jpTitle: "会話・デートトレーニング",
      desc: "女性心理に基づいた会話術、デートプランニング、第一印象を良くするためのコーチング。表面的なテクニックではなく、深い関係を築くための対話力を磨きます。",
      img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  return (
    <Section id="services">
      <SectionHeading title="サービス内容" subtitle="OUR SERVICES" />
      
      <div className="space-y-32">
        {services.map((service, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            {/* Image */}
            <motion.div 
              className="w-full md:w-1/2 relative group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="aspect-[3/4] overflow-hidden relative bg-[#0a0a0a]">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 filter grayscale brightness-[0.7] contrast-125 group-hover:grayscale-0 group-hover:brightness-90"
                />
                <div className="absolute inset-0 border border-white/5 pointer-events-none" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-gray-500 text-[10px] tracking-[0.4em] uppercase block mb-6">{service.id} — {service.title}</span>
              <h4 className="text-3xl md:text-4xl font-serif text-white mb-8 leading-tight">
                {service.jpTitle}
              </h4>
              <p className="text-gray-400 leading-8 font-serif mb-10 text-justify max-w-md">
                {service.desc}
              </p>
              <a href="#contact" className="inline-flex items-center gap-4 text-white text-xs tracking-[0.2em] uppercase hover:text-gold transition-colors group">
                <span className="border-b border-white/30 pb-1 group-hover:border-gold">Inquire Now</span>
                <ArrowUpRight size={14} className="text-white/50 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
};
