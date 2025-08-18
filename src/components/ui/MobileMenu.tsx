'use client';

/**
 * MobileMenu - 洗練されたガラスモーダル風モバイルメニュー
 * 
 * Features:
 * - フルスクリーンオーバーレイ + 下からせり上がるsheet
 * - ガラス効果（backdrop-filter: blur）
 * - スワイプダウンで閉じる
 * - フォーカストラップ & アクセシビリティ対応
 * - ダーク/ライト両対応
 * - Safe area対応
 * - Stagger アニメーション
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeSwitch from '@/components/ui/ThemeSwitch';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// メニュー項目の定義
const menuItems = [
  { href: '/health', label: 'Health', icon: '❤️' },
  { href: '/ambition', label: 'Ambition', icon: '⚡' },
  { href: '/relationship', label: 'Relationship', icon: '👥' },
  { href: '/money', label: 'Money', icon: '💰' },
];

const subMenuItems = [
  { href: '/about', label: 'About', icon: '👤' },
  { href: '/misc', label: 'Misc', icon: '📝' },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const overlayRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'contain';
    } else {
      document.body.style.overflow = '';
      document.body.style.overscrollBehavior = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.overscrollBehavior = '';
    };
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (isOpen && firstFocusableRef.current) {
      const timer = setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 250); // アニメーション完了後にフォーカス
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Keyboard handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Touch handlers for swipe-to-close
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - touchStartY;
    
    if (deltaY > 0 && sheetRef.current) {
      // Prevent negative transform
      const transform = Math.min(deltaY * 0.5, 120);
      sheetRef.current.style.transform = `translateY(${transform}px)`;
    }
  }, [isDragging, touchStartY]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !sheetRef.current) return;
    
    const currentY = e.changedTouches[0].clientY;
    const deltaY = currentY - touchStartY;
    
    if (deltaY > 120) {
      onClose();
    } else {
      // Snap back
      sheetRef.current.style.transform = 'translateY(0)';
    }
    
    setIsDragging(false);
  }, [isDragging, touchStartY, onClose]);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      id="mobile-menu"
      className="fixed inset-0 z-50 flex items-end bg-black/60 backdrop-blur-sm transition-opacity duration-150"
      style={{ 
        backdropFilter: 'blur(4px)',
        opacity: isOpen ? 1 : 0 
      }}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-title"
    >
      <div
        ref={sheetRef}
        className="w-full bg-glass border-t border-glass-border rounded-t-3xl shadow-2xl max-h-[80vh] overflow-hidden"
        style={{
          backgroundColor: 'var(--glass-bg)',
          borderColor: 'var(--glass-border)',
          backdropFilter: 'blur(12px) saturate(120%)',
          WebkitBackdropFilter: 'blur(12px) saturate(120%)',
          animation: isOpen ? 'slideUp 220ms cubic-bezier(0.2,0.8,0.2,1)' : '',
          paddingBottom: 'max(12px, env(safe-area-inset-bottom))'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Handle grip */}
        <div className="flex justify-center pt-3 pb-4">
          <div 
            className="w-10 h-1 rounded-full opacity-30"
            style={{ backgroundColor: 'var(--glass-fg)' }}
          />
        </div>

        {/* Menu Title */}
        <div className="px-6 pb-4">
          <h2 
            id="menu-title" 
            className="text-xl font-semibold tracking-wide"
            style={{ color: 'var(--glass-fg)' }}
          >
            Menu
          </h2>
        </div>

        {/* Main Menu Items */}
        <nav className="px-2">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 hover:bg-white/10 focus:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                style={{
                  animationDelay: `${index * 30}ms`,
                  animation: isOpen ? 'fadeInUp 300ms cubic-bezier(0.2,0.8,0.2,1) both' : ''
                }}
              >
                <span className="text-lg">{item.icon}</span>
                <span 
                  className="text-lg font-medium tracking-wide"
                  style={{ color: 'var(--glass-fg)' }}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div 
            className="mx-4 my-6 h-px opacity-20"
            style={{ backgroundColor: 'var(--glass-fg)' }}
          />

          {/* Sub Menu Items */}
          <div className="space-y-1">
            {subMenuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 hover:bg-white/10 focus:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                style={{
                  animationDelay: `${(menuItems.length + index) * 30 + 100}ms`,
                  animation: isOpen ? 'fadeInUp 300ms cubic-bezier(0.2,0.8,0.2,1) both' : ''
                }}
              >
                <span className="text-lg">{item.icon}</span>
                <span 
                  className="text-lg font-medium tracking-wide"
                  style={{ color: 'var(--glass-fg)' }}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Theme Switch Section */}
          <div 
            className="mx-4 my-6 h-px opacity-20"
            style={{ backgroundColor: 'var(--glass-fg)' }}
          />
          
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between py-2">
              <span 
                className="text-base font-medium"
                style={{ color: 'var(--glass-muted)' }}
              >
                テーマ
              </span>
              <ThemeSwitch preventMenuClose={true} />
            </div>
          </div>

          {/* Search Button (first focusable element) */}
          <button
            ref={firstFocusableRef}
            className="sr-only"
            onClick={onClose}
            aria-label="メニューを閉じる"
          >
            Close Menu
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;