'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Eye, Film, Sparkles, TrendingUp, Users, Quote } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ParticlesBackground from '@/components/ParticlesBackground';
import AdvancedParallax from '@/components/AdvancedParallax';
import RevealText from '@/components/RevealText';
import Magnetic from '@/components/Magnetic';

export default function HomePage() {
  const [activeService, setActiveService] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const selectedWork = [
    {
      title: 'Slam Book Tamil Celebrity Series',
      category: 'Content Production & Distribution',
      metric: '18.5M Views',
      detail: 'Coordinated sponsorship placement inside high-production celebrity conversational videos, leading to 140% sponsor renewals.',
      image: '/images/case_influencer_food.png'
    },
    {
      title: 'WhatsApp Automation E-Commerce Funnel',
      category: 'Performance Marketing',
      metric: '340% ROI Increase',
      detail: 'Built triggers that recovered 22% of abandoned checkouts in 30 days for top D2C clothing brands.',
      image: '/images/case_cart_recovery.png'
    },
    {
      title: 'Sanath Tech Integration Campaign',
      category: 'Web Tech & Campaign Strategy',
      metric: '10M Reach',
      detail: 'Leveraged native channels to introduce custom SaaS suites, scaling organic sign-ups by 45..',
      image: '/images/case_skincare_web.png'
    }
  ];

  const channels = [
    { 
      name: 'Slam Book Tamil', 
      cat: 'Entertainment & Lifestyle', 
      views: '145M views', 
      subs: '1.2M subs', 
      desc: 'Tamil Nadu\'s leading lifestyle, celebrity interview, and pop-culture digital network. Celebrated for its unique, personal pop-culture interviews.',
      image: '/images/Slam Book Tamil.png' 
    },
    { 
      name: 'Jajabordiary', 
      cat: 'Travel & Cinematography', 
      views: '48M views', 
      subs: '410K subs', 
      desc: 'Scenic expeditions and premium travel diaries showcasing offbeat spots, culinary cultures, and luxury resorts.',
      image: '/images/Jajabordiary.png' 
    },
    { 
      name: 'Mr. Guru', 
      cat: 'Tech & Careers', 
      views: '98M views', 
      subs: '850K subs', 
      desc: 'Premium coding tutorials, computer science guidance, and software engineering deep dives in regional languages.',
      image: '/images/Mr.Guru.png' 
    },
    { 
      name: 'Alvision Fusion', 
      cat: 'Infotainment & Shorts', 
      views: '32M views', 
      subs: '280K subs', 
      desc: 'Bite-sized business statistics, geopolitical insights, and current tech trends packaged for the modern mobile scroll.',
      image: '/images/Alvision Fusion.png' 
    },
    { 
      name: 'Alvision Tamil', 
      cat: 'Business & Finance', 
      views: '65M views', 
      subs: '550K subs', 
      desc: 'Detailed corporate case studies, regional financial advice, and startup growth models delivered in Tamil.',
      image: '/images/Alvision Tamil.png' 
    },
    { 
      name: 'Wild Card', 
      cat: 'Pop Culture & Analysis', 
      views: '18M views', 
      subs: '180K subs', 
      desc: 'Deep essays on cinema critiques, internet memes, and Gen-Z digital communities.',
      image: '/images/Wild Card.jpeg' 
    }
  ];

  const services = [
    { num: '01', title: 'Social Media Strategy', desc: 'Custom content calendars, script outlines, hook editing, platform scheduling, and retention metrics optimization.' },
    { num: '02', title: 'Influencer Campaigns', desc: 'Direct access to Alvision native creator networks (3M+ base) and coordinated regional outreach campaigns.' },
    { num: '03', title: 'Affiliate Marketing', desc: 'Setup performance commission hierarchies, legal terms, niche recruiter campaigns, and tracking portals.' },
    { num: '04', title: 'Production', desc: 'Cinematic video shoots, multi-camera sets, podcast recording, sound engineering, and post-production suites.' },
    { num: '05', title: 'Performance Marketing', desc: 'Google Search/Display Ads, high-intent keywords, landing page optimization, and GA4 tracking setup.' },
    { num: '06', title: 'Brand Partnerships', desc: 'Co-branded visual stories, sponsorship integrations, product reviews, and custom campaign lifespans.' }
  ];

  const testimonials = [
    {
      quote: "Working with Alvision Media transformed our WhatsApp pipeline. Their team set up automated triggers that helped us recover 22% of shopping carts within the first 30 days. Outstanding execution!",
      author: "Gaurav Mehta",
      role: "CEO, StyleSpire Apparel",
      verified: "WhatsApp E-Commerce Audit"
    },
    {
      quote: "Their regional influencer network is unmatched. Slam Book Tamil gave our traditional snack launch immediate credibility and generated over 4.5M impressions. Highly recommended!",
      author: "Siddharth Kumar",
      role: "Marketing Director, Native Foods India",
      verified: "Creator Launch Campaign"
    }
  ];

  return (
    <main id="main-content" role="main">
      
      {/* 01. Hero Experience - Split Layout with Cinematic visual */}
      <section 
        aria-label="Welcome and Cinematic Showreel"
        className="relative min-h-screen flex items-center bg-studio-light text-studio-deep-dark overflow-hidden pt-28 pb-10 md:pt-32 md:pb-0"
      >
        <div className="film-grain" />
        <ParticlesBackground />

        {/* Ambient floating orbs */}
        <AdvancedParallax speed={0.4} className="absolute top-20 right-[15%] pointer-events-none z-0">
          <div className="w-72 h-72 bg-sky-200/10 rounded-full blur-3xl animate-blob-drift" />
        </AdvancedParallax>
        <AdvancedParallax speed={-0.3} className="absolute bottom-32 left-[10%] pointer-events-none z-0">
          <div className="w-56 h-56 bg-blue-200/8 rounded-full blur-3xl animate-blob-drift" style={{ animationDelay: '4s' }} />
        </AdvancedParallax>

        {/* Viewfinder simulated grid overlay in sky blue tint */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-12 border border-sky-100" />
          <div className="absolute top-16 left-16 w-8 h-8 border-t border-l border-sky-200" />
          <div className="absolute top-16 right-16 w-8 h-8 border-t border-r border-sky-200" />
          <div className="absolute bottom-16 left-16 w-8 h-8 border-b border-l border-sky-200" />
          <div className="absolute bottom-16 right-16 w-8 h-8 border-b border-r border-sky-200" />
          
          <div className="absolute top-1/2 left-12 right-12 h-[1px] bg-sky-100" />
          <div className="absolute left-1/2 top-12 bottom-12 w-[1px] bg-sky-100" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-sky-200/50 flex items-center justify-center">
            <span className="text-[10px] tracking-widest text-sky-400">FOCUS</span>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-[10px] font-bold tracking-[0.4em] text-alvision-secondary uppercase block font-inter animate-hero-entrance">
              Alvision Media
            </span>
            <h1 className="font-manrope font-800 text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-studio-deep-dark animate-hero-entrance-delay-1">
              Building audiences.<br />
              Growing brands.<br />
              Creating culture.
            </h1>
            <p className="max-w-xl text-slate-550 text-base sm:text-lg md:text-xl font-inter leading-relaxed pt-2 animate-hero-entrance-delay-2">
              We help creators, brands and businesses grow through storytelling, media and digital strategy.
            </p>
            <div className="pt-6 animate-hero-entrance-delay-3">
              <Magnetic>
                <Link
                  href="/services"
                  aria-label="Explore Alvision Media Studio and Services"
                  className="group inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase font-manrope border-b-2 border-alvision-blue pb-1 text-alvision-secondary hover:text-alvision-blue hover:border-alvision-blue transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue rounded-sm px-1 btn-shimmer"
                >
                  Explore Our Work
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Right Visual Image Column */}
          <AdvancedParallax speed={-0.12} className="lg:col-span-5 relative group overflow-hidden rounded-3xl border border-sky-100 shadow-lg bg-white p-3.5 animate-hero-entrance-delay-4 animate-float-slow z-10">
            <img 
              src="/images/hero_cinematic_studio.png" 
              alt="Alvision Cinematic Production Camera Setup"
              className="w-full h-[350px] md:h-[480px] object-cover rounded-2xl group-hover:scale-102 transition-transform duration-700 pointer-events-none"
            />
            {/* Decorative animated accent */}
            <div className="absolute -bottom-1 -right-1 w-20 h-20 border-b-2 border-r-2 border-alvision-blue/30 rounded-br-3xl animate-pulse-glow pointer-events-none" aria-hidden="true" />
          </AdvancedParallax>
        </div>
      </section>

      {/* Smooth section transition */}
      <div className="section-divider" aria-hidden="true" />

      {/* 02. About Section */}
      <section 
        aria-label="About Alvision Media Studio"
        className="py-10 md:py-14 lg:py-16 bg-studio-light section-ambient"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left statement */}
            <ScrollReveal variant="fade-right" className="lg:col-span-6">
              <span className="text-[10px] font-bold tracking-[0.25em] text-slate-455 uppercase block mb-6 font-inter">About Us</span>
              <RevealText 
                text="Creating Impactful Content Across Platforms" 
                className="font-manrope font-800 text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-studio-deep-dark mb-4" 
                as="h2" 
              />
              <div className="w-20 h-1 bg-alvision-blue/60 mt-6 animate-shimmer" aria-hidden="true" />
            </ScrollReveal>

            {/* Right text blocks */}
            <ScrollReveal variant="fade-left" delay={150} className="lg:col-span-6 space-y-6 font-inter text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
              <p className="font-semibold text-studio-deep-dark text-base md:text-lg">
                At Alvision Media, storytelling is at the heart of everything we do. With three dynamic YouTube channels covering entertainment, lifestyle, and informative content, we bring fresh, engaging videos to diverse audiences every week.
              </p>
              <p>
                Backed by a passionate creative team and collaborations with talented artists, we aim to craft content that not only entertains but also inspires and informs.
              </p>
              <p>
                From concept to production and beyond, we focus on quality and creativity. Our growing network of creators, editors, and strategists ensures that each video resonates with viewers and stays ahead of digital trends. Join us on our journey as we continue to explore new ideas and push creative boundaries in digital media.
              </p>
              <div className="pt-4 flex items-center gap-6">
                <Link 
                  href="/about" 
                  aria-label="Read our team and corporate story details"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-studio-deep-dark hover:text-alvision-blue transition-colors font-manrope border-b border-studio-deep-dark/15 hover:border-alvision-blue pb-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue rounded"
                >
                  Our Full Story <ChevronRight size={14} aria-hidden="true" />
                </Link>
                <Link
                  href="/channels"
                  aria-label="View our active YouTube networks list"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-alvision-blue hover:text-alvision-secondary transition-colors font-manrope focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue rounded"
                >
                  Our Channels <ArrowRight size={12} className="ml-1" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Smooth section transition */}
      <div className="section-divider" aria-hidden="true" />

      {/* 03. Selected Work - Enriched with Case Study visuals */}
      <section 
        aria-label="Featured Client Case Studies"
        className="py-10 md:py-14 lg:py-16 bg-studio-light section-ambient"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal variant="fade-up">
            <div className="flex justify-between items-end mb-8 md:mb-10">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-slate-455 uppercase block mb-4 font-inter">Portfolio</span>
                <RevealText 
                  text="Selected Work" 
                  className="font-manrope font-800 text-4xl sm:text-6xl text-studio-deep-dark" 
                  as="h2" 
                />
              </div>
              <Link 
                href="/services" 
                aria-label="View all corporate services and studies"
                className="text-xs font-bold uppercase tracking-wider text-alvision-blue hover:text-alvision-secondary transition-colors font-manrope border-b border-alvision-blue pb-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue rounded"
              >
                All Case Studies
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {selectedWork.map((work, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 120} duration={700}>
                <article 
                  className="bg-white border border-slate-200/40 rounded-3xl overflow-hidden flex flex-col justify-between h-[520px] card-hover-tilt group"
                >
                  {/* Top visual graphic */}
                  <div className="h-44 overflow-hidden relative border-b border-slate-100" aria-hidden="true">
                    <img 
                      src={work.image} 
                      alt="" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-slate-450 uppercase block mb-3 font-inter">{work.category}</span>
                      <h3 className="font-manrope font-800 text-xl text-studio-deep-dark mb-3 group-hover:text-alvision-blue transition-colors duration-300 line-clamp-2">
                        {work.title}
                      </h3>
                      <p className="text-slate-500 text-xs font-inter leading-relaxed line-clamp-3">
                        {work.detail}
                      </p>
                    </div>
                    
                    <div className="border-t border-slate-100 pt-4 flex justify-between items-center mt-4">
                      <div>
                        <span className="text-[9px] text-slate-455 block uppercase tracking-wider font-inter">Metric Target</span>
                        <strong className="text-studio-deep-dark text-base font-manrope font-bold">{work.metric}</strong>
                      </div>
                      <Link 
                        href="/services"
                        aria-label={`Read details for: ${work.title}`}
                        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-450 group-hover:bg-alvision-blue group-hover:border-alvision-blue group-hover:text-deep-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue"
                      >
                        <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Smooth section transition */}
      <div className="section-divider" aria-hidden="true" />

      {/* 04. Services */}
      <section 
        aria-label="Alvision Services Suite"
        className="py-10 md:py-14 lg:py-16 bg-studio-light section-ambient"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* List */}
            <ScrollReveal variant="fade-right" className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold tracking-[0.25em] text-slate-455 uppercase block mb-6 font-inter">Services</span>
              <div className="divide-y divide-slate-200/60" role="tablist" aria-label="Capabilities selector list">
                {services.map((srv, idx) => (
                  <button
                    key={idx}
                    role="tab"
                    aria-selected={activeService === idx}
                    aria-controls={`service-panel-${idx}`}
                    id={`service-tab-${idx}`}
                    onMouseEnter={() => setActiveService(idx)}
                    onFocus={() => setActiveService(idx)}
                    className="w-full text-left py-5 flex items-center gap-6 group focus:outline-none transition-colors focus-visible:ring-2 focus-visible:ring-alvision-blue rounded-md px-2"
                  >
                    <span className={`font-inter text-xs font-bold transition-colors duration-300 ${activeService === idx ? 'text-alvision-blue' : 'text-slate-400'}`}>
                      {srv.num}
                    </span>
                    <span className={`font-manrope font-800 text-2xl sm:text-3xl transition-all duration-400 ${
                      activeService === idx 
                        ? 'text-alvision-blue translate-x-2' 
                        : 'text-studio-deep-dark hover:text-studio-deep-dark/85'
                    }`}>
                      {srv.title}
                    </span>
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Preview Panel - White Card */}
            <ScrollReveal variant="fade-left" delay={200} className="lg:col-span-5">
              <div 
                role="tabpanel"
                id={`service-panel-${activeService}`}
                aria-labelledby={`service-tab-${activeService}`}
                className="lg:sticky lg:top-36 bg-white border border-sky-100 p-8 md:p-12 shadow-sm min-h-[300px] flex flex-col justify-between transition-all duration-500"
              >
                <div>
                  <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase block mb-3 font-inter">
                    Overview / {services[activeService].num}
                  </span>
                  <h3 className="font-manrope font-800 text-3xl text-studio-deep-dark mb-6 transition-colors duration-300">
                    {services[activeService].title}
                  </h3>
                  <p className="text-slate-650 text-sm leading-relaxed font-inter transition-opacity duration-300">
                    {services[activeService].desc}
                  </p>
                </div>

                <div className="pt-8 border-t border-slate-200 mt-6">
                  <Link 
                    href="/services"
                    aria-label={`Detailed parameters for ${services[activeService].title}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-alvision-blue hover:text-alvision-secondary transition-colors font-manrope focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue rounded"
                  >
                    Configure Service <ArrowRight size={12} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Smooth section transition */}
      <div className="section-divider" aria-hidden="true" />

      {/* 05. Channels */}
      <section 
        aria-label="Native Channels Showcase"
        className="py-10 md:py-14 lg:py-16 bg-studio-light overflow-hidden section-ambient"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-6 flex justify-between items-end">
          <ScrollReveal variant="fade-up">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-slate-450 uppercase block mb-4 font-inter">Network Desk</span>
              <RevealText 
                text="Our Channels" 
                className="font-manrope font-800 text-4xl sm:text-6xl text-studio-deep-dark" 
                as="h2" 
              />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade" delay={300}>
            <Link 
              href="/channels" 
              aria-label="View comprehensive YouTube network stats"
              className="text-xs font-bold uppercase tracking-wider text-alvision-blue hover:text-alvision-secondary transition-colors font-manrope mr-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue rounded"
            >
              All Channels
            </Link>
          </ScrollReveal>
        </div>

        {/* Horizontal scroll snap card list */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="flex overflow-x-auto gap-6 px-6 sm:px-8 pb-8 scrollbar-none snap-x snap-mandatory scroll-smooth">
            {channels.map((chan, idx) => (
              <div 
                key={idx}
                className="bg-white text-studio-deep-dark rounded-3xl overflow-hidden w-[320px] sm:w-[380px] h-[480px] flex flex-col justify-between shrink-0 snap-start relative group shadow-sm border border-sky-100 card-hover-tilt"
              >
                {/* Top Banner Cover Image */}
                <div className="h-44 overflow-hidden relative border-b border-slate-100" aria-hidden="true">
                  <img 
                    src={chan.image} 
                    alt={chan.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase block font-inter px-2 py-0.5 bg-white rounded border border-sky-100 shadow-sm">
                      {chan.cat}
                    </span>
                  </div>
                </div>

                {/* Inner details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-manrope font-800 text-xl mb-2 text-studio-deep-dark group-hover:text-alvision-blue transition-colors duration-300">{chan.name}</h3>
                    <p className="text-slate-550 text-[11px] leading-relaxed font-inter line-clamp-3">
                      {chan.desc}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs font-inter text-slate-500 mt-4">
                    <div>
                      <span className="block text-[9px] text-slate-400">Total Reach</span>
                      <strong className="text-studio-deep-dark text-sm">{chan.views}</strong>
                    </div>
                    <div className="text-right">
                      <span className="block text-[9px] text-slate-400">Subscribers</span>
                      <strong className="text-alvision-secondary text-sm">{chan.subs}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-[100px] shrink-0" aria-hidden="true" />
          </div>
        </ScrollReveal>
      </section>

      {/* Smooth section transition */}
      <div className="section-divider" aria-hidden="true" />

      {/* 06. Results */}
      <section 
        aria-label="Alvision Verified Growth Statistics"
        className="py-8 md:py-12 bg-studio-light section-ambient"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            
            {[
              { value: '3.2M+', label: 'Combined Audience' },
              { value: '450M+', label: 'Direct views' },
              { value: '340%', label: 'Average ROAS' },
              { value: '150+', label: 'Brands Scaled' },
            ].map((stat, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 100} duration={600}>
                <div className="border-l border-sky-100 pl-6 space-y-2">
                  <span className="font-manrope font-800 text-4xl sm:text-5xl lg:text-6xl text-studio-deep-dark">{stat.value}</span>
                  <span className="text-slate-450 text-xs font-semibold uppercase tracking-wider block font-inter">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* Smooth section transition */}
      <div className="section-divider" aria-hidden="true" />

      {/* 07. Testimonials */}
      <section 
        aria-label="Client Testimonials and Transcripts"
        className="py-10 md:py-14 lg:py-16 bg-studio-light section-ambient"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-slate-450 uppercase block mb-3 font-inter">Endorsements</span>
                <RevealText 
                  text="Client Transcripts" 
                  className="font-manrope font-800 text-4xl text-studio-deep-dark" 
                  as="h2" 
                />
              </div>
              <div className="flex gap-2.5 mt-4 md:mt-0" role="tablist" aria-label="Testimonial slider controls">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    role="tab"
                    aria-selected={activeTestimonial === idx}
                    aria-label={`View client testimonial ${idx + 1}`}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center font-inter text-xs transition-all duration-300 focus-visible:ring-2 focus-visible:ring-alvision-blue focus-visible:outline-none ${
                      activeTestimonial === idx 
                        ? 'bg-studio-deep-dark border-studio-deep-dark text-white font-bold scale-110' 
                        : 'bg-white border-slate-200 text-slate-450 hover:text-studio-deep-dark hover:border-slate-300'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={100}>
            <div 
              role="tabpanel"
              className="bg-white border border-sky-100 p-8 md:p-16 flex flex-col justify-between min-h-[280px] shadow-sm relative transition-all duration-500"
            >
              <Quote className="absolute top-10 right-10 text-slate-100 h-16 w-16 pointer-events-none" aria-hidden="true" />
              <p className="font-manrope font-800 text-xl md:text-3xl leading-relaxed text-studio-deep-dark max-w-4xl italic">
                &quot;{testimonials[activeTestimonial].quote}&quot;
              </p>
              
              <div className="border-t border-slate-100 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                  <strong className="font-manrope font-bold text-lg text-studio-deep-dark block">{testimonials[activeTestimonial].author}</strong>
                  <span className="text-slate-400 text-xs font-inter">{testimonials[activeTestimonial].role}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-alvision-secondary bg-sky-50 border border-sky-100 px-3.5 py-1.5 rounded-full font-inter">
                  {testimonials[activeTestimonial].verified}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Smooth section transition */}
      <div className="section-divider" aria-hidden="true" />

      {/* 08. Contact */}
      <section 
        aria-label="Partner with us to grow your brand"
        className="py-12 md:py-16 bg-studio-light text-studio-deep-dark text-center relative overflow-hidden"
      >
        <div className="film-grain" aria-hidden="true" />
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_50%)]" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-200/5 rounded-full blur-3xl animate-breathe pointer-events-none" aria-hidden="true" />
        
        <ScrollReveal variant="blur" className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-[0.3em] text-alvision-secondary uppercase mb-6 font-inter">Project Alignment</span>
          <h2 className="font-manrope font-800 text-4xl sm:text-6xl md:text-7xl leading-tight mb-10 max-w-4xl">
            Let&apos;s build something <br /> remarkable.
          </h2>
          <Link
            href="/contact"
            aria-label="Start your digital audit project consult now"
            className="px-10 py-4 font-manrope font-bold text-xs uppercase tracking-widest text-deep-black bg-alvision-blue hover:bg-alvision-secondary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-sky-200/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue btn-shimmer"
          >
            Start Project Consultation
          </Link>
        </ScrollReveal>
      </section>

    </main>
  );
}
