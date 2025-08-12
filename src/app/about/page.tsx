import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      {/* Hero Section */}
      <section className="w-full py-24">
        <div className="container-fixed">
          <div className="text-center fade-in">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12" style={{ color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="font-serif text-2xl small-caps font-light mb-4 tracking-wider"
                style={{ color: 'var(--text-primary)' }}>
              ABOUT / CONCEPT
            </h1>
            <p className="font-sans text-sm font-light max-w-2xl mx-auto"
               style={{ color: 'var(--text-secondary)' }}>
              このサイトのコンセプトと私について
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16">
        <div className="container-fixed">
          <div className="max-w-4xl mx-auto">
            {/* Site Concept */}
            <div className="mb-16 fade-in-delay-1">
              <div className="radius-lg p-12"
                   style={{ backgroundColor: 'var(--island-background)' }}>
                <h2 className="font-serif text-lg small-caps font-light mb-8 text-center tracking-wider"
                    style={{ color: 'var(--text-primary)' }}>
                  SITE CONCEPT
                </h2>
                <div className="space-y-6 font-sans text-sm font-light leading-relaxed"
                     style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Cool Life, Better Work</span> 
                    – これが私の人生哲学です。
                  </p>
                  <p>
                    現代社会において、私たちは常に多くの選択肢に直面しています。
                    健康、仕事、人間関係、お金 – これらすべての分野で最適な判断を下し、
                    バランスの取れた充実した人生を送ることは簡単ではありません。
                  </p>
                  <p>
                    このサイトでは、私自身の経験と学びを通じて得た知識やヒントを、
                    4つの主要な分野に分けて共有しています：
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li><strong style={{ color: 'var(--text-primary)' }}>Health</strong> - 心身の健康とウェルネス</li>
                    <li><strong style={{ color: 'var(--text-primary)' }}>Ambition</strong> - 目標達成と自己実現</li>
                    <li><strong style={{ color: 'var(--text-primary)' }}>Relationship</strong> - 人間関係とコミュニケーション</li>
                    <li><strong style={{ color: 'var(--text-primary)' }}>Money</strong> - 財務管理と資産形成</li>
                  </ul>
                  <p>
                    これらの要素が調和することで、真に豊かな人生を築くことができると信じています。
                  </p>
                </div>
              </div>
            </div>

            {/* About Me */}
            <div className="mb-16 fade-in-delay-2">
              <div className="radius-lg p-12"
                   style={{ backgroundColor: 'var(--island-accent)' }}>
                <h2 className="font-serif text-lg small-caps font-light mb-8 text-center tracking-wider"
                    style={{ color: 'var(--text-primary)' }}>
                  ABOUT MARUYAMA
                </h2>
                <div className="space-y-6 font-sans text-sm font-light leading-relaxed"
                     style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    はじめまして、まるやまです。
                  </p>
                  <p>
                    東京とパリを拠点に、クリエイティブワークと人生の最適化に取り組んでいます。
                    テクノロジー、デザイン、そして人間の本質的な幸福について深く考えることが好きです。
                  </p>
                  <p>
                    このブログでは、私が実際に試行錯誤しながら学んだことや、
                    効果的だと感じた方法論を中心に発信しています。
                    完璧な答えを提供するのではなく、一緒に考え、成長していけるような
                    コミュニティを作りたいと思っています。
                  </p>
                  <p>
                    読者の皆さまが、より充実した人生を送るためのヒントを
                    ここで見つけていただけることを願っています。
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="mb-16 fade-in-delay-3">
              <div className="radius-lg p-12"
                   style={{ backgroundColor: 'var(--island-background)' }}>
                <h2 className="font-serif text-lg small-caps font-light mb-8 text-center tracking-wider"
                    style={{ color: 'var(--text-primary)' }}>
                  PHILOSOPHY
                </h2>
                <div className="space-y-8 font-sans text-sm font-light leading-relaxed text-center"
                     style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    形にならないアイデアから、<br />
                    具体的な表現へ。
                  </p>
                  <p>
                    日々の経験と洞察を通じて、<br />
                    新しい視点を探求し続ける。
                  </p>
                  <p>
                    クリエイティブな思考と実践的なアプローチの<br />
                    交差点で生まれるもの。
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="fade-in-delay-4">
              <div className="radius-lg p-12 text-center"
                   style={{ backgroundColor: 'var(--island-accent)' }}>
                <h2 className="font-serif text-lg small-caps font-light mb-8 tracking-wider"
                    style={{ color: 'var(--text-primary)' }}>
                  GET IN TOUCH
                </h2>
                <p className="font-sans text-sm font-light mb-6"
                   style={{ color: 'var(--text-secondary)' }}>
                  ご質問、ご意見、コラボレーションのご相談など、<br />
                  お気軽にお声かけください。
                </p>
                <a 
                  href="mailto:hello@maruyama.net"
                  className="inline-block font-sans text-xs font-ultra-light tracking-wide uppercase hover-subtle transition-opacity"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  HELLO@MARUYAMA.NET
                </a>
              </div>
            </div>
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