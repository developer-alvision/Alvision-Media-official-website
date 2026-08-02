import React from 'react';

interface WaveDividerProps {
  flip?: boolean;
  className?: string;
  fillClass?: string;
}

export default function WaveDivider({ flip = false, className = "", fillClass = "text-dark-navy" }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-[0] select-none ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[40px] md:h-[60px] lg:h-[80px]"
      >
        <path
          d="M0,0 C300,90 900,-30 1200,60 L1200,120 L0,120 Z"
          className={`${fillClass} fill-current`}
        />
      </svg>
    </div>
  );
}
