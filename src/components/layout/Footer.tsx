import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-4">MARUYAMA</h3>
            <p className="text-gray-600 mb-4">
              Cool Life, Better Work.<br />
              成長は、日々の最適化から。
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.051-2.349-2.348 0-1.297 1.052-2.349 2.349-2.349 1.296 0 2.348 1.052 2.348 2.349 0 1.297-1.052 2.348-2.348 2.348zm3.568 0c-1.297 0-2.349-1.051-2.349-2.348 0-1.297 1.052-2.349 2.349-2.349s2.349 1.052 2.349 2.349c0 1.297-1.052 2.348-2.349 2.348zm3.568 0c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.349 2.348-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.297-1.052 2.348-2.349 2.348z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/category/career" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  キャリア
                </Link>
              </li>
              <li>
                <Link href="/blog/category/lifehack" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  ライフハック
                </Link>
              </li>
              <li>
                <Link href="/blog/category/creative" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  クリエイティブ
                </Link>
              </li>
              <li>
                <Link href="/blog/category/travel" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  海外ライフ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Maruyama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;