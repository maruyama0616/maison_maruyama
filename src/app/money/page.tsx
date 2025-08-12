import Link from 'next/link';

const moneyPosts = [
  {
    id: '1',
    title: '賢いお金の管理術',
    excerpt: '投資と節約のバランスを取った財務戦略について詳しく解説します。',
    date: '2024-01-17',
    readTime: '9 min read',
    slug: 'money-management'
  },
  {
    id: '2',
    title: '投資初心者のための基礎知識',
    excerpt: 'リスクを理解し、長期的な視点で資産を増やす投資の基本。',
    date: '2024-01-10',
    readTime: '12 min read',
    slug: 'investment-basics'
  },
  {
    id: '3',
    title: '効果的な節約術と家計管理',
    excerpt: '無理なく続けられる節約方法と効率的な家計管理のコツをご紹介。',
    date: '2024-01-08',
    readTime: '6 min read',
    slug: 'saving-budgeting'
  },
  {
    id: '4',
    title: '副業と収入の多角化',
    excerpt: 'メインの仕事以外の収入源を作り、経済的安定を目指す方法。',
    date: '2024-01-01',
    readTime: '8 min read',
    slug: 'side-income'
  },
  {
    id: '5',
    title: '保険と将来への備え',
    excerpt: 'リスクマネジメントの観点から考える適切な保険選びと資産保護。',
    date: '2023-12-27',
    readTime: '7 min read',
    slug: 'insurance-planning'
  },
  {
    id: '6',
    title: '税金の基礎知識と節税対策',
    excerpt: '合法的な節税方法と税制度の理解を深めるための実践的ガイド。',
    date: '2023-12-24',
    readTime: '10 min read',
    slug: 'tax-optimization'
  }
];

export default function MoneyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      {/* Hero Section */}
      <section className="w-full py-24">
        <div className="container-fixed">
          <div className="text-center fade-in">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="font-serif text-2xl small-caps font-light mb-4 tracking-wider"
                style={{ color: 'var(--text-primary)' }}>
              MONEY
            </h1>
            <p className="font-sans text-sm font-light max-w-2xl mx-auto"
               style={{ color: 'var(--text-secondary)' }}>
              賢いお金の管理と資産形成について学びます。<br />
              投資、節約、そして経済的自立への道のりについて。
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="w-full py-16">
        <div className="container-fixed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moneyPosts.map((post, index) => (
              <article key={post.id} className={`fade-in-delay-${index % 3 + 1}`}>
                <Link href={`/money/${post.slug}`} className="block group">
                  <div className="radius-lg overflow-hidden"
                       style={{ backgroundColor: 'var(--island-background)' }}>
                    {/* Thumbnail */}
                    <div className="aspect-[16/10] relative overflow-hidden"
                         style={{ backgroundColor: 'var(--island-accent)' }}>
                      <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <div className="text-center">
                          <svg className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--text-muted)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                             style={{ color: 'var(--text-muted)' }}>
                            MONEY
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