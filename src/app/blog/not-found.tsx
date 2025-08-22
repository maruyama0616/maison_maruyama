import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      {/* Breadcrumb - 既存パターン踏襲 */}
      <section className="w-full pt-8 pb-4">
        <div className="page">
          <nav className="flex items-center gap-2 font-sans text-xs font-ultra-light tracking-wide"
               style={{ color: 'var(--text-secondary)' }}>
            <Link href="/" className="hover-subtle transition-opacity uppercase">
              HOME
            </Link>
            <span>•</span>
            <Link href="/blog" className="hover-subtle transition-opacity uppercase">
              BLOG
            </Link>
            <span>•</span>
            <span className="uppercase" style={{ color: 'var(--text-primary)' }}>
              NOT FOUND
            </span>
          </nav>
        </div>
      </section>

      {/* 404 Content - 既存のセクションスタイル踏襲 */}
      <section className="w-full section-spacing">
        <div className="page">
          <div className="max-w-4xl mx-auto text-center">
            {/* Error Icon */}
            <div className="w-24 h-24 mx-auto mb-8 md:mb-12 flex items-center justify-center radius-lg"
                 style={{ backgroundColor: 'var(--island-accent)' }}>
              <svg className="w-12 h-12" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            {/* Title - 既存のセクションタイトルパターン踏襲 */}
            <h1 className="font-serif text-xl md:text-2xl small-caps font-light mb-8 md:mb-12 tracking-wider leading-tight"
                style={{ color: 'var(--text-primary)' }}>
              ARTICLE NOT FOUND
            </h1>

            {/* Description */}
            <p className="font-sans text-sm font-light leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12"
               style={{ color: 'var(--text-secondary)' }}>
              お探しの記事が見つかりませんでした。<br />
              記事が削除されたか、URLが間違っている可能性があります。
            </p>

            {/* Navigation Options - 既存のグリッドパターン踏襲 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
              <Link href="/blog" className="group">
                <div className="radius-lg card-spacing text-center hover-subtle transition-opacity"
                     style={{ backgroundColor: 'var(--island-background)' }}>
                  <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-sm small-caps font-light mb-4 tracking-wider"
                      style={{ color: 'var(--text-primary)' }}>
                    BROWSE ARTICLES
                  </h3>
                  <p className="font-sans text-xs font-light leading-relaxed"
                     style={{ color: 'var(--text-secondary)' }}>
                    ブログ記事一覧を<br />
                    ご覧ください
                  </p>
                </div>
              </Link>

              <Link href="/" className="group">
                <div className="radius-lg card-spacing text-center hover-subtle transition-opacity"
                     style={{ backgroundColor: 'var(--island-accent)' }}>
                  <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-sm small-caps font-light mb-4 tracking-wider"
                      style={{ color: 'var(--text-primary)' }}>
                    GO HOME
                  </h3>
                  <p className="font-sans text-xs font-light leading-relaxed"
                     style={{ color: 'var(--text-secondary)' }}>
                    ホームページに<br />
                    戻る
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}