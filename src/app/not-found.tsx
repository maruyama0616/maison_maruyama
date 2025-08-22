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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>

            {/* Title - 既存のセクションタイトルパターン踏襲 */}
            <h1 className="font-serif text-xl md:text-2xl small-caps font-light mb-8 md:mb-12 tracking-wider leading-tight"
                style={{ color: 'var(--text-primary)' }}>
              PAGE NOT FOUND
            </h1>

            {/* Description */}
            <p className="font-sans text-sm font-light leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12"
               style={{ color: 'var(--text-secondary)' }}>
              お探しのページが見つかりませんでした。<br />
              ページが削除されたか、URLが間違っている可能性があります。
            </p>

            {/* Navigation Options - 既存のグリッドパターン踏襲 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              <Link href="/" className="group">
                <div className="radius-lg card-spacing text-center hover-subtle transition-opacity"
                     style={{ backgroundColor: 'var(--island-background)' }}>
                  <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-sm small-caps font-light mb-4 tracking-wider"
                      style={{ color: 'var(--text-primary)' }}>
                    HOME
                  </h3>
                  <p className="font-sans text-xs font-light leading-relaxed"
                     style={{ color: 'var(--text-secondary)' }}>
                    ホームページに<br />
                    戻る
                  </p>
                </div>
              </Link>

              <Link href="/health" className="group">
                <div className="radius-lg card-spacing text-center hover-subtle transition-opacity"
                     style={{ backgroundColor: 'var(--island-accent)' }}>
                  <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-sm small-caps font-light mb-4 tracking-wider"
                      style={{ color: 'var(--text-primary)' }}>
                    HEALTH
                  </h3>
                  <p className="font-sans text-xs font-light leading-relaxed"
                     style={{ color: 'var(--text-secondary)' }}>
                    健康と<br />
                    ウェルネス
                  </p>
                </div>
              </Link>

              <Link href="/ambition" className="group">
                <div className="radius-lg card-spacing text-center hover-subtle transition-opacity"
                     style={{ backgroundColor: 'var(--island-background)' }}>
                  <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-sm small-caps font-light mb-4 tracking-wider"
                      style={{ color: 'var(--text-primary)' }}>
                    AMBITION
                  </h3>
                  <p className="font-sans text-xs font-light leading-relaxed"
                     style={{ color: 'var(--text-secondary)' }}>
                    目標と<br />
                    成長
                  </p>
                </div>
              </Link>

              <Link href="/relationship" className="group">
                <div className="radius-lg card-spacing text-center hover-subtle transition-opacity"
                     style={{ backgroundColor: 'var(--island-accent)' }}>
                  <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-sm small-caps font-light mb-4 tracking-wider"
                      style={{ color: 'var(--text-primary)' }}>
                    RELATIONSHIP
                  </h3>
                  <p className="font-sans text-xs font-light leading-relaxed"
                     style={{ color: 'var(--text-secondary)' }}>
                    人間<br />
                    関係
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