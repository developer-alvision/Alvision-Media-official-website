"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const panelsData = [
  { bg: '#0A1628', color: '#ffffff', title: 'ALVISION MEDIA', subtitle: 'Creative Digital Agency' },
  { bg: '#F5F0E8', color: '#000000', title: 'STRATEGY', subtitle: 'We build meaningful digital experiences.' },
  { bg: '#E0F2FE', color: '#000000', title: 'BRANDING', subtitle: 'Identity that creates recognition.' },
  { bg: '#FF6B6B', color: '#ffffff', title: 'WEB', subtitle: 'Web experiences designed for impact.' },
  { bg: '#84CC16', color: '#000000', title: 'SOCIAL', subtitle: 'Content that creates engagement.' },
  { bg: '#C4B5FD', color: '#000000', title: 'PERFORMANCE', subtitle: 'Data-driven digital growth.' },
  { bg: '#FACC15', color: '#000000', title: 'CREATIVE', subtitle: 'Ideas transformed into visual stories.' },
  { bg: '#F472B6', color: '#ffffff', title: 'CAMPAIGNS', subtitle: 'Digital campaigns with purpose.' },
  { bg: '#2DD4BF', color: '#000000', title: 'RESULTS', subtitle: 'Creative work backed by measurable results.' },
  { bg: '#7C3AED', color: '#ffffff', title: "LET'S BUILD", subtitle: 'Your next digital experience.' }
];

export default function CoveringPanels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    if (isReducedMotion || !containerRef.current) return;

    // Filter out any null refs
    const validPanels = panelsRef.current.filter((panel): panel is HTMLDivElement => panel !== null);
    
    if (validPanels.length !== panelsData.length) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        }
      });

      // Animate each panel from panel 1 to 9 (0-indexed 1 to 9)
      validPanels.forEach((panel, index) => {
        if (index === 0) return; // Skip the first panel as it is always visible
        
        tl.to(panel, {
          y: "0%",
          ease: "none",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isReducedMotion]);

  if (isReducedMotion) {
    // For reduced motion, fallback to a standard stacked layout without sticky positioning or scroll animations
    return (
      <div className="flex flex-col w-full">
        {panelsData.map((panel, index) => (
          <div
            key={`reduced-${index}`}
            className="w-full h-screen flex flex-col justify-center items-center text-center px-4"
            style={{
              backgroundColor: panel.bg,
              color: panel.color,
            }}
          >
            <h2 className="text-[clamp(3rem,10vw,8rem)] font-bold tracking-tight uppercase font-inter leading-none">
              {panel.title}
            </h2>
            <p className="text-[clamp(1rem,2vw,1.5rem)] font-medium mt-4 font-manrope">
              {panel.subtitle}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="relative w-full" 
      style={{ height: "1000vh" }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#0A1628]">
        {panelsData.map((panel, index) => (
          <div
            key={`panel-${index}`}
            ref={(el) => {
              if (el) panelsRef.current[index] = el;
            }}
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4 will-change-transform"
            style={{
              backgroundColor: panel.bg,
              color: panel.color,
              zIndex: index + 1,
              transform: index === 0 ? "translateY(0%)" : "translateY(100%)",
            }}
          >
            <h2 className="text-[clamp(3rem,10vw,8rem)] font-bold tracking-tight uppercase font-inter leading-none">
              {panel.title}
            </h2>
            <p className="text-[clamp(1rem,2vw,1.5rem)] font-medium mt-4 font-manrope">
              {panel.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
