export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      {/* Hero Section - Ultra Minimal */}
      <section className="w-full py-24">
        <div className="container-fixed">
          <div className="text-center fade-in">
            <h1 className="font-serif text-2xl small-caps font-light mb-4 tracking-wider"
                style={{ color: 'var(--text-primary)' }}>
              ATELIER
            </h1>
            <p className="font-sans text-xs font-ultra-light tracking-wide uppercase"
               style={{ color: 'var(--text-secondary)' }}>
              TOKYO • PARIS
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="w-full py-24">
        <div className="container-fixed">
          <div className="fade-in-delay-1">
            {/* Hero Image Card */}
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[4/3] sm:aspect-[3/2] image-soft relative image-clip-rounded radius-lg"
                   style={{ backgroundColor: 'var(--island-accent)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-sans text-xs font-ultra-light tracking-widest uppercase mb-2"
                       style={{ color: 'var(--text-muted)' }}>
                      HERO IMAGE
                    </p>
                    <p className="font-sans text-xs font-ultra-light tracking-wide"
                       style={{ color: 'var(--text-muted)', opacity: 0.7 }}>
                      Premium Collection Preview
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full py-32">
        <div className="container-fixed">
          <div className="max-w-2xl mx-auto fade-in-delay-2">
            <div className="radius-lg p-12 text-center"
                 style={{ backgroundColor: 'var(--island-background)' }}>
              <h2 className="font-serif text-sm small-caps font-light mb-8 tracking-wider"
                  style={{ color: 'var(--text-primary)' }}>
                PHILOSOPHY
              </h2>
              <div className="space-y-8 font-sans text-sm font-light leading-relaxed"
                   style={{ color: 'var(--text-secondary)' }}>
                <p>
                  形にならないアイデアから、
                  具体的な表現へ。
                </p>
                <p>
                  日々の経験と洞察を通じて、
                  新しい視点を探求し続ける。
                </p>
                <p>
                  クリエイティブな思考と実践的なアプローチの
                  交差点で生まれるもの。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Grid */}
      <section className="w-full py-24">
        <div className="container-fixed">
          <h2 className="font-serif text-sm small-caps font-light mb-16 text-center tracking-wider"
              style={{ color: 'var(--text-primary)' }}>
            WORKS
          </h2>
          <div className="grid-minimal">
            {/* Work Item 1 */}
            <div className="group cursor-pointer tap-highlight">
              <div className="aspect-[4/5] image-soft mb-6 hover-subtle transition-opacity image-clip-rounded radius-lg"
                   style={{ backgroundColor: 'var(--island-accent)' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <p className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                     style={{ color: 'var(--text-muted)' }}>
                    PROJECT 01
                  </p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-sans text-xs font-ultra-light tracking-wide uppercase mb-1"
                    style={{ color: 'var(--text-primary)' }}>
                  LOGISTICS OPTIMIZATION
                </h3>
                <p className="font-sans text-xs font-ultra-light"
                   style={{ color: 'var(--text-secondary)' }}>
                  2024
                </p>
              </div>
            </div>

            {/* Work Item 2 */}
            <div className="group cursor-pointer tap-highlight">
              <div className="aspect-[4/5] image-soft mb-6 hover-subtle transition-opacity image-clip-rounded radius-lg"
                   style={{ backgroundColor: 'var(--island-accent)' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <p className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                     style={{ color: 'var(--text-muted)' }}>
                    PROJECT 02
                  </p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-sans text-xs font-ultra-light tracking-wide uppercase mb-1"
                    style={{ color: 'var(--text-primary)' }}>
                  COFFEE PENGUIN
                </h3>
                <p className="font-sans text-xs font-ultra-light"
                   style={{ color: 'var(--text-secondary)' }}>
                  2024
                </p>
              </div>
            </div>

            {/* Work Item 3 */}
            <div className="group cursor-pointer tap-highlight">
              <div className="aspect-[4/5] image-soft mb-6 hover-subtle transition-opacity image-clip-rounded radius-lg"
                   style={{ backgroundColor: 'var(--island-accent)' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <p className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                     style={{ color: 'var(--text-muted)' }}>
                    PROJECT 03
                  </p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-sans text-xs font-ultra-light tracking-wide uppercase mb-1"
                    style={{ color: 'var(--text-primary)' }}>
                  DIGITAL STRATEGY
                </h3>
                <p className="font-sans text-xs font-ultra-light"
                   style={{ color: 'var(--text-secondary)' }}>
                  2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Card Style */}
      <section className="w-full py-32">
        <div className="container-fixed">
          <div className="max-w-2xl mx-auto">
            <div className="radius-lg p-12 text-center"
                 style={{ backgroundColor: 'var(--island-accent)' }}>
              <h2 className="font-serif text-sm small-caps font-light mb-8 tracking-wider"
                  style={{ color: 'var(--text-primary)' }}>
                CONTACT
              </h2>
              <p className="font-sans text-xs font-ultra-light tracking-wide uppercase hover-subtle transition-opacity cursor-pointer tap-highlight"
                 style={{ color: 'var(--text-secondary)' }}>
                HELLO@MARUYAMA.NET
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
