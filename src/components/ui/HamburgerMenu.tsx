'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Health', href: '/health' },
  { label: 'Ambition', href: '/ambition' },
  { label: 'Relationship', href: '/relationship' },
  { label: 'Money', href: '/money' },
  { label: 'Concept', href: '/about' }
];

const socialLinks = [
  { 
    label: 'Twitter', 
    href: 'https://twitter.com/maruyama', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  { 
    label: 'Instagram', 
    href: 'https://instagram.com/maruyama', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.897 3.5 13.455 3.5 11.987s.698-2.909 1.626-3.704c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.795 1.626 2.236 1.626 3.704s-.698 2.91-1.626 3.704c-.875.807-2.026 1.297-3.323 1.297zm7.098 0c-1.297 0-2.448-.49-3.323-1.297-.928-.794-1.626-2.236-1.626-3.704s.698-2.909 1.626-3.704c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.795 1.626 2.236 1.626 3.704s-.698 2.91-1.626 3.704c-.875.807-2.026 1.297-3.323 1.297z"/>
      </svg>
    )
  },
  { 
    label: 'YouTube', 
    href: 'https://youtube.com/@maruyama', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  }
];



const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            className="w-full h-full flex flex-col"
            style={{ backgroundColor: 'var(--header-bg)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Space */}
            <div className="h-16"></div>
            
            {/* Menu Content */}
            <div className="flex-1 px-6 py-8">
              {/* Main Navigation */}
              <nav className="mb-12">
                <ul className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ x: -30, y: 10, opacity: 0 }}
                      animate={{ 
                        x: 0, 
                        y: 0, 
                        opacity: 1,
                        transition: {
                          delay: index * 0.08, // 80msに調整
                          duration: 0.4, // 400msに延長
                          ease: [0.25, 0.46, 0.45, 0.94] // カスタムイージング
                        }
                      }}
                      exit={{ 
                        x: -30, 
                        opacity: 0,
                        transition: {
                          delay: (4 - index) * 0.05, // 逆順で閉じる
                          duration: 0.2,
                          ease: "easeIn"
                        }
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block text-2xl font-bold tracking-wide hover:opacity-70 transition-opacity duration-200"
                        style={{ 
                          color: 'var(--text-primary)',
                          fontFamily: 'M PLUS 1p, sans-serif'
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Social Links */}
              <motion.div
                initial={{ x: -30, y: 10, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ 
                  delay: menuItems.length * 0.08, // 遅延調整
                  duration: 0.4, // 時間統一
                  ease: [0.25, 0.46, 0.45, 0.94] // カスタムイージング統一
                }}
                className="border-t pt-8"
                style={{ borderColor: 'var(--border)' }}
              >
                <h3 className="text-sm font-medium tracking-wide mb-4" style={{ color: 'var(--text-secondary)' }}>
                  CONNECT
                </h3>
                <div className="flex space-x-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 hover:opacity-70 transition-opacity duration-200"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {social.icon}
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HamburgerMenu;