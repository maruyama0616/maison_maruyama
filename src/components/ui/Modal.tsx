'use client';

import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const Modal = ({ isOpen, onClose, title, children, size = 'md' }: ModalProps) => {
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeStyles = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 transition-opacity"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          transitionDuration: 'var(--duration-normal)'
        }}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className={`relative w-full ${sizeStyles[size]} animate-fade-slide-up safe-area-sides`}
        style={{ 
          backgroundColor: 'var(--island-background)',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b"
               style={{ borderColor: 'var(--island-accent)' }}>
            <h2 className="text-lg font-medium tracking-wide"
                style={{ 
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-serif)'
                }}>
              {title}
            </h2>
            <button
              onClick={onClose}
              className="tap-target tap-highlight"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="閉じる"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;