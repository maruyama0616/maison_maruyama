import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'accent' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Card = ({ 
  variant = 'default', 
  padding = 'md', 
  className, 
  children,
  style,
  ...props 
}: CardProps) => {
  const variantStyles = {
    default: {
      backgroundColor: 'var(--island-background)'
    },
    accent: {
      backgroundColor: 'var(--island-accent)'
    },
    elevated: {
      backgroundColor: 'var(--island-background)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)'
    }
  };

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const classes = cn(
    'radius-lg',
    paddingStyles[padding],
    className
  );

  const combinedStyle = {
    ...variantStyles[variant],
    ...style
  };

  return (
    <div 
      className={classes}
      style={combinedStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;