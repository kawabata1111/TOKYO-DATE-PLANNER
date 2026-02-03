import React from 'react';
import { Section, SectionHeading } from '../ui/Common';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const SuccessSection: React.FC = () => {
  const testimonials = [
    {
      age: "41",
      job: "医師",
      text: "これまで色んな恋愛コンサルや相談所に入会してきましたが外見磨き→コミュ力アップ→女性との出会いをここまで最短で叶えてくれるサービスは他になく、さらにサービスの質の高さに毎回驚かされています。自分と同世代の30,40代で今どうしたらいいか悩んでる皆様に是非オススメしたいです。",
    },
    {
      age: "34",
      job: "建築",
      text: "入会当初からずっと自分の可能性を信じてくれて人生を変えてくれました。今ではパートナーができましたが、もっとカッコいい男を目指して日々精進していきます！",
    },
    {
      age: "27",
      job: "教員",
      text: "初めてマッチングアプリでイイね700件いきました！去年の自分には想像がつかなかった毎日で、今、人生がとても楽しいです。",
    },
    {
      age: "30",
      job: "IT企業",
      text: "女性とコミュニケーションをとることが苦手だった僕にもここへきてモテ期がやってきました。毎回カッコよくしてきただき恒例のお食事会に行くのが楽しみです。",
    }
  ];

  return (
    <Section id="testimonials" className="bg-[#050505] relative overflow-hidden">
      
      <SectionHeading title="出会いの物語" subtitle="SUCCESS STORIES" />
      
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
            src="/images/profile.png"
            alt="内海 亮" 
            loading="lazy"
            className="w-full h-full object-cover"
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
            
            <p className="text-white leading-8 mb-6 font-serif text-justify border-l border-white/10 pl-6">
              「素敵な出会いは、準備と環境で決まる」を信条に、TOKYO DATE PLANNERを設立。
              厳選された出会いの場の提供から、スタイリング、コミュニケーションまで、理想のパートナーとの出会いをトータルサポート。
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
