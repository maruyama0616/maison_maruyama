'use client';

import { useState, useEffect } from 'react';

interface NotificationBarProps {
  message: string;
  isVisible?: boolean;
}

const NotificationBar = ({ message, isVisible = true }: NotificationBarProps) => {
  const [isShown, setIsShown] = useState(isVisible);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    setIsShown(false);
    // Store dismissal in localStorage to prevent reshowing
    localStorage.setItem('notification-dismissed', 'true');
  };

  useEffect(() => {
    // Check if notification was previously dismissed
    const isDismissed = localStorage.getItem('notification-dismissed');
    if (isDismissed) {
      setIsShown(false);
    }
  }, []);

  if (!isShown) return null;

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-60 transition-all safe-area-top ${
        isScrolled ? 'opacity-0 transform -translate-y-2 pointer-events-none' : 'opacity-100 transform translate-y-0'
      }`}
      style={{ 
        transitionDuration: 'var(--duration-normal)',
        transitionTimingFunction: 'var(--easing)'
      }}
    >
      <div 
        className="mx-4 mt-2 p-3 pr-12 relative"
        style={{ 
          backgroundColor: 'var(--island-accent)',
          borderRadius: 'var(--radius-xl)',
          color: 'var(--text-primary)'
        }}
      >
        {/* Message Content */}
        <div className="text-sm font-light tracking-wide text-center leading-relaxed">
          {message}
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 tap-target tap-highlight"
          style={{ color: 'var(--text-secondary)' }}
          aria-label="通知を閉じる"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NotificationBar;