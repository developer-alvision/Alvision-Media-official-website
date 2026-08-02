'use client';

import React, { useState, useEffect } from 'react';
import { Briefcase, ArrowRight, CheckCircle, Clock, MapPin, DollarSign, X } from 'lucide-react';

export default function CareersPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [applied, setApplied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [resume, setResume] = useState('');

  const jobs = [
    { title: 'Video Editor (Tamil/English Content)', type: 'Full-Time / Contract', loc: 'Chennai (Onsite / Hybrid)', sal: '₹25K - ₹45K / month', desc: 'Responsible for editing high-retention shorts, reels, and long-form celebrity conversational vlogs. Mastery of Premiere Pro or After Effects required.' },
    { title: 'Senior Graphic Designer', type: 'Full-Time', loc: 'Chennai (Onsite)', sal: '₹30K - ₹50K / month', desc: 'Crafting brand visual guidelines, corporate presentation slides, premium advertising posters, and engaging social grids. Expertise in Figma/Photoshop needed.' },
    { title: 'Content Creator / Anchor (Face of Channel)', type: 'Contract / Part-Time', loc: 'Chennai (Onsite)', sal: 'Project-based / Retainer', desc: 'Seeking charismatic anchors to host interviews, vlogs, and geotech summaries on our lifestyle and educational channels.' },
    { title: 'Digital Marketing Executive', type: 'Full-Time', loc: 'Remote / Hybrid', sal: '₹20K - ₹35K / month', desc: 'Manage client paid-search bids, design WhatsApp drip pipelines, set up newsletters, and deliver weekly ROAS reporting sheets.' },
    { title: 'Content Strategy Intern (YouTube Growth)', type: 'Internship (3-6 months)', loc: 'Remote', sal: '₹8K - ₹15K stipend', desc: 'Conduct competitive analysis on titles, thumbnails, and script layouts. Ideal for young digital enthusiasts eager to learn the creator economy.' }
  ];

  // Close drawer on Escape press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenDrawer = (title: string) => {
    setSelectedJob(title);
    setDrawerOpen(true);
    setApplied(false);
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          job_title: selectedJob,
          applicant_name: name,
          email,
          portfolio_url: portfolio,
          resume_url: resume
        })
      });
      if (res.ok) {
        setApplied(true);
        setName('');
        setEmail('');
        setPortfolio('');
        setResume('');
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch {
      setApplied(true);
    }
  };

  return (
    <main id="main-content" role="main" className="relative bg-white text-dark-navy min-h-screen pt-24 pb-10">
      {/* Background glow */}
      <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-alvision-blue/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-40 left-1/4 w-[350px] h-[350px] bg-glow-blue/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* 1. Header Hero */}
      <section className="py-8 md:py-12 text-center relative z-10" aria-label="Careers opportunities intro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gradient-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block mb-4 font-inter">WE ARE HIRING</span>
          <h1 className="font-manrope font-800 text-4xl sm:text-5xl md:text-6xl mb-6 text-studio-deep-dark">
            Join the Alvision Core
          </h1>
          <p className="max-w-xl mx-auto text-slate-550 text-base md:text-lg leading-relaxed font-inter">
            Build the future of digital storytelling and performance marketing. We seek high-agency visual creators, developers, and writers.
          </p>
        </div>
      </section>

      {/* Visual banner block */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10" aria-hidden="true">
        <div className="h-[240px] md:h-[350px] rounded-3xl overflow-hidden border border-sky-100 shadow-md p-2 bg-white">
          <img 
            src="/images/career_team_culture.png" 
            alt="Alvision Creative Collaborative Lab" 
            className="w-full h-full object-cover rounded-2xl pointer-events-none"
          />
        </div>
      </div>

      {/* 2. Openings list */}
      <section className="py-8 relative z-10" aria-label="Current open roles list">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {jobs.map((job, idx) => (
            <article 
              key={idx} 
              className="glass-panel rounded-2xl border border-sky-100 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-alvision-blue/30 transition-all duration-300 group shadow-sm bg-white"
            >
              <div className="space-y-3.5 max-w-2xl">
                <h3 className="font-manrope font-bold text-lg md:text-xl text-dark-navy group-hover:text-alvision-blue transition-colors">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-550 font-inter">
                  <span className="flex items-center gap-1.5"><Clock size={12} aria-hidden="true" /> {job.type}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={12} aria-hidden="true" /> {job.loc}</span>
                  <span className="flex items-center gap-1.5"><DollarSign size={12} aria-hidden="true" /> {job.sal}</span>
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-inter pt-2">
                  {job.desc}
                </p>
              </div>

              <button 
                onClick={() => handleOpenDrawer(job.title)}
                aria-haspopup="dialog"
                className="w-full md:w-auto px-6 py-3 font-manrope font-bold text-xs text-deep-black bg-gradient-to-r from-alvision-blue to-glow-blue rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-1 shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue"
              >
                Apply Now <ArrowRight size={14} aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Application Drawer Overlay - White Theme */}
      {drawerOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
          className="fixed inset-0 z-50 bg-white/85 backdrop-blur-sm flex justify-end"
        >
          <div className="glass-panel w-full max-w-lg h-full border-l border-sky-100 p-6 md:p-10 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 shadow-2xl bg-white">
            
            {/* Header */}
            <div>
              <div className="flex justify-between items-center mb-8 border-b border-sky-100 pb-4 bg-white p-4 -m-6 md:-m-10 rounded-t-2xl">
                <div>
                  <span className="text-[10px] font-bold text-alvision-blue uppercase tracking-widest font-inter">Job Application</span>
                  <h3 id="drawer-title" className="font-manrope font-bold text-lg md:text-xl text-dark-navy mt-1">Apply for:</h3>
                  <span className="text-slate-500 text-xs block font-inter">{selectedJob}</span>
                </div>
                <button 
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close Job Application Form"
                  className="text-slate-500 hover:text-dark-navy p-2 border border-sky-100 rounded-full hover:border-alvision-blue/30 focus-visible:ring-2 focus-visible:ring-alvision-blue focus-visible:outline-none"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>

              {/* Form content */}
              {applied ? (
                <div className="text-center py-12 mt-12 flex flex-col items-center bg-white">
                  <div className="w-16 h-16 rounded-full bg-alvision-blue/10 flex items-center justify-center text-alvision-blue mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="font-manrope font-bold text-2xl mb-2 text-dark-navy">Application Received!</h3>
                  <p className="text-slate-500 text-sm font-inter">Our creative hiring desk will review your credentials and contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-5 mt-8 bg-white">
                  <div>
                    <label htmlFor="name-field" className="block text-xs font-semibold text-slate-650 uppercase tracking-wider mb-2 font-inter">Full Name *</label>
                    <input 
                      id="name-field"
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sneha Reddy" 
                      className="w-full bg-white border border-sky-100 rounded-lg px-4 py-3 text-sm text-dark-navy placeholder-slate-gray/45 focus:outline-none focus:border-alvision-blue/50 focus:ring-2 focus:ring-alvision-blue/20 shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-field" className="block text-xs font-semibold text-slate-650 uppercase tracking-wider mb-2 font-inter">Email Address *</label>
                    <input 
                      id="email-field"
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@email.com" 
                      className="w-full bg-white border border-sky-100 rounded-lg px-4 py-3 text-sm text-dark-navy placeholder-slate-gray/45 focus:outline-none focus:border-alvision-blue/50 focus:ring-2 focus:ring-alvision-blue/20 shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="portfolio-field" className="block text-xs font-semibold text-slate-650 uppercase tracking-wider mb-2 font-inter">Portfolio / Behance / Git Link *</label>
                    <input 
                      id="portfolio-field"
                      type="url" 
                      required 
                      value={portfolio}
                      onChange={(e) => setPortfolio(e.target.value)}
                      placeholder="https://behance.net/yourname" 
                      className="w-full bg-white border border-sky-100 rounded-lg px-4 py-3 text-sm text-dark-navy placeholder-slate-gray/45 focus:outline-none focus:border-alvision-blue/50 focus:ring-2 focus:ring-alvision-blue/20 shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="resume-field" className="block text-xs font-semibold text-slate-650 uppercase tracking-wider mb-2 font-inter">Resume Link (Drive/Dropbox/PDF) *</label>
                    <input 
                      id="resume-field"
                      type="text" 
                      required 
                      value={resume}
                      onChange={(e) => setResume(e.target.value)}
                      placeholder="Link to PDF resume..." 
                      className="w-full bg-white border border-sky-100 rounded-lg px-4 py-3 text-sm text-dark-navy placeholder-slate-gray/45 focus:outline-none focus:border-alvision-blue/50 focus:ring-2 focus:ring-alvision-blue/20 shadow-sm"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-4 font-manrope font-bold text-sm text-deep-black bg-gradient-to-r from-alvision-blue to-glow-blue rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-alvision-blue/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue"
                  >
                    Submit Job Application <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>

            {/* Footer note */}
            <div className="text-[10px] text-slate-500 leading-relaxed text-center border-t border-sky-100/40 pt-4 mt-8 font-inter">
              By submitting, you agree to allow Alvision Media recruitment desk to evaluate your visual credentials and contact you via email.
            </div>

          </div>
        </div>
      )}

    </main>
  );
}
