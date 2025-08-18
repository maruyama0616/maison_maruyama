'use client';

/**
 * MobileIslandMenu - Maison Margiela / Apple風 アイランド拡張型メニュー
 * 
 * Features:
 * - ヘッダーアイランドが下方向にシームレス拡張
 * - ミニマルなガラス効果（backdrop-filter: blur）
 * - SVGアイコンのみ使用（絵文字なし）
 * - 弾性アニメーション（scaleY bounce effect）
 * - フォーカストラップ & アクセシビリティ準拠
 * - Safe area対応
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

interface MobileIslandMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

// SVG Icons
const HamburgerIcon = () => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" d="M1 1h16M1 7h16M1 13h16"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" d="m13.5 4.5-9 9m0-9 9 9"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8.5" cy="8.5" r="5.5"/>
    <path strokeLinecap="round" d="m13 13 3 3"/>
  </svg>
);

const ThemeIcon = ({ isDark }: { isDark: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    {isDark ? (
      <path strokeLinecap="round" d="M10 2v2m0 12v2m8-10h-2M4 10H2m15.071 5.071-1.414-1.414M6.343 6.343 4.929 4.929m10.142 0-1.414 1.414M6.343 13.657l-1.414 1.414M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
    ) : (
      <path strokeLinecap="round" d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586Z"/>
    )}
  </svg>
);

// Menu items configuration
const menuItems = [
  { href: '/health', label: 'Health' },
  { href: '/ambition', label: 'Ambition' },
  { href: '/relationship', label: 'Relationship' },
  { href: '/money', label: 'Money' },
];

const subMenuItems = [
  { href: '/about', label: 'About' },
  { href: '/misc', label: 'Misc' },
];

const MobileIslandMenu: React.FC<MobileIslandMenuProps> = ({ isOpen, onToggle }) => {
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const isDark = theme === 'dark';

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'contain';
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 340);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
      document.body.style.overscrollBehavior = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.overscrollBehavior = '';
    };
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (isOpen && firstFocusableRef.current) {
      const timer = setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Keyboard handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        e.preventDefault();
        onToggle();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onToggle]);

  // Touch handlers for swipe up to close
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const currentY = e.changedTouches[0].clientY;
    const deltaY = touchStartY - currentY; // Swipe up = positive
    
    if (deltaY > 80 && isOpen) {
      onToggle();
    }
  }, [touchStartY, isOpen, onToggle]);

  const handleMenuItemClick = useCallback(() => {
    onToggle();
  }, [onToggle]);

  return (
    <>
      {/* Island Header */}
      <div 
        className={`fixed top-2 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isAnimating ? 'animate-island-bounce' : ''
        }`}
        style={{
          paddingTop: 'max(8px, env(safe-area-inset-top))'
        }}
      >
        <div className="island-container">
          {/* Island Bar */}
          <div className="flex items-center justify-between px-3 h-12">
            {/* Left: Close/Hamburger */}
            <button
              ref={firstFocusableRef}
              onClick={onToggle}
              className="flex items-center justify-center w-11 h-11 -ml-1 rounded-full transition-all duration-200 hover:bg-black/5 focus:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
              aria-expanded={isOpen}
              aria-controls="island-menu"
              aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              <div className="transition-all duration-200">
                {isOpen ? <CloseIcon /> : <HamburgerIcon />}
              </div>
            </button>

            {/* Center: Brand */}
            <Link 
              href="/" 
              className="flex items-center px-2 py-1 rounded-lg transition-colors duration-200 hover:bg-black/5 focus:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
              onClick={isOpen ? handleMenuItemClick : undefined}
            >
              <span className="text-[15px] font-semibold tracking-wider text-[color:var(--island-fg)]">
                MARUYAMA
              </span>
            </Link>

            {/* Right: Search */}
            <button className="flex items-center justify-center w-11 h-11 -mr-1 rounded-full transition-all duration-200 hover:bg-black/5 focus:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50">
              <SearchIcon />
            </button>
          </div>

          {/* Expanding Menu Sheet */}
          {isOpen && (
            <div
              ref={menuRef}
              id="island-menu"
              className="menu-sheet"
              role="dialog"
              aria-modal="true"
              aria-labelledby="menu-title"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Menu Content */}
              <div className="px-2 pt-4 pb-6">
                {/* Primary Menu Items */}
                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleMenuItemClick}
                      className="menu-item"
                      style={{
                        animationDelay: `${index * 20}ms`,
                        animation: 'fadeInUp 240ms cubic-bezier(0.2,0.8,0.2,1) both'
                      }}
                    >
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* Divider */}
                <div 
                  className="mx-4 my-6 h-px bg-[color:var(--island-border)] opacity-60"
                />

                {/* Secondary Menu Items */}
                <nav className="space-y-1">
                  {subMenuItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleMenuItemClick}
                      className="menu-item"
                      style={{
                        animationDelay: `${(menuItems.length + index) * 20 + 100}ms`,
                        animation: 'fadeInUp 240ms cubic-bezier(0.2,0.8,0.2,1) both'
                      }}
                    >
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* Theme Toggle */}
                <div className="flex justify-end pt-6 pr-2">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 hover:bg-black/10 focus:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                    aria-label={`${isDark ? 'ライト' : 'ダーク'}テーマに切り替え`}
                    style={{
                      animationDelay: `${(menuItems.length + subMenuItems.length) * 20 + 200}ms`,
                      animation: 'fadeInUp 240ms cubic-bezier(0.2,0.8,0.2,1) both'
                    }}
                  >
                    <ThemeIcon isDark={isDark} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hidden title for screen readers */}
      <h2 id="menu-title" className="sr-only">ナビゲーションメニュー</h2>
    </>
  );
};

export default MobileIslandMenu;