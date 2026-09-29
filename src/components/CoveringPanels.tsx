"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, 
  Layers, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Target
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const panelsData = [
  { 
    bg: '#0F172A', // Midnight Slate
    color: '#FFFFFF',
    tag: '01 / CREATIVE AGENCY',
    title: 'ALVISION MEDIA', 
    subtitle: 'Full-Service Digital & Media Agency',
    icon: Sparkles,
    badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-400/30',
    statBg: 'bg-slate-800/80 border-slate-700 text-white',
    highlightBg: 'bg-slate-800/60 border-slate-700/80 text-sky-200',
    stats: [
      { label: 'Network Reach', val: '3M+ Subscribers' },
      { label: 'Total Views', val: '450M+ Views' },
      { label: 'Client Retention', val: '98% Repeat Clients' }
    ],
    highlights: ['YouTube Creator Network', 'Corporate Lead Funnels', 'End-to-End Post Production']
  },
  { 
    bg: '#0284C7', // Ocean Sky Blue
    color: '#FFFFFF',
    tag: '02 / BRAND GROWTH',
    title: 'STRATEGY & AUDIENCE', 
    subtitle: 'We build targeted digital strategies that convert.',
    icon: Target,
    badgeBg: 'bg-white/20 text-white border-white/30',
    statBg: 'bg-sky-900/40 border-white/20 text-white',
    highlightBg: 'bg-sky-900/30 border-white/20 text-sky-100',
    stats: [
      { label: 'Audience Profiling', val: 'Precision Targeting' },
      { label: 'Strategy Framework', val: '9-Step Growth Loop' },
      { label: 'Campaign ROI', val: '3.4x Average ROAS' }
    ],
    highlights: ['Market & Competitor Audits', 'Monthly Content Calendars', 'Funnel Optimization']
  },
  { 
    bg: '#7C3AED', // Royal Violet / Purple
    color: '#FFFFFF',
    tag: '03 / CINEMATIC PRODUCTION',
    title: 'CONTENT & PRODUCTION', 
    subtitle: 'High-retention reels, shorts, and brand films.',
    icon: Layers,
    badgeBg: 'bg-purple-300/20 text-purple-200 border-purple-300/30',
    statBg: 'bg-purple-950/40 border-purple-300/20 text-white',
    highlightBg: 'bg-purple-950/30 border-purple-300/20 text-purple-100',
    stats: [
      { label: 'Video Output', val: '120+ Cuts / Month' },
      { label: 'Resolution', val: '4K Cinematic Cuts' },
      { label: 'Audio Quality', val: 'Studio Sound Design' }
    ],
    highlights: ['4K Multi-Cam Shoots', 'Scriptwriting & Storyboards', 'Motion Graphics & Subtitles']
  },
  { 
    bg: '#059669', // Emerald Mint Green
    color: '#FFFFFF',
    tag: '04 / WEB & DIGITAL FUNNELS',
    title: 'WEB DEVELOPMENT', 
    subtitle: 'Next.js corporate sites & lead capture funnels.',
    icon: Globe,
    badgeBg: 'bg-emerald-300/20 text-emerald-100 border-emerald-300/30',
    statBg: 'bg-emerald-950/40 border-emerald-300/20 text-white',
    highlightBg: 'bg-emerald-950/30 border-emerald-300/20 text-emerald-100',
    stats: [
      { label: 'Page Load Speed', val: '< 1.0s Load Time' },
      { label: 'SEO Score', val: '99+ Lighthouse' },
      { label: 'Lead Capture', val: 'WhatsApp Automation' }
    ],
    highlights: ['Next.js React Architecture', 'Responsive Mobile First', 'Core Web Vitals Optimized']
  },
  { 
    bg: '#D97706', // Warm Amber Gold
    color: '#FFFFFF',
    tag: '05 / READY TO SCALE?',
    title: "LET'S BUILD TOGETHER", 
    subtitle: 'Transform your brand into a digital growth engine.',
    icon: Zap,
    badgeBg: 'bg-amber-950/30 text-amber-100 border-amber-300/30',
    statBg: 'bg-amber-950/40 border-amber-200/30 text-white',
    highlightBg: 'bg-amber-950/30 border-amber-200/30 text-amber-100',
    stats: [
      { label: 'Onboarding', val: '< 48 Hours Setup' },
      { label: 'Support', val: 'Dedicated Strategist' },
      { label: 'Action', val: 'Instant Consultation' }
    ],
    highlights: ['Free Strategy Call', 'Custom Proposal', 'Guaranteed Campaign Execution']
  }
];

export default function CoveringPanels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    if (isReducedMotion || !containerRef.current) return;

    const validPanels = panelsRef.current.filter((panel): panel is HTMLDivElement => panel !== null);
    if (validPanels.length !== panelsData.length) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
        }
      });

      validPanels.forEach((panel, index) => {
        if (index === 0) return;
        
        tl.to(panel, {
          y: "0%",
          ease: "none",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isReducedMotion]);

  if (isReducedMotion) {
    return (
      <div className="flex flex-col w-full">
        {panelsData.map((panel, index) => (
          <div
            key={`reduced-${index}`}
            className="w-full py-20 px-6 sm:px-12 flex flex-col justify-center items-center text-center"
            style={{
              backgroundColor: panel.bg,
              color: panel.color,
            }}
          >
            <span className="text-xs font-mono tracking-widest uppercase mb-4 px-3 py-1 rounded-full border opacity-80">
              {panel.tag}
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-manrope">
              {panel.title}
            </h2>
            <p className="text-lg font-medium mt-3 font-inter opacity-90 max-w-2xl">
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
      style={{ height: "450vh" }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#0F172A]">
        {panelsData.map((panel, index) => {
          const IconComp = panel.icon;
          return (
            <div
              key={`panel-${index}`}
              ref={(el) => {
                if (el) panelsRef.current[index] = el;
              }}
              className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-6 sm:px-12 will-change-transform"
              style={{
                backgroundColor: panel.bg,
                color: panel.color,
                zIndex: index + 1,
                transform: index === 0 ? "translateY(0%)" : "translateY(100%)",
              }}
            >
              <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center">
                
                {/* Category Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-bold tracking-widest uppercase mb-6 ${panel.badgeBg}`}>
                  <IconComp size={14} />
                  <span>{panel.tag}</span>
                </div>

                {/* Section Title */}
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-manrope uppercase leading-none mb-4 text-white">
                  {panel.title}
                </h2>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl md:text-2xl font-inter text-white/90 max-w-3xl mb-10 leading-relaxed font-light">
                  {panel.subtitle}
                </p>

                {/* Performance Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mb-8">
                  {panel.stats.map((st, sIdx) => (
                    <div key={sIdx} className={`p-5 rounded-2xl border backdrop-blur-md text-center shadow-sm ${panel.statBg}`}>
                      <span className="text-xl sm:text-2xl font-extrabold font-manrope block mb-1 text-white">
                        {st.val}
                      </span>
                      <span className="text-xs uppercase font-inter tracking-wider block opacity-90 text-white/80">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {panel.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold font-inter shadow-xs ${panel.highlightBg}`}>
                      <CheckCircle size={14} className="text-white shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Action button on last card */}
                {index === panelsData.length - 1 && (
                  <a
                    href="#contact"
                    className="mt-8 px-8 py-4 bg-white text-slate-900 font-manrope font-bold text-xs uppercase tracking-widest rounded-full hover:bg-amber-50 transition-all shadow-xl flex items-center gap-2"
                  >
                    Get Started Now <ArrowRight size={14} />
                  </a>
                )}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


