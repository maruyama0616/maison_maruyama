import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, style, ...props }, ref) => {
    const baseStyles = 'w-full px-4 py-3 font-sans font-light tracking-wide tap-highlight transition-all border focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
    
    const inputStyle = {
      backgroundColor: 'var(--island-background)',
      color: 'var(--text-primary)',
      borderColor: error ? '#ef4444' : 'var(--island-accent)',
      borderWidth: '1px',
      transitionDuration: 'var(--duration-fast)',
      transitionTimingFunction: 'var(--easing)',
      ...style
    };

    const classes = cn(
      baseStyles,
      'radius-sm',
      className
    );

    return (
      <div className="space-y-2">
        {label && (
          <label 
            className="block text-sm font-medium tracking-wide"
            style={{ color: 'var(--text-secondary)' }}
          >
            {label}
          </label>
        )}
        <input
          className={classes}
          style={inputStyle}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm font-light" style={{ color: '#ef4444' }}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;