'use client';

import React, { useState } from 'react';
import { 
  MessageSquare, Users, TrendingUp, Target, Briefcase, Film, 
  Sparkles, Share2, Zap, CheckCircle, ChevronRight, ArrowRight, Building2, Stethoscope 
} from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const services = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: Target,
      short: 'Performance marketing, paid ads, SEO optimization & conversion strategy.',
      desc: 'Drive scalable growth with data-backed digital marketing. We craft targeted search, social, and display campaigns aligned with precise audience segmentations to maximize ROI, elevate brand visibility, and lower acquisition costs.',
      features: [
        'Search Engine Optimization (SEO)',
        'Performance Marketing (Meta & Google Ads)',
        'Data Analytics & GTM/GA4 Tracking Setup',
        'Campaign Strategy & Funnel Architecture',
        'Conversion Rate Optimization (CRO)'
      ],
      deliverable: 'Multi-channel ad strategy, conversion tracking dashboards, weekly ROI reports, performance metrics.',
      image: '/images/service_google_ads.png'
    },
    {
      id: 'editing',
      title: 'Editing',
      icon: Film,
      short: 'High-retention video post-production, Reels, Shorts & cinematic cuts.',
      desc: 'Transform raw footage into captivating visual narratives. Our editing studio specializes in fast-paced, high-retention video editing for Shorts, Reels, YouTube long-form, corporate brand films, and commercials.',
      features: [
        'High-Retention Short-Form Editing (Reels/Shorts)',
        'Professional Color Grading & Sound Design',
        'Dynamic Motion Graphics & Kinetic Typography',
        'Storyboarding & Narrative Pacing',
        'A/B Thumbnail & Hook Optimization'
      ],
      deliverable: 'Ready-to-publish video assets in multiple ratios (9:16, 16:9), master audio tracks, graphic overlay kits.',
      image: '/images/service_social.png'
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      icon: Sparkles,
      short: 'Cinematic video shoots, studio scripting, brand identity assets & copy.',
      desc: 'Create memorable content that connects deeply with your target audience. From creative conceptualization and scriptwriting to full-scale studio video shoots and graphic design, we turn brand ideas into high-impact visual assets.',
      features: [
        'Creative Scriptwriting & Storyboarding',
        'Full-Scale Studio & On-Location Shoots',
        'Brand Visual Assets & Graphic Design',
        'Social Media Content Calendars & Reels',
        'Corporate Brochure & Digital Campaign Design'
      ],
      deliverable: 'High-resolution video footage, master graphics package, content production calendar, template kits.',
      image: '/images/service_design.png'
    },
    {
      id: 'distribution',
      title: 'Distribution',
      icon: Share2,
      short: 'Multi-channel broadcasting, native creator networks & audience reach.',
      desc: 'Amplify your message across our high-reach native media network (including Slam Book Tamil, Jajabordiary, Mr. Guru, Alvision Fusion, Alvision Tamil, Wild Card) and regional partner channels reaching millions of active viewers.',
      features: [
        'Native Channel Content Placement (3M+ base)',
        'Regional Creator Network Amplification',
        'Cross-Platform Syndication Strategy',
        'Audience Engagement & Retention Audits',
        'Multi-Tier Distribution Workflows'
      ],
      deliverable: 'Syndicated content placement, campaign reach analytics, impression reports, brand lift metrics.',
      image: '/images/service_influencer.png'
    },
    {
      id: 'acquisition',
      title: 'Acquisition',
      icon: Zap,
      short: 'High-intent lead generation, client acquisition & conversion funnels.',
      desc: 'Streamline customer acquisition for healthcare, real estate, construction, and enterprise brands. We design high-converting landing pages, lead capture workflows, and targeted acquisition campaigns that generate qualified clients.',
      features: [
        'High-Intent Lead Capture & Nurturing',
        'Healthcare & Enterprise Acquisition Funnels',
        'Automated Lead Scoring & CRM Integration',
        'Retargeting & Remarketing Workflows',
        'Customer Lifetime Value (LTV) Optimization'
      ],
      deliverable: 'Fully integrated lead generation funnel, CRM connection setup, weekly lead acquisition reports, conversion rate logs.',
      image: '/images/case_cart_recovery.png'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Marketing',
      icon: MessageSquare,
      short: 'API integrations, broadcast messages, auto cart & lead recovery.',
      desc: 'Unlock direct engagement with an average 98% open rate. We build custom WhatsApp notification campaigns that integrate directly with Shopify/WooCommerce and corporate CRMs to recover abandoned checkouts and nurture leads.',
      features: [
        'Campaign Strategy & Opt-in Design',
        'Automated Lead & Cart Recovery Sequences',
        'Meta Cloud API Integrations',
        'Interactive Chatbot Flow Builder',
        'Advanced Broadcasting Analytics'
      ],
      deliverable: 'Custom automated chatbot, opt-in popups, campaign dashboard access, weekly performance reports.',
      image: '/images/service_whatsapp.png'
    },
    {
      id: 'influencer',
      title: 'Influencer Marketing',
      icon: Users,
      short: 'Regional creator alignments & native network placements.',
      desc: 'Leverage our native media network and extensive database of vetted regional creators to place your brand directly in front of active buyers with high trust and proven engagement.',
      features: [
        'Creator Discovery & Vetting',
        'Content Co-creation & Guidelines',
        'Campaign Contracts & Compliance',
        'Native Channel Integrations (3M+ base)',
        'Engagement & Conversion Audits'
      ],
      deliverable: 'Curated influencer list, content assets, reach & impression reports, brand lift metrics.',
      image: '/images/service_influencer.png'
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: Briefcase,
      short: 'Corporate websites, high-speed landing pages, Web Tech architecture.',
      desc: 'Ensure your web presence loads instantly, ranks on Google, and converts visitors into leads. We specialize in custom headless frameworks (Next.js, React) optimized for SEO, speed, and Core Web Vitals.',
      features: [
        'Next.js App Router Architecture',
        'Fully Responsive UX/UI Designs',
        'Web Tech & Campaign Strategy Integration',
        'Figma to High-Fidelity React Conversion',
        'PageSpeed & SEO Core Performance Maxing'
      ],
      deliverable: 'Fully coded responsive website, Git repository, hosting deployment, CMS training manual, sitemaps.',
      image: '/images/service_web.png'
    }
  ];

  const clientsList = [
    {
      name: 'MLL Hospital',
      category: 'Healthcare & Medical Services',
      description: 'Digital patient acquisition, campaign strategy, and brand awareness across regional networks.',
      icon: Stethoscope
    },
    {
      name: 'Jyosthna Maternity Hospital',
      category: 'Specialized Healthcare',
      description: 'Targeted awareness campaigns and online appointment booking funnel integration.',
      icon: Stethoscope
    },
    {
      name: 'Jyothi Dental Hospital',
      category: 'Dental & Oral Healthcare',
      description: 'Local search visibility, Google Ads, and patient lead generation strategies.',
      icon: Stethoscope
    },
    {
      name: 'Preetham Infra Constructions Company',
      category: 'Infrastructure & Real Estate',
      description: 'Web Tech & Campaign Strategy driving multi-channel lead acquisition and 10M+ audience reach.',
      icon: Building2
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: '',
          company: '',
          message: msg,
          service: services[activeTab].title
        })
      });
    } catch {}
    setFormSubmitted(true);
    setName('');
    setEmail('');
    setMsg('');
  };

  return (
    <main id="main-content" role="main" className="relative bg-white text-dark-navy min-h-screen pt-24 pb-8">
      
      {/* Glow effects */}
      <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-alvision-blue/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-glow-blue/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      {/* 1. Header Hero */}
      <section className="py-8 md:py-12 text-center relative z-10" aria-label="Services intro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-down" duration={600}>
            <span className="text-gradient-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block mb-4 font-inter">OUR DEPARTMENTS</span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100} duration={700}>
            <h1 className="font-manrope font-800 text-4xl sm:text-5xl md:text-6xl mb-6">
              Digital Capabilities That Drive Value
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200} duration={700}>
            <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg leading-relaxed font-inter">
              Explore our core service capabilities. From Digital Marketing and High-Retention Editing to Content Creation, Distribution, and Acquisition, we focus on technical precision and measurable growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Interactive Service Explorer - White Background */}
      <section className="py-10 md:py-14 relative z-10 bg-white border-y border-sky-100/40" aria-label="Services selector explorer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left side: Navigation list */}
            <ScrollReveal variant="fade-right" duration={700} className="lg:col-span-4 space-y-2" as="div">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4 font-inter px-3">Service Selector</span>
              <div role="tablist" aria-label="Capability list tabs" className="space-y-2">
                {services.map((srv, idx) => {
                  const Icon = srv.icon;
                  return (
                    <button
                      key={idx}
                      role="tab"
                      id={`service-tab-${idx}`}
                      aria-selected={activeTab === idx}
                      aria-controls={`service-panel-${idx}`}
                      onClick={() => {
                        setActiveTab(idx);
                        setFormSubmitted(false);
                      }}
                      className={`w-full text-left px-4 py-3.5 rounded-xl font-manrope font-bold text-sm md:text-base flex items-center justify-between transition-all duration-300 border focus-visible:ring-2 focus-visible:ring-alvision-blue focus-visible:outline-none ${
                        activeTab === idx 
                          ? 'bg-alvision-blue text-deep-black border-alvision-blue shadow-lg shadow-alvision-blue/25 scale-[1.01]' 
                          : 'bg-white hover:bg-slate-50 border-sky-100 text-slate-500 hover:text-dark-navy hover:border-slate-350 shadow-sm'
                      }`}
                    >
                      <span className="flex items-center gap-3.5">
                        <Icon size={18} aria-hidden="true" />
                        {srv.title}
                      </span>
                      <ChevronRight size={16} className={`transition-transform duration-300 ${activeTab === idx ? 'translate-x-0.5' : 'opacity-40'}`} aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Right side: Detailed View */}
            <ScrollReveal variant="fade-left" delay={150} duration={700} className="lg:col-span-8" as="div">
              <div 
                role="tabpanel"
                id={`service-panel-${activeTab}`}
                aria-labelledby={`service-tab-${activeTab}`}
                className="glass-panel p-6 md:p-10 rounded-3xl border border-sky-100 flex flex-col justify-between min-h-[600px] shadow-sm bg-white card-hover-tilt"
              >
                
                {/* Upper description */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue" aria-hidden="true">
                      {React.createElement(services[activeTab].icon, { size: 28 })}
                    </div>
                    <div>
                      <h2 className="font-manrope font-800 text-2xl md:text-3xl text-dark-navy">
                        {services[activeTab].title}
                      </h2>
                      <span className="text-slate-400 text-xs md:text-sm font-inter block mt-1">Alvision Capability Suite</span>
                    </div>
                  </div>

                  {/* Service Graphic Visual mockup */}
                  <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden border border-sky-100/60 mb-6 bg-slate-55 shadow-sm relative group" aria-hidden="true">
                    <img 
                      src={services[activeTab].image} 
                      alt="" 
                      className="w-full h-full object-cover pointer-events-none group-hover:scale-103 transition-transform duration-700"
                    />
                  </div>

                  <p className="text-slate-550 text-sm md:text-base leading-relaxed mb-6 font-inter max-w-3xl">
                    {services[activeTab].desc}
                  </p>

                  <h4 className="font-manrope text-sm font-bold text-dark-navy uppercase tracking-wider mb-4">Core Focus Areas</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                    {services[activeTab].features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-500 font-inter">
                        <CheckCircle size={16} className="text-alvision-blue shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-4 rounded-xl bg-white border border-sky-100 text-xs md:text-sm text-slate-500 font-inter leading-relaxed mb-8 shadow-sm">
                    <strong className="text-dark-navy font-bold block mb-1">Standard Deliverables:</strong>
                    {services[activeTab].deliverable}
                  </div>
                </div>

                {/* Lower Inquiry Action Form */}
                <div className="border-t border-slate-200/40 pt-8 mt-4">
                  {formSubmitted ? (
                    <div className="bg-alvision-blue/5 border border-alvision-blue/20 rounded-xl p-6 text-center">
                      <span className="font-manrope font-bold text-gradient text-lg block mb-1">Callback Registered!</span>
                      <p className="text-slate-550 text-xs font-inter">We will follow up regarding our {services[activeTab].title} capabilities.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
                      <div className="sm:col-span-4">
                        <label htmlFor="name-input" className="block text-[10px] font-bold text-slate-655 uppercase tracking-wider mb-2 font-inter">Your Name</label>
                        <input 
                          id="name-input"
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Priyan" 
                          className="w-full bg-white border border-slate-200/80 rounded-lg px-3 py-2.5 text-xs text-dark-navy placeholder-slate-gray/45 focus:outline-none focus:border-alvision-blue/50 focus:ring-2 focus:ring-alvision-blue/20 shadow-sm"
                        />
                      </div>
                      <div className="sm:col-span-4">
                        <label htmlFor="email-input" className="block text-[10px] font-bold text-slate-655 uppercase tracking-wider mb-2 font-inter">Email Address</label>
                        <input 
                          id="email-input"
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@domain.com" 
                          className="w-full bg-white border border-slate-200/80 rounded-lg px-3 py-2.5 text-xs text-dark-navy placeholder-slate-gray/45 focus:outline-none focus:border-alvision-blue/50 focus:ring-2 focus:ring-alvision-blue/20 shadow-sm"
                        />
                      </div>
                      <div className="sm:col-span-4">
                        <button 
                          type="submit"
                          aria-label={`Submit callback request for ${services[activeTab].title}`}
                          className="w-full py-3 px-4 font-manrope font-bold text-xs text-deep-black bg-gradient-to-r from-alvision-blue to-glow-blue rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue btn-shimmer"
                        >
                          Request Callback <ArrowRight size={14} aria-hidden="true" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. Featured Clients Showcase Section */}
      <section className="py-12 md:py-16 relative z-10 bg-slate-50/50 border-b border-sky-100/40" aria-label="Our Trusted Clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" duration={600} className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[10px] font-bold text-alvision-secondary uppercase tracking-[0.25em] block mb-3 font-inter">PROVEN TRUST</span>
            <h2 className="font-manrope font-800 text-3xl md:text-4xl text-dark-navy mb-4">
              Our Esteemed Clients
            </h2>
            <p className="text-slate-500 text-sm font-inter">
              We work with leading healthcare institutions, infrastructure conglomerates, and growing enterprises to power digital acquisition and campaign strategies.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientsList.map((client, idx) => {
              const ClientIcon = client.icon;
              return (
                <ScrollReveal key={idx} variant="fade-up" delay={idx * 100} duration={600}>
                  <div className="bg-white border border-sky-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-alvision-blue/40 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-alvision-blue mb-4 group-hover:scale-110 transition-transform">
                        <ClientIcon size={20} />
                      </div>
                      <h3 className="font-manrope font-bold text-lg text-dark-navy mb-1.5 group-hover:text-alvision-blue transition-colors">
                        {client.name}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-inter block mb-3">
                        {client.category}
                      </span>
                      <p className="text-slate-550 text-xs font-inter leading-relaxed">
                        {client.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Technology Alignment statement - White Background */}
      <section className="py-10 text-center relative z-10 bg-white" aria-label="Technology integration standards">
        <ScrollReveal variant="fade-up" duration={600} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-manrope font-bold text-xl md:text-2xl mb-4 text-dark-navy">Technology & Media Integration</h3>
          <p className="text-slate-550 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed mb-6 font-inter">
            Through our media networks and tech infrastructure, we deliver cutting-edge automation, machine learning analytics, performance tracking dashboards, and high-conversion software assets alongside creative video pipelines.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-100 text-xs font-semibold text-slate-500 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            100% Core Web Vital Audit Target Compliant
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}

