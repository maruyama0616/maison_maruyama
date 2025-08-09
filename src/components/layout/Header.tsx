'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ backgroundColor: '#F5F5F2' }}
      >
        <div className="h-16 flex items-center justify-between px-6">
          {/* Left - Brand Selector */}
          <div className="flex items-center space-x-2">
            <div 
              className="px-4 py-2 rounded-lg text-xs font-light tracking-wide"
              style={{ backgroundColor: '#EAE9E4' }}
            >
              MARUYAMA
            </div>
            <div className="px-4 py-2 text-xs font-ultra-light text-gray-600 tracking-wide hover-subtle cursor-pointer">
              MM
            </div>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div 
              className={`transition-all duration-500 ${
                isScrolled ? 'opacity-0 transform scale-75' : 'opacity-100 transform scale-100'
              }`}
            >
              <Link href="/" className="font-serif text-sm font-light tracking-widest text-gray-800">
                MARUYAMA PARIS
              </Link>
            </div>
            <div 
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                isScrolled ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-125'
              }`}
            >
              <Link href="/" className="font-serif text-lg font-light text-gray-800">
                M
              </Link>
            </div>
          </div>

          {/* Right - Function Links */}
          <div className="flex items-center space-x-6">
            <button className="text-xs font-ultra-light text-gray-600 tracking-wide hover-subtle">
              検索
            </button>
            <button className="text-xs font-ultra-light text-gray-600 tracking-wide hover-subtle">
              アカウント
            </button>
            <button className="text-xs font-ultra-light text-gray-600 tracking-wide hover-subtle">
              Wishlist
            </button>
            <button className="text-xs font-ultra-light text-gray-600 tracking-wide hover-subtle">
              カート
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
          <div className="flex justify-center items-center h-12 space-x-12">
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('works')}
              onMouseLeave={handleMenuLeave}
            >
              <Link 
                href="/works" 
                className="text-xs font-light text-gray-700 tracking-wide uppercase hover-subtle transition-opacity duration-300"
              >
                WORKS
              </Link>
            </div>
            
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('collections')}
              onMouseLeave={handleMenuLeave}
            >
              <Link 
                href="/collections" 
                className="text-xs font-light text-gray-700 tracking-wide uppercase hover-subtle transition-opacity duration-300"
              >
                COLLECTIONS
              </Link>
            </div>
            
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('editorial')}
              onMouseLeave={handleMenuLeave}
            >
              <Link 
                href="/editorial" 
                className="text-xs font-light text-gray-700 tracking-wide uppercase hover-subtle transition-opacity duration-300"
              >
                EDITORIAL
              </Link>
            </div>
            
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('atelier')}
              onMouseLeave={handleMenuLeave}
            >
              <Link 
                href="/atelier" 
                className="text-xs font-light text-gray-700 tracking-wide uppercase hover-subtle transition-opacity duration-300"
              >
                ATELIER
              </Link>
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('about')}
              onMouseLeave={handleMenuLeave}
            >
              <Link 
                href="/about" 
                className="text-xs font-light text-gray-700 tracking-wide uppercase hover-subtle transition-opacity duration-300"
              >
                ABOUT
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Mega Menu */}
      {activeMenu && (
        <div
          className="fixed top-28 left-0 right-0 z-40 transition-all duration-300 transform"
          style={{ 
            backgroundColor: '#EAE9E4',
            opacity: activeMenu ? 1 : 0,
            transform: activeMenu ? 'translateY(0)' : 'translateY(-10px)'
          }}
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={handleMenuLeave}
        >
          <div className="container-fixed py-12">
            {activeMenu === 'works' && (
              <div className="grid grid-cols-4 gap-12">
                <div>
                  <h3 className="font-sans text-sm font-medium text-gray-800 mb-6 tracking-wide uppercase">
                    DIGITAL
                  </h3>
                  <ul className="space-y-3">
                    <li><Link href="/works/web" className="text-xs font-ultra-light text-gray-600 hover-subtle">Web Development</Link></li>
                    <li><Link href="/works/app" className="text-xs font-ultra-light text-gray-600 hover-subtle">App Design</Link></li>
                    <li><Link href="/works/ui" className="text-xs font-ultra-light text-gray-600 hover-subtle">UI/UX</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-sans text-sm font-medium text-gray-800 mb-6 tracking-wide uppercase">
                    STRATEGY
                  </h3>
                  <ul className="space-y-3">
                    <li><Link href="/works/logistics" className="text-xs font-ultra-light text-gray-600 hover-subtle">Logistics</Link></li>
                    <li><Link href="/works/optimization" className="text-xs font-ultra-light text-gray-600 hover-subtle">Optimization</Link></li>
                    <li><Link href="/works/consulting" className="text-xs font-ultra-light text-gray-600 hover-subtle">Consulting</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-sans text-sm font-medium text-gray-800 mb-6 tracking-wide uppercase">
                    CREATIVE
                  </h3>
                  <ul className="space-y-3">
                    <li><Link href="/works/coffee-penguin" className="text-xs font-ultra-light text-gray-600 hover-subtle">Coffee Penguin</Link></li>
                    <li><Link href="/works/branding" className="text-xs font-ultra-light text-gray-600 hover-subtle">Branding</Link></li>
                    <li><Link href="/works/photography" className="text-xs font-ultra-light text-gray-600 hover-subtle">Photography</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-sans text-sm font-medium text-gray-800 mb-6 tracking-wide uppercase">
                    ARCHIVE
                  </h3>
                  <ul className="space-y-3">
                    <li><Link href="/works/2024" className="text-xs font-ultra-light text-gray-600 hover-subtle">2024</Link></li>
                    <li><Link href="/works/2023" className="text-xs font-ultra-light text-gray-600 hover-subtle">2023</Link></li>
                    <li><Link href="/works/all" className="text-xs font-ultra-light text-gray-600 hover-subtle">All Works</Link></li>
                  </ul>
                </div>
              </div>
            )}

            {activeMenu === 'collections' && (
              <div className="grid grid-cols-3 gap-12">
                <div>
                  <h3 className="font-sans text-sm font-medium text-gray-800 mb-6 tracking-wide uppercase">
                    LATEST
                  </h3>
                  <ul className="space-y-3">
                    <li><Link href="/collections/spring-2025" className="text-xs font-ultra-light text-gray-600 hover-subtle">Spring 2025</Link></li>
                    <li><Link href="/collections/winter-2024" className="text-xs font-ultra-light text-gray-600 hover-subtle">Winter 2024</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-sans text-sm font-medium text-gray-800 mb-6 tracking-wide uppercase">
                    THEMES
                  </h3>
                  <ul className="space-y-3">
                    <li><Link href="/collections/minimalism" className="text-xs font-ultra-light text-gray-600 hover-subtle">Minimalism</Link></li>
                    <li><Link href="/collections/functionality" className="text-xs font-ultra-light text-gray-600 hover-subtle">Functionality</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-sans text-sm font-medium text-gray-800 mb-6 tracking-wide uppercase">
                    ARCHIVE
                  </h3>
                  <ul className="space-y-3">
                    <li><Link href="/collections/archive" className="text-xs font-ultra-light text-gray-600 hover-subtle">View All</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-28"></div>
    </>
  );
};

export default Header;