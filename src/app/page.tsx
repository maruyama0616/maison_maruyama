import Link from 'next/link';
import Carousel from '@/components/ui/Carousel';

const popularPosts = [
  {
    id: '1',
    title: '健康的なライフスタイルの作り方',
    excerpt: '毎日の小さな習慣が大きな変化をもたらす方法について',
    imageUrl: '',
    slug: 'healthy-lifestyle',
    category: 'health'
  },
  {
    id: '2',
    title: '目標達成のための戦略',
    excerpt: 'ambitionを実現するための具体的なステップとマインドセット',
    imageUrl: '',
    slug: 'goal-achievement',
    category: 'ambition'
  },
  {
    id: '3',
    title: '良好な人間関係を築く方法',
    excerpt: 'コミュニケーションスキルと信頼関係の構築について',
    imageUrl: '',
    slug: 'building-relationships',
    category: 'relationship'
  },
  {
    id: '4',
    title: '賢いお金の管理術',
    excerpt: '投資と節約のバランスを取った財務戦略',
    imageUrl: '',
    slug: 'money-management',
    category: 'money'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      {/* Hero Section - Ultra Minimal */}
      <section className="w-full section-spacing">
        <div className="container-fixed">
          <div className="text-center fade-in">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl small-caps font-light text-spacing tracking-wider"
                style={{ color: 'var(--text-primary)' }}>
              MARUYAMA
            </h1>
            <p className="font-sans text-xs md:text-sm font-ultra-light tracking-wide uppercase"
               style={{ color: 'var(--text-secondary)' }}>
              Cool Life, Better Work
            </p>
          </div>
        </div>
      </section>

      {/* Popular Posts Carousel */}
      <section className="w-full section-spacing">
        <div className="container-fixed">
          <h2 className="font-serif text-sm md:text-base small-caps font-light text-spacing text-center tracking-wider"
              style={{ color: 'var(--text-primary)' }}>
            POPULAR POSTS
          </h2>
          <div className="max-w-5xl mx-auto fade-in-delay-1">
            <Carousel items={popularPosts} />
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="w-full section-spacing">
        <div className="container-fixed">
          <h2 className="font-serif text-sm md:text-base small-caps font-light text-spacing text-center tracking-wider"
              style={{ color: 'var(--text-primary)' }}>
            CATEGORIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            <Link href="/health" className="group">
              <div className="aspect-[4/5] image-soft mb-6 hover-subtle transition-opacity image-clip-rounded radius-lg"
                   style={{ backgroundColor: 'var(--island-accent)' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                       style={{ color: 'var(--text-primary)' }}>
                      HEALTH
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-sans text-xs font-ultra-light tracking-wide uppercase mb-1"
                    style={{ color: 'var(--text-primary)' }}>
                  健康とウェルネス
                </h3>
                <p className="font-sans text-xs font-ultra-light"
                   style={{ color: 'var(--text-secondary)' }}>
                  健康的なライフスタイル
                </p>
              </div>
            </Link>

            <Link href="/ambition" className="group">
              <div className="aspect-[4/5] image-soft mb-6 hover-subtle transition-opacity image-clip-rounded radius-lg"
                   style={{ backgroundColor: 'var(--island-accent)' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                       style={{ color: 'var(--text-primary)' }}>
                      AMBITION
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-sans text-xs font-ultra-light tracking-wide uppercase mb-1"
                    style={{ color: 'var(--text-primary)' }}>
                  目標と成長
                </h3>
                <p className="font-sans text-xs font-ultra-light"
                   style={{ color: 'var(--text-secondary)' }}>
                  キャリアと自己実現
                </p>
              </div>
            </Link>

            <Link href="/relationship" className="group">
              <div className="aspect-[4/5] image-soft mb-6 hover-subtle transition-opacity image-clip-rounded radius-lg"
                   style={{ backgroundColor: 'var(--island-accent)' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                       style={{ color: 'var(--text-primary)' }}>
                      RELATIONSHIP
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-sans text-xs font-ultra-light tracking-wide uppercase mb-1"
                    style={{ color: 'var(--text-primary)' }}>
                  人間関係
                </h3>
                <p className="font-sans text-xs font-ultra-light"
                   style={{ color: 'var(--text-secondary)' }}>
                  コミュニケーションと絆
                </p>
              </div>
            </Link>

            <Link href="/money" className="group">
              <div className="aspect-[4/5] image-soft mb-6 hover-subtle transition-opacity image-clip-rounded radius-lg"
                   style={{ backgroundColor: 'var(--island-accent)' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                       style={{ color: 'var(--text-primary)' }}>
                      MONEY
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-sans text-xs font-ultra-light tracking-wide uppercase mb-1"
                    style={{ color: 'var(--text-primary)' }}>
                  お金と投資
                </h3>
                <p className="font-sans text-xs font-ultra-light"
                   style={{ color: 'var(--text-secondary)' }}>
                  財務管理と資産形成
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About & Misc Navigation */}
      <section className="w-full section-spacing">
        <div className="container-fixed">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            <Link href="/about" className="group">
              <div className="radius-lg card-spacing text-center hover-subtle transition-opacity"
                   style={{ backgroundColor: 'var(--island-background)' }}>
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-serif text-sm md:text-base small-caps font-light text-spacing tracking-wider"
                    style={{ color: 'var(--text-primary)' }}>
                  ABOUT / CONCEPT
                </h3>
                <p className="font-sans text-xs md:text-sm font-light"
                   style={{ color: 'var(--text-secondary)' }}>
                  このサイトのコンセプトと<br />
                  私について
                </p>
              </div>
            </Link>

            <Link href="/misc" className="group">
              <div className="radius-lg card-spacing text-center hover-subtle transition-opacity"
                   style={{ backgroundColor: 'var(--island-accent)' }}>
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="font-serif text-sm md:text-base small-caps font-light text-spacing tracking-wider"
                    style={{ color: 'var(--text-primary)' }}>
                  MISC / JOURNAL
                </h3>
                <p className="font-sans text-xs md:text-sm font-light"
                   style={{ color: 'var(--text-secondary)' }}>
                  日記や気づき、<br />
                  趣味の記録など
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
