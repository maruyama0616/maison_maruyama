'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollY } from '@/hooks/useScrollY';
import { useTheme } from '@/contexts/ThemeContext';
import SearchOverlay from '@/components/ui/SearchOverlay';
import HamburgerMenu from '@/components/ui/HamburgerMenu';
import ThemeSwitch from '@/components/ui/ThemeSwitch';


const NewHeader: React.FC = () => {
  const scrollY = useScrollY();
  const { theme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Header (1024px+) */}
      <div className="hidden lg:block header-container">
        <motion.header 
          className={`header-island ${isScrolled ? 'scrolled' : ''}`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between">
          {/* Left Side Menu */}
          <nav className="flex items-center space-x-8">
            <Link 
              href="/health"
              className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity duration-200"
              style={{ 
                color: 'var(--text-primary)',
                fontFamily: 'M PLUS 1p, sans-serif',
                fontWeight: '500'
              }}
            >
              Health
            </Link>
            <Link 
              href="/ambition"
              className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity duration-200"
              style={{ 
                color: 'var(--text-primary)',
                fontFamily: 'M PLUS 1p, sans-serif',
                fontWeight: '500'
              }}
            >
              Ambition
            </Link>
            <Link 
              href="/relationship"
              className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity duration-200"
              style={{ 
                color: 'var(--text-primary)',
                fontFamily: 'M PLUS 1p, sans-serif',
                fontWeight: '500'
              }}
            >
              Relationship
            </Link>
            <Link 
              href="/money"
              className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity duration-200"
              style={{ 
                color: 'var(--text-primary)',
                fontFamily: 'M PLUS 1p, sans-serif',
                fontWeight: '500'
              }}
            >
              Money
            </Link>
            <Link 
              href="/about"
              className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity duration-200"
              style={{ 
                color: 'var(--text-primary)',
                fontFamily: 'M PLUS 1p, sans-serif',
                fontWeight: '500'
              }}
            >
              Concept
            </Link>
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="block">
              <div className="relative h-8 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isScrolled ? (
                    <motion.div
                      key="logo-image"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={theme === 'dark' ? '/images/logo/MARUYAMA LOGO.png' : '/images/logo/MARUYAMA LOGO BK.png'}
                        alt="MARUYAMA"
                        width={32}
                        height={24}
                        className="object-contain"
                      />
                    </motion.div>
                  ) : (
                    <motion.span
                      key="logo-text"
                      className="text-2xl font-bold tracking-wide"
                      style={{ 
                        color: 'var(--text-primary)',
                        fontFamily: 'M PLUS 1p, sans-serif',
                        fontWeight: '700'
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      MARUYAMA
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          </div>

          {/* Right Side Functions */}
          <div className="flex items-center space-x-6">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center space-x-2 hover:opacity-70 transition-opacity duration-200"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="検索"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
              </svg>
            </button>

            {/* Shop Link */}
            <Link 
              href="/shop"
              className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity duration-200"
              style={{ 
                color: 'var(--text-secondary)',
                fontFamily: 'M PLUS 1p, sans-serif',
                fontWeight: '500'
              }}
            >
              Shop
            </Link>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://twitter.com/maruyama" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/maruyama" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.897 3.5 13.455 3.5 11.987s.698-2.909 1.626-3.704c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.795 1.626 2.236 1.626 3.704s-.698 2.91-1.626 3.704c-.875.807-2.026 1.297-3.323 1.297zm7.098 0c-1.297 0-2.448-.49-3.323-1.297-.928-.794-1.626-2.236-1.626-3.704s.698-2.909 1.626-3.704c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.795 1.626 2.236 1.626 3.704s-.698 2.91-1.626 3.704c-.875.807-2.026 1.297-3.323 1.297z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@maruyama" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Theme Switch */}
            <ThemeSwitch />
          </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile Header (< 768px) */}
      <div className="lg:hidden header-container">
        <motion.header 
          className={`header-island ${isScrolled ? 'scrolled' : ''}`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between">
          {/* Left Side - Hamburger & Search */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 hover:opacity-70 transition-opacity duration-200"
              style={{ color: 'var(--text-primary)' }}
              aria-label="メニューを開く"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:opacity-70 transition-opacity duration-200"
              style={{ color: 'var(--text-primary)' }}
              aria-label="検索"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
              </svg>
            </button>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="block">
              <div className="relative h-6 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isScrolled ? (
                    <motion.div
                      key="logo-image"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={theme === 'dark' ? '/images/logo/MARUYAMA LOGO.png' : '/images/logo/MARUYAMA LOGO BK.png'}
                        alt="MARUYAMA"
                        width={24}
                        height={18}
                        className="object-contain"
                      />
                    </motion.div>
                  ) : (
                    <motion.span
                      key="logo-text"
                      className="text-xl font-bold tracking-wide"
                      style={{ 
                        color: 'var(--text-primary)',
                        fontFamily: 'M PLUS 1p, sans-serif',
                        fontWeight: '700'
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      MARUYAMA
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          </div>

          {/* Right Side - Shop & Theme */}
          <div className="flex items-center space-x-3">
            <Link 
              href="/shop"
              className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity duration-200"
              style={{ 
                color: 'var(--text-secondary)',
                fontFamily: 'M PLUS 1p, sans-serif',
                fontWeight: '500'
              }}
            >
              Shop
            </Link>
            <ThemeSwitch />
          </div>
          </div>
        </motion.header>
      </div>

      {/* Header Spacer */}
      <div className="h-20 lg:h-24"></div>

      {/* Search Overlay */}
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* Mobile Hamburger Menu */}
      <HamburgerMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default NewHeader;