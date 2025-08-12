'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import ThemeSwitch from '@/components/ui/ThemeSwitch';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('header')) {
        setIsDesktopMenuOpen(false);
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

  const toggleDesktopMenu = () => {
    setIsDesktopMenuOpen(!isDesktopMenuOpen);
  };

  const closeDesktopMenu = () => {
    setIsDesktopMenuOpen(false);
  };

  return (
    <>
      {/* Island Header - Mobile & Desktop */}
      <header className="fixed top-0 left-0 right-0 z-50 safe-area-top">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div 
            className={`island-container transition-all duration-500 ease-in-out px-6 ${
              isDesktopMenuOpen ? 'h-auto py-8' : 'h-16'
            }`}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between h-16">
              {/* Left - Brand Selector */}
              <div className="flex items-center space-x-3">
                <div 
                  className="px-4 py-2 radius-sm text-sm font-medium tracking-wide tap-highlight"
                  style={{ 
                    backgroundColor: 'var(--island-accent)', 
                    color: 'var(--text-primary)' 
                  }}
                >
                  MARUYAMA
                </div>
                <div className="px-4 py-2 text-sm font-medium tracking-wide tap-highlight cursor-pointer"
                     style={{ color: 'var(--text-secondary)' }}>
                  TOKYO
                </div>
              </div>

              {/* Center - Logo */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div 
                  className={`transition-all ${
                    isScrolled || isDesktopMenuOpen ? 'opacity-0 transform translate-y-1 pointer-events-none' : 'opacity-100 transform translate-y-0'
                  }`}
                  style={{ 
                    transitionDuration: 'var(--duration-normal)',
                    transitionTimingFunction: 'var(--easing)'
                  }}
                >
                  <Link href="/" className="flex flex-col items-center leading-none">
                    <span 
                      className="text-base font-light tracking-wider"
                      style={{ 
                        color: 'var(--text-primary)', 
                        fontFamily: 'var(--font-serif)' 
                      }}
                    >
                      MARUYAMA
                    </span>
                  </Link>
                </div>
                
                <div 
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all ${
                    isScrolled && !isDesktopMenuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-1 pointer-events-none'
                  }`}
                  style={{ 
                    transitionDuration: 'var(--duration-normal)',
                    transitionTimingFunction: 'var(--easing)'
                  }}
                >
                  <Link href="/" className="flex items-center">
                    <span 
                      className="text-lg font-medium tracking-wide"
                      style={{ 
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-serif)' 
                      }}
                    >
                      M
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right - Menu Button */}
              <button
                onClick={toggleDesktopMenu}
                className="flex items-center space-x-2 text-sm font-light tap-highlight transition-all duration-200"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span>Menu</span>
                <div className={`transition-transform duration-300 ${isDesktopMenuOpen ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Expanded Menu */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isDesktopMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-8 pb-4">
                {/* Categories */}
                <div className="text-center mb-8">
                  <h3 className="text-xs font-medium tracking-widest uppercase mb-6" 
                      style={{ color: 'var(--text-muted)' }}>
                    Categories
                  </h3>
                  <nav className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link href="/health" onClick={closeDesktopMenu}
                          className="block py-3 text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                          style={{ color: 'var(--text-primary)' }}>
                      Health
                    </Link>
                    <Link href="/ambition" onClick={closeDesktopMenu}
                          className="block py-3 text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                          style={{ color: 'var(--text-primary)' }}>
                      Ambition
                    </Link>
                    <Link href="/relationship" onClick={closeDesktopMenu}
                          className="block py-3 text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                          style={{ color: 'var(--text-primary)' }}>
                      Relationship
                    </Link>
                    <Link href="/money" onClick={closeDesktopMenu}
                          className="block py-3 text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                          style={{ color: 'var(--text-primary)' }}>
                      Money
                    </Link>
                  </nav>
                </div>

                {/* More Links & Theme */}
                <div className="flex justify-center items-center space-x-12">
                  <Link href="/about" onClick={closeDesktopMenu}
                        className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--text-secondary)' }}>
                    About
                  </Link>
                  <Link href="/misc" onClick={closeDesktopMenu}
                        className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--text-secondary)' }}>
                    Misc
                  </Link>
                  <ThemeSwitch />
                </div>
              </div>
            </div>
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
                    <div className="flex flex-col space-y-1">
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
                  <span 
                    className="text-xs tracking-widest opacity-75"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    TOKYO
                  </span>
                </Link>
              </div>
              
              {/* Compact Logo - Shown on scroll */}
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
                  <span 
                    className="text-lg font-medium tracking-wide"
                    style={{ 
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-serif)' 
                    }}
                  >
                    M
                  </span>
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

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-40 transition-opacity"
            style={{ transitionDuration: 'var(--duration-normal)' }}
            onClick={closeMenu}
          />
          
          {/* Drawer Sheet */}
          <div className="fixed inset-x-0 bottom-0 z-50 safe-area-bottom animate-fade-slide-up"
               style={{ 
                 backgroundColor: 'var(--island-background)',
                 borderTopLeftRadius: 'var(--radius-xl)',
                 borderTopRightRadius: 'var(--radius-xl)'
               }}>
            
            {/* Drag Handle */}
            <div className="flex justify-center pt-4 pb-6">
              <div className="w-12 h-1 radius-pill" style={{ backgroundColor: 'var(--text-muted)' }}></div>
            </div>

            {/* Menu Content */}
            <nav className="px-6 pb-8 text-center">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xs font-medium tracking-widest uppercase mb-6" 
                    style={{ color: 'var(--text-muted)' }}>
                  Categories
                </h3>
                <div className="space-y-4">
                  <Link href="/health" className="block py-3 tap-highlight" style={{ color: 'var(--text-primary)' }} onClick={closeMenu}>
                    <span className="text-lg font-light tracking-wide">Health</span>
                  </Link>
                  <Link href="/ambition" className="block py-3 tap-highlight" style={{ color: 'var(--text-primary)' }} onClick={closeMenu}>
                    <span className="text-lg font-light tracking-wide">Ambition</span>
                  </Link>
                  <Link href="/relationship" className="block py-3 tap-highlight" style={{ color: 'var(--text-primary)' }} onClick={closeMenu}>
                    <span className="text-lg font-light tracking-wide">Relationship</span>
                  </Link>
                  <Link href="/money" className="block py-3 tap-highlight" style={{ color: 'var(--text-primary)' }} onClick={closeMenu}>
                    <span className="text-lg font-light tracking-wide">Money</span>
                  </Link>
                </div>
              </div>

              {/* More Links */}
              <div className="mb-8">
                <h3 className="text-xs font-medium tracking-widest uppercase mb-6" 
                    style={{ color: 'var(--text-muted)' }}>
                  More
                </h3>
                <div className="space-y-4">
                  <Link href="/about" className="block py-3 tap-highlight" style={{ color: 'var(--text-primary)' }} onClick={closeMenu}>
                    <span className="text-lg font-light tracking-wide">About</span>
                  </Link>
                  <Link href="/misc" className="block py-3 tap-highlight" style={{ color: 'var(--text-primary)' }} onClick={closeMenu}>
                    <span className="text-lg font-light tracking-wide">Misc</span>
                  </Link>
                </div>
              </div>

              {/* Theme Switch */}
              <div className="pt-4 border-t border-opacity-20" style={{ borderColor: 'var(--text-muted)' }}>
                <h3 className="text-xs font-medium tracking-widest uppercase mb-4" 
                    style={{ color: 'var(--text-muted)' }}>
                  Theme
                </h3>
                <ThemeSwitch />
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Header Spacer */}
      <div className={`transition-all duration-500 ease-in-out ${
        isDesktopMenuOpen ? 'h-16 md:h-80' : 'h-16 md:h-16'
      }`}></div>
    </>
  );
};

export default Header;