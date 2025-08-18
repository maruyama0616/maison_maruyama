'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeSwitch from '@/components/ui/ThemeSwitch';
import SearchModal from '@/components/ui/SearchModal';
import MobileMenu from '@/components/ui/MobileMenu';
import MobileIslandMenu from '@/components/ui/MobileIslandMenu';
import { useTheme } from '@/contexts/ThemeContext';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  slug: string;
}

// Mock search results (same as SearchModal)
const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: '健康的なライフスタイルの作り方',
    excerpt: '毎日の小さな習慣が大きな変化をもたらす方法について',
    category: 'health',
    slug: 'healthy-lifestyle'
  },
  {
    id: '2',
    title: '目標達成のための戦略',
    excerpt: 'ambitionを実現するための具体的なステップとマインドセット',
    category: 'ambition',
    slug: 'goal-achievement'
  },
  {
    id: '3',
    title: '良好な人間関係を築く方法',
    excerpt: 'コミュニケーションスキルと信頼関係の構築について',
    category: 'relationship',
    slug: 'building-relationships'
  },
  {
    id: '4',
    title: '賢いお金の管理術',
    excerpt: '投資と節約のバランスを取った財務戦略',
    category: 'money',
    slug: 'money-management'
  }
];

const Header = () => {
  // State management for mobile menu, search modal, and scroll detection
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [desktopSearchQuery, setDesktopSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [desktopSearchResults, setDesktopSearchResults] = useState<SearchResult[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('header') && !target.closest('[data-desktop-search]')) {
        setIsMenuOpen(false);
        setIsMobileSearchOpen(false);
        setIsDesktopSearchOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Handle search query changes for mobile
  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = mockSearchResults.filter(
        item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Handle search query changes for desktop
  useEffect(() => {
    if (desktopSearchQuery.length > 0) {
      const filtered = mockSearchResults.filter(
        item =>
          item.title.toLowerCase().includes(desktopSearchQuery.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(desktopSearchQuery.toLowerCase())
      );
      setDesktopSearchResults(filtered);
    } else {
      setDesktopSearchResults([]);
    }
  }, [desktopSearchQuery]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const toggleDesktopSearch = () => {
    setIsDesktopSearchOpen(!isDesktopSearchOpen);
    if (!isDesktopSearchOpen) {
      setDesktopSearchQuery('');
    }
  };

  const closeDesktopSearch = () => {
    setIsDesktopSearchOpen(false);
    setDesktopSearchQuery('');
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    if (!isMobileSearchOpen) {
      setSearchQuery('');
    }
  };

  const closeMobileSearch = () => {
    setIsMobileSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      {/* Island Header - Mobile & Desktop */}
      <header className="fixed top-0 left-0 right-0 z-50 safe-area-top px-4 md:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="island-container h-16 flex items-center justify-between px-8 md:px-12 lg:px-20 xl:px-28">
            {/* Left Section - Main Categories */}
            <nav className="flex items-center header-nav-left">
              <Link href="/health"
                    className="text-xs font-light tracking-wide hover:text-opacity-70 transition-colors duration-200"
                    style={{ color: 'var(--text-primary)' }}>
                Health
              </Link>
              <Link href="/ambition"
                    className="text-xs font-light tracking-wide hover:text-opacity-70 transition-colors duration-200"
                    style={{ color: 'var(--text-primary)' }}>
                Ambition
              </Link>
              <Link href="/relationship"
                    className="text-xs font-light tracking-wide hover:text-opacity-70 transition-colors duration-200"
                    style={{ color: 'var(--text-primary)' }}>
                Relationship
              </Link>
              <Link href="/money"
                    className="text-xs font-light tracking-wide hover:text-opacity-70 transition-colors duration-200"
                    style={{ color: 'var(--text-primary)' }}>
                Money
              </Link>
            </nav>

            {/* Center Section - Brand Logo/Text */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
              {/* Full Text Logo - Visible by default, hidden on scroll */}
              <div 
                className={`absolute transition-all duration-500 ease-out ${
                  isScrolled ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
                }`}
              >
                <Link href="/" className="flex items-center pointer-events-auto px-2 py-1 rounded-lg hover:bg-black/5 focus:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 transition-colors duration-200">
                  <span 
                    className="text-lg font-bold tracking-wider whitespace-nowrap"
                    style={{ 
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-brand)',
                      fontWeight: '700'
                    }}
                  >
                    MARUYAMA
                  </span>
                </Link>
              </div>
              
              {/* Logo Image - Hidden by default, shown on scroll */}
              <div 
                className={`absolute transition-all duration-500 ease-out ${
                  isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
              >
                <Link href="/" className="flex items-center justify-center w-16 h-16 pointer-events-auto rounded-lg hover:bg-black/5 focus:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 transition-colors duration-200">
                  <Image
                    src={theme === 'light' ? '/images/logo/MARUYAMA LOGO BK.png' : '/images/logo/MARUYAMA LOGO.png'}
                    alt="MARUYAMA"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </Link>
              </div>
            </div>

            {/* Right Section - Secondary Links & Actions */}
            <nav className="flex items-center header-nav-right">
              <Link href="/about"
                    className="text-xs font-light tracking-wide hover:text-opacity-70 transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}>
                About
              </Link>
              <Link href="/misc"
                    className="text-xs font-light tracking-wide hover:text-opacity-70 transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}>
                Misc
              </Link>
              
              {/* Search Button */}
              <button
                onClick={toggleDesktopSearch}
                className="text-xs font-light tracking-wide hover:text-opacity-70 transition-colors duration-200"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="検索"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
                </svg>
              </button>
              
              {/* Theme Switch */}
              <ThemeSwitch />
            </nav>
          </div>
        </div>

        {/* Mobile Navigation - Hidden, replaced by Island Menu */}
        <div className="hidden md:hidden">
          <div className="island-container h-14 flex items-center justify-between px-4">
            {/* Left Zone - Hamburger + Search */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMenu}
                className="tap-target tap-highlight relative"
                style={{ color: 'var(--text-primary)' }}
                aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  {/* Hamburger Icon */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
                  }`}>
                    <div className="flex flex-col gap-1.5">
                      <div className="w-5 h-0.5 bg-current"></div>
                      <div className="w-5 h-0.5 bg-current"></div>
                      <div className="w-5 h-0.5 bg-current"></div>
                    </div>
                  </div>
                  
                  {/* Close Icon */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </button>
              <button
                onClick={toggleMobileSearch}
                className="tap-target tap-highlight"
                style={{ color: 'var(--text-primary)' }}
                aria-label="検索"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
                </svg>
              </button>
            </div>

            {/* Center Zone - Brand Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              {/* Full Text Logo - Hidden on scroll */}
              <div 
                className={`transition-all ${
                  isScrolled ? 'opacity-0 transform translate-y-1 pointer-events-none' : 'opacity-100 transform translate-y-0'
                }`}
                style={{ 
                  transitionDuration: 'var(--duration-normal)',
                  transitionTimingFunction: 'var(--easing)'
                }}
              >
                <Link href="/" className="flex flex-col items-center leading-none">
                  <span 
                    className="text-sm font-bold tracking-wider"
                    style={{ 
                      color: 'var(--text-primary)', 
                      fontFamily: 'var(--font-brand)',
                      fontWeight: '700'
                    }}
                  >
                    MARUYAMA
                  </span>
                </Link>
              </div>
              
              {/* Logo Image - Shown on scroll */}
              <div 
                className={`absolute -top-2 left-1/2 transform -translate-x-1/2 transition-all ${
                  isScrolled ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-1 pointer-events-none'
                }`}
                style={{ 
                  transitionDuration: 'var(--duration-normal)',
                  transitionTimingFunction: 'var(--easing)'
                }}
              >
                <Link href="/" className="flex items-center justify-center h-14">
                  <Image
                    src={theme === 'light' ? '/images/logo/MARUYAMA LOGO BK.png' : '/images/logo/MARUYAMA LOGO.png'}
                    alt="MARUYAMA"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>

            {/* Right Zone - Bookmark + Cart */}
            <div className="flex items-center space-x-2">
              <button
                className="tap-target tap-highlight"
                style={{ color: 'var(--text-primary)' }}
                aria-label="ブックマーク"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
              </button>
              <button
                className="tap-target tap-highlight relative"
                style={{ color: 'var(--text-primary)' }}
                aria-label="カート"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                {/* Cart Badge */}
                <span className="absolute -top-1 -right-1 w-4 h-4 radius-pill text-xs flex items-center justify-center"
                      style={{ 
                        backgroundColor: 'var(--text-primary)', 
                        color: 'var(--island-background)',
                        fontSize: '10px'
                      }}>
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Search Bar - Expanding Header */}
      <div className={`hidden md:block fixed top-20 left-0 right-0 z-40 overflow-hidden transition-all duration-500 ease-in-out ${
        isDesktopSearchOpen ? (desktopSearchResults.length > 0 ? 'max-h-96' : 'max-h-32') + ' opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div 
          className="island-container mx-6 mt-2"
          data-desktop-search
          style={{ 
            backgroundColor: 'var(--island-background)',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          <div className="p-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="記事を検索..."
                value={desktopSearchQuery}
                onChange={(e) => setDesktopSearchQuery(e.target.value)}
                className="w-full pl-10 pr-12 py-3 text-base font-light tracking-wide border-none outline-none rounded-lg"
                style={{ 
                  backgroundColor: 'var(--island-accent)',
                  color: 'var(--text-primary)'
                }}
                autoFocus
              />
              <button
                onClick={closeDesktopSearch}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                style={{ color: 'var(--text-muted)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search Results */}
            {desktopSearchResults.length > 0 && (
              <div className="mt-4 pt-4 border-t border-opacity-10" style={{ borderColor: 'var(--text-muted)' }}>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {desktopSearchResults.map((result) => (
                    <Link
                      key={result.id}
                      href={`/${result.category}/${result.slug}`}
                      onClick={closeDesktopSearch}
                      className="block p-3 rounded-lg hover:opacity-70 transition-opacity"
                      style={{ backgroundColor: 'var(--island-accent)' }}
                    >
                      <div className="mb-1">
                        <span 
                          className="text-xs font-medium tracking-wider uppercase"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {result.category}
                        </span>
                      </div>
                      <h3 
                        className="text-sm font-light tracking-wide mb-1"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {result.title}
                      </h3>
                      <p 
                        className="text-xs font-light leading-relaxed line-clamp-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {result.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Island Mobile Menu (Maison Margiela / Apple Style) */}
      <div className="block md:hidden">
        <MobileIslandMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
      </div>

      {/* Glass Mobile Menu - Hidden for now, keeping as fallback */}
      <div className="hidden">
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </div>

      {/* Mobile Search Bar - Expanding Header */}
      <div className={`md:hidden fixed top-14 left-0 right-0 z-40 overflow-hidden transition-all duration-500 ease-in-out ${
        isMobileSearchOpen ? (searchResults.length > 0 ? 'max-h-96' : 'max-h-32') + ' opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div 
          className="island-container mx-4 mt-2"
          style={{ 
            backgroundColor: 'var(--island-background)',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          <div className="p-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="記事を検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-12 py-3 text-base font-light tracking-wide border-none outline-none rounded-lg"
                style={{ 
                  backgroundColor: 'var(--island-accent)',
                  color: 'var(--text-primary)'
                }}
                autoFocus
              />
              <button
                onClick={closeMobileSearch}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                style={{ color: 'var(--text-muted)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-4 pt-4 border-t border-opacity-10" style={{ borderColor: 'var(--text-muted)' }}>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {searchResults.map((result) => (
                    <Link
                      key={result.id}
                      href={`/${result.category}/${result.slug}`}
                      onClick={closeMobileSearch}
                      className="block p-3 rounded-lg hover:opacity-70 transition-opacity"
                      style={{ backgroundColor: 'var(--island-accent)' }}
                    >
                      <div className="mb-1">
                        <span 
                          className="text-xs font-medium tracking-wider uppercase"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {result.category}
                        </span>
                      </div>
                      <h3 
                        className="text-sm font-light tracking-wide mb-1"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {result.title}
                      </h3>
                      <p 
                        className="text-xs font-light leading-relaxed line-clamp-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {result.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Header Spacer */}
      <div className="h-16"></div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </>
  );
};

export default Header;