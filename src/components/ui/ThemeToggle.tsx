'use client';

import { useTheme } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  variant?: 'desktop' | 'mobile';
}

export default function ThemeToggle({ className = '', variant = 'desktop' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  if (variant === 'mobile') {
    return (
      <button
        onClick={toggleTheme}
        className={`block py-3 tap-highlight ${className}`}
        style={{ color: 'var(--text-primary)' }}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 flex items-center justify-center">
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            )}
          </div>
          <span className="text-lg font-light tracking-wide">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </span>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`text-sm font-light tap-highlight transition-all duration-200 hover:opacity-70 ${className}`}
      style={{ color: 'var(--text-secondary)' }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 flex items-center justify-center">
          {theme === 'light' ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          )}
        </div>
        <span className="tracking-wide">
          {theme === 'light' ? 'Dark' : 'Light'}
        </span>
      </div>
    </button>
  );
}