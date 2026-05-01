import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { advisors, getAdvisorById } from './advisorData';

const styles = `
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .fade-in {
    animation: fadeUp 0.8s ease forwards;
  }
  .fade-in-delay-1 { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
  .fade-in-delay-2 { animation-delay: 0.4s; opacity: 0; animation-fill-mode: forwards; }
  .fade-in-delay-3 { animation-delay: 0.6s; opacity: 0; animation-fill-mode: forwards; }
  .photo-frame {
    position: relative;
  }
  .photo-frame::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, #c9a050 0%, #e6c875 50%, #c9a050 100%);
    z-index: 0;
    border-radius: 2px;
  }
  .photo-frame img {
    position: relative;
    z-index: 1;
    display: block;
  }
  .other-card-overlay {
    background: linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.4) 60%, transparent 100%);
  }
`;

interface ProfileRowProps {
  label: string;
  value: string;
}

const ProfileRow: React.FC<ProfileRowProps> = ({ label, value }) => (
  <div className="flex border-b border-gold/10 py-4">
    <dt className="w-32 text-xs tracking-widest text-gold/60 uppercase shrink-0">{label}</dt>
    <dd className="text-gray-300 text-sm leading-relaxed">{value}</dd>
  </div>
);

export const AdvisorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const advisor = id ? getAdvisorById(id) : undefined;

  if (!advisor) {
    return <Navigate to="/advisors" replace />;
  }

  const otherAdvisors = advisors.filter((a) => a.id !== advisor.id);

  const profileRows: { label: string; value: string }[] = [];
  if (advisor.profile.birthplace) {
    profileRows.push({ label: '出身地', value: advisor.profile.birthplace });
  }
  if (advisor.profile.specialty) {
    profileRows.push({ label: '得意分野', value: advisor.profile.specialty });
  }
  if (advisor.profile.achievement) {
    profileRows.push({ label: '実績', value: advisor.profile.achievement });
  }
  if (advisor.profile.qualification) {
    profileRows.push({ label: '資格', value: advisor.profile.qualification });
  }
  if (advisor.profile.belief) {
    profileRows.push({ label: '信条', value: advisor.profile.belief });
  }
  if (advisor.profile.hobby) {
    profileRows.push({ label: '趣味', value: advisor.profile.hobby });
  }
  if (advisor.profile.favoriteFood) {
    profileRows.push({ label: '好きな食べ物', value: advisor.profile.favoriteFood });
  }
  if (advisor.profile.holiday) {
    profileRows.push({ label: '休日の過ごし方', value: advisor.profile.holiday });
  }
  if (advisor.profile.favoriteWord) {
    profileRows.push({ label: '好きな言葉', value: advisor.profile.favoriteWord });
  }

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-[#050505] text-white font-sans">
        {/* ヘッダー */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-sm border-b border-gold/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="font-display text-2xl tracking-widest text-gold-gradient">
              TOKYO DATE PLANNER
            </Link>
            <Link
              to="/advisors"
              className="text-sm tracking-widest text-gray-400 hover:text-gold transition-colors duration-300"
            >
              All Advisors →
            </Link>
          </div>
        </header>

        {/* HEROセクション */}
        <section className="pt-24 min-h-[85vh] grid grid-cols-1 md:grid-cols-12">
          {/* 写真 7/12 */}
          <div className="md:col-span-7 relative h-[60vh] md:h-auto">
            <img
              src={advisor.photo}
              alt={advisor.nameJa}
              className="w-full h-full object-cover"
              style={{ objectPosition: advisor.photoPosition }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, transparent 60%, #050505 100%), linear-gradient(to top, rgba(5,5,5,0.3) 0%, transparent 50%)',
              }}
            ></div>
          </div>

          {/* 名前・情報 5/12 */}
          <div className="md:col-span-5 flex flex-col justify-center px-8 md:px-16 py-16 fade-in">
            <p className="text-xs tracking-[0.4em] text-gold/60 mb-6 uppercase">Advisor</p>
            <h1 className="font-display text-5xl md:text-6xl text-gold-gradient tracking-widest mb-3">
              {advisor.nameEn}
            </h1>
            <p className="text-2xl text-gray-300 mb-4 tracking-wider">{advisor.nameJa}</p>
            <div className="w-12 h-px bg-gold/40 mb-6"></div>
            <p className="text-xs text-gold/70 tracking-[0.25em] leading-relaxed">
              {advisor.tagline}
            </p>
            <div className="mt-8">
              <p className="text-sm text-gray-500 tracking-widest">{advisor.role}</p>
            </div>
          </div>
        </section>

        {/* プロフィール + メッセージ */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* プロフィール */}
            <div className="fade-in fade-in-delay-1">
              <p className="text-xs tracking-[0.4em] text-gold/60 mb-2 uppercase">Profile</p>
              <h2 className="font-display text-3xl text-gold-gradient tracking-widest mb-8">
                プロフィール
              </h2>
              <dl>
                {profileRows.map((row) => (
                  <ProfileRow key={row.label} label={row.label} value={row.value} />
                ))}
              </dl>
            </div>

            {/* メッセージ */}
            <div className="fade-in fade-in-delay-2">
              <p className="text-xs tracking-[0.4em] text-gold/60 mb-2 uppercase">Message</p>
              <h2 className="font-display text-3xl text-gold-gradient tracking-widest mb-8">
                メッセージ
              </h2>
              <div className="photo-frame mb-10 overflow-hidden">
                <img
                  src={advisor.photo}
                  alt={advisor.nameJa}
                  className="w-full object-cover"
                  style={{ height: '280px', objectPosition: advisor.photoPosition }}
                />
              </div>
              {advisor.message.split('\n').map((line, i) =>
                line === '' ? (
                  <br key={i} />
                ) : (
                  <p key={i} className="text-gray-300 text-sm leading-loose mb-2">
                    {line}
                  </p>
                )
              )}
            </div>
          </div>
        </section>

        {/* OTHER ADVISORS */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="text-center mb-12 fade-in fade-in-delay-3">
            <p className="text-xs tracking-[0.4em] text-gold/60 mb-3 uppercase">Our Team</p>
            <h2 className="font-display text-3xl text-gold-gradient tracking-widest">
              Other Advisors
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherAdvisors.map((other) => (
              <Link
                key={other.id}
                to={`/advisors/${other.id}`}
                className="block group"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={other.photo}
                    alt={other.nameJa}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: other.photoPosition }}
                  />
                  <div className="other-card-overlay absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <p className="text-xs tracking-[0.3em] text-gold/70 mb-1 uppercase">
                      {other.listTitle}
                    </p>
                    <p className="font-display text-xl text-white tracking-wider">{other.nameEn}</p>
                    <p className="text-sm text-gray-300">{other.nameJa}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* フッター */}
        <footer className="border-t border-gold/10 py-10 px-6 text-center">
          <p className="font-display text-xl text-gold-gradient tracking-widest mb-2">
            TOKYO DATE PLANNER
          </p>
          <p className="text-xs text-gray-600 tracking-widest">
            &copy; {new Date().getFullYear()} TOKYO DATE PLANNER. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};
