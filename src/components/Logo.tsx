'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
  useHDImage?: boolean;
}

export function LogoImage({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <img
      src="/images/alvision-media-hd-logo.png"
      alt="Alvision Media HD Logo"
      className={`object-contain transition-transform duration-300 group-hover:scale-105 ${className}`}
    />
  );
}

export function LogoGlyph({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <img
      src="/images/alvision-media-hd-logo.png"
      alt="Alvision Media Logo"
      className={`object-contain transition-transform duration-300 group-hover:scale-105 ${className}`}
    />
  );
}

export default function Logo({
  className = "",
  size = 32,
  showText = true,
  textColor = "text-studio-deep-dark",
  useHDImage = true,
}: LogoProps) {
  if (useHDImage) {
    return (
      <div className={`flex items-center group ${className}`}>
        <LogoImage className={`h-${Math.round(size/4)} max-h-9 w-auto`} />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 group ${className}`}>
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-sky-400/20 blur-md rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
        <LogoGlyph className="w-7 h-7" />
      </div>

      {showText && (
        <div className="flex items-center gap-1.5 font-manrope font-extrabold text-sm tracking-wider uppercase">
          <span className={textColor}>ALVISION</span>
          <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-600 bg-clip-text text-transparent">MEDIA</span>
        </div>
      )}
    </div>
  );
}
