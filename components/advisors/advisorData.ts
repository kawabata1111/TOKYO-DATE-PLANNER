export interface AdvisorProfile {
  birthplace: string;
  specialty?: string;
  achievement?: string;
  qualification?: string;
  belief?: string;
  hobby?: string;
  favoriteFood?: string;
  holiday?: string;
  favoriteWord?: string;
}

export interface Advisor {
  id: string;
  nameEn: string;
  nameJa: string;
  tagline: string;
  role: string;
  listTitle: string;
  message: string;
  photo: string;
  photoPosition: string;
  profile: AdvisorProfile;
}

export const advisors: Advisor[] = [
  {
    id: 'utsumi',
    nameEn: 'Sho Utsumi',
    nameJa: '内海 翔',
    tagline: 'Founder / TOTAL PRODUCER',
    role: 'メンズファッションスタイリスト / トータルプロデューサー',
    listTitle: 'TOTAL PRODUCER',
    message:
      'アパレル業界で培った15年以上のキャリアと、1000名を超える男性のスタイリング実績をもとに、TOKYO DATE PLANNERを立ち上げました。\n\nファッション・コミュニケーション・ライフスタイルまで、男性が「選ばれる存在」になるためのトータルサポートを提供しています。表面的なテクニックではなく、その人本来の魅力を引き出すことを大切にしています。',
    photo: '/advisors/photos/utsumi.jpg',
    photoPosition: 'center 25%',
    profile: {
      birthplace: '東京都',
      specialty: 'メンズファッション / 恋愛コーチング',
      achievement: 'アパレル業界15年以上 / 1000名以上のスタイリング実績',
      qualification: 'パーソナルカラーアナリスト / 骨格診断士',
      belief: '人は外見から内面まで磨ける',
    },
  },
  {
    id: 'sayaka',
    nameEn: 'Sayaka',
    nameJa: 'さりか',
    tagline: 'Miss Grand Japan 2025 Finalist / STYLIST × LOVE ADVISOR',
    role: 'メンズ&レディース ファッションスタイリスト / 恋愛アドバイザー',
    listTitle: 'STYLIST × LOVE ADVISOR',
    message:
      'スタイリング提案実務7年。Miss Grand Japan 2025 Finalist。\n美容・サロンモデル・ビジュアルディレクション・PR経験を活かしたスタイリング提案。英語対応可（海外滞在経験あり）。\n\n7年間のアパレル業界でのキャリアを経て、お客様の強みを引き出す提案を得意としています。男性の魅力を最大限に引き出すスタイリングと、女性目線でのリアルな恋愛アドバイスを両立した支援が可能です。',
    photo: '/advisors/photos/sayaka.jpg',
    photoPosition: 'center 30%',
    profile: {
      birthplace: '東京都',
      hobby: '美術館巡り / カフェ巡り',
      favoriteFood: '和食 / イタリアン',
      holiday: '本を読みながら過ごす時間',
      favoriteWord: '美しさは内面から滲み出るもの',
    },
  },
  {
    id: 'ami',
    nameEn: 'Ami',
    nameJa: 'あみ',
    tagline: 'Beauty Curator / FEMALE ADVISOR',
    role: '女性アドバイザー',
    listTitle: 'FEMALE ADVISOR',
    message:
      '美容に関する知識を日々アップデートしながら、女性目線で「魅力的に見える男性像」を分析しています。\n\nお食事デートトレーニングでは、女性が本音で何を見ているのか、どう感じているのかを率直にフィードバック。座学だけでは見えてこない、リアルな改善ポイントをお伝えします。',
    photo: '/advisors/photos/ami.jpg',
    photoPosition: 'center 30%',
    profile: {
      birthplace: '東京都',
      hobby: '美容収集',
      favoriteFood: '和食 / 蕎麦',
      holiday: 'Youtubeを見ること',
      favoriteWord: 'やらない後悔よりやって後悔',
    },
  },
  {
    id: 'haru',
    nameEn: 'Haru',
    nameJa: 'はる',
    tagline: 'Active Lifestyle / FEMALE ADVISOR',
    role: '女性アドバイザー',
    listTitle: 'FEMALE ADVISOR',
    message:
      'アクティブな趣味とライフスタイルから、自然体で会話できる距離感を大切にしています。\n\nアウトドアやスポーツが好きな男性、ライフスタイルに自信を持ちたい男性のサポートが得意です。デート中の自然な振る舞い、相手をリラックスさせる会話術など、実践的なアドバイスをお届けします。',
    photo: '/advisors/photos/haru.jpg',
    photoPosition: 'center 30%',
    profile: {
      birthplace: '大阪府',
      hobby: 'サーフィン',
      favoriteFood: '焼肉 / 寿司 / 中華',
      holiday: 'サーフィン / ショッピング',
      favoriteWord: '冬は必ず春となる',
    },
  },
  {
    id: 'chiha',
    nameEn: 'Chiha',
    nameJa: 'ChiHa',
    tagline: 'Hospitality Mind / FEMALE ADVISOR',
    role: '女性アドバイザー',
    listTitle: 'FEMALE ADVISOR',
    message:
      '「一緒にいて楽しい」と感じてもらえる空気感の作り方を得意としています。\n\nレストランでの所作、相手に気を遣わせない会話のテンポ、自然なエスコートなど、実際のデート現場で必要な細やかな振る舞いを、リアリティのあるシチュエーションでトレーニングします。',
    photo: '/advisors/photos/chiha.jpg',
    photoPosition: 'center 30%',
    profile: {
      birthplace: '東京都',
      hobby: '食べ歩き / 映画鑑賞',
      favoriteFood: 'ジャンルを問わず美味しいもの全般',
      holiday: '気になるお店を巡る',
      favoriteWord: '日々是好日',
    },
  },
];

export function getAdvisorById(id: string): Advisor | undefined {
  return advisors.find((a) => a.id === id);
}
