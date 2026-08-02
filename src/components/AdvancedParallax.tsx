'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AdvancedParallaxProps {
  children: React.ReactNode;
  speed?: number; // positive = moves faster/up, negative = moves slower/down
  direction?: 'vertical' | 'horizontal';
  className?: string;
}

export default function AdvancedParallax({
  children,
  speed = 0.2,
  direction = 'vertical',
  className = '',
}: AdvancedParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const range = [-200 * speed, 200 * speed];
  const y = useTransform(scrollYProgress, [0, 1], range);
  const x = useTransform(scrollYProgress, [0, 1], range);

  return (
    <motion.div
      ref={ref}
      style={{
        y: direction === 'vertical' ? y : 0,
        x: direction === 'horizontal' ? x : 0,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
