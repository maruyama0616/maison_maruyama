import Link from 'next/link';

const healthPosts = [
  {
    id: '1',
    title: '健康的なライフスタイルの作り方',
    excerpt: '毎日の小さな習慣が大きな変化をもたらす方法について詳しく解説します。',
    date: '2024-01-15',
    readTime: '5 min read',
    slug: 'healthy-lifestyle'
  },
  {
    id: '2',
    title: '質の良い睡眠を得るためのコツ',
    excerpt: '睡眠の質を向上させる具体的な方法と科学的根拠を紹介します。',
    date: '2024-01-12',
    readTime: '7 min read',
    slug: 'better-sleep'
  },
  {
    id: '3',
    title: '栄養バランスを考えた食事プランニング',
    excerpt: '忙しい日常でも実践できる健康的な食事の計画方法をご紹介。',
    date: '2024-01-08',
    readTime: '6 min read',
    slug: 'meal-planning'
  },
  {
    id: '4',
    title: 'ストレス管理とメンタルヘルス',
    excerpt: '現代社会でのストレス対処法とメンタルヘルスの維持について。',
    date: '2024-01-05',
    readTime: '8 min read',
    slug: 'stress-management'
  },
  {
    id: '5',
    title: '運動習慣の始め方',
    excerpt: '無理なく続けられる運動習慣の作り方と継続のコツを解説。',
    date: '2024-01-02',
    readTime: '4 min read',
    slug: 'exercise-habits'
  },
  {
    id: '6',
    title: '水分補給の重要性と適切な方法',
    excerpt: '健康維持に欠かせない水分補給について、科学的観点から説明します。',
    date: '2023-12-28',
    readTime: '3 min read',
    slug: 'hydration-importance'
  }
];

export default function HealthPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      {/* Hero Section */}
      <section className="w-full py-24">
        <div className="container-fixed">
          <div className="text-center fade-in">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h1 className="font-serif text-2xl small-caps font-light mb-4 tracking-wider"
                style={{ color: 'var(--text-primary)' }}>
              HEALTH
            </h1>
            <p className="font-sans text-sm font-light max-w-2xl mx-auto"
               style={{ color: 'var(--text-secondary)' }}>
              健康的なライフスタイルを築くための知識とヒントを共有します。<br />
              心身の健康、ウェルネス、そして持続可能な習慣について。
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="w-full py-16">
        <div className="container-fixed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthPosts.map((post, index) => (
              <article key={post.id} className={`fade-in-delay-${index % 3 + 1}`}>
                <Link href={`/health/${post.slug}`} className="block group">
                  <div className="radius-lg overflow-hidden"
                       style={{ backgroundColor: 'var(--island-background)' }}>
                    {/* Thumbnail */}
                    <div className="aspect-[16/10] relative overflow-hidden"
                         style={{ backgroundColor: 'var(--island-accent)' }}>
                      <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <div className="text-center">
                          <svg className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--text-muted)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <p className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                             style={{ color: 'var(--text-muted)' }}>
                            HEALTH
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