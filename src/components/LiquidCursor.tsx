'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function LiquidCursor() {
  const [mounted, setMounted] = useState(false);
  const [hoveredType, setHoveredType] = useState<'none' | 'link' | 'card' | 'btn'>('none');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const closestLink = target.closest('a, button');
      if (closestLink) {
        if (closestLink.classList.contains('btn-shimmer') || closestLink.tagName === 'BUTTON') {
          setHoveredType('btn');
        } else {
          setHoveredType('link');
        }
        return;
      }

      const closestCard = target.closest('.card-hover-tilt, article');
      if (closestCard) {
        setHoveredType('card');
        return;
      }

      setHoveredType('none');
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0)) {
    return null;
  }

  const getCursorVariants = () => {
    switch (hoveredType) {
      case 'link':
        return {
          width: 60,
          height: 60,
          backgroundColor: 'rgba(14, 165, 233, 0.15)',
          border: '1px solid rgba(14, 165, 233, 0.4)',
          mixBlendMode: 'normal' as const,
        };
      case 'btn':
        return {
          width: 80,
          height: 80,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          border: '1px solid rgba(14, 165, 233, 0.6)',
          mixBlendMode: 'difference' as const,
        };
      case 'card':
        return {
          width: 100,
          height: 100,
          backgroundColor: 'rgba(14, 165, 233, 0)',
          border: '2px dashed rgba(14, 165, 233, 0.3)',
          mixBlendMode: 'normal' as const,
        };
      case 'none':
      default:
        return {
          width: 16,
          height: 16,
          backgroundColor: 'rgba(14, 165, 233, 1)',
          border: '1px solid rgba(14, 165, 233, 0)',
          mixBlendMode: 'normal' as const,
        };
    }
  };

  return (
    <>
      {/* Outer Follower */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={getCursorVariants()}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        {hoveredType === 'card' && (
          <span className="text-[9px] tracking-wider text-alvision-secondary font-bold font-manrope uppercase select-none animate-spin" style={{ animationDuration: '10s' }}>
            Explore • Explore •
          </span>
        )}
      </motion.div>

      {/* Tiny Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-alvision-secondary rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: hoveredType !== 'none' ? 0.3 : 1,
        }}
      />
    </>
  );
}
