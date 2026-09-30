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
import ScrollReveal from '@/components/ScrollReveal';

const panels = [
  {
    title: 'Discover',
    subtitle: 'Understand your brand, audience, goals, and competitors.',
    icon: Search,
    background: '#0F172A',
    badge: 'text-sky-200 border-sky-300/30 bg-sky-400/10',
    card: 'bg-slate-950/50 border-slate-700/80',
    items: ['Client briefing and brand discussion', 'Audience and market research', 'Competitor analysis', 'Find your unique story', 'Monthly content strategy'],
  },
  {
    title: 'Strategy',
    subtitle: 'Build your monthly content and marketing strategy.',
    icon: Lightbulb,
    background: '#075985',
    badge: 'text-sky-100 border-sky-200/30 bg-sky-300/10',
    card: 'bg-sky-950/50 border-sky-300/20',
    items: ['Content calendar', 'Reel and video concepts', 'Campaign ideas', 'Seasonal content', 'Shoot schedule', 'Concept approval'],
  },
  {
    title: 'Create',
    subtitle: 'Bring ideas to life with professional production.',
    icon: Camera,
    background: '#4C1D3D',
    badge: 'text-pink-100 border-pink-200/30 bg-pink-300/10',
    card: 'bg-rose-950/50 border-pink-300/20',
    items: ['Scripts and storyboards', 'Shoot planning', 'Videography and photography', 'Voice-over and interviews', 'AI-assisted content when useful'],
  },
  {
    title: 'Produce',
    subtitle: 'Turn raw footage into engaging, polished content.',
    icon: Layers,
    background: '#881337',
    badge: 'text-rose-100 border-rose-200/30 bg-rose-300/10',
    card: 'bg-rose-950/50 border-rose-300/20',
    items: ['Video editing', 'Motion graphics', 'Design and thumbnails', 'Sound design', 'Colour correction', 'Captions and subtitles'],
  },
  {
    title: 'Approve',
    subtitle: 'We keep you involved at every step.',
    icon: FileCheck,
    background: '#0369A1',
    badge: 'text-sky-100 border-sky-200/30 bg-sky-300/10',
    card: 'bg-sky-950/50 border-sky-300/20',
    items: ['First draft shared', 'Client feedback', 'Revisions', 'Final approval'],
  },
  {
    title: 'Publish',
    subtitle: 'Put your content in front of the right audience.',
    icon: Share2,
    background: '#3730A3',
    badge: 'text-indigo-100 border-indigo-200/30 bg-indigo-300/10',
    card: 'bg-indigo-950/50 border-indigo-300/20',
    items: ['Instagram and Facebook', 'YouTube channel', 'Google Business Profile', 'Relevant platforms', 'Scheduling and publishing'],
  },
  {
    title: 'Promote',
    subtitle: 'Grow reach, engagement, and brand visibility.',
    icon: Megaphone,
    background: '#14532D',
    badge: 'text-emerald-100 border-emerald-200/30 bg-emerald-300/10',
    card: 'bg-emerald-950/50 border-emerald-300/20',
    items: ['Organic growth', 'Creator collaborations', 'Campaigns and contests', 'On-ground marketing', 'Paid advertising when appropriate'],
  },
  {
    title: 'Analyse',
    subtitle: 'Measure what matters and learn from the results.',
    icon: TrendingUp,
    background: '#7C2D12',
    badge: 'text-amber-100 border-amber-200/30 bg-amber-300/10',
    card: 'bg-amber-950/50 border-amber-300/20',
    items: ['Reach and engagement tracking', 'Lead and follower growth', 'Performance reports', 'Top content review', 'Insights and learnings'],
  },
  {
    title: 'Optimise',
    subtitle: 'Learn, improve, and make the next round even stronger.',
    icon: Settings,
    background: '#115E59',
    badge: 'text-teal-100 border-teal-200/30 bg-teal-300/10',
    card: 'bg-teal-950/50 border-teal-300/20',
    items: ['Review results', 'Identify what works', 'Refine the strategy', 'Develop new ideas', 'Plan the next month'],
  },
];

export default function CoveringPanels() {
  return (
    <section aria-label="How we work" className="relative w-full bg-[#0B0F17]">
      {panels.map((panel, panelIndex) => {
        const Icon = panel.icon;

        return (
          <div
            key={panel.title}
            className="relative md:sticky md:top-0 min-h-0 md:min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 py-10 md:py-12 border-t border-white/10 shadow-2xl"
            style={{ backgroundColor: panel.background, color: '#FFFFFF', zIndex: panelIndex + 1 }}
          >
            <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">
              <ScrollReveal variant="fade-down" duration={550}>
                <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold uppercase mb-4 md:mb-6 shadow-sm ${panel.badge}`}>
                  <Icon size={15} aria-hidden="true" />
                  <span>Step {String(panelIndex + 1).padStart(2, '0')}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={60} duration={650}>
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-manrope uppercase leading-none mb-3 md:mb-4 text-white">
                  {panel.title}
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={120} duration={650}>
                <p className="text-base sm:text-xl md:text-2xl font-inter text-white/90 max-w-2xl mb-6 md:mb-10 leading-relaxed">
                  {panel.subtitle}
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-3xl mb-6 md:mb-10">
                {panel.items.map((item, itemIndex) => (
                  <ScrollReveal key={item} className="h-full" delay={itemIndex * 55} duration={550} distance={22}>
                    <div className={`h-full min-h-14 p-3.5 sm:p-4 rounded-xl border backdrop-blur-md flex items-center gap-3 text-left shadow-sm card-hover-lift hover:border-white/40 hover:bg-white/10 ${panel.card}`}>
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="text-sky-200" aria-hidden="true" />
                      </span>
                      <span className="text-xs sm:text-sm font-semibold font-inter text-white/95 leading-snug">
                        {item}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <div className="flex items-center gap-3" aria-label={`Step ${panelIndex + 1} of ${panels.length}`}>
                <span className="text-xs font-mono uppercase text-white/70">
                  {String(panelIndex + 1).padStart(2, '0')} / {String(panels.length).padStart(2, '0')}
                </span>
                <div className="flex gap-1.5" aria-hidden="true">
                  {panels.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`h-2 rounded-full transition-all duration-300 ${dotIndex === panelIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>

              {panelIndex === panels.length - 1 && (
                <a
                  href="#contact"
                  className="mt-6 px-8 py-3.5 bg-white text-slate-950 font-manrope font-bold text-xs uppercase rounded-full hover:bg-sky-50 transition-all shadow-xl flex items-center gap-2 btn-shimmer"
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