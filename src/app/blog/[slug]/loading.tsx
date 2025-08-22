export default function Loading() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      <section className="w-full section-spacing">
        <div className="page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-8 md:mb-12 flex items-center justify-center radius-lg animate-pulse"
                 style={{ backgroundColor: 'var(--island-accent)' }}>
              <div className="w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin"
                   style={{ color: 'var(--text-primary)' }}></div>
            </div>
            <h1 className="font-serif text-xl md:text-2xl small-caps font-light mb-8 md:mb-12 tracking-wider"
                style={{ color: 'var(--text-primary)' }}>
              LOADING ARTICLE...
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}