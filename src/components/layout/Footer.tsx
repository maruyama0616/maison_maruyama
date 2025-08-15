const Footer = () => {
  return (
    <footer className="w-full py-16 safe-area-bottom"
            style={{ backgroundColor: 'var(--page-background)' }}>
      <div className="container-fixed">
        <div className="text-center">
          <p className="font-sans text-xs font-ultra-light tracking-widest uppercase mb-4"
             style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} MARUYAMA
          </p>
          <p className="font-sans text-xs font-ultra-light tracking-wide"
             style={{ color: 'var(--text-muted)' }}>
            ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;