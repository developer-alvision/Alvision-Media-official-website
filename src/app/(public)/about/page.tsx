'use client';

import React from 'react';
import { Target, Eye, Sparkles, Award, Cpu, Heart } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
  const values = [
    { title: 'Creativity First', desc: 'We believe stories have the power to shift perspectives. Visual and narrative excellence is in our DNA.', icon: Sparkles },
    { title: 'Data-Backed Growth', desc: 'Creativity without conversion is just art. We measure reach, CTR, ROAS, and retention to ensure commercial success.', icon: Award },
    { title: 'Tech Innovation', desc: 'From custom WhatsApp marketing scripts to headless Next.js platforms, we utilize modern tools to outpace competition.', icon: Cpu },
    { title: 'Connected Collaboration', desc: 'We act as the bridge between creators, sponsors, advertisers, and end-consumers.', icon: Heart }
  ];

  const timeline = [
    { year: '2023', title: 'The Genesis', desc: 'Alvision Media founded in Chennai with a single channel, Slam Book Tamil, aiming to deliver conversational lifestyle content.' },
    { year: '2024', title: 'Ecosystem Expansion', desc: 'Launched Mr. Guru and Jajabordiary, capturing tech training and travel niches. Total subscriber base reached 1M+.' },
    { year: '2025', title: 'Digital Agency Launch', desc: 'Integrated tech and digital marketing solutions, helping brands scale using automated WhatsApp tools and performance marketing.' },
    { year: '2026', title: 'Ecosystem Maturity', desc: 'Operating 6 regional networks with 3M+ active subscribers and 500M+ views, partnering with major global and local D2C brands.' }
  ];

  return (
    <main id="main-content" role="main" className="relative bg-white text-dark-navy min-h-screen pt-24 pb-8">
      
      {/* Background glow overlays */}
      <div className="absolute top-20 left-1/4 w-[350px] h-[350px] bg-alvision-blue/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-40 right-1/4 w-[350px] h-[350px] bg-glow-blue/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* 1. Header Hero */}
      <section className="py-8 md:py-12 text-center relative z-10" aria-label="About Alvision story intro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-down" duration={600}>
            <span className="text-gradient-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block mb-4 font-inter">OUR STORY</span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100} duration={700}>
            <h1 className="font-manrope font-800 text-4xl sm:text-5xl md:text-6xl mb-6">
              Connecting Stories, Tech, and Growth
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200} duration={700}>
            <p className="max-w-3xl mx-auto text-slate-650 text-base md:text-lg leading-relaxed font-inter">
              Alvision Media was founded on a simple premise: content and marketing shouldn't operate in silos. We built a complete digital growth ecosystem that unifies storytelling, audience engagement, performance marketing, and modern software development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Widescreen visual banner block */}
      <ScrollReveal variant="scale" delay={300} duration={800} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10" as="div">
        <div className="h-[280px] md:h-[450px] rounded-3xl overflow-hidden border border-sky-100 shadow-md p-2.5 bg-white">
          <img 
            src="/images/about_story_banner.png" 
            alt="Alvision Creative Brainstorming Meeting Studio" 
            className="w-full h-full object-cover rounded-2xl pointer-events-none"
          />
        </div>
      </ScrollReveal>

      {/* 2. Story / Mission & Vision Grid */}
      <section className="py-10 md:py-14 relative z-10 bg-white border-y border-sky-100/40" aria-label="Our focus and mission structures">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Story text */}
            <ScrollReveal variant="fade-right" duration={700} className="max-w-3xl">
              <h2 className="font-manrope font-800 text-2xl md:text-3xl mb-6 text-gradient">The Intersection of Agency & Creator Hub</h2>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed mb-4 font-inter">
                Traditional agencies struggle with distribution; traditional creators struggle with commercialization. At Alvision Media, we solved this mismatch by creating our own channels, building an organic community of 3M+ subscribers, and using those distribution networks to fuel our client campaigns.
              </p>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed font-inter">
                When you partner with us, you aren't just buying ad impressions or hiring developers. You are tapping into an active, highly engaged ecosystem that knows exactly what audiences want to watch and what drives them to buy.
              </p>
            </ScrollReveal>

            {/* Mission / Vision Cards */}
            <div className="space-y-6">
              <ScrollReveal variant="fade-left" delay={100} duration={600}>
                <article className="glass-panel p-6 rounded-2xl border border-sky-100 flex gap-4 shadow-sm bg-white card-hover-tilt">
                  <div className="w-12 h-12 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0" aria-hidden="true">
                    <Target size={22} />
                  </div>
                  <div>
                    <h3 className="font-manrope font-bold text-lg mb-1 text-studio-deep-dark">Our Mission</h3>
                    <p className="text-slate-650 text-xs md:text-sm leading-relaxed font-inter">
                      To deliver digital brilliance by executing high-production stories and high-conversion tech, scaling brands, and empowering creative professionals.
                    </p>
                  </div>
                </article>
              </ScrollReveal>

              <ScrollReveal variant="fade-left" delay={200} duration={600}>
                <article className="glass-panel p-6 rounded-2xl border border-sky-100 flex gap-4 shadow-sm bg-white card-hover-tilt">
                  <div className="w-12 h-12 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0" aria-hidden="true">
                    <Eye size={22} />
                  </div>
                  <div>
                    <h3 className="font-manrope font-bold text-lg mb-1 text-studio-deep-dark">Our Vision</h3>
                    <p className="text-slate-650 text-xs md:text-sm leading-relaxed font-inter">
                      To be India's premium content-commerce ecosystem, setting the gold standard for regional digital marketing, creator incubation, and tech integration.
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-10 md:py-14 relative z-10 bg-white" aria-label="Core corporate principles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" duration={600} className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-gradient text-xs md:text-sm font-extrabold uppercase tracking-widest block mb-3 font-inter">OUR CORE VALUES</span>
            <h2 className="font-manrope font-800 text-3xl md:text-4xl text-studio-deep-dark">The Pillars We Build On</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <ScrollReveal key={idx} variant="fade-up" delay={idx * 100} duration={650}>
                  <article className="glass-panel p-6 rounded-2xl border border-sky-100 flex flex-col justify-between shadow-sm bg-white h-full card-hover-tilt">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-alvision-blue/15 flex items-center justify-center text-alvision-blue mb-6" aria-hidden="true">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-manrope font-bold text-lg mb-2 text-studio-deep-dark">{val.title}</h3>
                      <p className="text-slate-650 text-xs md:text-sm leading-relaxed font-inter">{val.desc}</p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Timeline Section */}
      <section className="py-10 bg-white border-y border-sky-100/40 relative overflow-hidden" aria-label="Growth milestones timeline">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal variant="fade-up" duration={600} className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-gradient-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block mb-3 font-inter">MILESTONES</span>
            <h2 className="font-manrope font-800 text-3xl md:text-4xl text-studio-deep-dark">Our Journey So Far</h2>
          </ScrollReveal>

          <div className="relative border-l border-sky-100 ml-4 md:ml-32 pl-8 md:pl-16 space-y-12">
            {timeline.map((item, idx) => (
              <ScrollReveal key={idx} variant="fade-left" delay={idx * 120} duration={700} className="relative" as="div">
                <div className="hidden md:block absolute -left-[144px] top-1 text-right w-24">
                  <span className="font-manrope font-extrabold text-2xl text-gradient">{item.year}</span>
                </div>
                <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-white border-4 border-alvision-blue" aria-hidden="true" />
                
                <span className="inline-block md:hidden font-manrope font-extrabold text-xl text-gradient mb-2">{item.year}</span>
                
                <h3 className="font-manrope font-bold text-lg mb-2 text-studio-deep-dark">{item.title}</h3>
                <p className="text-slate-650 text-sm leading-relaxed max-w-3xl font-inter">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
