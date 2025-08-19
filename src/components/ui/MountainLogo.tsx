'use client';

interface MountainLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

const MountainLogo: React.FC<MountainLogoProps> = ({ className, style }) => {
  return (
    <svg 
      width="32" 
      height="24" 
      viewBox="0 0 32 24" 
      fill="none"
      className={className}
      style={style}
    >
      <path 
        d="M0 24L8 8L16 12L24 4L32 24H0Z" 
        fill="currentColor"
      />
    </svg>
  );
};

export default MountainLogo;