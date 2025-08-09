import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ThumbnailProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide';
  size?: 'sm' | 'md' | 'lg';
  placeholder?: boolean;
}

const Thumbnail = ({
  src,
  alt = '',
  title,
  subtitle,
  aspectRatio = 'portrait',
  size = 'md',
  placeholder = false,
  className,
  ...props
}: ThumbnailProps) => {
  const aspectRatios = {
    square: 'aspect-square',
    portrait: 'aspect-[4/5]',
    landscape: 'aspect-[5/4]',
    wide: 'aspect-[16/9]'
  };

  const sizes = {
    sm: 'w-24',
    md: 'w-32 sm:w-40',
    lg: 'w-48 sm:w-56'
  };

  return (
    <div className={cn('group cursor-pointer tap-highlight', className)} {...props}>
      {/* Image Container */}
      <div className={cn(
        'relative mb-3 image-clip-rounded radius-md transition-all',
        aspectRatios[aspectRatio],
        sizes[size]
      )}
      style={{ 
        backgroundColor: 'var(--island-accent)',
        transitionDuration: 'var(--duration-fast)',
        transitionTimingFunction: 'var(--easing)'
      }}>
        {src && !placeholder ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-2 opacity-40">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                     style={{ color: 'var(--text-muted)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Text Content */}
      {(title || subtitle) && (
        <div className="space-y-1">
          {title && (
            <h3 className="text-sm font-light tracking-wide line-clamp-2"
                style={{ color: 'var(--text-primary)' }}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs font-ultra-light"
               style={{ color: 'var(--text-secondary)' }}>
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Thumbnail;