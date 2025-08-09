import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, style, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-light tracking-wide tap-highlight transition-all disabled:pointer-events-none disabled:opacity-50';
    
    const variantStyles = {
      primary: {
        backgroundColor: 'var(--text-primary)',
        color: 'var(--island-background)'
      },
      secondary: {
        backgroundColor: 'var(--island-accent)',
        color: 'var(--text-primary)'
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'var(--text-primary)',
        border: `1px solid var(--text-secondary)`
      },
      pill: {
        backgroundColor: 'var(--island-background)',
        color: 'var(--text-secondary)',
        border: `1px solid var(--island-accent)`
      }
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs min-h-[36px]',
      md: 'px-6 py-3 text-sm min-h-[44px]',
      lg: 'px-8 py-4 text-base min-h-[52px]'
    };

    const radiusClass = variant === 'pill' ? 'radius-pill' : 'radius-sm';

    const classes = cn(
      baseStyles,
      sizes[size],
      radiusClass,
      className
    );

    const combinedStyle = {
      ...variantStyles[variant],
      transitionDuration: 'var(--duration-fast)',
      transitionTimingFunction: 'var(--easing)',
      ...style
    };

    return (
      <button
        className={classes}
        style={combinedStyle}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;