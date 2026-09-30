'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollTextRevealProps {
  text?: string;
  className?: string;
}

const DEFAULT_TEXT =
  "Alvision transforms ambitious brands into digital experiences that attract attention, build trust, and turn every interaction into measurable growth.";

export const ScrollTextReveal: React.FC<ScrollTextRevealProps> = ({
  text = DEFAULT_TEXT,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Split text synchronously into words
  const words = useMemo(() => text.split(' '), [text]);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || words.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const wordElements = textRef.current.querySelectorAll('.reveal-word');
    if (wordElements.length === 0) return;

    if (prefersReducedMotion) {
      gsap.set(wordElements, {
        color: '#FFFFFF',
        opacity: 1,
        filter: 'blur(0px)',
      });
      return;
    }

    const media = gsap.matchMedia();
    const setupReveal = (pin: boolean) => {
      gsap.set(wordElements, {
        color: 'rgba(255, 255, 255, 0.25)',
        opacity: 0.25,
        filter: 'blur(1px)',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: pin ? 'top top' : 'top 78%',
          end: pin ? '+=80%' : '+=60%',
          pin,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(wordElements, {
        color: '#FFFFFF',
        opacity: 1,
        filter: 'blur(0px)',
        stagger: {
          each: 0.1,
          ease: 'power1.inOut',
        },
      });
    };

    media.add('(min-width: 768px)', () => setupReveal(true));
    media.add('(max-width: 767px)', () => setupReveal(false));

    // Refresh ScrollTrigger to ensure correct scroll coordinates
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      media.revert();
    };
  }, [words]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-[50svh] md:min-h-screen bg-[#0B0F17] flex items-center justify-center overflow-hidden py-6 md:py-20 border-b border-slate-800 ${className}`}
    >
      {/* Dark atmospheric backdrop glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/20 via-slate-900/40 to-transparent blur-3xl scale-125" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <div
          ref={textRef}
          className="font-manrope font-extrabold tracking-tight text-center leading-[1.25]"
          style={{ fontSize: 'clamp(1.8rem, 8vw, 4.8rem)' }}
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block whitespace-pre">
              <span className="reveal-word inline-block transition-colors duration-75">
                {word}
              </span>
              {i < words.length - 1 && ' '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollTextReveal;
