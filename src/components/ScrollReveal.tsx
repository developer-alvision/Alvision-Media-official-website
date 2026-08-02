'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Animation variant */
  variant?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'scale' | 'blur';
  /** Delay in ms before animation starts */
  delay?: number;
  /** Duration in ms */
  duration?: number;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
  /** Whether to animate only once */
  once?: boolean;
  /** Distance to translate in px */
  distance?: number;
  /** HTML tag to render */
  as?: 'div' | 'section' | 'article' | 'span' | 'p' | 'header' | 'footer' | 'aside' | 'nav' | 'ul' | 'li';
}

export default function ScrollReveal({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.05,
  once = true,
  distance = 40,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px 50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const getInitialStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      opacity: 0,
      transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      willChange: 'transform, opacity',
    };

    switch (variant) {
      case 'fade-up':
        return { ...base, transform: `translateY(${distance}px)` };
      case 'fade-down':
        return { ...base, transform: `translateY(-${distance}px)` };
      case 'fade-left':
        return { ...base, transform: `translateX(${distance}px)` };
      case 'fade-right':
        return { ...base, transform: `translateX(-${distance}px)` };
      case 'scale':
        return { ...base, transform: 'scale(0.92)' };
      case 'blur':
        return { ...base, filter: 'blur(10px)', transform: `translateY(${distance / 2}px)` };
      case 'fade':
      default:
        return base;
    }
  };

  const getVisibleStyles = (): React.CSSProperties => ({
    opacity: 1,
    transform: 'translate(0, 0) scale(1)',
    filter: 'blur(0px)',
    transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'auto',
  });

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      className={className}
      style={isVisible ? getVisibleStyles() : getInitialStyles()}
    >
      {children}
    </Component>
  );
}

/**
 * Staggered children wrapper — each child gets an incremental delay
 */
interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  variant?: ScrollRevealProps['variant'];
  duration?: number;
}

export function StaggerReveal({
  children,
  className = '',
  staggerDelay = 100,
  variant = 'fade-up',
  duration = 600,
}: StaggerProps) {
  const childArray = React.Children.toArray(children);

  return (
    <div className={className}>
      {childArray.map((child, idx) => (
        <ScrollReveal
          key={idx}
          variant={variant}
          delay={idx * staggerDelay}
          duration={duration}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
