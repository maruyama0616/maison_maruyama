import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-50">
      <div className="container-fixed">
        <nav className="flex flex-col items-center py-12">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-serif text-xs small-caps font-light text-gray-800 hover-subtle transition-opacity mb-8"
          >
            MARUYAMA
          </Link>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-12">
            <Link
              href="/"
              className="font-sans text-xs font-ultra-light text-gray-600 hover-subtle transition-opacity tracking-wide uppercase"
            >
              Home
            </Link>
            <Link
              href="/collections"
              className="font-sans text-xs font-ultra-light text-gray-600 hover-subtle transition-opacity tracking-wide uppercase"
            >
              Collections
            </Link>
            <Link
              href="/editorial"
              className="font-sans text-xs font-ultra-light text-gray-600 hover-subtle transition-opacity tracking-wide uppercase"
            >
              Editorial
            </Link>
            <Link
              href="/atelier"
              className="font-sans text-xs font-ultra-light text-gray-600 hover-subtle transition-opacity tracking-wide uppercase"
            >
              Atelier
            </Link>
            <Link
              href="/contact"
              className="font-sans text-xs font-ultra-light text-gray-600 hover-subtle transition-opacity tracking-wide uppercase"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;