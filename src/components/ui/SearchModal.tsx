'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  slug: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: '健康的なライフスタイルの作り方',
    excerpt: '毎日の小さな習慣が大きな変化をもたらす方法について',
    category: 'health',
    slug: 'healthy-lifestyle'
  },
  {
    id: '2',
    title: '目標達成のための戦略',
    excerpt: 'ambitionを実現するための具体的なステップとマインドセット',
    category: 'ambition',
    slug: 'goal-achievement'
  },
  {
    id: '3',
    title: '良好な人間関係を築く方法',
    excerpt: 'コミュニケーションスキルと信頼関係の構築について',
    category: 'relationship',
    slug: 'building-relationships'
  },
  {
    id: '4',
    title: '賢いお金の管理術',
    excerpt: '投資と節約のバランスを取った財務戦略',
    category: 'money',
    slug: 'money-management'
  }
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

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
    if (searchQuery.length > 0) {
      // 模擬搜索功能
      const filtered = mockSearchResults.filter(
        item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl mx-4"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--island-background)',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        {/* Search Input */}
        <div className="p-6 border-b border-opacity-10" style={{ borderColor: 'var(--text-muted)' }}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="w-5 h-5" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="記事を検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-base font-light tracking-wide border-none outline-none"
              style={{ 
                backgroundColor: 'transparent',
                color: 'var(--text-primary)'
              }}
              autoFocus
            />
            <button
              onClick={onClose}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              style={{ color: 'var(--text-muted)' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchQuery.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-sm font-light" style={{ color: 'var(--text-muted)' }}>
                記事タイトルやコンテンツで検索してください
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-sm font-light" style={{ color: 'var(--text-muted)' }}>
                「{searchQuery}」に関する記事が見つかりませんでした
              </p>
            </div>
          ) : (
            <div className="p-4">
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={`/${result.category}/${result.slug}`}
                  onClick={onClose}
                  className="block p-4 rounded-lg hover:opacity-70 transition-opacity"
                  style={{ backgroundColor: 'var(--island-accent)' }}
                >
                  <div className="mb-2">
                    <span 
                      className="text-xs font-medium tracking-wider uppercase"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {result.category}
                    </span>
                  </div>
                  <h3 
                    className="text-base font-light tracking-wide mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {result.title}
                  </h3>
                  <p 
                    className="text-sm font-light leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {result.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}