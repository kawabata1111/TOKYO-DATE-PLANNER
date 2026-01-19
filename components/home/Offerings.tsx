import React from 'react';
import { Section, SectionHeading, Button } from '../ui/Common';
import { Check, Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Light",
      price: "50,000",
      desc: "まずは基本を知りたい方へ",
      features: ["ファッション診断", "買い物同行 (2時間)", "LINE相談 (2週間)"],
      recommend: false
    },
    {
      name: "Standard",
      price: "120,000",
      desc: "最短で成果を出したい方へ",
      features: ["ファッション診断 & 同行", "プロフィール写真撮影", "デートプラン作成", "LINE相談 (1ヶ月)", "模擬デートレッスン"],
      recommend: true
    },
    {
      name: "Executive",
      price: "250,000",
      desc: "全てを委ねる完全変革プラン",
      features: ["Standardプラン全内容", "ワードローブ総入れ替え", "ヘアサロン同行", "LINE相談 (無制限)", "優先予約対応", "会員制イベント招待"],
      recommend: false
    }
  ];

  return (
    <Section id="pricing">
      <SectionHeading title="プラン・料金" subtitle="MEMBERSHIP" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className={`relative flex flex-col p-8 md:p-10 transition-all duration-500 group border ${
              plan.recommend 
                ? 'bg-[#080808] border-gold/30' 
                : 'bg-[#050505] border-white/10 hover:border-white/20'
            }`}
          >
            {plan.recommend && (
              <div className="absolute top-0 right-0 bg-gold text-dark text-[10px] font-bold tracking-widest px-3 py-1 uppercase">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className={`text-xl font-display tracking-widest uppercase mb-2 ${plan.recommend ? 'text-gold' : 'text-white'}`}>
                {plan.name}
              </h3>
              <p className="text-gray-500 text-xs">{plan.desc}</p>
            </div>

            <div className="mb-8 pb-8 border-b border-gray-800">
              <div className="flex items-baseline">
                <span className="text-lg text-gray-400 mr-2">¥</span>
                <span className="text-4xl md:text-5xl font-display text-white font-light">{plan.price}</span>
              </div>
              <span className="text-gray-600 text-[10px] uppercase tracking-widest mt-2 block">Tax Included</span>
            </div>

            <ul className="space-y-5 flex-grow mb-10">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-4">
                  <span className={`mt-1 p-0.5 rounded-full ${plan.recommend ? 'text-dark bg-gold' : 'text-gray-500 border border-gray-800'}`}>
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span className="text-gray-300 text-sm font-light tracking-wide">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-gray-600 text-xs mt-12 tracking-wide">
        ※ 上記以外にも、お客様のご予算や目的に合わせたカスタマイズプランもご用意可能です。お気軽にご相談ください。
      </p>
    </Section>
  );
};

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-900 last:border-0">
      <button 
        className="w-full py-8 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg md:text-xl font-serif pr-8 transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-gray-300 group-hover:text-white'}`}>
          {question}
        </span>
        <span className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : 'text-gray-600'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 pb-8 leading-8 font-serif pl-0 md:pl-4 text-sm md:text-base border-l border-gray-900 ml-2 mb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FaqSection: React.FC = () => {
  const faqs = [
    { q: "ファッションに全く詳しくないのですが...", a: "ご安心ください。むしろ「何もわからない」という状態からスタートされる方が8割以上です。専門用語は使わず、感覚ではなく論理で「なぜこれが似合うのか」を丁寧に解説いたします。" },
    { q: "無料相談では何をしますか？", a: "約60分間、オンラインまたは対面にて、現状の課題や目標をヒアリングします。無理な勧誘は一切行わず、あなたに最適な戦略のロードマップをご提示する時間となります。" },
    { q: "地方在住ですが利用できますか？", a: "はい、可能です。お買い物同行などは東京近郊となりますが、オンラインでのスタイリング提案やプロフィール作成、LINE相談などは全国どこからでもご利用いただけます。" },
    { q: "年齢制限はありますか？", a: "30代・40代の方をメインとしていますが、20代後半の方や50代の方も実績がございます。年齢に応じた「年相応の魅力」を引き出す提案をいたします。" }
  ];

  return (
    <Section id="faq" className="bg-[#050505]">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="w-full md:w-1/3">
          <h3 className="text-gray-500 text-xs tracking-[0.3em] font-bold uppercase mb-4">Common Questions</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">FAQ</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            よくあるご質問をまとめました。<br/>
            その他ご不明な点がございましたら、<br/>
            お気軽にお問い合わせください。
          </p>
        </div>
        <div className="w-full md:w-2/3">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </Section>
  );
};