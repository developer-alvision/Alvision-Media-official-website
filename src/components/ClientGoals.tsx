'use client';

import React from 'react';
import { 
  Megaphone, 
  Activity, 
  Video, 
  Search, 
  Filter, 
  HeartHandshake, 
  CheckCircle2 
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

interface GoalItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  tag: string;
  gradient: string;
  iconColor: string;
}

const clientGoals: GoalItem[] = [
  {
    id: 'goal-1',
    number: '01',
    title: 'Brand Awareness',
    description: 'Build massive local brand recognition across digital platforms in Andhra Pradesh',
    icon: Megaphone,
    tag: 'Reach & Authority',
    gradient: 'from-sky-500/20 to-blue-600/10',
    iconColor: 'text-sky-400',
  },
  {
    id: 'goal-2',
    number: '02',
    title: 'Hospital CRM System',
    description: 'Implement a role-based Hospital Operating & Management System for streamlined patient care',
    icon: Activity,
    tag: 'Operations & Tech',
    gradient: 'from-cyan-500/20 to-teal-600/10',
    iconColor: 'text-cyan-400',
  },
  {
    id: 'goal-3',
    number: '03',
    title: 'Doctor Video Authority',
    description: 'Establish high-engagement educational Reels led directly by Dr. Jyothsna Royal',
    icon: Video,
    tag: 'Content & Trust',
    gradient: 'from-indigo-500/20 to-purple-600/10',
    iconColor: 'text-indigo-400',
  },
  {
    id: 'goal-4',
    number: '04',
    title: 'Google Visibility',
    description: 'Dominate local healthcare search queries and Google Maps',
    icon: Search,
    tag: 'Search & Maps',
    gradient: 'from-blue-500/20 to-sky-600/10',
    iconColor: 'text-blue-400',
  },
  {
    id: 'goal-5',
    number: '05',
    title: 'Lead Generation',
    description: 'Generate highly qualified patient leads at low cost per lead',
    icon: Filter,
    tag: 'Performance Ads',
    gradient: 'from-amber-500/20 to-orange-600/10',
    iconColor: 'text-amber-400',
  },
  {
    id: 'goal-6',
    number: '06',
    title: 'Maternity Care Sync',
    description: 'Integrate ANC check-ups and EDD due date tracking into daily hospital operations',
    icon: HeartHandshake,
    tag: 'Patient Retention',
    gradient: 'from-rose-500/20 to-pink-600/10',
    iconColor: 'text-rose-400',
  },
];

export default function ClientGoals() {
  return (
    <section 
      id="goals" 
      aria-label="Client Goals" 
      className="py-24 md:py-32 relative bg-[#0B0F17] border-t border-slate-800 scroll-mt-20 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Anchor for existing links to our-work */}
      <div id="our-work" className="absolute -top-24 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 mb-4 shadow-xs">
            <span className="text-xs font-mono font-extrabold text-sky-400 tracking-wider">
              02
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-500" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-sky-300 font-inter">
              Strategic Roadmap
            </span>
          </div>

          <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-5">
            Client Goals
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-inter leading-relaxed">
            Delivering targeted visibility, custom digital infrastructure, and patient-centric healthcare operations.
          </p>
        </ScrollReveal>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {clientGoals.map((goal, idx) => {
            const IconComponent = goal.icon;
            return (
              <ScrollReveal 
                key={goal.id} 
                variant="fade-up" 
                delay={idx * 80}
                className="h-full"
              >
                <div className="h-full glass-panel p-8 rounded-3xl bg-[#131C2E]/90 border border-slate-800 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Subtle Top-Right Watermark Number */}
                  <span className="absolute top-6 right-6 font-mono text-3xl font-black text-slate-800/60 group-hover:text-sky-500/20 transition-colors pointer-events-none">
                    {goal.number}
                  </span>

                  <div>
                    {/* Icon Container */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${goal.gradient} border border-slate-700/60 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-sky-400/40 transition-all duration-300 shadow-md ${goal.iconColor}`}>
                      <IconComponent size={26} />
                    </div>

                    {/* Tag */}
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block mb-2">
                      {goal.tag}
                    </span>

                    {/* Title */}
                    <h3 className="font-manrope font-extrabold text-xl text-white group-hover:text-sky-300 transition-colors mb-3 leading-snug">
                      {goal.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 font-inter text-sm leading-relaxed">
                      {goal.description}
                    </p>
                  </div>

                  {/* Bottom Highlight Accent */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 group-hover:text-sky-400 transition-colors">
                      <CheckCircle2 size={14} className="text-sky-400" />
                      Core Objective
                    </span>
                    <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
