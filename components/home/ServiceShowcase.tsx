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
          <img
            src="/images/concept.jpg"
            alt="Elegant party scene"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transform scale-100 transition-transform duration-1000 hover:scale-105"
          />
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 p-6 md:p-24 flex flex-col justify-center bg-[#050505] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gold/60 text-xs font-light tracking-[0.4em] mb-6 md:mb-8 uppercase">Our Philosophy</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 md:mb-10 leading-tight font-light">
              素敵な出会いは、<br/>
              偶然じゃない。
            </h2>
            <p className="text-white leading-7 md:leading-8 font-light mb-6 md:mb-8 text-sm md:text-base border-l border-white/10 pl-4 md:pl-6">
              「いい人がいない」のではなく、<br/>
              出会いの場と機会が足りないだけ。
            </p>
            <p className="text-white leading-7 md:leading-8 font-light text-sm md:text-base border-l border-white/10 pl-4 md:pl-6">
              TOKYO DATE PLANNERは、<br className="md:hidden"/>
              厳選された出会いの場と、<br className="md:hidden"/>
              あなたの魅力を最大化するサポートで、<br className="md:hidden"/>
              理想のパートナーとの出会いを実現します。
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export const ServiceSection: React.FC = () => {
  const services: Array<{
    id: string;
    title: string;
    jpTitle: string;
    desc: string;
    img: string;
    vip?: boolean;
  }> = [
    {
      id: "01",
      title: "Personal Styling",
      jpTitle: "スタイリングサポート",
      desc: "全国的な実績のあるスタイリストによるコーディネート。女性は中身を見る前に\"見た目\"で判断します。今のあなたに合った外見をプロが設計します。",
      img: "/images/profile.jpg"
    },
    {
      id: "02",
      title: "Profile Creation",
      jpTitle: "プロフィール写真撮影",
      desc: "某有名番組、フェスまで担当する撮影チームで構成。マッチングアプリだけでなく、ビジネスで使えるプロフィール撮影も承ります。",
      img: "/images/profile-creation.png"
    },
    {
      id: "03",
      title: "Date Planning",
      jpTitle: "選べる女性恋愛アドバイザーによるお悩みzoom相談室＆お食事デートトレーニング",
      desc: "オンラインだけでは終わらせません。リアリティあるお食事デートで、直接あなたに寄り添いサポートさせていただきます。",
      img: "/images/date-planning.png"
    },
    {
      id: "04",
      title: "Online Seminar",
      jpTitle: "モテ男子を作る♥女性恋愛講師によるオンラインセミナー",
      desc: "女性目線で学ぶコミュニケーション能力のスキルアップ。なぜ恋愛対象にならないのかを女性講師が解説。現状の考え方からズレを修正します。",
      img: "/images/seminar.jpg"
    },
    {
      id: "05",
      title: "Exclusive Events",
      jpTitle: "出会いの場を提供\n恋活＆婚活食事会",
      desc: "外見・内面を磨いたのち、実際の出会いの場をご提供します。その後のアフターフォローも充実しております。",
      img: "/images/events.png"
    },
    {
      id: "06",
      title: "Personal Introduction",
      jpTitle: "個別紹介",
      desc: "あなたのお好みの女性像をヒアリングし、理想のパートナーを個別でご紹介します。",
      img: "/images/introduction.jpg",
      vip: true
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
              <div className="aspect-[3/4] overflow-hidden relative bg-[#2e2e2e]">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  width="1200"
                  height="1600"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
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
              <h4 className="text-[28px] sm:text-3xl md:text-4xl font-serif text-white mb-8 leading-tight whitespace-pre-line tracking-tight md:tracking-normal">
                {service.jpTitle}
              </h4>
              <p className="text-white leading-8 font-serif mb-10 text-left md:text-justify max-w-md">
                {service.desc}
              </p>
              {service.vip && (
                <p className="text-gold/80 text-sm font-light">
                  ※ 上級VIPコース限定
                </p>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
};
