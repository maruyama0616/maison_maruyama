const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-50 py-16">
      <div className="container-fixed">
        <div className="text-center">
          <p className="font-sans text-xs font-ultra-light text-gray-500 tracking-widest uppercase mb-4">
            © {new Date().getFullYear()} MARUYAMA ATELIER
          </p>
          <p className="font-sans text-xs font-ultra-light text-gray-400 tracking-wide">
            ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;