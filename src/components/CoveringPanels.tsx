'use client';

import React from 'react';
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  FileCheck,
  Layers,
  Lightbulb,
  Megaphone,
  Search,
  Settings,
  Share2,
  TrendingUp,
} from 'lucide-react';

const panels = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Understand your brand, audience, goals & competitors.',
    icon: Search,
    bg: '#0F172A',
    badge: 'text-sky-200 border-sky-400/30 bg-sky-500/10',
    card: 'bg-slate-900/80 border-slate-700/60',
    items: [
      'Client briefing & brand discussion',
      'Audience & market research',
      'Competitor analysis',
      'Find your unique story',
      'Monthly content strategy',
    ],
  },
  {
    step: '02',
    title: 'STRATEGY',
    subtitle: 'Build your monthly content & marketing strategy.',
    icon: Lightbulb,
    bg: '#075985',
    badge: 'text-sky-100 border-sky-300/30 bg-sky-400/10',
    card: 'bg-sky-950/70 border-sky-400/20',
    items: [
      'Content calendar',
      'Reel & video concepts',
      'Campaign ideas',
      'Seasonal content',
      'Shoot schedule',
      'Concept approval',
    ],
  },
  {
    step: '03',
    title: 'CREATE',
    subtitle: 'Bring ideas to life with professional production.',
    icon: Camera,
    bg: '#4C1D3D',
    badge: 'text-pink-100 border-pink-300/30 bg-pink-400/10',
    card: 'bg-rose-950/70 border-pink-400/20',
    items: [
      'Scripts & storyboards',
      'Shoot planning',
      'Videography & photography',
      'Voice-over & interviews',
      'AI-assisted content',
    ],
  },
  {
    step: '04',
    title: 'PRODUCE',
    subtitle: 'Turn raw footage into polished, high-quality content.',
    icon: Layers,
    bg: '#881337',
    badge: 'text-rose-100 border-rose-300/30 bg-rose-400/10',
    card: 'bg-rose-950/70 border-rose-400/20',
    items: [
      'Video editing',
      'Motion graphics',
      'Design & thumbnails',
      'Sound design',
      'Colour correction',
      'Captions & subtitles',
    ],
  },
  {
    step: '05',
    title: 'APPROVE',
    subtitle: 'We keep you involved at every step of the process.',
    icon: FileCheck,
    bg: '#0369A1',
    badge: 'text-sky-100 border-sky-300/30 bg-sky-400/10',
    card: 'bg-sky-950/70 border-sky-400/20',
    items: ['First draft shared', 'Client feedback', 'Revisions', 'Final approval'],
  },
  {
    step: '06',
    title: 'PUBLISH',
    subtitle: 'Put your content in front of the right audience.',
    icon: Share2,
    bg: '#3730A3',
    badge: 'text-indigo-100 border-indigo-300/30 bg-indigo-400/10',
    card: 'bg-indigo-950/70 border-indigo-400/20',
    items: [
      'Instagram & Facebook',
      'YouTube channel',
      'Google Business Profile',
      'Relevant platforms',
      'Scheduling & publishing',
    ],
  },
  {
    step: '07',
    title: 'PROMOTE',
    subtitle: 'Increase reach, engagement & brand visibility.',
    icon: Megaphone,
    bg: '#14532D',
    badge: 'text-emerald-100 border-emerald-300/30 bg-emerald-400/10',
    card: 'bg-emerald-950/70 border-emerald-400/20',
    items: [
      'Organic growth',
      'Creator collaborations',
      'Campaigns & contests',
      'On-ground marketing',
      'Paid advertising',
    ],
  },
  {
    step: '08',
    title: 'ANALYSE',
    subtitle: 'Measure what matters and learn from the data.',
    icon: TrendingUp,
    bg: '#7C2D12',
    badge: 'text-amber-100 border-amber-300/30 bg-amber-400/10',
    card: 'bg-amber-950/70 border-amber-400/20',
    items: [
      'Reach & engagement tracking',
      'Lead & follower growth',
      'Performance reports',
      'Top content review',
      'Insights & learnings',
    ],
  },
  {
    step: '09',
    title: 'OPTIMISE',
    subtitle: 'Learn, improve, and make the next round even stronger.',
    icon: Settings,
    bg: '#115E59',
    badge: 'text-teal-100 border-teal-300/30 bg-teal-400/10',
    card: 'bg-teal-950/70 border-teal-400/20',
    items: [
      'Review results',
      'Identify what works',
      'Refine the strategy',
      'Develop new ideas',
      'Plan the next month',
    ],
  },
];

export default function CoveringPanels() {
  return (
    <section aria-label="Our 9-step process" className="relative w-full">
      {panels.map((panel, index) => {
        const Icon = panel.icon;
        const isLast = index === panels.length - 1;
        return (
          <div
            key={panel.step}
            className="sticky top-0 w-full flex items-center justify-center overflow-hidden"
            style={{
              height: '100dvh',
              backgroundColor: panel.bg,
              zIndex: index + 1,
            }}
          >
            {/* Subtle radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 60% 40%, rgba(255,255,255,0.06) 0%, transparent 65%)`,
              }}
            />

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center text-white">
              {/* Step badge */}
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold uppercase mb-4 md:mb-5 ${panel.badge}`}
              >
                <Icon size={13} aria-hidden="true" />
                <span>Step {panel.step}</span>
              </div>

              {/* Title */}
              <h2 className="text-[clamp(2.8rem,9vw,6rem)] font-extrabold tracking-tight font-manrope uppercase leading-none mb-3 md:mb-4">
                {panel.title}
              </h2>

              {/* Subtitle */}
              <p className="text-[clamp(0.9rem,2.2vw,1.3rem)] font-inter text-white/85 max-w-xl mb-5 md:mb-7 leading-relaxed">
                {panel.subtitle}
              </p>

              {/* Items grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-2xl mb-5 md:mb-7">
                {panel.items.map((item) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-left ${panel.card}`}
                  >
                    <CheckCircle2 size={13} className="text-white/60 shrink-0" aria-hidden="true" />
                    <span className="text-[11px] sm:text-xs font-semibold font-inter text-white/90 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-3" aria-label={`Step ${index + 1} of ${panels.length}`}>
                <span className="text-[10px] font-mono uppercase text-white/60 tabular-nums">
                  {panel.step} / {String(panels.length).padStart(2, '0')}
                </span>
                <div className="flex gap-1.5" aria-hidden="true">
                  {panels.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`h-1.5 rounded-full ${dotIndex === index ? 'w-7 bg-white' : 'w-1.5 bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>

              {/* CTA on last step */}
              {isLast && (
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-950 font-manrope font-bold text-xs uppercase tracking-widest rounded-full hover:bg-sky-50 transition-all shadow-xl btn-shimmer"
                >
                  Start Your Campaign <ArrowRight size={14} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}