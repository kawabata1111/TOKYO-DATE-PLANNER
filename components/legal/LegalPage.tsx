import React, { useEffect } from 'react';
import { Section, SectionHeading } from '../ui/Common';

export const LegalPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#050505] text-gray-300">
      <Section>
        <SectionHeading title="特定商取引法に基づく表記" subtitle="LEGAL INFO" />
        
        <div className="max-w-3xl mx-auto space-y-12 font-serif text-sm md:text-base">
          <dl className="border-t border-gray-800">
            {[
              { label: "販売業者", value: "TOKYO DATE PLANNER" },
              { label: "運営統括責任者", value: "内海 亮" },
              { label: "電話番号", value: "050-1794-0390（受付時間 10:00-18:00）" },
              { label: "メールアドレス", value: "tokyo.date.planner@gmail.com" },
              { label: "販売価格", value: "各プランのページに記載されている価格とします。" },
              { label: "商品代金以外の必要料金", value: "銀行振込手数料、およびサービス利用に伴う交通費・飲食代等の実費はお客様負担となります。" },
              { label: "お支払い方法", value: "銀行振込、クレジットカード決済" },
              { label: "お支払い時期", value: "お申し込み後、7日以内にお支払いください。" },
              { label: "サービスの提供時期", value: "決済完了後、お客様と日程調整の上、速やかにサービスを開始いたします。" },
              { label: "キャンセル・返品について", value: "サービスの性質上、提供後の返金はお受けしておりません。やむを得ない事情によりキャンセルされる場合は、サービス提供日の3日前までにご連絡ください。それ以降のキャンセルについては、キャンセル料が発生する場合がございます。" },
            ].map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-gray-800 gap-4">
                <dt className="text-gray-500 font-medium">{item.label}</dt>
                <dd className="md:col-span-2 text-white leading-relaxed whitespace-pre-line">{item.value}</dd>
              </div>
            ))}
          </dl>
          
          <p className="text-xs text-gray-600 mt-12">
            ※上記住所および電話番号は、ご請求を頂いた場合、遅滞なく開示いたします。
          </p>
        </div>
      </Section>
    </div>
  );
};
