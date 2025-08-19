'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  category: 'Health' | 'Ambition' | 'Relationship' | 'Money';
  slug: string;
  publishedAt: string;
  readTime: number;
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: '健康的なライフスタイルの作り方',
    excerpt: '毎日の小さな習慣が大きな変化をもたらす方法について',
    category: 'Health',
    slug: 'healthy-lifestyle',
    publishedAt: '2024-01-15',
    readTime: 5
  },
  {
    id: '2',
    title: '目標達成のための戦略',
    excerpt: 'ambitionを実現するための具体的なステップとマインドセット',
    category: 'Ambition',
    slug: 'goal-achievement',
    publishedAt: '2024-01-20',
    readTime: 8
  },
  {
    id: '3',
    title: '良好な人間関係を築く方法',
    excerpt: 'コミュニケーションスキルと信頼関係の構築について',
    category: 'Relationship',
    slug: 'building-relationships',
    publishedAt: '2024-01-25',
    readTime: 6
  },
  {
    id: '4',
    title: '賢いお金の管理術',
    excerpt: '投資と節約のバランスを取った財務戦略',
    category: 'Money',
    slug: 'money-management',
    publishedAt: '2024-01-30',
    readTime: 7
  }
];

const categoryColors = {
  Health: '#10B981',
  Ambition: '#F59E0B',
  Relationship: '#EF4444',
  Money: '#3B82F6'
};

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    setSearchHistory(history);
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = mockSearchResults.filter(
        item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (!isOpen) {
          // ここで検索オーバーレイを開く処理を親に通知
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const saveSearchHistory = (searchQuery: string) => {
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    const newHistory = [searchQuery, ...history.filter((h: string) => h !== searchQuery)].slice(0, 10);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    setSearchHistory(newHistory);
  };

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      saveSearchHistory(searchQuery.trim());
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: -20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
            style={{ 
              backgroundColor: 'var(--header-bg)',
              border: '1px solid var(--border)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="p-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
                  </svg>
                </div>
                <motion.input
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  type="text"
                  placeholder="記事を検索..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch(query);
                    }
                  }}
                  className="w-full pl-12 pr-12 py-4 text-base font-medium tracking-wide border-none outline-none rounded-xl"
                  style={{ 
                    backgroundColor: 'var(--search-bg)',
                    color: 'var(--text-primary)',
                    fontFamily: 'M PLUS 1p, sans-serif'
                  }}
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Search Content */}
            <div className="p-6 max-h-96 overflow-y-auto">
              {searchResults.length > 0 ? (
                <div>
                  <h3 className="text-sm font-medium tracking-wide mb-4" style={{ color: 'var(--text-secondary)' }}>
                    検索結果
                  </h3>
                  <div className="space-y-3">
                    {searchResults.map((result) => (
                      <Link
                        key={result.id}
                        href={`/${result.category.toLowerCase()}/${result.slug}`}
                        onClick={() => {
                          handleSearch(query);
                          onClose();
                        }}
                        className="block p-4 rounded-xl hover:opacity-80 transition-all duration-200"
                        style={{ backgroundColor: 'var(--search-bg)' }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span 
                            className="text-xs font-medium tracking-wider uppercase px-2 py-1 rounded-full"
                            style={{ 
                              backgroundColor: categoryColors[result.category] + '20',
                              color: categoryColors[result.category]
                            }}
                          >
                            {result.category}
                          </span>
                          <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                            {result.readTime}分で読める
                          </span>
                        </div>
                        <h4 className="text-base font-medium tracking-wide mb-2" style={{ color: 'var(--text-primary)' }}>
                          {result.title}
                        </h4>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {result.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : query.length === 0 ? (
                <div className="space-y-6">
                  {/* Category Filters */}
                  <div>
                    <h3 className="text-sm font-medium tracking-wide mb-3" style={{ color: 'var(--text-secondary)' }}>
                      カテゴリ
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {['Health', 'Ambition', 'Relationship', 'Money'].map((category) => (
                        <button
                          key={category}
                          onClick={() => setQuery(category.toLowerCase())}
                          className="p-3 rounded-lg text-left hover:opacity-80 transition-all duration-200"
                          style={{ backgroundColor: 'var(--search-bg)' }}
                        >
                          <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                            {category}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recent Posts */}
                  <div>
                    <h3 className="text-sm font-medium tracking-wide mb-3" style={{ color: 'var(--text-secondary)' }}>
                      最新記事
                    </h3>
                    <div className="space-y-2">
                      {mockSearchResults.slice(0, 3).map((post) => (
                        <Link
                          key={post.id}
                          href={`/${post.category.toLowerCase()}/${post.slug}`}
                          onClick={() => onClose()}
                          className="block p-3 rounded-lg hover:opacity-80 transition-all duration-200"
                          style={{ backgroundColor: 'var(--search-bg)' }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                              {post.title}
                            </span>
                            <span 
                              className="text-xs px-2 py-1 rounded-full"
                              style={{ 
                                backgroundColor: categoryColors[post.category] + '20',
                                color: categoryColors[post.category]
                              }}
                            >
                              {post.category}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Search History */}
                  {searchHistory.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium tracking-wide mb-3" style={{ color: 'var(--text-secondary)' }}>
                        検索履歴
                      </h3>
                      <div className="space-y-2">
                        {searchHistory.slice(0, 5).map((historyItem, index) => (
                          <button
                            key={index}
                            onClick={() => setQuery(historyItem)}
                            className="block w-full text-left p-3 rounded-lg hover:opacity-80 transition-all duration-200"
                            style={{ backgroundColor: 'var(--search-bg)' }}
                          >
                            <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                              {historyItem}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    「{query}」に関する記事が見つかりませんでした
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;