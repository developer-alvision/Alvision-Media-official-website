'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export default function RevealText({ text, className = '', as = 'p' }: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.5'],
  });

  const words = text.split(' ');
  const Tag = as as React.ElementType;

  return (
    <Tag ref={ref} className={`${className} inline-flex flex-wrap`}>
      {words.map((word, idx) => {
        const start = idx / words.length;
        const end = (idx + 1) / words.length;
        return (
          <Word key={idx} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </Tag>
  );
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <span className="relative mr-2 mb-1 inline-block">
      <motion.span style={{ opacity, y }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}
