'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

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
              ERROR
            </span>
          </nav>
        </div>
      </section>

      {/* Error Content - 既存のセクションスタイル踏襲 */}
      <section className="w-full section-spacing">
        <div className="page">
          <div className="max-w-4xl mx-auto text-center">
            {/* Error Icon */}
            <div className="w-24 h-24 mx-auto mb-8 md:mb-12 flex items-center justify-center radius-lg"
                 style={{ backgroundColor: 'var(--island-accent)' }}>
              <svg className="w-12 h-12" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Title - 既存のセクションタイトルパターン踏襲 */}
            <h1 className="font-serif text-xl md:text-2xl small-caps font-light mb-8 md:mb-12 tracking-wider leading-tight"
                style={{ color: 'var(--text-primary)' }}>
              SOMETHING WENT WRONG
            </h1>

            {/* Description */}
            <p className="font-sans text-sm font-light leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12"
               style={{ color: 'var(--text-secondary)' }}>
              申し訳ございません。予期しないエラーが発生しました。<br />
              ページを再読み込みするか、しばらく時間をおいてからお試しください。
            </p>

            {/* Error Details (in development) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="radius-lg card-spacing mb-8 md:mb-12 text-left max-w-2xl mx-auto"
                   style={{ backgroundColor: 'var(--island-background)' }}>
                <h3 className="font-serif text-sm small-caps font-light mb-4 tracking-wider"
                    style={{ color: 'var(--text-primary)' }}>
                  ERROR DETAILS
                </h3>
                <pre className="font-mono text-xs font-light leading-relaxed overflow-auto"
                     style={{ color: 'var(--text-secondary)' }}>
                  {error.message}
                </pre>
              </div>
            )}

            {/* Action Buttons - 既存のグリッドパターン踏襲 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
              <button
                onClick={() => reset()}
                className="radius-lg card-spacing text-center hover-subtle transition-opacity group"
                style={{ backgroundColor: 'var(--island-background)' }}
              >
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-serif text-sm small-caps font-light mb-4 tracking-wider"
                    style={{ color: 'var(--text-primary)' }}>
                  TRY AGAIN
                </h3>
                <p className="font-sans text-xs font-light leading-relaxed"
                   style={{ color: 'var(--text-secondary)' }}>
                  ページを<br />
                  再読み込み
                </p>
              </button>

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