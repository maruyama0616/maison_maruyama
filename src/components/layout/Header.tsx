'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from '@/components/ui/ThemeToggle';
import ThemeSwitch from '@/components/ui/ThemeSwitch';
import SearchModal from '@/components/ui/SearchModal';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
  // State management for mobile menu, search modal, and scroll detection
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      {/* Island Header - Mobile & Desktop */}
      <header className="fixed top-0 left-0 right-0 z-50 safe-area-top">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="island-container h-16 flex items-center justify-center px-6">
            {/* Navigation Menu */}
            <nav className="flex items-center space-x-8">
              {/* Logo/Brand */}
              <Link href="/" className="flex items-center mr-8">
                <span 
                  className="text-lg font-medium tracking-wide"
                  style={{ 
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-serif)' 
                  }}
                >
                  MARUYAMA
                </span>
              </Link>

              {/* Main Navigation */}
              <Link href="/health"
                    className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--text-primary)' }}>
                Health
              </Link>
              <Link href="/ambition"
                    className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--text-primary)' }}>
                Ambition
              </Link>
              <Link href="/relationship"
                    className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--text-primary)' }}>
                Relationship
              </Link>
              <Link href="/money"
                    className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--text-primary)' }}>
                Money
              </Link>
              
              {/* Separator */}
              <div className="w-px h-4 bg-opacity-20" style={{ backgroundColor: 'var(--text-muted)' }}></div>
              
              {/* More Links */}
              <Link href="/about"
                    className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--text-secondary)' }}>
                About
              </Link>
              <Link href="/misc"
                    className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--text-secondary)' }}>
                Misc
              </Link>
              
              {/* Search Button */}
              <button
                onClick={openSearch}
                className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
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

        {/* Mobile Navigation */}
        <div className="block md:hidden">
          <div className="island-container h-14 flex items-center justify-between px-4">
            {/* Left Zone - Hamburger + Search */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMenu}
                className="tap-target tap-highlight relative"
                style={{ color: 'var(--text-primary)' }}
                aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
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
                onClick={openSearch}
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
                    className="text-sm font-light tracking-wider"
                    style={{ 
                      color: 'var(--text-primary)', 
                      fontFamily: 'var(--font-serif)' 
                    }}
                  >
                    MARUYAMA
                  </span>
                </Link>
              </div>
              
              {/* Logo Image - Shown on scroll */}
              <div 
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all ${
                  isScrolled ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-1 pointer-events-none'
                }`}
                style={{ 
                  transitionDuration: 'var(--duration-normal)',
                  transitionTimingFunction: 'var(--easing)'
                }}
              >
                <Link href="/" className="flex items-center">
                  <Image
                    src={theme === 'light' ? '/images/logo/MARUYAMA LOGO BK.png' : '/images/logo/MARUYAMA LOGO.png'}
                    alt="MARUYAMA"
                    width={32}
                    height={32}
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

      {/* Mobile Header-Expanding Menu */}
      <div className={`md:hidden fixed top-14 left-0 right-0 z-40 overflow-hidden transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div 
          className="island-container mx-4 mt-2"
          style={{ 
            backgroundColor: 'var(--island-background)',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          {/* Menu Content */}
          <nav className="px-6 py-12 text-center">
            {/* Categories */}
            <div className="mb-12">
              <div className="space-y-10">
                <Link href="/health" className="block py-4 tap-highlight" style={{ color: 'var(--text-primary)' }} onClick={closeMenu}>
                  <span className="text-xl font-light tracking-wide">Health</span>
                </Link>
                <Link href="/ambition" className="block py-4 tap-highlight" style={{ color: 'var(--text-primary)' }} onClick={closeMenu}>
                  <span className="text-xl font-light tracking-wide">Ambition</span>
                </Link>
                <Link href="/relationship" className="block py-4 tap-highlight" style={{ color: 'var(--text-primary)' }} onClick={closeMenu}>
                  <span className="text-xl font-light tracking-wide">Relationship</span>
                </Link>
                <Link href="/money" className="block py-4 tap-highlight" style={{ color: 'var(--text-primary)' }} onClick={closeMenu}>
                  <span className="text-xl font-light tracking-wide">Money</span>
                </Link>
              </div>
            </div>

            {/* More Links */}
            <div className="mb-12 pt-8">
              <div className="space-y-10">
                <Link href="/about" className="block py-4 tap-highlight" style={{ color: 'var(--text-primary)' }} onClick={closeMenu}>
                  <span className="text-xl font-light tracking-wide">About</span>
                </Link>
                <Link href="/misc" className="block py-4 tap-highlight" style={{ color: 'var(--text-primary)' }} onClick={closeMenu}>
                  <span className="text-xl font-light tracking-wide">Misc</span>
                </Link>
              </div>
            </div>

            {/* Theme Switch */}
            <div className="pt-8 border-t border-opacity-20" style={{ borderColor: 'var(--text-muted)' }}>
              <ThemeSwitch preventMenuClose={true} />
            </div>
          </nav>
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