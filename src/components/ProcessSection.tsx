'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Lightbulb, 
  Camera, 
  Send, 
  BarChart3, 
  Brain, 
  Star, 
  Check, 
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Sparkles,
  RefreshCw,
  Layers,
  FileCheck,
  Share2,
  Megaphone,
  TrendingUp,
  Settings,
  Info
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ProcessSection() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const processSteps = [
    {
      step: '01',
      title: 'DISCOVER',
      subtitle: 'Understand your brand, audience, goals & competitors.',
      icon: Search,
      badgeColor: 'bg-amber-400 text-slate-950',
      borderColor: 'border-amber-400',
      lightBg: 'bg-amber-50/60',
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
      title: 'STRATEGY',
      subtitle: 'Build your monthly content & marketing strategy.',
      icon: Lightbulb,
      badgeColor: 'bg-emerald-500 text-white',
      borderColor: 'border-emerald-500',
      lightBg: 'bg-emerald-50/60',
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
      title: 'CREATE',
      subtitle: 'Bring your ideas to life with professional production.',
      icon: Camera,
      badgeColor: 'bg-purple-500 text-white',
      borderColor: 'border-purple-500',
      lightBg: 'bg-purple-50/60',
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
      title: 'PRODUCE',
      subtitle: 'Turn raw footage into engaging, high-quality content.',
      icon: Layers,
      badgeColor: 'bg-rose-500 text-white',
      borderColor: 'border-rose-500',
      lightBg: 'bg-rose-50/60',
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
      title: 'APPROVE',
      subtitle: 'We keep you involved every step of the way.',
      icon: FileCheck,
      badgeColor: 'bg-sky-500 text-white',
      borderColor: 'border-sky-500',
      lightBg: 'bg-sky-50/60',
      items: [
        'First draft shared',
        'Client feedback',
        'Revisions',
        'Final approval'
      ]
    },
    {
      step: '06',
      title: 'PUBLISH',
      subtitle: 'Get your content in front of the right audience.',
      icon: Share2,
      badgeColor: 'bg-indigo-500 text-white',
      borderColor: 'border-indigo-500',
      lightBg: 'bg-indigo-50/60',
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
      title: 'PROMOTE',
      subtitle: 'Increase reach, engagement & brand visibility.',
      icon: Megaphone,
      badgeColor: 'bg-lime-600 text-white',
      borderColor: 'border-lime-600',
      lightBg: 'bg-lime-50/60',
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
      title: 'ANALYSE',
      subtitle: 'Measure what matters.',
      icon: TrendingUp,
      badgeColor: 'bg-orange-500 text-white',
      borderColor: 'border-orange-500',
      lightBg: 'bg-orange-50/60',
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
      title: 'OPTIMISE',
      subtitle: 'Learn, improve, create better content.',
      icon: Settings,
      badgeColor: 'bg-teal-700 text-white',
      borderColor: 'border-teal-700',
      lightBg: 'bg-teal-50/60',
      items: [
        'Analyse results',
        'Identify what works',
        'Refine strategy',
        'New ideas & concepts',
        'Next month\'s plan'
      ]
    }
  ];

  const growthLoop = [
    { label: 'DISCOVER', icon: Search, num: '01' },
    { label: 'STRATEGY', icon: Lightbulb, num: '02' },
    { label: 'CREATE', icon: Camera, num: '03' },
    { label: 'PRODUCE', icon: Layers, num: '04' },
    { label: 'APPROVE', icon: FileCheck, num: '05' },
    { label: 'PUBLISH', icon: Share2, num: '06' },
    { label: 'PROMOTE', icon: Megaphone, num: '07' },
    { label: 'ANALYSE', icon: TrendingUp, num: '08' },
    { label: 'OPTIMISE', icon: Settings, num: '09' },
  ];

  return (
    <section id="process" aria-label="Our 9-Step Process Framework" className="py-20 md:py-28 relative bg-white overflow-hidden border-t border-sky-100 scroll-mt-20">
      
      {/* Header Branding */}
      <ScrollReveal variant="fade-up" className="text-center max-w-4xl mx-auto mb-16 px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-sky-700 font-inter mb-4">
          <span>Strategy</span> <span className="text-sky-400">•</span> <span>Content</span> <span className="text-sky-400">•</span> <span>Creative</span> <span className="text-sky-400">•</span> <span>Results</span>
        </div>

        <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-950 mb-4 tracking-tight">
          From Idea to <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent italic font-serif font-normal">Impact.</span>
        </h2>

        <p className="text-slate-700 text-sm sm:text-base md:text-lg font-inter font-semibold max-w-2xl mx-auto mb-5">
          Your Brand <span className="text-sky-500 font-bold">|</span> Our Process <span className="text-sky-500 font-bold">|</span> Greater Reach
        </p>

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm font-bold font-manrope shadow-xs">
          <Sparkles size={16} className="text-amber-500" />
          <span>Our 9-Step Production & Growth Flywheel</span>
        </div>
      </ScrollReveal>

      {/* TOP-TO-BOTTOM VERTICAL 9-STEP TIMELINE */}
      <div className="max-w-5xl mx-auto relative mb-20 px-4">
        
        {/* Central Vertical Connecting Line */}
        <div className="absolute left-6 md:left-8 top-10 bottom-10 w-1 bg-gradient-to-b from-amber-400 via-sky-500 to-teal-700 rounded-full opacity-30 pointer-events-none" />

        <div className="space-y-8 relative">
          {processSteps.map((stepItem, idx) => {
            const IconComponent = stepItem.icon;
            const isExpanded = selectedStep === idx;
            return (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 40}>
                <div className="relative pl-14 md:pl-24 group">
                  
                  {/* Step Badge Node on the Vertical Line */}
                  <div className={`absolute left-0 top-6 w-12 h-12 md:w-16 md:h-16 rounded-2xl ${stepItem.badgeColor} font-manrope font-extrabold text-sm md:text-base flex flex-col items-center justify-center shadow-md shadow-slate-900/10 z-10 transition-transform group-hover:scale-110 cursor-pointer`}
                    onClick={() => setSelectedStep(isExpanded ? null : idx)}
                  >
                    <span className="text-[9px] md:text-[10px] opacity-80 block font-mono font-normal">STEP</span>
                    <span>{stepItem.step}</span>
                  </div>

                  {/* Vertical Step Card */}
                  <div className={`p-6 md:p-8 rounded-3xl border ${stepItem.borderColor} ${stepItem.lightBg} shadow-xs hover:shadow-md transition-all duration-300 bg-white cursor-pointer`}
                    onClick={() => setSelectedStep(isExpanded ? null : idx)}
                  >
                    
                    {/* Step Title Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200/80">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 shrink-0">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-manrope font-extrabold text-xl md:text-2xl text-slate-950">
                              {stepItem.title}
                            </h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                              STEP {stepItem.step}
                            </span>
                          </div>
                          <p className="text-slate-600 text-xs md:text-sm font-inter mt-0.5">
                            {stepItem.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step Deliverable Items Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                      {stepItem.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="bg-slate-50/90 p-3 rounded-xl border border-slate-200/80 flex items-center gap-2.5 hover:bg-white transition-colors">
                          <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                            <Check size={10} strokeWidth={3} />
                          </div>
                          <span className="text-xs font-inter font-medium text-slate-800">{item}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Downward Arrow Indicator between steps */}
                  {idx < processSteps.length - 1 && (
                    <div className="flex justify-center -mb-4 mt-3 text-sky-400/60">
                      <ChevronDown size={20} className="animate-bounce" />
                    </div>
                  )}

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* OUR GROWTH LOOP (FULL 9-STEP CYCLICAL DIAGRAM) */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#F0F9FF] border border-sky-100 p-6 md:p-12 rounded-3xl shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-700 font-inter block mb-2">
              Continuous Improvement
            </span>
            <h3 className="font-manrope font-extrabold text-2xl sm:text-4xl text-slate-950">
              OUR GROWTH LOOP
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-inter mt-2">
              A continuous 9-step strategic flywheel designed to consistently refine and scale your content results month after month.
            </p>
          </div>

          {/* Growth Loop Flow Grid (9 Steps Responsive Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 items-center">
            {growthLoop.map((item, gIdx) => {
              const IconComp = item.icon;
              return (
                <div key={gIdx} 
                  className={`bg-white p-4 rounded-2xl border ${selectedStep === gIdx ? 'border-sky-500 ring-2 ring-sky-200' : 'border-sky-100'} shadow-xs flex flex-col items-center text-center group hover:border-sky-300 hover:shadow-md transition-all cursor-pointer`}
                  onClick={() => setSelectedStep(gIdx)}
                >
                  <div className="w-9 h-9 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mb-2 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <IconComp size={16} />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-slate-400 block mb-0.5">
                    STEP {item.num}
                  </span>
                  <span className="font-manrope font-extrabold text-xs text-slate-900 group-hover:text-sky-600 transition-colors">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-10 pt-6 border-t border-sky-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs font-manrope font-bold text-slate-800 uppercase tracking-wider">
              <RefreshCw size={16} className="text-sky-600 animate-spin-slow" />
              <span>Discover. Create. Publish. Promote. Optimise.</span>
            </div>

            <a
              href="#contact"
              className="px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-manrope font-bold text-xs uppercase tracking-widest rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
            >
              Start Your Campaign <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

