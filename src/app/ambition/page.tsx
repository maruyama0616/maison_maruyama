import Link from 'next/link';

const ambitionPosts = [
  {
    id: '1',
    title: '目標達成のための戦略',
    excerpt: 'ambitionを実現するための具体的なステップとマインドセットについて解説します。',
    date: '2024-01-18',
    readTime: '8 min read',
    slug: 'goal-achievement'
  },
  {
    id: '2',
    title: 'キャリア設計と長期ビジョン',
    excerpt: '将来のキャリアを見据えた戦略的な計画の立て方と実行方法。',
    date: '2024-01-14',
    readTime: '10 min read',
    slug: 'career-planning'
  },
  {
    id: '3',
    title: '生産性を高めるタイムマネジメント',
    excerpt: '効率的な時間管理で成果を最大化するテクニックとツールをご紹介。',
    date: '2024-01-11',
    readTime: '6 min read',
    slug: 'time-management'
  },
  {
    id: '4',
    title: 'スキルアップと継続学習',
    excerpt: '変化の激しい時代に必要なスキル向上と学習継続の方法論。',
    date: '2024-01-07',
    readTime: '7 min read',
    slug: 'skill-development'
  },
  {
    id: '5',
    title: 'リーダーシップと影響力',
    excerpt: '効果的なリーダーシップを発揮し、周囲に良い影響を与える方法。',
    date: '2024-01-04',
    readTime: '9 min read',
    slug: 'leadership-influence'
  },
  {
    id: '6',
    title: 'イノベーションとクリエイティブシンキング',
    excerpt: '創造的な思考力を育み、革新的なアイデアを生み出すアプローチ。',
    date: '2023-12-30',
    readTime: '5 min read',
    slug: 'creative-thinking'
  }
];

export default function AmbitionPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      {/* Hero Section */}
      <section className="w-full py-24">
        <div className="container-fixed">
          <div className="text-center fade-in">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="font-serif text-2xl small-caps font-light mb-4 tracking-wider"
                style={{ color: 'var(--text-primary)' }}>
              AMBITION
            </h1>
            <p className="font-sans text-sm font-light max-w-2xl mx-auto"
               style={{ color: 'var(--text-secondary)' }}>
              目標達成と自己実現のための戦略とマインドセットを探求します。<br />
              キャリア、成長、そして持続可能な成功について。
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="w-full py-16">
        <div className="container-fixed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ambitionPosts.map((post, index) => (
              <article key={post.id} className={`fade-in-delay-${index % 3 + 1}`}>
                <Link href={`/ambition/${post.slug}`} className="block group">
                  <div className="radius-lg overflow-hidden"
                       style={{ backgroundColor: 'var(--island-background)' }}>
                    {/* Thumbnail */}
                    <div className="aspect-[16/10] relative overflow-hidden"
                         style={{ backgroundColor: 'var(--island-accent)' }}>
                      <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <div className="text-center">
                          <svg className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--text-muted)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <p className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                             style={{ color: 'var(--text-muted)' }}>
                            AMBITION
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <time className="font-sans text-xs font-ultra-light tracking-wide uppercase"
                              style={{ color: 'var(--text-muted)' }}>
                          {new Date(post.date).toLocaleDateString('ja-JP', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </time>
                        <span className="font-sans text-xs font-ultra-light tracking-wide"
                              style={{ color: 'var(--text-muted)' }}>
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-lg font-light mb-3 line-clamp-2 group-hover:opacity-80 transition-opacity"
                          style={{ color: 'var(--text-primary)' }}>
                        {post.title}
                      </h3>
                      
                      <p className="font-sans text-sm font-light line-clamp-3"
                         style={{ color: 'var(--text-secondary)' }}>
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="w-full py-16">
        <div className="container-fixed">
          <div className="text-center">
            <Link 
              href="/" 
              className="inline-flex items-center font-sans text-xs font-ultra-light tracking-wide uppercase hover-subtle transition-opacity"
              style={{ color: 'var(--text-secondary)' }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}