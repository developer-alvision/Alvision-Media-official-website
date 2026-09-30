"use client";

import React from 'react';
import { 
  Search, 
  Lightbulb, 
  Camera, 
  Layers, 
  FileCheck, 
  Share2, 
  Megaphone, 
  TrendingUp, 
  Settings, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

const panelsData = [
  {
    step: '01',
    tag: 'STEP 01 / DISCOVER',
    title: 'DISCOVER',
    subtitle: 'Understand your brand, audience, goals & competitors.',
    icon: Search,
    bg: '#0F172A', // Midnight Slate
    badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-400/30',
    cardBg: 'bg-slate-900/90 border-slate-800 text-white',
    items: [
      'Client briefing & brand discussion',
      'Audience & market research',
      'Competitor analysis',
      'Find your unique story',
      'Monthly content strategy'
    ]
  },
  {
    step: '02',
    tag: 'STEP 02 / STRATEGY',
    title: 'STRATEGY',
    subtitle: 'Build your monthly content & marketing strategy.',
    icon: Lightbulb,
    bg: '#0369A1', // Ocean Blue
    badgeBg: 'bg-sky-400/20 text-sky-100 border-sky-300/30',
    cardBg: 'bg-sky-950/80 border-sky-800 text-white',
    items: [
      'Content calendar',
      'Reel & video concepts',
      'Campaign ideas',
      'Festival / seasonal content',
      'Shoot schedule',
      'Concept approval'
    ]
  },
  {
    step: '03',
    tag: 'STEP 03 / CREATE',
    title: 'CREATE',
    subtitle: 'Bring your ideas to life with professional production.',
    icon: Camera,
    bg: '#4C1D95', // Deep Purple
    badgeBg: 'bg-purple-400/20 text-purple-200 border-purple-300/30',
    cardBg: 'bg-purple-950/80 border-purple-800 text-white',
    items: [
      'Scripts & storyboards',
      'Shoot planning',
      'Videography & Photography',
      'Voice-over / interviews',
      'AI-assisted content (where required)'
    ]
  },
  {
    step: '04',
    tag: 'STEP 04 / PRODUCE',
    title: 'PRODUCE',
    subtitle: 'Turn raw footage into engaging, high-quality content.',
    icon: Layers,
    bg: '#9F1239', // Deep Rose Red
    badgeBg: 'bg-rose-400/20 text-rose-200 border-rose-300/30',
    cardBg: 'bg-rose-950/80 border-rose-800 text-white',
    items: [
      'Video editing',
      'Motion graphics',
      'Design & thumbnails',
      'Sound design',
      'Colour correction',
      'Captions & subtitles'
    ]
  },
  {
    step: '05',
    tag: 'STEP 05 / APPROVE',
    title: 'APPROVE',
    subtitle: 'We keep you involved every step of the way.',
    icon: FileCheck,
    bg: '#0284C7', // Sky Blue
    badgeBg: 'bg-sky-400/20 text-sky-100 border-sky-300/30',
    cardBg: 'bg-sky-950/80 border-sky-800 text-white',
    items: [
      'First draft shared',
      'Client feedback',
      'Revisions',
      'Final approval'
    ]
  },
  {
    step: '06',
    tag: 'STEP 06 / PUBLISH',
    title: 'PUBLISH',
    subtitle: 'Get your content in front of the right audience.',
    icon: Share2,
    bg: '#3730A3', // Indigo
    badgeBg: 'bg-indigo-400/20 text-indigo-200 border-indigo-300/30',
    cardBg: 'bg-indigo-950/80 border-indigo-800 text-white',
    items: [
      'Instagram & Facebook',
      'YouTube Channel',
      'Google Business Profile',
      'Other relevant platforms',
      'Scheduling & publishing'
    ]
  },
  {
    step: '07',
    tag: 'STEP 07 / PROMOTE',
    title: 'PROMOTE',
    subtitle: 'Increase reach, engagement & brand visibility.',
    icon: Megaphone,
    bg: '#14532D', // Emerald Green
    badgeBg: 'bg-emerald-400/20 text-emerald-100 border-emerald-300/30',
    cardBg: 'bg-emerald-950/80 border-emerald-800 text-white',
    items: [
      'Organic growth',
      'Collaborations & Influencer campaigns',
      'Campaigns & contests',
      'On-ground marketing',
      'Paid advertising (where appropriate)'
    ]
  },
  {
    step: '08',
    tag: 'STEP 08 / ANALYSE',
    title: 'ANALYSE',
    subtitle: 'Measure what matters.',
    icon: TrendingUp,
    bg: '#7C2D12', // Amber Orange
    badgeBg: 'bg-amber-400/20 text-amber-100 border-amber-300/30',
    cardBg: 'bg-amber-950/80 border-amber-800 text-white',
    items: [
      'Reach & engagement tracking',
      'Leads / followers growth',
      'Performance report',
      'Best-performing content audit',
      'Insights & learnings'
    ]
  },
  {
    step: '09',
    tag: 'STEP 09 / OPTIMISE',
    title: 'OPTIMISE',
    subtitle: 'Learn, improve, create better content.',
    icon: Settings,
    bg: '#115E59', // Deep Teal
    badgeBg: 'bg-teal-400/20 text-teal-100 border-teal-300/30',
    cardBg: 'bg-teal-950/80 border-teal-800 text-white',
    items: [
      'Analyse results',
      'Identify what works',
      'Refine strategy',
      'New ideas & concepts',
      "Next month's plan"
    ]
  }
];

export default function CoveringPanels() {
  return (
    <section aria-label="What We Do - 9 Step Process Stack" className="relative w-full bg-[#0B0F17]">
      {panelsData.map((panel, index) => {
        const IconComp = panel.icon;
        return (
          <div
            key={`panel-${index}`}
            className="sticky top-0 min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 py-12 border-t border-white/10 shadow-2xl transition-all duration-300"
            style={{
              backgroundColor: panel.bg,
              color: '#FFFFFF',
              zIndex: index + 1,
            }}
          >
            <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center my-auto">
              
              {/* Category Step Badge */}
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold tracking-widest uppercase mb-4 sm:mb-6 shadow-sm ${panel.badgeBg}`}>
                <IconComp size={15} />
                <span>{panel.tag}</span>
              </div>

              {/* Section Title */}
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-manrope uppercase leading-none mb-3 sm:mb-4 text-white">
                {panel.title}
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-xl md:text-2xl font-inter text-white/90 max-w-2xl mb-6 sm:mb-10 leading-relaxed font-normal">
                {panel.subtitle}
              </p>

              {/* Step Action Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-3xl mb-6 sm:mb-10">
                {panel.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border backdrop-blur-md flex items-center gap-3 text-left shadow-sm ${panel.cardBg}`}
                  >
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={13} className="text-sky-300" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold font-inter text-white/95 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step Progress Indicator Pill */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-white/70">
                  STEP {index + 1} OF 9
                </span>
                <div className="flex gap-1.5">
                  {panelsData.map((_, dotIdx) => (
                    <div 
                      key={dotIdx} 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        dotIdx === index ? 'w-8 bg-white' : 'w-2 bg-white/30'
                      }`} 
                    />
                  ))}
                </div>
              </div>

              {/* Final Action Button on step 9 */}
              {index === panelsData.length - 1 && (
                <a
                  href="#contact"
                  className="mt-6 px-8 py-3.5 bg-white text-slate-950 font-manrope font-bold text-xs uppercase tracking-widest rounded-full hover:bg-sky-50 transition-all shadow-xl flex items-center gap-2 btn-shimmer"
                >
                  Start Your Campaign <ArrowRight size={14} />
                </a>
              )}

            </div>
          </div>
        );
      })}
    </section>
  );
}



