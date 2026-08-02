'use client';

import React, { useState, useEffect } from 'react';
import { Briefcase, ArrowUpRight, TrendingUp, Sparkles, Filter, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  client_name: string;
  metrics: string;
  description: string;
  image_url: string;
  case_study_content: string;
  created_at: string;
}

export default function PortfolioPage() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<PortfolioProject[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        const res = await fetch('/api/portfolio');
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
          setFilteredProjects(data);
        }
      } catch (error) {
        console.error('Failed to load portfolio items', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPortfolio();
  }, []);

  // Keyboard Escape key drawer closure logic
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleFilter = (category: string) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category.toLowerCase().includes(category.toLowerCase())));
    }
  };

  const categories = ['All', 'WhatsApp', 'Influencer', 'Web Development', 'Google Ads'];

  return (
    <main id="main-content" role="main" className="relative bg-white text-dark-navy min-h-screen pt-24 pb-12">
      {/* Background ambient glow */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-alvision-blue/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-glow-blue/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      {/* 1. Header Hero */}
      <section className="py-8 md:py-12 text-center relative z-10" aria-label="Portfolio intro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gradient-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block mb-4 font-inter">CASE STUDIES</span>
          <h1 className="font-manrope font-800 text-4xl sm:text-5xl md:text-6xl mb-6 text-studio-deep-dark">
            Proven Results & Growth
          </h1>
          <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg leading-relaxed font-inter">
            Browse through our verified client campaigns. We measure success by concrete reach and positive return on ad spend (ROAS).
          </p>
        </div>
      </section>

      {/* 2. Filter Bar */}
      <section className="pb-8 relative z-10" aria-label="Case studies category filters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3.5 justify-center items-center" role="tablist" aria-label="Filter works by category">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 font-inter mr-2">
            <Filter size={14} aria-hidden="true" /> Filter:
          </span>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={activeFilter === cat}
              onClick={() => handleFilter(cat)}
              className={`px-5 py-2 rounded-full font-manrope font-bold text-xs transition-all duration-300 focus-visible:ring-2 focus-visible:ring-alvision-blue focus-visible:outline-none ${
                activeFilter === cat
                  ? 'bg-alvision-blue text-deep-black shadow-md shadow-alvision-blue/15'
                  : 'bg-white hover:bg-slate-50 text-slate-500 hover:text-dark-navy border border-sky-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Portfolio Grid */}
      <section className="py-12 relative z-10" aria-label="Campaign portfolio grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20 text-slate-500 text-sm font-inter">
              Loading Alvision portfolios...
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-slate-500 text-sm font-inter border border-dashed border-sky-100 rounded-2xl">
              No matching campaigns found in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj) => (
                <article 
                  key={proj.id} 
                  className="bg-white border border-slate-200/40 rounded-3xl overflow-hidden flex flex-col justify-between h-[420px] transition-all duration-300 hover:scale-[1.01] hover:border-sky-200 group shadow-sm"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] font-extrabold font-inter uppercase tracking-widest text-slate-500 bg-white px-2.5 py-1 rounded border border-sky-100 shadow-sm">
                        {proj.category}
                      </span>
                      <span className="text-xs text-gradient-blue font-bold font-manrope flex items-center gap-1">
                        <TrendingUp size={12} aria-hidden="true" /> {proj.metrics.split(',')[0]}
                      </span>
                    </div>

                    <h3 className="font-manrope font-bold text-xl md:text-2xl text-dark-navy mb-3 group-hover:text-alvision-blue transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm font-inter leading-relaxed line-clamp-4 mb-4">
                      {proj.description}
                    </p>
                  </div>

                  {/* Pure White footer card */}
                  <div className="bg-white px-6 md:px-8 py-6 border-t border-sky-100/40 flex justify-between items-center mt-auto">
                    <div>
                      <span className="text-[10px] text-slate-450 block uppercase tracking-wider font-inter">Client</span>
                      <strong className="text-xs font-manrope text-dark-navy font-bold">{proj.client_name}</strong>
                    </div>
                    <button 
                      onClick={() => setSelectedProject(proj)}
                      aria-haspopup="dialog"
                      className="text-xs font-bold text-alvision-blue hover:text-dark-navy flex items-center gap-1.5 group/btn transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue rounded px-1"
                    >
                      Read Case Study 
                      <ChevronRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Case Study Details Modal - White Background */}
      {selectedProject && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="glass-panel w-full max-w-3xl rounded-3xl overflow-hidden border border-sky-100 relative flex flex-col justify-between max-h-[85vh] shadow-xl bg-white">
            
            {/* Header info */}
            <div className="p-6 md:p-8 border-b border-sky-100/40 flex justify-between items-start bg-white">
              <div>
                <span className="text-[10px] font-extrabold font-inter uppercase tracking-widest text-alvision-blue block mb-2">
                  {selectedProject.category} Case Study
                </span>
                <h3 id="modal-title" className="font-manrope font-800 text-xl md:text-3xl text-dark-navy">
                  {selectedProject.title}
                </h3>
                <span className="text-slate-500 text-xs md:text-sm font-inter block mt-1">Client: {selectedProject.client_name}</span>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                aria-label="Close Case Study Details"
                className="text-slate-500 hover:text-dark-navy p-2 border border-sky-100 rounded-full hover:border-alvision-blue/30 transition-colors focus-visible:ring-2 focus-visible:ring-alvision-blue focus-visible:outline-none"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable details */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 font-inter text-sm md:text-base leading-relaxed text-slate-500 bg-white">
              
              <div>
                <strong className="text-dark-navy font-bold block mb-2 font-manrope text-sm uppercase tracking-wider">Growth Campaign Objective</strong>
                <p className="text-xs md:text-sm leading-relaxed max-w-3xl">{selectedProject.description}</p>
              </div>

              {/* Verified Metrics blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
                <div className="bg-white border border-sky-100 shadow-sm rounded-xl p-4">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-inter block mb-1">Key Results Achieved</span>
                  <span className="text-gradient font-black text-xl md:text-2xl font-manrope">{selectedProject.metrics}</span>
                </div>
                <div className="bg-white border border-sky-100 shadow-sm rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-alvision-blue/15 flex items-center justify-center text-alvision-blue shrink-0" aria-hidden="true">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <span className="text-dark-navy font-bold text-xs block font-manrope">Premium Standard</span>
                    <span className="text-slate-550 text-[10px]">Verified via audit metrics</span>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-dark-navy font-bold block mb-2 font-manrope text-sm uppercase tracking-wider">Execution & Strategy Breakdown</strong>
                <p className="text-xs md:text-sm leading-relaxed whitespace-pre-line bg-white border border-sky-100 rounded-xl p-4 md:p-6 text-slate-600 max-w-3xl">
                  {selectedProject.case_study_content || 'Our marketing execution desks deployed high-intent campaigns, optimized customer funnels, and monitored ROI daily to deliver these gains.'}
                </p>
              </div>
            </div>

            {/* Footer action */}
            <div className="p-6 md:p-8 border-t border-sky-100/40 bg-white flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs text-slate-500">Interested in replicating these metrics for your brand?</span>
              <Link 
                href="/contact" 
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 font-manrope font-bold text-xs text-deep-black bg-gradient-to-r from-alvision-blue to-glow-blue rounded-full hover:scale-105 transition-all shadow-md shadow-alvision-blue/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue"
              >
                Connect With Us
              </Link>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}
