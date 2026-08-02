'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, Mail, Lock, AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { LogoGlyph } from '@/components/Navbar';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok) {
        // Save simulated session in localstorage for instant client-side persistence
        localStorage.setItem('alvision_user', JSON.stringify(data.user));
        router.push('/admin/dashboard');
      } else {
        setError(data.error || 'Failed to authenticate.');
      }
    } catch {
      setError('Auth endpoint unavailable.');
    } finally {
      setLoading(false);
    }
  };

  const quickRoles = [
    { name: 'Super Admin', email: 'admin@alvisionmedia.com', pass: 'admin123', desc: 'Full ecosystem access' },
    { name: 'Content Manager', email: 'content@alvisionmedia.com', pass: 'content123', desc: 'Write blogs & projects' },
    { name: 'Marketing Manager', email: 'marketing@alvisionmedia.com', pass: 'marketing123', desc: 'Manage leads & CRM' },
    { name: 'Designer', email: 'designer@alvisionmedia.com', pass: 'design123', desc: 'Creative asset uploads' }
  ];

  const triggerQuickLogin = async (e: string, p: string) => {
    setEmail(e);
    setPassword(p);
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: e, password: p })
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('alvision_user', JSON.stringify(data.user));
        router.push('/admin/dashboard');
      } else {
        setError(data.error);
      }
    } catch {
      setError('Auth endpoint failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-deep-black text-premium-white flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background visual glows */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-alvision-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-glow-blue/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Back to Home Link */}
      <div className="max-w-md mx-auto w-full relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-gray hover:text-alvision-blue transition-colors mb-6 group"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
          Back to Public Site
        </Link>
      </div>

      {/* Center login box */}
      <div className="max-w-md mx-auto w-full relative z-10 flex flex-col justify-center flex-grow">
        
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <LogoGlyph className="h-12 w-12" />
          </div>
          <h2 className="font-montserrat font-950 text-3xl tracking-wider uppercase">
            ALVISION<span className="text-alvision-blue">MEDIA</span>
          </h2>
          <span className="text-[10px] font-inter uppercase tracking-[0.2em] text-slate-gray">Ecosystem Command Portal</span>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-slate-gray/10 shadow-xl shadow-black/80">
          
          <h3 className="font-montserrat font-bold text-lg mb-6 flex items-center gap-2">
            <ShieldCheck className="text-alvision-blue" size={20} />
            Administrator Login
          </h3>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl p-3.5 flex items-start gap-2.5 mb-5 font-poppins">
              <AlertCircle size={16} className="shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-5">
            <div>
              <label className="block text-[10px] font-semibold text-slate-gray uppercase tracking-wider mb-2 font-inter">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-gray/50 pointer-events-none">
                  <Mail size={14} />
                </span>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@alvisionmedia.com" 
                  className="w-full bg-dark-navy border border-slate-gray/10 rounded-xl py-3 pl-10 pr-4 text-xs text-premium-white placeholder-slate-gray/40 focus:outline-none focus:border-alvision-blue/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-slate-gray uppercase tracking-wider mb-2 font-inter">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-gray/50 pointer-events-none">
                  <Lock size={14} />
                </span>
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-dark-navy border border-slate-gray/10 rounded-xl py-3 pl-10 pr-4 text-xs text-premium-white placeholder-slate-gray/40 focus:outline-none focus:border-alvision-blue/50"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3.5 font-montserrat font-bold text-xs text-deep-black bg-gradient-to-r from-alvision-blue to-glow-blue rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-alvision-blue/10 disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Sign In To Console'}
              <ArrowRight size={14} />
            </button>
          </form>

          {/* Quick login simulation simulator widget */}
          <div className="border-t border-slate-gray/10 pt-6 mt-6">
            <span className="block text-[9px] font-bold text-slate-gray uppercase tracking-widest mb-3.5 text-center font-inter">
              Reviewer Quick Login Simulator
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {quickRoles.map((role, idx) => (
                <button
                  key={idx}
                  onClick={() => triggerQuickLogin(role.email, role.pass)}
                  className="bg-dark-navy/60 hover:bg-dark-navy border border-slate-gray/5 hover:border-alvision-blue/30 rounded-xl p-2.5 text-left transition-all duration-300 group"
                >
                  <span className="block font-montserrat font-bold text-[10px] text-premium-white group-hover:text-alvision-blue transition-colors">
                    {role.name}
                  </span>
                  <span className="block text-[9px] text-slate-gray leading-none font-poppins">{role.desc}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="text-[10px] text-slate-gray text-center font-inter relative z-10 pt-8">
        &copy; {new Date().getFullYear()} Alvision Media. Security Simulator Mode Active.
      </div>

    </div>
  );
}
