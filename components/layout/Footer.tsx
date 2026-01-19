import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-gray-400 py-16 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="inline-block">
            <h3 className="text-2xl font-serif text-white mb-2 tracking-widest">TOKYO DATE PLANNER</h3>
          </Link>
          <p className="text-xs tracking-widest uppercase mb-6 text-gold">Premium Dating Consultancy</p>
          <p className="mb-6 text-sm leading-relaxed max-w-sm">
            洗練された大人の男性のために。<br/>
            ファッションからコミュニケーションまで、<br/>
            あなたの魅力を最大限に引き出す婚活支援サービス。
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Menu</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="/#services" className="hover:text-gold transition-colors">サービス内容</a></li>
            <li><a href="/#testimonials" className="hover:text-gold transition-colors">お客様の声</a></li>
            <li><a href="/#pricing" className="hover:text-gold transition-colors">料金プラン</a></li>
            <li><a href="/#faq" className="hover:text-gold transition-colors">よくある質問</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Legal & Contact</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/legal" className="hover:text-gold transition-colors">特定商取引法に基づく表記</Link></li>
            <li><Link to="/privacy" className="hover:text-gold transition-colors">プライバシーポリシー</Link></li>
            <li><a href="/#contact" className="hover:text-gold transition-colors">お問い合わせ</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-xs tracking-wider">
        © 2026 TOKYO DATE PLANNER. All Rights Reserved.
      </div>
    </footer>
  );
};
