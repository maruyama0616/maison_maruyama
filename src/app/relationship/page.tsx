import Link from 'next/link';

const relationshipPosts = [
  {
    id: '1',
    title: '良好な人間関係を築く方法',
    excerpt: 'コミュニケーションスキルと信頼関係の構築について詳しく解説します。',
    date: '2024-01-16',
    readTime: '7 min read',
    slug: 'building-relationships'
  },
  {
    id: '2',
    title: '効果的なコミュニケーション術',
    excerpt: '相手の心に響く話し方と聞き上手になるためのテクニック。',
    date: '2024-01-13',
    readTime: '6 min read',
    slug: 'effective-communication'
  },
  {
    id: '3',
    title: '恋愛関係を長続きさせるコツ',
    excerpt: 'パートナーとの健全で持続的な関係を築くための秘訣をご紹介。',
    date: '2024-01-09',
    readTime: '8 min read',
    slug: 'lasting-love'
  },
  {
    id: '4',
    title: '職場での人間関係の改善',
    excerpt: 'プロフェッショナルな環境で良好な関係を維持する方法とコツ。',
    date: '2024-01-06',
    readTime: '5 min read',
    slug: 'workplace-relationships'
  },
  {
    id: '5',
    title: '家族との絆を深める方法',
    excerpt: '世代を超えた家族関係を強化し、理解を深めるアプローチ。',
    date: '2024-01-03',
    readTime: '6 min read',
    slug: 'family-bonds'
  },
  {
    id: '6',
    title: '友情の維持と新しい出会い',
    excerpt: '既存の友人関係を大切にしながら、新たな人脈を築く方法。',
    date: '2023-12-29',
    readTime: '4 min read',
    slug: 'friendship-networking'
  }
];

export default function RelationshipPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      {/* Hero Section */}
      <section className="w-full py-24">
        <div className="container-fixed">
          <div className="text-center fade-in">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h1 className="font-serif text-2xl small-caps font-light mb-4 tracking-wider"
                style={{ color: 'var(--text-primary)' }}>
              RELATIONSHIP
            </h1>
            <p className="font-sans text-sm font-light max-w-2xl mx-auto"
               style={{ color: 'var(--text-secondary)' }}>
              人との繋がりを深め、豊かな人間関係を築くためのヒントを共有します。<br />
              コミュニケーション、信頼、そして相互理解について。
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="w-full py-16">
        <div className="container-fixed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relationshipPosts.map((post, index) => (
              <article key={post.id} className={`fade-in-delay-${index % 3 + 1}`}>
                <Link href={`/relationship/${post.slug}`} className="block group">
                  <div className="radius-lg overflow-hidden"
                       style={{ backgroundColor: 'var(--island-background)' }}>
                    {/* Thumbnail */}
                    <div className="aspect-[16/10] relative overflow-hidden"
                         style={{ backgroundColor: 'var(--island-accent)' }}>
                      <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <div className="text-center">
                          <svg className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--text-muted)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <p className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                             style={{ color: 'var(--text-muted)' }}>
                            RELATIONSHIP
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