export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Ultra Minimal */}
      <section className="w-full py-24">
        <div className="container-fixed">
          <div className="text-center fade-in">
            <h1 className="font-serif text-2xl small-caps font-light text-gray-800 mb-4 tracking-wider">
              ATELIER
            </h1>
            <p className="font-sans text-xs font-ultra-light text-gray-600 tracking-wide uppercase">
              TOKYO • PARIS
            </p>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <section className="w-full py-24">
        <div className="container-fixed">
          <div className="grid-minimal fade-in-delay-1">
            {/* Main Fashion Image Placeholder */}
            <div className="col-span-full flex justify-center">
              <div className="w-full max-w-2xl">
                <div className="aspect-[3/4] bg-gray-50 image-soft relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="font-sans text-xs font-ultra-light text-gray-400 tracking-widest uppercase">
                      IMAGE PLACEHOLDER
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
          <div className="max-w-xl mx-auto text-center fade-in-delay-2">
            <h2 className="font-serif text-sm small-caps font-light text-gray-800 mb-8 tracking-wider">
              PHILOSOPHY
            </h2>
            <div className="space-y-8 font-sans text-sm font-light text-gray-600 leading-relaxed">
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
      </section>

      {/* Work Grid */}
      <section className="w-full py-24">
        <div className="container-fixed">
          <h2 className="font-serif text-sm small-caps font-light text-gray-800 mb-16 text-center tracking-wider">
            WORKS
          </h2>
          <div className="grid-minimal">
            {/* Work Item 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-50 image-soft mb-6 hover-subtle transition-opacity">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="font-sans text-xs font-ultra-light text-gray-400 tracking-widest uppercase">
                    PROJECT 01
                  </p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-sans text-xs font-ultra-light text-gray-700 tracking-wide uppercase mb-1">
                  LOGISTICS OPTIMIZATION
                </h3>
                <p className="font-sans text-xs font-ultra-light text-gray-500">
                  2024
                </p>
              </div>
            </div>

            {/* Work Item 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-50 image-soft mb-6 hover-subtle transition-opacity">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="font-sans text-xs font-ultra-light text-gray-400 tracking-widest uppercase">
                    PROJECT 02
                  </p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-sans text-xs font-ultra-light text-gray-700 tracking-wide uppercase mb-1">
                  COFFEE PENGUIN
                </h3>
                <p className="font-sans text-xs font-ultra-light text-gray-500">
                  2024
                </p>
              </div>
            </div>

            {/* Work Item 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-50 image-soft mb-6 hover-subtle transition-opacity">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="font-sans text-xs font-ultra-light text-gray-400 tracking-widest uppercase">
                    PROJECT 03
                  </p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-sans text-xs font-ultra-light text-gray-700 tracking-wide uppercase mb-1">
                  DIGITAL STRATEGY
                </h3>
                <p className="font-sans text-xs font-ultra-light text-gray-500">
                  2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Minimal */}
      <section className="w-full py-32 bg-gray-50">
        <div className="container-fixed">
          <div className="text-center">
            <h2 className="font-serif text-sm small-caps font-light text-gray-800 mb-8 tracking-wider">
              CONTACT
            </h2>
            <p className="font-sans text-xs font-ultra-light text-gray-600 tracking-wide uppercase hover-subtle transition-opacity cursor-pointer">
              HELLO@MARUYAMA.NET
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
