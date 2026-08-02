'use client';

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Users, Eye, Target, Briefcase, 
  IndianRupee, Lock, UserX, AlertCircle 
} from 'lucide-react';

interface Stats {
  visitors: number;
  totalLeads: number;
  newLeads: number;
  convertedLeads: number;
  activeCampaigns: number;
  totalRevenue: number;
  subscribers: number;
  totalViews: number;
  activeCareers: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string>('');

  useEffect(() => {
    // Check role from simulated session
    const session = localStorage.getItem('alvision_user');
    if (session) {
      const u = JSON.parse(session);
      setUserRole(u.role);
    }

    async function fetchStats() {
      try {
        const res = await fetch('/api/stats');
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Failed to load stats', error);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  // Enforce access control permissions: Only super_admin and marketing_manager allowed
  const isAuthorized = userRole === 'super_admin' || userRole === 'marketing_manager';

  if (!isAuthorized && userRole !== '') {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-gray/10 max-w-md text-center">
          <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mx-auto mb-6">
            <Lock size={28} />
          </div>
          <h3 className="font-montserrat font-bold text-xl mb-2 text-premium-white">Access Unauthorized</h3>
          <p className="text-slate-gray text-xs md:text-sm font-poppins leading-relaxed mb-6">
            Your current simulated console role lacks rights to view Dashboard Analytics. Please change your role in the sidebar simulator to Super Admin or Marketing Manager.
          </p>
          <div className="inline-flex items-center gap-1 text-[10px] text-slate-gray font-inter bg-deep-black/60 px-3 py-1.5 rounded-lg border border-slate-gray/5">
            <AlertCircle size={12} className="text-alvision-blue" />
            Security rule enforced at Console router
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-10">
      
      {/* Header title */}
      <div>
        <span className="text-gradient-blue text-[10px] font-extrabold uppercase tracking-widest font-inter block mb-1">REAL-TIME OVERVIEW</span>
        <h1 className="font-montserrat font-950 text-2xl md:text-3xl lg:text-4xl text-premium-white">
          Ecosystem Dashboard
        </h1>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-gray text-xs font-poppins">
          Loading analytics aggregated matrix...
        </div>
      ) : stats ? (
        <>
          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="glass-panel rounded-2xl border border-slate-gray/10 p-6 flex justify-between items-center hover:border-slate-gray/20 transition-all duration-300">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-gray font-inter block mb-1">Consolidated Subs</span>
                <strong className="text-2xl md:text-3xl font-montserrat font-extrabold text-premium-white">
                  {(stats.subscribers / 1000000).toFixed(1)}M
                </strong>
                <span className="text-[10px] text-emerald-400 font-inter flex items-center gap-0.5 mt-1">
                  <TrendingUp size={10} /> +12% this month
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue">
                <Users size={20} />
              </div>
            </div>

            <div className="glass-panel rounded-2xl border border-slate-gray/10 p-6 flex justify-between items-center hover:border-slate-gray/20 transition-all duration-300">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-gray font-inter block mb-1">Network Views</span>
                <strong className="text-2xl md:text-3xl font-montserrat font-extrabold text-premium-white">
                  {(stats.totalViews / 1000000).toFixed(0)}M
                </strong>
                <span className="text-[10px] text-emerald-400 font-inter flex items-center gap-0.5 mt-1">
                  <TrendingUp size={10} /> +8.5M last week
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue">
                <Eye size={20} />
              </div>
            </div>

            <div className="glass-panel rounded-2xl border border-slate-gray/10 p-6 flex justify-between items-center hover:border-slate-gray/20 transition-all duration-300">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-gray font-inter block mb-1">Lead Count (CRM)</span>
                <strong className="text-2xl md:text-3xl font-montserrat font-extrabold text-premium-white">
                  {stats.totalLeads}
                </strong>
                <span className="text-[10px] text-alvision-blue font-inter block mt-1">
                  {stats.newLeads} new leads waiting
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue">
                <Target size={20} />
              </div>
            </div>

            <div className="glass-panel rounded-2xl border border-slate-gray/10 p-6 flex justify-between items-center hover:border-slate-gray/20 transition-all duration-300">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-gray font-inter block mb-1">Estimated Campaign Rev</span>
                <strong className="text-2xl md:text-3xl font-montserrat font-extrabold text-gradient-blue">
                  ₹{(stats.totalRevenue / 100000).toFixed(1)}L
                </strong>
                <span className="text-[10px] text-emerald-400 font-inter flex items-center gap-0.5 mt-1">
                  <TrendingUp size={10} /> +18.4% YoY ROAS
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <IndianRupee size={20} />
              </div>
            </div>

          </div>

          {/* Charts area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Lead Funnel chart */}
            <div className="lg:col-span-2 glass-panel p-6 md:p-8 rounded-3xl border border-slate-gray/10 space-y-6">
              <div className="flex justify-between items-center border-b border-slate-gray/5 pb-4">
                <div>
                  <h3 className="font-montserrat font-bold text-lg text-premium-white">Audience Growth & Traffic Trajectory</h3>
                  <span className="text-slate-gray text-xs block font-poppins">Monthly network click distributions</span>
                </div>
              </div>
              
              {/* SVG vector chart line */}
              <div className="relative pt-6">
                <svg className="w-full h-[200px] overflow-visible text-alvision-blue" viewBox="0 0 500 150" fill="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(217, 225, 232, 0.03)" strokeWidth="1" />
                  <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(217, 225, 232, 0.03)" strokeWidth="1" />
                  <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(217, 225, 232, 0.03)" strokeWidth="1" />
                  
                  {/* Trajectory Area and path */}
                  <path
                    d="M 0 130 C 50 120, 100 80, 150 90 C 200 100, 250 50, 300 45 C 350 40, 400 20, 500 10"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0 130 C 50 120, 100 80, 150 90 C 200 100, 250 50, 300 45 C 350 40, 400 20, 500 10 L 500 150 L 0 150 Z"
                    fill="url(#grad)"
                    opacity="0.08"
                  />
                  
                  {/* Definitions for gradient fill */}
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#6E9FBE" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>

                  {/* Marker points */}
                  <circle cx="150" cy="90" r="5" fill="#7AB2D6" stroke="#0B1320" strokeWidth="2" />
                  <circle cx="300" cy="45" r="5" fill="#7AB2D6" stroke="#0B1320" strokeWidth="2" />
                  <circle cx="500" cy="10" r="6" fill="#7AB2D6" stroke="#0B1320" strokeWidth="2" />
                </svg>
                
                <div className="flex justify-between text-[10px] text-slate-gray font-inter pt-3 px-1">
                  <span>Week 1</span>
                  <span>Week 2</span>
                  <span>Week 3</span>
                  <span>Week 4</span>
                </div>
              </div>
            </div>

            {/* Leads Breakdown summary */}
            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-gray/10 space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="font-montserrat font-bold text-lg text-premium-white border-b border-slate-gray/5 pb-4">CRM Conversion Rates</h3>
                
                <div className="space-y-4 pt-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-gray mb-1">
                      <span>Converted Leads</span>
                      <span className="font-bold text-premium-white">{stats.convertedLeads} / {stats.totalLeads}</span>
                    </div>
                    <div className="w-full bg-deep-black/60 rounded-full h-2">
                      <div 
                        className="bg-alvision-blue h-2 rounded-full" 
                        style={{ width: `${(stats.convertedLeads / stats.totalLeads) * 100 || 0}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-gray mb-1">
                      <span>Pending Verification</span>
                      <span className="font-bold text-premium-white">{stats.newLeads}</span>
                    </div>
                    <div className="w-full bg-deep-black/60 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full" 
                        style={{ width: `${(stats.newLeads / stats.totalLeads) * 100 || 0}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-gray mb-1">
                      <span>Careers Applications</span>
                      <span className="font-bold text-premium-white">{stats.activeCareers} candidates</span>
                    </div>
                    <div className="w-full bg-deep-black/60 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-slate-gray leading-relaxed font-poppins pt-6 border-t border-slate-gray/5">
                Conversion statistics are dynamically calculated relative to data submitted via lead generation boxes across the site.
              </div>
            </div>

          </div>
        </>
      ) : null}

    </div>
  );
}
