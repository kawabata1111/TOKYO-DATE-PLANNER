import React, { useEffect } from 'react';
import { Section, Button } from '../ui/Common';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const ThanksPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 flex items-center justify-center">
      <Section className="text-center py-20">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <CheckCircle size={64} className="text-gold" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">
            Thank You
          </h2>
          
          <p className="text-white leading-relaxed font-serif mb-12">
            お問い合わせありがとうございます。<br/>
            内容を確認の上、担当者より24時間以内にご連絡させていただきます。<br/>
            今しばらくお待ちくださいませ。
          </p>

          <Link to="/">
            <Button variant="outline">
              BACK TO TOP
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
};
