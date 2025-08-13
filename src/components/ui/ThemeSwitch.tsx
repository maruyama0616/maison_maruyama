'use client';

import { useTheme } from '@/contexts/ThemeContext';

interface ThemeSwitchProps {
  className?: string;
  preventMenuClose?: boolean;
}

export default function ThemeSwitch({ className = '', preventMenuClose = false }: ThemeSwitchProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={(e) => {
        if (preventMenuClose) {
          e.stopPropagation();
        }
        toggleTheme();
      }}
      className={`relative w-12 h-6 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      style={{
        backgroundColor: theme === 'dark' ? 'var(--text-primary)' : 'var(--island-accent)'
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Switch Handle */}
      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-all duration-300 ease-in-out transform shadow-sm ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
        style={{
          backgroundColor: theme === 'dark' ? 'var(--page-background)' : 'var(--text-primary)',
        }}
      >
        {/* Icon inside handle */}
        <div className="w-full h-full flex items-center justify-center">
          {theme === 'light' ? (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-3 h-3" style={{ color: 'var(--text-primary)' }} fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
}