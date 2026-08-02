'use client';

import React from 'react';
import { Play, Users, Eye, Film, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ChannelsPage() {
  const channels = [
    {
      name: 'Slam Book Tamil',
      subs: '1.2M',
      views: '145M',
      videos: 320,
      cat: 'Entertainment & Lifestyle',
      desc: 'Tamil Nadu\'s leading lifestyle, celebrity interview, and pop-culture digital network. Celebrated for its unique, personal, and conversational formatting.',
      url: 'https://youtube.com/c/slambooktamil',
      image: '/images/Slam Book Tamil.png',
      color: 'from-pink-500/10 to-rose-600/10 border-pink-500/20',
      textAccent: 'text-pink-600',
      growthData: 'M 0 60 Q 30 50 60 30 T 120 10'
    },
    {
      name: 'Jajabordiary',
      subs: '410K',
      views: '48M',
      videos: 185,
      cat: 'Travel & Cinematography',
      desc: 'A premium travel and cinematography diary exploring hidden gems, offbeat cultures, and premium stays across India and the globe.',
      url: 'https://youtube.com/c/jajabordiary',
      image: '/images/Jajabordiary.png',
      color: 'from-amber-500/10 to-orange-600/10 border-amber-500/20',
      textAccent: 'text-amber-600',
      growthData: 'M 0 80 Q 30 70 60 45 T 120 20'
    },
    {
      name: 'Mr. Guru',
      subs: '850K',
      views: '98M',
      videos: 290,
      cat: 'Tech & Education',
      desc: 'Premium tech education, programming tutorials, software development guidelines, and career mentorship delivered in regional languages.',
      url: 'https://youtube.com/c/mrguru',
      image: '/images/Mr.Guru.png',
      color: 'from-blue-500/10 to-indigo-600/10 border-blue-500/20',
      textAccent: 'text-blue-600',
      growthData: 'M 0 70 Q 30 50 60 40 T 120 15'
    },
    {
      name: 'Alvision Fusion',
      subs: '280K',
      views: '32M',
      videos: 420,
      cat: 'Infotainment & Shorts',
      desc: 'Short-form informative content, business analysis, and digital tech trends packaged for the modern fast-paced consumer.',
      url: 'https://youtube.com/c/alvisionfusion',
      image: '/images/Alvision Fusion.png',
      color: 'from-purple-500/10 to-violet-600/10 border-purple-500/20',
      textAccent: 'text-purple-600',
      growthData: 'M 0 90 Q 30 60 60 50 T 120 25'
    },
    {
      name: 'Alvision Tamil',
      subs: '550K',
      views: '65M',
      videos: 210,
      cat: 'Business & Finance',
      desc: 'Local business case studies, regional financial advice, entrepreneur interviews, and digital success stories in Tamil.',
      url: 'https://youtube.com/c/alvisiontamil',
      image: '/images/Alvision Tamil.png',
      color: 'from-emerald-500/10 to-teal-600/10 border-emerald-500/20',
      textAccent: 'text-emerald-600',
      growthData: 'M 0 75 Q 30 65 60 40 T 120 15'
    },
    {
      name: 'Wild Card',
      subs: '180K',
      views: '18M',
      videos: 95,
      cat: 'Pop Culture & Analysis',
      desc: 'Deep dives into pop-culture phenomena, movie essays, and digital community memes that connect with Gen-Z audiences.',
      url: 'https://youtube.com/c/wildcard',
      image: '/images/Wild Card.jpeg',
      color: 'from-cyan-500/10 to-sky-600/10 border-cyan-500/20',
      textAccent: 'text-cyan-600',
      growthData: 'M 0 85 Q 30 75 60 60 T 120 30'
    }
  ];

  return (
    <div className="relative bg-white text-dark-navy min-h-screen pt-24">
      
      {/* Glow overlays */}
      <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-alvision-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 left-1/4 w-[350px] h-[350px] bg-glow-blue/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 1. Header Hero */}
      <section className="py-8 md:py-12 text-center relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-down" duration={600}>
            <span className="text-gradient-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block mb-4">MEDIA NETWORK</span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100} duration={700}>
            <h1 className="font-manrope font-800 text-4xl sm:text-5xl md:text-6xl mb-6">
              Our Native Creator Network
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200} duration={700}>
            <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg leading-relaxed font-inter">
              We build, curate, and scale digital channels in-house. With over 3M combined subscribers, we provide brands with direct organic distribution.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Grid list of channels */}
      <section className="py-8 md:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((chan, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 100} duration={650}>
                <div 
                  className="bg-white border border-slate-200/40 rounded-3xl overflow-hidden flex flex-col justify-between h-[540px] shadow-sm card-hover-tilt group"
                >
                  {/* Top Banner Cover Image */}
                  <div className="h-48 overflow-hidden relative border-b border-slate-100" aria-hidden="true">
                    <img 
                      src={chan.image} 
                      alt={chan.name} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 pointer-events-none" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-extrabold font-inter uppercase tracking-widest text-slate-500 px-2.5 py-1 rounded bg-white border border-slate-200 shadow-sm">
                        {chan.cat}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors">
                      <a 
                        href={chan.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-500 hover:text-red-500 transition-colors block"
                      >
                        <Play size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Inner Body Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-manrope font-bold text-2xl text-dark-navy leading-tight mb-3 group-hover:text-alvision-blue transition-colors duration-300">{chan.name}</h3>
                      <p className="text-slate-550 text-xs leading-relaxed font-inter mb-4 line-clamp-3">
                        {chan.desc}
                      </p>
                    </div>

                    {/* Growth Chart / Graph representation */}
                    <div className="mb-4 bg-slate-50 border border-slate-200/40 rounded-xl p-3 flex items-center justify-between shadow-sm">
                      <div className="text-left">
                        <span className="text-[9px] uppercase tracking-wider text-slate-550 font-inter block">Growth Trend</span>
                        <span className="text-gradient-blue font-bold text-xs font-manrope">Scaling upward</span>
                      </div>
                      {/* Miniature SVG line chart */}
                      <svg className="w-[100px] h-[30px] text-alvision-blue overflow-visible" viewBox="0 0 120 40" fill="none">
                        <path
                          d={chan.growthData}
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <circle cx="120" cy="10" r="4" fill="#0EA5E9" />
                      </svg>
                    </div>

                    {/* Metrics Footer */}
                    <div className="border-t border-slate-200 pt-4 flex justify-between items-center text-xs font-inter">
                      <div className="flex items-center gap-1.5">
                        <Users size={14} className={chan.textAccent} />
                        <div>
                          <span className="text-[9px] text-slate-500 block -mb-0.5">Subscribers</span>
                          <strong className="text-xs font-manrope font-bold text-dark-navy">{chan.subs}</strong>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Eye size={14} className={chan.textAccent} />
                        <div>
                          <span className="text-[9px] text-slate-500 block -mb-0.5">Total Views</span>
                          <strong className="text-xs font-manrope font-bold text-dark-navy">{chan.views}</strong>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Film size={14} className={chan.textAccent} />
                        <div>
                          <span className="text-[9px] text-slate-500 block -mb-0.5">Videos</span>
                          <strong className="text-xs font-manrope font-bold text-dark-navy">{chan.videos}</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA to Creators */}
      <section className="py-10 bg-slate-50 border-t border-slate-200/40 relative">
        <ScrollReveal variant="blur" duration={700} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-manrope font-bold text-2xl md:text-3xl mb-4 text-dark-navy">Are You a Creator Looking to Scale?</h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mb-8 font-inter leading-relaxed">
            We help regional Tamil and English creators with production, brand sponsorship outreach, thumbnail optimization, and catalog distribution.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-alvision-blue to-glow-blue text-deep-black font-manrope font-bold text-sm rounded-full hover:scale-105 transition-transform btn-shimmer"
          >
            Apply to Join Creator Network <ArrowUpRight size={16} />
          </a>
        </ScrollReveal>
      </section>

    </div>
  );
}
