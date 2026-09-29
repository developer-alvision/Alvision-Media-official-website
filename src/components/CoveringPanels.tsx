"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Globe, 
  Share2, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Target,
  Award
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const panelsData = [
  { 
    bg: '#0F172A', 
    color: '#FFFFFF',
    tag: '01 / CREATIVE AGENCY',
    title: 'ALVISION MEDIA', 
    subtitle: 'Full-Service Digital & Media Agency',
    icon: Sparkles,
    badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-400/30',
    stats: [
      { label: 'Network Reach', val: '3M+ Subscribers' },
      { label: 'Total Views', val: '450M+ Views' },
      { label: 'Client Retention', val: '98% Repeat Clients' }
    ],
    highlights: ['YouTube Creator Network', 'Corporate Lead Funnels', 'End-to-End Post Production']
  },
  { 
    bg: '#F8FAFC', 
    color: '#0F172A',
    tag: '02 / BRAND GROWTH',
    title: 'STRATEGY & AUDIENCE', 
    subtitle: 'We build targeted digital strategies that convert.',
    icon: Target,
    badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
    stats: [
      { label: 'Audience Profiling', val: 'Precision Targeting' },
      { label: 'Strategy Framework', val: '9-Step Growth Loop' },
      { label: 'Campaign ROI', val: '3.4x Average ROAS' }
    ],
    highlights: ['Market & Competitor Audits', 'Monthly Content Calendars', 'Funnel Optimization']
  },
  { 
    bg: '#0284C7', 
    color: '#FFFFFF',
    tag: '03 / CINEMATIC PRODUCTION',
    title: 'CONTENT & PRODUCTION', 
    subtitle: 'High-retention reels, shorts, and brand films.',
    icon: Layers,
    badgeBg: 'bg-white/20 text-white border-white/30',
    stats: [
      { label: 'Video Output', val: '120+ Cuts / Month' },
      { label: 'Resolution', val: '4K Cinematic Cuts' },
      { label: 'Audio Quality', val: 'Studio Sound Design' }
    ],
    highlights: ['4K Multi-Cam Shoots', 'Scriptwriting & Storyboards', 'Motion Graphics & Subtitles']
  },
  { 
    bg: '#1e293b', 
    color: '#FFFFFF',
    tag: '04 / WEB & DIGITAL FUNNELS',
    title: 'WEB DEVELOPMENT', 
    subtitle: 'Next.js corporate sites & lead capture funnels.',
    icon: Globe,
    badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
    stats: [
      { label: 'Page Load Speed', val: '< 1.0s Load Time' },
      { label: 'SEO Score', val: '99+ Lighthouse' },
      { label: 'Lead Capture', val: 'WhatsApp Automation' }
    ],
    highlights: ['Next.js React Architecture', 'Responsive Mobile First', 'Core Web Vitals Optimized']
  },
  { 
    bg: '#4F46E5', 
    color: '#FFFFFF',
    tag: '05 / READY TO SCALE?',
    title: "LET'S BUILD TOGETHER", 
    subtitle: 'Transform your brand into a digital growth engine.',
    icon: Zap,
    badgeBg: 'bg-indigo-300/20 text-indigo-200 border-indigo-300/30',
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
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-manrope uppercase leading-none mb-4">
                  {panel.title}
                </h2>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl md:text-2xl font-inter opacity-90 max-w-3xl mb-10 leading-relaxed font-light">
                  {panel.subtitle}
                </p>

                {/* Performance Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mb-8">
                  {panel.stats.map((st, sIdx) => (
                    <div key={sIdx} className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                      <span className="text-xl sm:text-2xl font-extrabold font-manrope block mb-1">
                        {st.val}
                      </span>
                      <span className="text-xs uppercase font-inter tracking-wider opacity-80 block">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {panel.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium font-inter">
                      <CheckCircle size={12} className="opacity-80" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Action button on last card */}
                {index === panelsData.length - 1 && (
                  <a
                    href="#contact"
                    className="mt-8 px-8 py-4 bg-white text-slate-900 font-manrope font-bold text-xs uppercase tracking-widest rounded-full hover:bg-sky-50 transition-colors shadow-lg flex items-center gap-2"
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

