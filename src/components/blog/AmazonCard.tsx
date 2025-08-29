'use client';

import Image from 'next/image';
import { ExternalLink, ShoppingCart } from 'lucide-react';

interface AmazonCardProps {
  url: string;
  title: string;
  price?: string;
  image?: string;
}

export default function AmazonCard({ url, title, price, image }: AmazonCardProps) {
  // デフォルトのAmazon商品画像（実際の実装では商品IDから取得）
  const defaultImage = '/images/amazon-placeholder.jpg';
  const productImage = image || defaultImage;

  return (
    <div className="my-8">
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group no-underline"
      >
        <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-gray-300"
             style={{ backgroundColor: 'var(--island-background)' }}>
          <div className="flex flex-col sm:flex-row">
            {/* 商品画像 */}
            <div className="sm:w-32 sm:h-32 w-full h-48 relative flex-shrink-0"
                 style={{ backgroundColor: 'var(--island-accent)' }}>
              {productImage !== defaultImage ? (
                <Image
                  src={productImage}
                  alt={title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8" style={{ color: 'var(--text-secondary)' }} />
                </div>
              )}
            </div>
            
            {/* 商品情報 */}
            <div className="flex-1 p-4 sm:p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  {/* Amazon ラベル */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 rounded-sm flex items-center justify-center text-xs font-bold text-white"
                           style={{ backgroundColor: '#FF9900' }}>
                        A
                      </div>
                      <span className="font-sans text-xs font-light tracking-wide uppercase"
                            style={{ color: 'var(--text-secondary)' }}>
                        Amazon
                      </span>
                    </div>
                  </div>
                  
                  {/* 商品タイトル */}
                  <h3 className="font-sans text-sm font-medium leading-relaxed mb-3 group-hover:opacity-80 transition-opacity"
                      style={{ color: 'var(--text-primary)' }}>
                    {title}
                  </h3>
                  
                  {/* 価格 */}
                  {price && (
                    <p className="font-sans text-lg font-light mb-3"
                       style={{ color: 'var(--text-primary)' }}>
                      {price}
                    </p>
                  )}
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs font-medium tracking-wide uppercase"
                          style={{ color: '#FF9900' }}>
                      Amazonで購入
                    </span>
                    <ExternalLink className="w-3 h-3" style={{ color: '#FF9900' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}