'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import RevealText from '@/components/RevealText';
import Magnetic from '@/components/Magnetic';
import ScrollTextReveal from '@/components/ScrollTextReveal';
import HorizontalGallery from '@/components/HorizontalGallery';
import CoveringPanels from '@/components/CoveringPanels';
import FAQSection from '@/components/FAQSection';

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Authentic Client Work & Portfolio from existing website & database
  const clientWork = [
    {
      client: 'Preetham Infra Constructions & Healthcare Partners',
      industry: 'Infrastructure & Healthcare',
      title: 'Preetham Infra & Healthcare Web Tech Campaign',
      category: 'Web Tech & Campaign Strategy',
      metric: '10M Reach',
      detail: 'Leveraged native channels & Web Tech infrastructure to drive multi-channel lead acquisition for Preetham Infra Constructions Company & Healthcare partners.',
      image: '/images/hero_cinematic_studio.png'
    },
    {
      client: 'Slam Book Tamil Celebrity Series',
      industry: 'Media & Production',
      title: 'Slam Book Tamil Creator Placement',
      category: 'Content Production & Distribution',
      metric: '18.5M Views',
      detail: 'Coordinated sponsorship placement inside high-production celebrity conversational videos, leading to 140% sponsor renewals.',
      image: '/images/case_influencer_food.png'
    },
    {
      client: 'WhatsApp E-Commerce Automation',
      industry: 'Performance Marketing',
      title: 'WhatsApp Automation E-Commerce Funnel',
      category: 'Performance Marketing',
      metric: '22% Cart Recovery',
      detail: 'Built triggers that recovered 22% of abandoned checkouts in 30 days for top D2C clothing brands.',
      image: '/images/case_cart_recovery.png'
    },
    {
      client: 'Vocal for Local Campaign',
      industry: 'Influencer Marketing',
      title: 'Tamil Influencer Campaign',
      category: 'Influencer Marketing',
      metric: '4.5M Reach',
      detail: 'Curated partnership with 12 micro and macro regional Tamil creators to promote organic traditional products.',
      image: '/images/service_influencer.png'
    },
    {
      client: 'Healthcare Partner Network',
      industry: 'Healthcare Acquisition',
      title: 'Multi-Channel Hospital Lead Strategy',
      category: 'Healthcare & Enterprise Acquisition',
      metric: 'Multi-Channel Lead Flow',
      detail: 'Configured targeted digital marketing and video content for Jyosthna Maternity Hospital, MLL Multi Speciality Hospital, and Jyothi Dental Hospital.',
      image: '/images/service_google_ads.png'
    },
    {
      client: 'D2C Skincare Web Launch',
      industry: 'Web Development',
      title: 'Modern D2C Skincare Web Launch',
      category: 'Web Development',
      metric: '0.9s Load Time',
      detail: 'A custom glassmorphic e-commerce landing page built with Next.js and optimized for conversion and Core Web Vitals.',
      image: '/images/service_web.png'
    }
  ];

  // Authentic Verified Clients List
  const trustedClients = [
    'Preetham Infra Constructions',
    'Jyosthna Maternity Hospital',
    'MLL Multi Speciality Hospital',
    'Jyothi Dental Hospital'
  ];

  // Verified Alvision Media Youtube Channels
  const channels = [
    { 
      name: 'Slam Book Tamil', 
      cat: 'Entertainment & Lifestyle', 
      views: '145M views', 
      subs: '1.2M subs', 
      desc: 'Tamil Nadu\'s leading lifestyle, celebrity interview, and pop-culture digital network.',
      image: '/images/Slam Book Tamil.png' 
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
      name: 'Alvision Tamil', 
      cat: 'Business & Finance', 
      views: '65M views', 
      subs: '550K subs', 
      desc: 'Detailed corporate case studies, regional financial advice, and startup growth models delivered in Tamil.',
      image: '/images/Alvision Tamil.png' 
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
      name: 'Alvision Fusion', 
      cat: 'Infotainment & Shorts', 
      views: '32M views', 
      subs: '280K subs', 
      desc: 'Bite-sized business statistics, geopolitical insights, and current tech trends packaged for the modern scroll.',
      image: '/images/Alvision Fusion.png' 
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

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const service = formData.get('service') || '';
    const message = formData.get('message') || '';
    
    const text = `Hello Alvision Media, I am ${name}. Email: ${email}. Service: ${service}. Message: ${message}`;
    const whatsappUrl = `https://wa.me/916262949423?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormSubmitted(true);
  };

  return (
    <main id="main-content" className="relative bg-[#F0F9FF] text-slate-900 overflow-hidden">
      
      {/* ===================================================
          01. HERO / CINEMATIC 3D OPENING EXPERIENCE
         =================================================== */}
      <section 
        aria-label="Welcome to Alvision Media"
        className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-[#E0F2FE]/40 to-white"
      >
        {/* Clean Studio Background Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_70%)]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-3xl animate-blob-drift" />
          
          {/* Studio Focus Grid Lines */}
          <div className="absolute inset-8 border border-sky-200/40 opacity-50" />
          <div className="absolute top-12 left-12 w-6 h-6 border-t-2 border-l-2 border-sky-400" />
          <div className="absolute top-12 right-12 w-6 h-6 border-t-2 border-r-2 border-sky-400" />
          <div className="absolute bottom-12 left-12 w-6 h-6 border-b-2 border-l-2 border-sky-400" />
          <div className="absolute bottom-12 right-12 w-6 h-6 border-b-2 border-r-2 border-sky-400" />
        </div>

        {/* Hero HTML Content Layer */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
          <ScrollReveal variant="fade-down" duration={600}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200/80 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-sky-700 font-inter">
                Alvision Media
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150} duration={800}>
            <h1 className="font-manrope font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-slate-950 max-w-5xl mb-6">
              Make Your Brand <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Visible.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300} duration={800}>
            <p className="max-w-2xl text-slate-700 text-base sm:text-lg md:text-xl font-inter leading-relaxed font-normal mb-10">
              Digital marketing, creative content and web solutions that help businesses grow.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={450} duration={800}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Magnetic>
                <a
                  href="#contact"
                  className="px-8 py-4 font-manrope font-bold text-xs uppercase tracking-widest text-white bg-sky-500 hover:bg-sky-600 rounded-full transition-all duration-300 shadow-lg shadow-sky-500/25 flex items-center gap-2 group btn-shimmer"
                >
                  Start a Project
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="#our-work"
                  className="px-8 py-4 font-manrope font-bold text-xs uppercase tracking-widest text-slate-800 bg-white/90 border border-sky-200 backdrop-blur-md rounded-full hover:bg-sky-50 hover:border-sky-300 transition-all duration-300 shadow-sm flex items-center gap-2"
                >
                  View Our Work
                </a>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================================================
          01B. SCROLL-DRIVEN TEXT REVEAL (FOG EMERGE EFFECT)
         =================================================== */}
      <ScrollTextReveal text="Alvision transforms ambitious brands into digital experiences that attract attention, build trust, and turn every interaction into measurable growth." />



      {/* ===================================================
          03. ABOUT US & DIGITAL TRANSFORMATION STORY
         =================================================== */}
      <section 
        id="about"
        aria-label="About Alvision Media"
        className="py-20 md:py-28 relative bg-white border-t border-sky-100 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <ScrollReveal variant="fade-right" className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-600 font-inter block">
                About Us & Digital Transformation
              </span>
              <RevealText 
                text="Creating Impactful Content Across Platforms."
                className="font-manrope font-extrabold text-3xl sm:text-5xl text-slate-950 leading-tight"
                as="h2"
              />
              <div className="w-16 h-1 bg-sky-500 rounded-full" />
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-inter">
                At Alvision Media, storytelling is at the heart of everything we do. With dynamic media channels covering entertainment, lifestyle, tech, and informative content, we bring fresh, engaging videos to diverse audiences every week.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-inter">
                Backed by a passionate creative team and collaborations with talented creators, we solve client acquisition challenges by pairing strategic planning and production with our direct 3M+ subscriber distribution network.
              </p>

              {/* Verified Performance Stats Grid */}
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="glass-panel p-5 rounded-2xl bg-[#F0F9FF] border border-sky-100 shadow-xs">
                  <span className="font-manrope font-extrabold text-2xl sm:text-3xl text-sky-600 block mb-1">3M+</span>
                  <span className="text-xs text-slate-700 font-inter uppercase tracking-wider block font-semibold">Subscribers</span>
                  <p className="text-[11px] text-slate-500 mt-1 font-inter">Across Alvision native channels.</p>
                </div>

                <div className="glass-panel p-5 rounded-2xl bg-[#F0F9FF] border border-sky-100 shadow-xs">
                  <span className="font-manrope font-extrabold text-2xl sm:text-3xl text-slate-900 block mb-1">450M+</span>
                  <span className="text-xs text-slate-700 font-inter uppercase tracking-wider block font-semibold">Total Views</span>
                  <p className="text-[11px] text-slate-500 mt-1 font-inter">Direct network views generated.</p>
                </div>

                <div className="glass-panel p-5 rounded-2xl bg-[#F0F9FF] border border-sky-100 shadow-xs">
                  <span className="font-manrope font-extrabold text-2xl sm:text-3xl text-sky-600 block mb-1">6</span>
                  <span className="text-xs text-slate-700 font-inter uppercase tracking-wider block font-semibold">Media Networks</span>
                  <p className="text-[11px] text-slate-500 mt-1 font-inter">Entertainment, tech, business & travel.</p>
                </div>

                <div className="glass-panel p-5 rounded-2xl bg-[#F0F9FF] border border-sky-100 shadow-xs">
                  <span className="font-manrope font-extrabold text-2xl sm:text-3xl text-slate-900 block mb-1">100%</span>
                  <span className="text-xs text-slate-700 font-inter uppercase tracking-wider block font-semibold">Dedicated Team</span>
                  <p className="text-[11px] text-slate-500 mt-1 font-inter">Concept, production & growth.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Visual Studio Image Banner */}
            <ScrollReveal variant="fade-left" delay={200} className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-sky-100 shadow-lg p-2 bg-white">
                <img 
                  src="/images/about_story_banner.png" 
                  alt="Alvision Media Production Studio" 
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-sky-100 text-xs text-slate-700 font-inter shadow-md">
                  <strong className="text-slate-950 font-manrope block font-bold text-sm mb-1">HQ Address</strong>
                  Ward No 17, 17/9149, New Eastpeta, Rajeev Nagar Road, Nemali Nagar, Madanapalle, Andhra Pradesh 517325
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ===================================================
          03B. SEQUENTIAL COVERING PANELS (10 FULL-SCREEN PANELS)
         =================================================== */}
      <CoveringPanels />



      {/* ===================================================
          05. HORIZONTAL PROJECT GALLERY (PINNED SCROLL)
         =================================================== */}
      <section id="our-work">
        <HorizontalGallery />
      </section>

      {/* ===================================================
          05. CLIENTS / TRUSTED BY SECTION
         =================================================== */}
      <section 
        id="clients"
        aria-label="Our Clients and Partners"
        className="py-20 md:py-28 relative bg-[#F0F9FF] border-t border-sky-100"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal variant="fade-up" className="text-center mb-12">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-600 block mb-3 font-inter">
              Clients & Partners
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-5xl text-slate-950">
              OUR CLIENTS
            </h2>
          </ScrollReveal>

          {/* Client Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {trustedClients.map((clientName, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 60}>
                <div className="p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-md transition-all text-center group flex items-center justify-center min-h-[100px]">
                  <span className="font-manrope font-extrabold text-sm md:text-base text-slate-900 group-hover:text-sky-600 transition-colors block">
                    {clientName}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* YouTube Media Channels Grid */}
          <div className="mt-16 pt-12 border-t border-sky-200/60">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-700 block mb-8 text-center font-inter">
              Alvision YouTube Channels (3M+ Subscribers)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {channels.map((chan, idx) => (
                <ScrollReveal key={idx} variant="fade-up" delay={idx * 80}>
                  <div className="glass-panel p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-md transition-all flex items-center gap-4">
                    <img 
                      src={chan.image} 
                      alt={chan.name} 
                      className="w-14 h-14 rounded-full object-cover border border-sky-200 shrink-0" 
                    />
                    <div>
                      <h4 className="font-manrope font-bold text-base text-slate-900">{chan.name}</h4>
                      <span className="text-[11px] text-sky-600 font-semibold block">{chan.subs} • {chan.views}</span>
                      <p className="text-[11px] text-slate-500 font-inter line-clamp-1 mt-0.5">{chan.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================
          06B. DARK MINIMAL FAQ SECTION
         =================================================== */}
      <FAQSection />

      {/* ===================================================
          07. CONTACT & FINAL CTA SECTION
         =================================================== */}
      <section 
        id="contact"
        aria-label="Contact Details"
        className="py-24 md:py-32 relative bg-[#F8FAFC] border-t border-sky-100"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-600 block mb-3 font-inter">
              Get In Touch
            </span>
            <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl text-slate-950 mb-6">
              Let&apos;s Build Something Great.
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-inter">
              Have a project in mind, want to sponsor a channel, or recruit our team? Reach out directly below.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Direct Contact Information Cards */}
            <ScrollReveal variant="fade-right" className="lg:col-span-5 space-y-6">
              <div className="glass-panel p-6 rounded-2xl bg-white border border-sky-100 shadow-sm space-y-6">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-inter">Email Us</span>
                    <a href="mailto:hello@alvisionmedia.com" className="text-base font-manrope font-bold text-slate-900 hover:text-sky-600 transition-colors">
                      hello@alvisionmedia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-inter">Call Us</span>
                    <a href="tel:+916262949423" className="text-base font-manrope font-bold text-slate-900 hover:text-sky-600 transition-colors">
                      +91 62629 49423
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase tracking-wider block font-inter">Office Location</span>
                    <span className="text-sm font-manrope font-semibold text-slate-900 block leading-relaxed">
                      Ward No 17, 17/9149, New Eastpeta, Rajeev Nagar Road, Nemali Nagar, Madanapalle, Andhra Pradesh 517325
                    </span>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp CTA Card */}
              <div className="glass-panel p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="font-manrope font-bold text-sm text-slate-900 block">WhatsApp Us</span>
                    <span className="text-slate-500 text-[11px] font-inter">Direct chat link</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/916262949423?text=Hello%20Alvision%20Media,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-manrope font-bold text-xs rounded-full transition-colors flex items-center gap-1.5 shadow-sm btn-shimmer"
                >
                  WhatsApp Us <ArrowRight size={12} />
                </a>
              </div>
            </ScrollReveal>

            {/* Interactive Contact Form */}
            <ScrollReveal variant="fade-left" delay={150} className="lg:col-span-7">
              <div className="glass-panel p-8 md:p-10 rounded-3xl bg-white border border-sky-100 shadow-sm">
                {formSubmitted ? (
                  <div className="text-center py-12 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="font-manrope font-bold text-2xl text-slate-900 mb-2">Message Delivered!</h3>
                    <p className="text-slate-600 text-sm font-inter">Thank you for reaching out. We will get back to you shortly.</p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 text-xs text-sky-600 underline font-semibold"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2 font-inter">Your Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          required 
                          placeholder="Name" 
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2 font-inter">Your Email *</label>
                        <input 
                          type="email" 
                          name="email"
                          required 
                          placeholder="Email" 
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2 font-inter">Service Required *</label>
                      <select name="service" required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100">
                        <option value="">Select a Service</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="video-editing">Editing & Post-Production</option>
                        <option value="content-creation">Content Creation</option>
                        <option value="media-distribution">Media Distribution</option>
                        <option value="acquisition">Acquisition & Lead Funnels</option>
                        <option value="web-development">Web Development</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2 font-inter">Message *</label>
                      <textarea 
                        name="message"
                        rows={4} 
                        required 
                        placeholder="Your message..." 
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 font-manrope font-bold text-xs uppercase tracking-widest text-white bg-sky-500 hover:bg-sky-600 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-sky-500/20 btn-shimmer"
                    >
                      Send Message <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </main>
  );
}
