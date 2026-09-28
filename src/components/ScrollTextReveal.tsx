'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [words, setWords] = useState<string[]>([]);

  // Split text into words on mount or when text changes
  useEffect(() => {
    setWords(text.split(' '));
  }, [text]);

  const initAnimation = useCallback(() => {
    if (!sectionRef.current || !textRef.current || words.length === 0) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Clear any previous ScrollTriggers associated with this component
    ScrollTrigger.getAll().forEach((st) => {
      if (st.vars.trigger === sectionRef.current) {
        st.kill();
      }
    });

    const wordElements = textRef.current.querySelectorAll('.reveal-word');
    if (wordElements.length === 0) return;

    if (prefersReducedMotion) {
      gsap.set(wordElements, {
        color: 'rgba(0, 8, 14, 1)',
        opacity: 1,
        filter: 'blur(0px)',
      });
      return;
    }

    // Reset to initial state
    gsap.set(wordElements, {
      color: 'rgba(0, 8, 14, 0.12)',
      opacity: 0.12,
      filter: 'blur(0.5px)',
    });

    // Group into visual lines based on offsetTop
    const lines: Element[][] = [];
    let currentLine: Element[] = [];
    let lastTop = -1;

    wordElements.forEach((word) => {
      const el = word as HTMLElement;
      const top = el.offsetTop;

      // Allow a small 5px variance for line grouping
      if (lastTop === -1 || Math.abs(lastTop - top) < 5) {
        currentLine.push(el);
      } else {
        lines.push(currentLine);
        currentLine = [el];
      }
      lastTop = top;
    });

    if (currentLine.length > 0) {
      lines.push(currentLine);
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    // Animate line by line with overlapping ranges
    lines.forEach((lineWords, index) => {
      tl.to(
        lineWords,
        {
          color: 'rgba(0, 8, 14, 1)',
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          stagger: 0.05,
          ease: 'power1.inOut',
        },
        index * 0.5 // overlap by 0.5 to allow 1-2 lines transitioning at a time
      );
    });
  }, [words]);

  useEffect(() => {
    // Wait briefly to ensure DOM is fully laid out before calculating lines
    const timer = setTimeout(() => {
      initAnimation();
    }, 100);

    // Recalculate on resize
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initAnimation();
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      // Cleanup scroll triggers
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) {
          st.kill();
        }
      });
    };
  }, [initAnimation]);

  return (
    <section
      ref={sectionRef}
      className={`relative h-[300vh] bg-[#F0F9FF] ${className}`}
    >
      {/* Sticky container to keep content centered while scrolling through 300vh */}
      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background atmospheric fog effect elements */}
        <div className="absolute inset-0 pointer-events-none opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent blur-3xl scale-150" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 via-transparent to-white/40" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div
            ref={textRef}
            className="font-manrope font-bold tracking-tight text-center"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
          >
            {words.map((word, i) => (
              <span key={i} className="inline-block whitespace-pre">
                <span className="reveal-word inline-block">{word}</span>
                {i < words.length - 1 && ' '}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollTextReveal;
