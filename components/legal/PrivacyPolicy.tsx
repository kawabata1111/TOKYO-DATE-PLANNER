import React, { useEffect } from 'react';
import { Section, SectionHeading } from '../ui/Common';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#050505] text-gray-300">
      <Section>
        <SectionHeading title="プライバシーポリシー" subtitle="PRIVACY POLICY" />
        
        <div className="max-w-3xl mx-auto space-y-10 font-serif leading-relaxed text-sm md:text-base">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium border-l-2 border-gold pl-4">1. 個人情報の定義</h3>
            <p>
              本プライバシーポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます。）を意味するものとします。
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium border-l-2 border-gold pl-4">2. 個人情報の利用目的</h3>
            <p>
              当サービスは、お客様の個人情報を以下の目的で利用いたします。
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>サービスの提供および運営のため</li>
              <li>お客様からのお問い合わせに対する回答のため</li>
              <li>サービスに関する重要なお知らせ、キャンペーン等のご案内のため</li>
              <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
              <li>有料サービスにおいて、ユーザーに利用料金を請求するため</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium border-l-2 border-gold pl-4">3. 個人情報の第三者提供</h3>
            <p>
              当サービスは、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium border-l-2 border-gold pl-4">4. 個人情報の開示・訂正・利用停止</h3>
            <p>
              当サービスは、お客様から個人情報の開示・訂正・利用停止を求められたときは、ご本人であることを確認の上、速やかに対応いたします。
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium border-l-2 border-gold pl-4">5. お問い合わせ窓口</h3>
            <p>
              本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
            </p>
            <div className="bg-[#111] p-6 mt-4 border border-gray-800">
              <p>TOKYO DATE PLANNER</p>
              <p>担当：内海</p>
              <p>E-mail: ap.id.1224@icloud.com</p>
            </div>
          </div>

          <p className="text-right text-xs text-gray-600 mt-12">
            2026年1月19日 制定
          </p>
        </div>
      </Section>
    </div>
  );
};
