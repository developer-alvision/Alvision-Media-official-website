'use client';

import React, { useState } from 'react';
import { Sparkles, Calendar, CheckSquare, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PartnerPage() {
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [partnerType, setPartnerType] = useState('Brand Collaboration');
  const [msg, setMsg] = useState('');

  const partnershipTypes = [
    { title: 'Sponsorships', desc: 'Secure high-impact integration slots inside our native YouTube channels (e.g. Slam Book Tamil interviews).', icon: Sparkles },
    { title: 'Brand Collaborations', desc: 'Co-develop digital campaigns, visual assets, and customized content programs designed to sell.', icon: MessageSquare },
    { title: 'Promotional Integrations', desc: 'Integrate short-form video reels or community post promotions across our 3M+ active follower base.', icon: CheckSquare },
    { title: 'Events & Coverage', desc: 'Hire Alvision visual desks to cover regional product launches, travel tours, or corporate announcements.', icon: Calendar }
  ];

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: '',
          company,
          message: `[Partnership Type: ${partnerType}] ${msg}`,
          service: 'Influencer Marketing'
        })
      });
      if (res.ok) {
        setPartnerSubmitted(true);
        setName('');
        setEmail('');
        setCompany('');
        setMsg('');
      } else {
        alert('Failed to register request. Please try again.');
      }
    } catch {
      setPartnerSubmitted(true);
    }
  };

  return (
    <main id="main-content" role="main" className="relative bg-white text-dark-navy min-h-screen pt-24 pb-10">
      {/* Background glow */}
      <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-alvision-blue/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-40 left-1/4 w-[350px] h-[350px] bg-glow-blue/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* 1. Header Hero */}
      <section className="py-8 md:py-12 text-center relative z-10 bg-white" aria-label="Partner page title">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gradient-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block mb-4 font-inter">COLLABORATION DESK</span>
          <h1 className="font-manrope font-800 text-4xl sm:text-5xl md:text-6xl mb-6 text-studio-deep-dark">
            Partner With Alvision Media
          </h1>
          <p className="max-w-xl mx-auto text-slate-550 text-base md:text-lg leading-relaxed font-inter">
            Drive organic reach and visual credibility. We match your corporate brand with our creator network to deliver outstanding engagement.
          </p>
        </div>
      </section>

      {/* 2. Grid of Collaboration Options */}
      <section className="py-8 relative z-10 bg-white" aria-label="Partnership options list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {partnershipTypes.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div key={idx} className="glass-panel p-6 rounded-2xl border border-sky-100 flex flex-col justify-between h-[200px] hover:border-alvision-blue/30 transition-all shadow-sm bg-white">
                  <div className="w-10 h-10 rounded-xl bg-alvision-blue/15 flex items-center justify-center text-alvision-blue mb-4" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-manrope font-bold text-base mb-1.5 text-studio-deep-dark">{pt.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-inter">{pt.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form and CTA block */}
          <div className="glass-panel rounded-3xl p-6 md:p-12 border border-sky-100 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-md bg-white">
            <div>
              <span className="text-gradient-blue text-xs font-bold uppercase tracking-wider block mb-2 font-inter">PARTNERSHIP QUERY</span>
              <h2 className="font-manrope font-800 text-2xl md:text-3xl mb-4 text-studio-deep-dark">Let's Co-Create</h2>
              <p className="text-slate-550 text-xs md:text-sm leading-relaxed mb-6 font-inter">
                Select your partnership model and submit your details. Our brand alignment managers will review your site and propose a customized integration matrix within 24 hours.
              </p>
              <div className="text-xs text-slate-500 font-inter border-l-2 border-alvision-blue pl-4 py-2 bg-slate-50 rounded-r-lg">
                Looking for corporate agency contracts? Go to our <Link href="/contact" className="text-alvision-blue underline font-bold focus-visible:ring-2 focus-visible:ring-alvision-blue rounded px-1">Contact Page</Link>.
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              {partnerSubmitted ? (
                <div className="text-center py-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-alvision-blue/10 flex items-center justify-center text-alvision-blue mb-4">
                    <CheckCircle size={28} />
                  </div>
                  <h3 className="font-manrope font-bold text-xl mb-1 text-studio-deep-dark">Request Received!</h3>
                  <p className="text-slate-500 text-xs font-inter">Our brand desk will contact you via email shortly.</p>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[10px] font-semibold text-slate-650 uppercase tracking-wider mb-1.5 font-inter">Contact Name</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priyan" 
                      className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-dark-navy placeholder-slate-gray/45 focus:outline-none focus:border-alvision-blue/50 focus:ring-2 focus:ring-alvision-blue/20 shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] font-semibold text-slate-650 uppercase tracking-wider mb-1.5 font-inter">Email Address</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com" 
                      className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-dark-navy placeholder-slate-gray/45 focus:outline-none focus:border-alvision-blue/50 focus:ring-2 focus:ring-alvision-blue/20 shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="company-name" className="block text-[10px] font-semibold text-slate-650 uppercase tracking-wider mb-1.5 font-inter">Company Name</label>
                    <input 
                      id="company-name"
                      type="text" 
                      required 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Sanath Pvt Ltd" 
                      className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-dark-navy placeholder-slate-gray/45 focus:outline-none focus:border-alvision-blue/50 focus:ring-2 focus:ring-alvision-blue/20 shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="model-select" className="block text-[10px] font-semibold text-slate-650 uppercase tracking-wider mb-1.5 font-inter">Partnership Model</label>
                    <select 
                      id="model-select"
                      value={partnerType}
                      onChange={(e) => setPartnerType(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-dark-navy focus:outline-none focus:border-alvision-blue/50 focus:ring-2 focus:ring-alvision-blue/20 shadow-sm"
                    >
                      <option>Sponsorship</option>
                      <option>Brand Collaboration</option>
                      <option>Promotional Integration</option>
                      <option>Event Coverage</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="msg-textarea" className="block text-[10px] font-semibold text-slate-650 uppercase tracking-wider mb-1.5 font-inter">Message / Requirements</label>
                    <textarea 
                      id="msg-textarea"
                      rows={2.5} 
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      placeholder="Describe your project..." 
                      className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-dark-navy placeholder-slate-gray/45 focus:outline-none focus:border-alvision-blue/50 focus:ring-2 focus:ring-alvision-blue/20 shadow-sm"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-3.5 font-manrope font-bold text-xs text-deep-black bg-gradient-to-r from-alvision-blue to-glow-blue rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-1.5 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue"
                  >
                    Submit Partnership Request <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
