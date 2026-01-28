import React from 'react';
import { Section, SectionHeading, Button } from '../ui/Common';
import { Check, Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Entry",
      price: "50,000",
      desc: "まずは出会いを体験したい方へ",
      features: ["マッチングイベント参加 (1回)", "プロフィール添削", "LINE相談 (2週間)"],
      recommend: false
    },
    {
      name: "Standard",
      price: "120,000",
      desc: "本気で出会いたい方へ",
      features: ["マッチングイベント参加 (3回)", "プロフィール写真撮影", "デートプランニング (2回)", "スタイリング相談", "LINE相談 (1ヶ月)"],
      recommend: true
    },
    {
      name: "Premium",
      price: "250,000",
      desc: "理想のパートナーを見つけたい方へ",
      features: ["Standardプラン全内容", "VIPイベント優先招待", "デートプランニング (無制限)", "専属コンシェルジュ", "成婚までサポート"],
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
                ? 'bg-[#2e2e2e] border-gold/30' 
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
                <span className="text-lg text-white mr-2">¥</span>
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
    { q: "どんな方が参加されていますか？", a: "30代・40代の経営者、医師、弁護士など、真剣に出会いを求める方々が中心です。入会時に審査を設け、質の高いコミュニティを維持しています。" },
    { q: "無料相談では何をしますか？", a: "約60分間、オンラインまたは対面にて、理想のパートナー像や現状の課題をヒアリング。あなたに最適な出会いのプランをご提案します。無理な勧誘は一切ありません。" },
    { q: "イベントはどのような形式ですか？", a: "少人数制のディナーパーティーや、趣味を共有できるアクティビティなど、自然な会話が生まれる形式を採用。「婚活パーティー感」のない、大人の社交の場です。" },
    { q: "成婚率はどのくらいですか？", a: "6ヶ月以内にお付き合いを開始される方が約70%、1年以内の成婚率は約45%です。一人ひとりに寄り添ったサポートで、質の高い出会いを実現しています。" }
  ];

  return (
    <Section id="faq" className="bg-[#050505]">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="w-full md:w-1/3">
          <h3 className="text-gray-500 text-xs tracking-[0.3em] font-bold uppercase mb-4">Common Questions</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">FAQ</h2>
          <p className="text-white text-sm leading-relaxed mb-8">
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