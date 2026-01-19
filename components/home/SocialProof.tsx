import React from 'react';
import { Section, SectionHeading } from '../ui/Common';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const SuccessSection: React.FC = () => {
  const testimonials = [
    {
      age: "36",
      job: "経営者",
      text: "今までマッチングアプリで会うことすらできませんでしたが、プロフィール写真と服装を変えただけで、月10人以上の女性とマッチングするようになりました。",
    },
    {
      age: "42",
      job: "医師",
      text: "ファッションには無頓着でしたが、内海さんの同行ショッピングで自分に似合うスタイルを発見。自信を持ってデートに行けるようになり、無事成婚しました。",
    }
  ];

  return (
    <Section id="testimonials" className="bg-[#050505] relative overflow-hidden">
      
      <SectionHeading title="変革の物語" subtitle="SUCCESS STORIES" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {testimonials.map((t, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bg-[#050505] p-10 md:p-14 border border-white/10 hover:border-gold/30 transition-colors duration-500 group"
          >
            <Quote className="text-gold/30 mb-8 transform group-hover:scale-110 transition-transform" size={40} />
            <p className="text-gray-300 leading-9 font-serif text-lg mb-8">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gray-800 group-hover:bg-gold transition-colors" />
              <div>
                <span className="text-white font-display text-xl mr-2">{t.age}歳</span>
                <span className="text-gray-500 text-sm tracking-widest uppercase">{t.job}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export const ProfileSection: React.FC = () => {
  return (
    <Section className="py-0 md:py-0 overflow-hidden" noPadding>
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className="w-full md:w-5/12 h-[300px] md:h-auto min-h-[300px] md:min-h-[500px] relative">
          <div className="absolute inset-0 bg-[#050505]/20 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=2670&auto=format&fit=crop" 
            alt="内海 亮" 
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-7/12 bg-[#050505] px-8 py-10 md:p-24 flex flex-col justify-center border-l border-white/5">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-gold/60 text-xs font-bold tracking-[0.3em] mb-4 uppercase">Representative</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">
              内海 亮
            </h2>
            <p className="text-gray-500 font-display text-xl tracking-widest mb-10">RYO UTSUMI</p>
            
            <p className="text-gray-400 leading-8 mb-6 font-serif text-justify border-l border-white/10 pl-6">
              ファッション業界で10年以上のキャリアを経て、TOKYO DATE PLANNERを設立。
              「大人の男性の魅力は、適切な演出で開花する」を信条に、婚活中の男性のスタイリングとコミュニケーションをサポート。
            </p>
            
            <div className="mt-16">
              <h4 className="text-white font-serif text-lg mb-6 border-b border-gray-800 pb-2 inline-block">会社概要</h4>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-4 text-sm font-serif">
                <div className="grid grid-cols-3 md:grid-cols-4 border-b border-gray-900 pb-4">
                  <dt className="text-gray-500">事業名</dt>
                  <dd className="text-gray-300 col-span-2 md:col-span-3">TOKYO DATE PLANNER</dd>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 border-b border-gray-900 pb-4">
                  <dt className="text-gray-500">代表者</dt>
                  <dd className="text-gray-300 col-span-2 md:col-span-3">内海 亮</dd>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 border-b border-gray-900 pb-4">
                  <dt className="text-gray-500">設立</dt>
                  <dd className="text-gray-300 col-span-2 md:col-span-3">2026年</dd>
                </div>
                 <div className="grid grid-cols-3 md:grid-cols-4 border-b border-gray-900 pb-4">
                  <dt className="text-gray-500">従業員数</dt>
                  <dd className="text-gray-300 col-span-2 md:col-span-3">1名（他、提携キャスト）</dd>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 border-b border-gray-900 pb-4">
                  <dt className="text-gray-500">事業内容</dt>
                  <dd className="text-gray-300 col-span-2 md:col-span-3 leading-relaxed">
                    30代・40代婚活男性をターゲットとした婚活支援サービス<br/>
                    (ファッションコンサル / 写真撮影 / 出会いの場の提供 / コミュニケーショントレーニング等)
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
