'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

// Shopping Bag Icon Component
const ShoppingBagIcon = ({ size = 18 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6z"/>
  </svg>
);

// Search Icon Component  
const SearchIcon = ({ size = 18 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

// Theme Icon Component
const ThemeIcon = ({ size = 18, isDark = false }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {isDark ? (
      // Light Mode Icon (Sun)
      <>
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </>
    ) : (
      // Dark Mode Icon (Moon)
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    )}
  </svg>
);

// Theme Toggle Component (Toggle Type)
const ThemeToggle = ({ isDark, onToggle }: { isDark: boolean; onToggle: () => void; size?: number }) => (
  <button 
    className="header-action-button"
    onClick={onToggle}
    style={{
      background: 'transparent !important',
      backgroundImage: 'none !important',
      backgroundColor: 'transparent !important',
      width: 'auto',
      borderRadius: '12px',
      padding: '2px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      height: 'auto'
    }}
  >
    <div style={{
      width: '28px',
      height: '16px',
      borderRadius: '12px',
      background: isDark ? '#333' : '#fff',
      position: 'relative',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: isDark ? '#fff' : '#333',
        position: 'absolute',
        top: '2px',
        left: isDark ? '14px' : '2px',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <ThemeIcon size={8} isDark={isDark} />
      </div>
    </div>
  </button>
);

// Twitter Icon
const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
);

// Instagram Icon
const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

// YouTube Icon
const YouTubeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75,15.02 15.5,11.75 9.75,8.48"/>
  </svg>
);

// Logo Component
const Logo = ({ isScrolled, isDarkMode, isMobile = false }: { isScrolled: boolean; isDarkMode: boolean; isMobile?: boolean }) => {
  const logoImages = {
    light: '/images/logo/MARUYAMA LOGO BK.png',
    dark: '/images/logo/MARUYAMA LOGO.png'
  };
  
  const logoSrc = isDarkMode ? logoImages.dark : logoImages.light;
  const logoSize = isMobile ? { width: 26, height: 20 } : { width: 28, height: 20 };
  
  return (
    <div className="logo-container">
      <AnimatePresence mode="wait">
        {isScrolled ? (
          <motion.div
            key="logo-image"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src={logoSrc}
                alt="MARUYAMA Logo"
                width={logoSize.width}
                height={logoSize.height}
                className="object-contain"
              />
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key="logo-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <h1 
                className={`font-bold tracking-wide ${isMobile ? 'text-sm' : 'text-lg'}`}
                style={{ 
                  fontFamily: "'M PLUS 1p', sans-serif",
                  fontWeight: '700',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
              >
                MARUYAMA
              </h1>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Search Overlay Component
const SearchOverlay = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="search-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(20px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '80px 16px 16px',
            overflowY: 'auto'
          }}
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ y: -20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="search-container"
            style={{
              width: '100%',
              maxWidth: '600px',
              background: isDarkMode ? '#1a1a1a' : '#fff',
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 20px 0' }}>
              <button
                onClick={onClose}
                style={{
                  width: '32px',
                  height: '32px',
                  border: 'none',
                  background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '18px',
                  color: isDarkMode ? '#fff' : '#000',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                ×
              </button>
            </div>
            
            <input
              type="text"
              placeholder="記事を検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '20px',
                border: 'none',
                fontSize: '18px',
                background: 'transparent',
                outline: 'none',
                borderBottom: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                color: isDarkMode ? '#fff' : '#333'
              }}
              autoFocus
            />
            
            <div style={{ padding: '20px' }}>
              {/* Category Suggestions */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: isDarkMode ? '#999' : '#666',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  カテゴリ
                </div>
                <div 
                  className="grid grid-cols-2 md:grid-cols-2 gap-2"
                  style={{ gap: '8px' }}
                >
                  {['Health', 'Ambition', 'Relationship', 'Money'].map((category) => (
                    <Link
                      key={category}
                      href={`/${category.toLowerCase()}`}
                      onClick={onClose}
                      style={{
                        padding: '12px 16px',
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                        borderRadius: '8px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none',
                        color: 'inherit'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Recent Posts */}
              <div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: isDarkMode ? '#999' : '#666',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  最新記事
                </div>
                <div>
                  {['健康的なライフスタイルの作り方', '目標達成のための戦略', '良好な人間関係を築く方法'].map((title, index) => (
                    <div
                      key={index}
                      style={{
                        padding: '12px 0',
                        borderBottom: isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)';
                        e.currentTarget.style.margin = '0 -20px';
                        e.currentTarget.style.paddingLeft = '20px';
                        e.currentTarget.style.paddingRight = '20px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.margin = '0';
                        e.currentTarget.style.paddingLeft = '0';
                        e.currentTarget.style.paddingRight = '0';
                      }}
                    >
                      <div style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        marginBottom: '4px',
                        color: isDarkMode ? '#fff' : '#333'
                      }}>
                        {title}
                      </div>
                      <div style={{
                        fontSize: '14px',
                        color: isDarkMode ? '#999' : '#666',
                        lineHeight: '1.4'
                      }}>
                        毎日の習慣を見直して、より健康的な生活を送るための実践的なアドバイス...
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const menuItems = ['Health', 'Ambition', 'Relationship', 'Money', 'Concept'];
  
  const menuAnimation = {
    closed: { 
      opacity: 0, 
      height: 0
    },
    open: { 
      opacity: 1, 
      height: '100vh'
    }
  };
  
  const menuItemAnimation = {
    closed: { opacity: 0, x: -30, y: 10 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    exit: (i: number) => ({
      opacity: 0,
      x: -30,
      transition: {
        delay: (4 - i) * 0.05,
        duration: 0.2,
        ease: "easeIn"
      }
    })
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuAnimation}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50"
          style={{ 
            top: '60px',
            background: isDarkMode ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
          }}
          onClick={onClose}
        >
          <div 
            className="p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-8">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item}
                  custom={i}
                  variants={menuItemAnimation}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    onClick={onClose}
                    className="text-2xl font-medium tracking-wide"
                    style={{ 
                      color: isDarkMode ? '#fff' : '#000',
                      textDecoration: 'none',
                      fontFamily: "'M PLUS 1p', sans-serif"
                    }}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="mt-16">
              <div className="text-sm font-medium tracking-wider uppercase mb-4"
                style={{ color: isDarkMode ? '#999' : '#666' }}>
                CONNECT
              </div>
              <div className="flex space-x-6">
                <a href="#" className="transition-colors"
                  style={{ 
                    color: isDarkMode ? '#ccc' : '#666'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = isDarkMode ? '#fff' : '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isDarkMode ? '#ccc' : '#666';
                  }}>
                  <TwitterIcon />
                </a>
                <a href="#" className="transition-colors"
                  style={{ 
                    color: isDarkMode ? '#ccc' : '#666'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = isDarkMode ? '#fff' : '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isDarkMode ? '#ccc' : '#666';
                  }}>
                  <InstagramIcon />
                </a>
                <a href="#" className="transition-colors"
                  style={{ 
                    color: isDarkMode ? '#ccc' : '#666'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = isDarkMode ? '#fff' : '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isDarkMode ? '#ccc' : '#666';
                  }}>
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Island Header Component
const IslandHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  return (
    <>
      {/* Island Header Container */}
      <div 
        className="header-container"
        style={{
          position: 'fixed',
          top: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '1200px',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}
      >
        <motion.header 
          className={`header-island ${isScrolled ? 'scrolled' : ''}`}
          style={{
            background: isDarkMode 
              ? 'rgba(0, 0, 0, 0.8)' 
              : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            borderRadius: isScrolled ? '20px' : '24px',
            border: `1px solid ${isDarkMode 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(255, 255, 255, 0.2)'}`,
            boxShadow: isScrolled 
              ? '0 4px 20px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.08)'
              : '0 8px 32px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)',
            padding: isScrolled ? '12px 24px' : '16px 32px',
            transition: 'all 0.3s ease'
          }}
          animate={{
            borderRadius: isScrolled ? 20 : 24,
            padding: isScrolled ? '12px 24px' : '16px 32px'
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Left Section - Main Categories */}
            <nav className="flex items-center space-x-3">
              {['Health', 'Ambition', 'Relationship', 'Money', 'Concept'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="header-menu-button"
                  style={{
                    color: isDarkMode ? '#ffffff' : '#000000',
                    background: 'transparent !important',
                    backgroundColor: 'transparent !important'
                  }}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Center Section - Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Logo isScrolled={isScrolled} isDarkMode={isDarkMode} />
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center space-x-2">
              <button
                onClick={openSearch}
                className="header-action-button"
                style={{
                  color: isDarkMode ? '#999999' : '#666666',
                  background: 'transparent !important',
                  backgroundColor: 'transparent !important'
                }}
              >
                <SearchIcon />
              </button>
              <Link
                href="/shop"
                className="header-action-button"
                style={{
                  color: isDarkMode ? '#999999' : '#666666',
                  background: 'transparent !important',
                  backgroundColor: 'transparent !important',
                  textDecoration: 'none'
                }}
              >
                <ShoppingBagIcon />
              </Link>
              <a
                href="#"
                className="header-action-button"
                style={{
                  color: isDarkMode ? '#999999' : '#666666',
                  background: 'transparent !important',
                  backgroundColor: 'transparent !important'
                }}
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="header-action-button"
                style={{
                  color: isDarkMode ? '#999999' : '#666666',
                  background: 'transparent !important',
                  backgroundColor: 'transparent !important'
                }}
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="header-action-button"
                style={{
                  color: isDarkMode ? '#999999' : '#666666',
                  background: 'transparent !important',
                  backgroundColor: 'transparent !important'
                }}
              >
                <YouTubeIcon />
              </a>
              <ThemeToggle isDark={isDarkMode} onToggle={toggleTheme} />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden mobile-header-content">
            {/* Left Zone - Hamburger + Search */}
            <div className="flex items-center space-x-1">
              <button
                onClick={toggleMenu}
                className="mobile-action-button"
                style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
              >
                <motion.div
                  animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="hamburger"
                >
                  {isMenuOpen ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  ) : (
                    <div className="flex flex-col space-y-1">
                      <div className="hamburger-line bg-current"></div>
                      <div className="hamburger-line bg-current"></div>
                      <div className="hamburger-line bg-current"></div>
                    </div>
                  )}
                </motion.div>
              </button>
              
              <button
                onClick={openSearch}
                className="mobile-action-button"
                style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
              >
                <SearchIcon />
              </button>
            </div>

            {/* Center Zone - Logo */}
            <Logo isScrolled={isScrolled} isDarkMode={isDarkMode} isMobile={true} />

            {/* Right Zone - Shop + Theme */}
            <div className="flex items-center space-x-1">
              <Link
                href="/shop"
                className="mobile-action-button"
                style={{ 
                  color: isDarkMode ? '#ffffff' : '#000000',
                  textDecoration: 'none'
                }}
              >
                <ShoppingBagIcon />
              </Link>
              
              <button 
                className="mobile-action-button"
                onClick={toggleTheme}
                style={{
                  background: 'transparent !important',
                  backgroundColor: 'transparent !important',
                  width: 'auto',
                  borderRadius: '12px',
                  padding: '2px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  height: 'auto'
                }}
              >
                <div style={{
                  width: '28px',
                  height: '16px',
                  borderRadius: '12px',
                  background: isDarkMode ? '#333' : '#fff',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: isDarkMode ? '#fff' : '#333',
                    position: 'absolute',
                    top: '2px',
                    left: isDarkMode ? '14px' : '2px',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ThemeIcon size={8} isDark={isDarkMode} />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      
      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={closeSearch} />
      
      {/* Header Spacer */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default IslandHeader;