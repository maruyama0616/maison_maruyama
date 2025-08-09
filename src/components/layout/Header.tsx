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
        className="sticky top-0 left-0 right-0 z-50 transition-all duration-300 mx-3 mt-3 rounded-lg"
        style={{ backgroundColor: '#F5F5F2' }}
      >
        {/* Main Header Row */}
        <div className="flex items-center justify-between h-16 px-6">
          {/* Left - Brand Selector */}
          <div className="flex items-center space-x-3">
            <div 
              className="px-4 py-2 rounded text-sm font-medium tracking-wide text-gray-800 transition-colors duration-300"
              style={{ backgroundColor: '#EAE9E4' }}
            >
              Maison Maruyama
            </div>
            <div className="px-4 py-2 text-sm font-medium text-gray-600 tracking-wide hover:text-gray-800 cursor-pointer transition-colors duration-300 rounded">
              MM6
            </div>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div 
              className={`transition-all duration-500 ${
                isScrolled ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
              }`}
            >
              <Link href="/" className="font-sans text-base font-light tracking-widest text-gray-800">
                Maison Maruyama PARIS
              </Link>
            </div>
            <div 
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                isScrolled ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'
              }`}
            >
              <Link href="/" className="font-sans text-lg font-medium text-gray-800">
                MM
              </Link>
            </div>
          </div>

          {/* Right - Function Links */}
          <div className="flex items-center space-x-8">
            <button className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors duration-300">
              Search
            </button>
            <button className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors duration-300">
              Account
            </button>
            <button className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors duration-300">
              Wishlist
            </button>
            <button className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors duration-300">
              Cart (0)
            </button>
          </div>
        </div>

        {/* Navigation Row */}
        <div className="border-t border-gray-300/30 px-6">
          <nav className="flex items-center h-12 space-x-12">
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('womens')}
              onMouseLeave={handleMenuLeave}
            >
              <Link 
                href="/womens" 
                className="text-sm font-regular text-gray-800 hover:text-gray-600 transition-colors duration-300 tracking-wide"
                style={{ color: '#222222' }}
              >
                ウィメンズ
              </Link>
            </div>
            
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('mens')}
              onMouseLeave={handleMenuLeave}
            >
              <Link 
                href="/mens" 
                className="text-sm font-regular text-gray-800 hover:text-gray-600 transition-colors duration-300 tracking-wide"
                style={{ color: '#222222' }}
              >
                メンズ
              </Link>
            </div>
            
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('allgender')}
              onMouseLeave={handleMenuLeave}
            >
              <Link 
                href="/allgender" 
                className="text-sm font-regular text-gray-800 hover:text-gray-600 transition-colors duration-300 tracking-wide"
                style={{ color: '#222222' }}
              >
                オールジェンダー
              </Link>
            </div>
            
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('shows')}
              onMouseLeave={handleMenuLeave}
            >
              <Link 
                href="/shows" 
                className="text-sm font-regular text-gray-800 hover:text-gray-600 transition-colors duration-300 tracking-wide"
                style={{ color: '#222222' }}
              >
                Shows
              </Link>
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('editorial')}
              onMouseLeave={handleMenuLeave}
            >
              <Link 
                href="/editorial" 
                className="text-sm font-regular text-gray-800 hover:text-gray-600 transition-colors duration-300 tracking-wide"
                style={{ color: '#222222' }}
              >
                Editorial
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Mega Menu */}
      {activeMenu && (
        <div
          className="fixed left-3 right-3 z-40 rounded-lg shadow-sm transition-all duration-400 transform"
          style={{ 
            backgroundColor: '#EAE9E4',
            top: '100px',
            opacity: activeMenu ? 1 : 0,
            transform: activeMenu ? 'translateY(0)' : 'translateY(-15px)'
          }}
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={handleMenuLeave}
        >
          <div className="px-8 py-12">
            {activeMenu === 'womens' && (
              <div className="grid grid-cols-4 gap-16">
                <div>
                  <h3 className="font-sans text-sm font-bold text-gray-900 mb-6 tracking-wide">
                    バッグ
                  </h3>
                  <ul className="space-y-3">
                    <li><Link href="/womens/bags/tote" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">トートバッグ</Link></li>
                    <li><Link href="/womens/bags/shoulder" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">ショルダーバッグ</Link></li>
                    <li><Link href="/womens/bags/clutch" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">クラッチバッグ</Link></li>
                    <li><Link href="/womens/bags/all" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">すべてのバッグ</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-sans text-sm font-bold text-gray-900 mb-6 tracking-wide">
                    ウェア
                  </h3>
                  <ul className="space-y-3">
                    <li><Link href="/womens/wear/jackets" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">ジャケット</Link></li>
                    <li><Link href="/womens/wear/dresses" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">ドレス</Link></li>
                    <li><Link href="/womens/wear/knitwear" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">ニットウェア</Link></li>
                    <li><Link href="/womens/wear/all" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">すべてのウェア</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-sans text-sm font-bold text-gray-900 mb-6 tracking-wide">
                    シューズ
                  </h3>
                  <ul className="space-y-3">
                    <li><Link href="/womens/shoes/boots" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">ブーツ</Link></li>
                    <li><Link href="/womens/shoes/sneakers" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">スニーカー</Link></li>
                    <li><Link href="/womens/shoes/heels" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">ヒール</Link></li>
                    <li><Link href="/womens/shoes/all" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">すべてのシューズ</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-sans text-sm font-bold text-gray-900 mb-6 tracking-wide">
                    アクセサリー
                  </h3>
                  <ul className="space-y-3">
                    <li><Link href="/womens/accessories/jewelry" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">ジュエリー</Link></li>
                    <li><Link href="/womens/accessories/scarves" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">スカーフ</Link></li>
                    <li><Link href="/womens/accessories/belts" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">ベルト</Link></li>
                    <li><Link href="/womens/accessories/all" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">すべてのアクセサリー</Link></li>
                  </ul>
                </div>
              </div>
            )}

            {activeMenu === 'mens' && (
              <div className="grid grid-cols-3 gap-16">
                <div>
                  <h3 className="font-sans text-sm font-bold text-gray-900 mb-6 tracking-wide">
                    ウェア
                  </h3>
                  <ul className="space-y-3">
                    <li><Link href="/mens/wear/suits" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">スーツ</Link></li>
                    <li><Link href="/mens/wear/shirts" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">シャツ</Link></li>
                    <li><Link href="/mens/wear/outerwear" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">アウターウェア</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-sans text-sm font-bold text-gray-900 mb-6 tracking-wide">
                    シューズ
                  </h3>
                  <ul className="space-y-3">
                    <li><Link href="/mens/shoes/dress" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">ドレスシューズ</Link></li>
                    <li><Link href="/mens/shoes/casual" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">カジュアルシューズ</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-sans text-sm font-bold text-gray-900 mb-6 tracking-wide">
                    アクセサリー
                  </h3>
                  <ul className="space-y-3">
                    <li><Link href="/mens/accessories/watches" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">ウォッチ</Link></li>
                    <li><Link href="/mens/accessories/bags" className="text-sm font-regular text-gray-700 hover:text-gray-500 transition-colors duration-300">バッグ</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Spacer for sticky header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;