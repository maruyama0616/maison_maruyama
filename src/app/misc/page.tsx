import Link from 'next/link';

const miscPosts = [
  {
    id: '1',
    title: 'パリの街角で見つけた小さな発見',
    excerpt: '日常の中で見過ごしがちな美しい瞬間について思いを巡らせた記録。',
    date: '2024-01-20',
    readTime: '3 min read',
    slug: 'paris-discovery',
    category: 'Travel'
  },
  {
    id: '2',
    title: 'コーヒーと創造性の関係',
    excerpt: '朝の一杯から始まる創作活動と、カフェインが思考に与える影響について。',
    date: '2024-01-15',
    readTime: '4 min read',
    slug: 'coffee-creativity',
    category: 'Lifestyle'
  },
  {
    id: '3',
    title: 'ミニマリズムという選択',
    excerpt: 'モノを減らすことで得られた心の余白と新たな価値観への気づき。',
    date: '2024-01-12',
    readTime: '5 min read',
    slug: 'minimalism-choice',
    category: 'Philosophy'
  },
  {
    id: '4',
    title: '音楽が生み出す共感の力',
    excerpt: 'ジャズライブでの体験から感じた、音楽が人と人を繋ぐ不思議な力。',
    date: '2024-01-08',
    readTime: '4 min read',
    slug: 'music-empathy',
    category: 'Culture'
  },
  {
    id: '5',
    title: '季節の変化と内面の成長',
    excerpt: '春夏秋冬の移ろいが教えてくれる人生のサイクルと成長への洞察。',
    date: '2024-01-05',
    readTime: '6 min read',
    slug: 'seasons-growth',
    category: 'Reflection'
  },
  {
    id: '6',
    title: 'デジタルデトックスの一週間',
    excerpt: 'SNSから距離を置いて過ごした7日間で発見した新たな時間の使い方。',
    date: '2024-01-01',
    readTime: '7 min read',
    slug: 'digital-detox',
    category: 'Lifestyle'
  },
  {
    id: '7',
    title: '古い本との偶然の出会い',
    excerpt: '古書店で手に取った一冊が運んでくれた、思わぬ学びと感動の記録。',
    date: '2023-12-28',
    readTime: '4 min read',
    slug: 'old-book-encounter',
    category: 'Reading'
  },
  {
    id: '8',
    title: 'アートが教えてくれた新しい視点',
    excerpt: '美術館で出会った作品が与えてくれた、日常を見る新たな角度。',
    date: '2023-12-25',
    readTime: '5 min read',
    slug: 'art-perspective',
    category: 'Culture'
  }
];

const categories = ['All', 'Travel', 'Lifestyle', 'Philosophy', 'Culture', 'Reflection', 'Reading'];

export default function MiscPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      {/* Hero Section */}
      <section className="w-full py-24">
        <div className="container-fixed">
          <div className="text-center fade-in">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h1 className="font-serif text-2xl small-caps font-light mb-4 tracking-wider"
                style={{ color: 'var(--text-primary)' }}>
              MISC / JOURNAL
            </h1>
            <p className="font-sans text-sm font-light max-w-2xl mx-auto"
               style={{ color: 'var(--text-secondary)' }}>
              日常の気づきや個人的な思索、趣味の記録など。<br />
              ジャンルを超えた雑多な記事の集まりです。
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full py-8">
        <div className="container-fixed">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full font-sans text-xs font-ultra-light tracking-wide uppercase hover-subtle transition-opacity"
                style={{ 
                  backgroundColor: category === 'All' ? 'var(--island-accent)' : 'var(--island-background)',
                  color: 'var(--text-secondary)' 
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="w-full py-8">
        <div className="container-fixed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miscPosts.map((post, index) => (
              <article key={post.id} className={`fade-in-delay-${index % 3 + 1}`}>
                <Link href={`/misc/${post.slug}`} className="block group">
                  <div className="radius-lg overflow-hidden"
                       style={{ backgroundColor: 'var(--island-background)' }}>
                    {/* Thumbnail */}
                    <div className="aspect-[16/10] relative overflow-hidden"
                         style={{ backgroundColor: 'var(--island-accent)' }}>
                      <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <div className="text-center">
                          <svg className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--text-muted)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                          <p className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                             style={{ color: 'var(--text-muted)' }}>
                            {post.category}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="inline-block px-2 py-1 text-xs font-ultra-light tracking-wide uppercase rounded-sm"
                                style={{ backgroundColor: 'var(--island-accent)', color: 'var(--text-muted)' }}>
                            {post.category}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs font-ultra-light"
                             style={{ color: 'var(--text-muted)' }}>
                          <time className="tracking-wide uppercase">
                            {new Date(post.date).toLocaleDateString('ja-JP', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </time>
                          <span>•</span>
                          <span className="tracking-wide">
                            {post.readTime}
                          </span>
                        </div>
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