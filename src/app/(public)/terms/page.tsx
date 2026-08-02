'use client';

import React from 'react';
import { FileText, ShieldAlert, Award, RefreshCw, Mail, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function TermsPage() {
  const lastUpdated = "August 2, 2026";

  return (
    <main id="main-content" role="main" className="relative bg-white text-dark-navy min-h-screen pt-24 pb-20">
      {/* Background glow overlays */}
      <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-alvision-blue/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-40 left-1/4 w-[350px] h-[350px] bg-glow-blue/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* Hero Header */}
      <section className="py-8 md:py-12 text-center relative z-10" aria-label="Terms of Service Intro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-down" duration={600}>
            <span className="text-gradient-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block mb-4 font-inter">LEGAL</span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100} duration={700}>
            <h1 className="font-manrope font-800 text-4xl sm:text-5xl md:text-6xl mb-6">
              Terms & Conditions
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200} duration={700}>
            <p className="max-w-2xl mx-auto text-slate-500 text-sm md:text-base leading-relaxed font-inter">
              Welcome to Alvision Media. These terms outline the rules, regulations, and agreements for utilizing our website, brand assets, and studio consultation services.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={250} duration={700}>
            <span className="inline-block mt-4 px-3 py-1 bg-sky-50 text-alvision-blue rounded-full text-xs font-semibold font-inter">
              Last Updated: {lastUpdated}
            </span>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-8 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" delay={300} duration={800}>
            <div className="glass-panel p-8 md:p-12 rounded-3xl border border-sky-100/60 shadow-sm bg-white font-inter text-slate-650 space-y-10">
              
              {/* Introduction Card */}
              <div className="flex gap-4 items-start pb-6 border-b border-sky-100/40">
                <div className="w-10 h-10 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <h2 className="font-manrope font-bold text-lg text-studio-deep-dark mb-2">1. Acceptance of Terms</h2>
                  <p className="text-xs md:text-sm leading-relaxed">
                    By accessing or using the website of Alvision Media (collectively, "we", "us", "our"), you represent that you have read, understood, and agreed to be bound by these Terms & Conditions. If you do not agree to these terms, you must immediately discontinue your use of our platform and services.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="flex gap-4 items-start pb-6 border-b border-sky-100/40">
                <div className="w-10 h-10 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h2 className="font-manrope font-bold text-lg text-studio-deep-dark mb-2">2. Intellectual Property Rights</h2>
                  <p className="text-xs md:text-sm leading-relaxed">
                    All contents displayed on this website, including but not limited to the brand logo (the stylized 'A' icon), interface designs, page layouts, text copy, graphic assets, database records, and software code, are the exclusive property of Alvision Media or its content providers. You may not reproduce, copy, distribute, modify, or license any part of this website without our explicit, written authorization.
                  </p>
                </div>
              </div>

              {/* User Obligations */}
              <div className="flex gap-4 items-start pb-6 border-b border-sky-100/40">
                <div className="w-10 h-10 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0">
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <h2 className="font-manrope font-bold text-lg text-studio-deep-dark mb-2">3. Prohibited User Activities</h2>
                  <p className="text-xs md:text-sm leading-relaxed mb-4">
                    When interacting with our website and submitting contact inquiry forms, you agree not to:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm space-y-2 leading-relaxed">
                    <li>Submit false, fraudulent, or misleading contact information.</li>
                    <li>Utilize scripts, robots, scraping software, or other automated mechanisms to crawl or query our database.</li>
                    <li>Inject malicious code, scripts, or packets that degrade, disrupt, or bypass the security systems of our website or APIs.</li>
                    <li>Impersonate any individual, corporate entity, or Alvision Media representative.</li>
                  </ul>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex gap-4 items-start pb-6 border-b border-sky-100/40">
                <div className="w-10 h-10 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0">
                  <RefreshCw size={20} />
                </div>
                <div>
                  <h2 className="font-manrope font-bold text-lg text-studio-deep-dark mb-2">4. Disclaimer of Warranties</h2>
                  <p className="text-xs md:text-sm leading-relaxed">
                    This website and all its resources, content, and tools are provided on an "as is" and "as available" basis. Alvision Media makes no warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property. We do not guarantee that our website will be secure, uninterrupted, or error-free at all times.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="flex gap-4 items-start pb-6 border-b border-sky-100/40">
                <div className="w-10 h-10 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0">
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <h2 className="font-manrope font-bold text-lg text-studio-deep-dark mb-2">5. Limitation of Liability</h2>
                  <p className="text-xs md:text-sm leading-relaxed">
                    In no event shall Alvision Media, its founders, directors, employees, or partners be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your access to, use of, or inability to use this website and our digital channels.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="flex gap-4 items-start pb-6 border-b border-sky-100/40">
                <div className="w-10 h-10 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <h2 className="font-manrope font-bold text-lg text-studio-deep-dark mb-2">6. Governing Law</h2>
                  <p className="text-xs md:text-sm leading-relaxed">
                    These Terms & Conditions shall be governed by and construed in accordance with the laws of India, without regard to conflicts of law principles. Any dispute arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India.
                  </p>
                </div>
              </div>

              {/* Contact Block */}
              <div className="bg-sky-50/50 p-6 rounded-2xl border border-sky-100 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                <div className="space-y-1">
                  <h3 className="font-manrope font-bold text-sm text-studio-deep-dark">Need Legal Clarification?</h3>
                  <p className="text-[11px] text-slate-500 font-inter">Contact our administrative office for official requests or legal notices.</p>
                </div>
                <div className="space-y-2 shrink-0">
                  <div className="flex items-center gap-2 text-xs font-semibold text-studio-deep-dark">
                    <Mail size={14} className="text-alvision-blue" />
                    <a href="mailto:Alvisionmedia24@gmail.com" className="hover:text-alvision-blue transition-colors">
                      Alvisionmedia24@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin size={14} className="text-alvision-blue" />
                    <span>Chennai, India</span>
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
