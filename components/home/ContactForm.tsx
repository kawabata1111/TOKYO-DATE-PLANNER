import React from 'react';
import { Section, SectionHeading, Button } from '../ui/Common';
import { Phone, Mail } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <Section id="contact" className="border-t border-white/5 bg-[#050505]">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Start Your Journey</h2>
        <p className="text-gray-400 font-serif">
          まずは無料カウンセリングにて、あなたの現状と目標をお聞かせください。<br/>
          新たな一歩は、ここから始まります。
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 max-w-6xl mx-auto">
        {/* Info */}
        <div className="md:col-span-2 space-y-12 text-left md:text-right md:border-r md:border-white/10 md:pr-12 pt-4">
          <div>
            <h4 className="text-gold/60 text-xs font-bold tracking-widest mb-4 uppercase">Phone</h4>
            <a href="tel:09078139711" className="block text-2xl font-display text-white hover:text-gold transition-colors">
              090-7813-9711
            </a>
            <span className="text-gray-600 text-xs mt-2 block">内海（直通）</span>
          </div>
          
          <div>
            <h4 className="text-gold/60 text-xs font-bold tracking-widest mb-4 uppercase">Email</h4>
            <a href="mailto:ap.id.1224@icloud.com" className="block text-lg font-display text-white hover:text-gold transition-colors break-all">
              ap.id.1224@icloud.com
            </a>
          </div>
        </div>

        {/* Form */}
        <form action="https://formsubmit.co/ap.id.1224@icloud.com" method="POST" className="md:col-span-3 space-y-8">
          {/* FormSubmit Config */}
          <input type="hidden" name="_subject" value="TOKYO DATE PLANNER: 新規お問い合わせ" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={`${window.location.origin}/thanks`} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-gold transition-colors">Name</label>
              <input type="text" name="name" className="w-full bg-transparent border-b border-gray-800 text-white py-3 focus:border-gold focus:outline-none transition-colors rounded-none placeholder-gray-800" placeholder="お名前" required />
            </div>
            <div className="group">
              <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-gold transition-colors">Phone</label>
              <input type="tel" name="phone" className="w-full bg-transparent border-b border-gray-800 text-white py-3 focus:border-gold focus:outline-none transition-colors rounded-none placeholder-gray-800" placeholder="電話番号" required />
            </div>
          </div>
          
          <div className="group">
            <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-gold transition-colors">Email</label>
            <input type="email" name="email" className="w-full bg-transparent border-b border-gray-800 text-white py-3 focus:border-gold focus:outline-none transition-colors rounded-none placeholder-gray-800" placeholder="メールアドレス" required />
          </div>

          <div className="group">
            <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-gold transition-colors">Message</label>
            <textarea name="message" rows={4} className="w-full bg-transparent border-b border-gray-800 text-white py-3 focus:border-gold focus:outline-none transition-colors rounded-none placeholder-gray-800" placeholder="ご相談内容（任意）" required></textarea>
          </div>

          <div className="pt-8">
             <Button type="submit" variant="gold" fullWidth className="py-5">
              SEND REQUEST
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};