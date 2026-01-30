import React from 'react';
import { Section, SectionHeading, Button } from '../ui/Common';
import { Check, Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PricingSection: React.FC = () => {
  const basePlans = [
    {
      name: "初級コース",
      price: "200,000",
      desc: "まずは始めたい方へ",
      features: [
        "ファッションコーディネート（春夏秋冬 年4回）",
        "写真撮影（春夏秋冬 年4回）",
        "美容院の紹介+初回カット無料",
        "LINEによるファッション相談",
        "恋活&婚活お食事会ご招待（※男女5対5などの少人数制）"
      ],
      recommend: false,
      hasLoveOption: false
    },
    {
      name: "中級コース",
      price: "300,000",
      desc: "本気で出会いたい方へ",
      features: [
        "ファッションコーディネート（春夏秋冬 年6回）",
        "写真撮影（春夏秋冬 年6回）",
        "美容院の紹介+初回カット無料",
        "LINEによるファッション相談",
        "恋活&婚活お食事会ご招待（※男女5対5などの少人数制）"
      ],
      recommend: true,
      hasLoveOption: false
    },
    {
      name: "上級VIPコース",
      price: "500,000",
      desc: "理想のパートナーを見つけたい方へ",
      features: [
        "ファッションコーディネート（春夏秋冬 年6回）",
        "写真撮影（春夏秋冬 年6回）",
        "美容院の紹介+初回カット無料",
        "LINEによるファッション相談",
        "ファッションオンラインサービス",
        "恋活&婚活お食事会ご招待（※男女5対5などの少人数制）",
        "理想のパートナーを個別で直接ご紹介（マンツーマンでのパートナー探し全面協力）"
      ],
      recommend: false,
      hasLoveOption: false
    }
  ];

  const loveOptionPlans = [
    {
      name: "初級コース",
      subtitle: "恋愛オプション付",
      price: "300,000",
      desc: "恋愛サポートも欲しい方へ",
      features: [
        "ファッションコーディネート（春夏秋冬 年4回）",
        "写真撮影（春夏秋冬 年4回）",
        "美容院の紹介+初回カット無料",
        "LINEによるファッション相談&恋愛相談",
        "恋活&婚活お食事会ご招待（※男女5対5などの少人数制）",
        "女性アドバイザーによるお悩みzoom相談室（毎月開催）"
      ],
      recommend: false,
      hasLoveOption: true
    },
    {
      name: "中級コース",
      subtitle: "恋愛オプション付",
      price: "450,000",
      desc: "本気の恋愛サポート",
      features: [
        "ファッションコーディネート（春夏秋冬 年6回）",
        "写真撮影（春夏秋冬 年6回）",
        "美容院の紹介+初回カット無料",
        "LINEによるファッション相談&恋愛相談",
        "恋活&婚活お食事会ご招待（※男女5対5などの少人数制）",
        "女性アドバイザーによるお悩みzoom相談室（毎月開催）",
        "女性アドバイザーによるリアルデートトレーニング（年2回）",
        "女性恋愛講師によるオンラインセミナー"
      ],
      recommend: false,
      hasLoveOption: true
    },
    {
      name: "上級VIPコース",
      subtitle: "恋愛オプション付",
      price: "600,000",
      desc: "フルサポートで理想の出会いを",
      features: [
        "ファッションコーディネート（春夏秋冬 年6回）",
        "写真撮影（春夏秋冬 年6回）",
        "美容院の紹介+初回カット無料",
        "LINEによるファッション相談&恋愛相談",
        "ファッションオンラインサービス",
        "恋活&婚活お食事会ご招待（※男女5対5などの少人数制）",
        "理想のパートナーを個別で直接ご紹介（マンツーマンでのパートナー探し全面協力）",
        "女性モデルによるお悩みzoom相談室（毎月開催）",
        "女性アドバイザーによるリアルデートトレーニング（年4回）",
        "女性恋愛講師によるオンラインセミナー"
      ],
      recommend: true,
      hasLoveOption: true
    },
    {
      name: "完全婚活支援コース",
      subtitle: "恋愛オプション付",
      price: "800,000",
      desc: "成婚まで徹底サポート",
      features: [
        "ファッションコーディネート（春夏秋冬 年6回）",
        "写真撮影（春夏秋冬 年6回）",
        "美容院の紹介+初回カット無料",
        "LINEによるファッション相談&恋愛相談",
        "ファッションオンラインサービス",
        "恋活&婚活お食事会ご招待（※男女5対5などの少人数制）",
        "理想のパートナーを個別で直接ご紹介（マンツーマンでのパートナー探し全面協力）",
        "女性アドバイザーによるお悩みzoom相談室（毎月開催）",
        "女性アドバイザーによるリアルデートトレーニング（年4回）",
        "女性恋愛講師によるオンラインセミナー"
      ],
      recommend: false,
      hasLoveOption: true
    }
  ];

  const PlanCard = ({ plan, idx }: { plan: any; idx: number }) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className={`relative flex flex-col p-8 md:p-10 transition-all duration-500 group border ${
        plan.recommend
          ? 'bg-[#2e2e2e] border-gold/30'
          : 'bg-[#050505] border-white/10 hover:border-white/20'
      }`}
    >
      {plan.recommend && (
        <div className="absolute top-0 right-0 bg-gold text-dark text-[10px] font-bold tracking-widest px-3 py-1 uppercase">
          おすすめ
        </div>
      )}

      <div className="mb-8">
        <h3 className={`text-xl font-display tracking-widest mb-1 ${plan.recommend ? 'text-gold' : 'text-white'}`}>
          {plan.name}
        </h3>
        {plan.subtitle && (
          <span className="inline-block bg-pink-600 text-white text-[10px] px-2 py-1 mb-2">{plan.subtitle}</span>
        )}
        <p className="text-gray-500 text-xs">{plan.desc}</p>
      </div>

      <div className="mb-8 pb-8 border-b border-gray-800">
        <div className="flex items-baseline">
          <span className="text-lg text-white mr-2">¥</span>
          <span className="text-4xl md:text-5xl font-display text-white font-light">{plan.price}</span>
        </div>
        <span className="text-gray-600 text-[10px] uppercase tracking-widest mt-2 block">Tax Included</span>
      </div>

      <ul className="space-y-4 flex-grow mb-10">
        {plan.features.map((feature: string, fIdx: number) => (
          <li key={fIdx} className="flex items-start gap-3">
            <span className={`mt-1 p-0.5 rounded-full ${plan.recommend ? 'text-dark bg-gold' : 'text-gray-500 border border-gray-800'}`}>
              <Check size={10} strokeWidth={3} />
            </span>
            <span className="text-gray-300 text-sm font-light tracking-wide">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <Section id="pricing">
      <SectionHeading title="プラン・料金" subtitle="MEMBERSHIP" />

      {/* ベースプラン */}
      <h3 className="text-center text-white text-xl mb-8 font-light">ベーシックプラン</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {basePlans.map((plan, idx) => (
          <PlanCard key={idx} plan={plan} idx={idx} />
        ))}
      </div>

      {/* 恋愛オプション付きプラン */}
      <h3 className="text-center text-white text-xl mb-8 font-light">恋愛オプション付きプラン</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {loveOptionPlans.map((plan, idx) => (
          <PlanCard key={idx} plan={plan} idx={idx} />
        ))}
      </div>

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