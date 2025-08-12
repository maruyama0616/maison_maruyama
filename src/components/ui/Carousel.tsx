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

  if (items.length === 0) return null;

  return (
    <div 
      className="relative w-full overflow-hidden radius-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={item.id} className="w-full flex-shrink-0">
            <Link href={`/${item.category}/${item.slug}`} className="block group">
              <div className="relative aspect-[16/9] overflow-hidden radius-lg">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ 
                    backgroundImage: item.imageUrl ? `url(${item.imageUrl})` : 'none',
                    backgroundColor: item.imageUrl ? 'transparent' : 'var(--island-accent)'
                  }}
                >
                  {!item.imageUrl && (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="font-sans text-xs font-ultra-light tracking-widest uppercase"
                         style={{ color: 'var(--text-muted)' }}>
                        {item.title}
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-ultra-light tracking-wide uppercase rounded-sm"
                          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-light text-white mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm font-light text-white/80 line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 flex items-center justify-center group"
          >
            <svg className="w-5 h-5 text-white transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 flex items-center justify-center group"
          >
            <svg className="w-5 h-5 text-white transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

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