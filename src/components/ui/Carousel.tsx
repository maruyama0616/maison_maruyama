'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface CarouselItem {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  category: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function Carousel({ items, autoPlay = true, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoPlay && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, isHovered, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  // スワイプ機能の最小距離
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // 前のタッチ終了位置をリセット
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (items.length === 0) return null;

  return (
    <div 
      className="relative w-full overflow-hidden radius-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={item.id} className="w-full flex-shrink-0">
            <Link href={`/${item.category}/${item.slug}`} className="block group">
              <div className="relative aspect-[16/9] w-full overflow-hidden radius-lg"
                   style={{ backgroundColor: 'var(--island-background)' }}>
                {item.imageUrl ? (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center"
                       style={{ backgroundColor: 'var(--island-accent)' }}>
                    <span className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                          style={{ color: 'var(--text-secondary)' }}>
                      NO IMAGE
                    </span>
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}