'use client';

import React from 'react';
import { Shield, Lock, Eye, FileText, Mail, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function PrivacyPage() {
  const lastUpdated = "August 2, 2026";

  return (
    <main id="main-content" role="main" className="relative bg-white text-dark-navy min-h-screen pt-24 pb-20">
      {/* Background glow overlays */}
      <div className="absolute top-20 left-1/4 w-[350px] h-[350px] bg-alvision-blue/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-40 right-1/4 w-[350px] h-[350px] bg-glow-blue/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* Hero Header */}
      <section className="py-8 md:py-12 text-center relative z-10" aria-label="Privacy Policy Intro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-down" duration={600}>
            <span className="text-gradient-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block mb-4 font-inter">LEGAL</span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100} duration={700}>
            <h1 className="font-manrope font-800 text-4xl sm:text-5xl md:text-6xl mb-6">
              Privacy Policy
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200} duration={700}>
            <p className="max-w-2xl mx-auto text-slate-500 text-sm md:text-base leading-relaxed font-inter">
              At Alvision Media, we are committed to safeguarding your privacy. This policy explains how we collect, process, and protect your personal information when you engage with our website and digital studio services.
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
                  <Shield size={20} />
                </div>
                <div>
                  <h2 className="font-manrope font-bold text-lg text-studio-deep-dark mb-2">1. Overview</h2>
                  <p className="text-xs md:text-sm leading-relaxed">
                    Alvision Media (collectively, "we", "us", or "our") operates the official website and provides digital services including influencer marketing, content creation, brand strategy, and software solutions. Your privacy is paramount. By visiting our website or using our services, you consent to the practices described in this Privacy Policy.
                  </p>
                </div>
              </div>

              {/* Information Collection */}
              <div className="flex gap-4 items-start pb-6 border-b border-sky-100/40">
                <div className="w-10 h-10 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0">
                  <Lock size={20} />
                </div>
                <div>
                  <h2 className="font-manrope font-bold text-lg text-studio-deep-dark mb-2">2. Information We Collect</h2>
                  <p className="text-xs md:text-sm leading-relaxed mb-4">
                    We collect details necessary to serve your inquiries and improve website performance:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm space-y-2 leading-relaxed">
                    <li><strong>Personal Contact Data:</strong> Name, email address, phone number, and company name when you voluntarily complete our contact forms.</li>
                    <li><strong>Inquiry Details:</strong> Project requirements, services of interest, and custom messages provided during communication.</li>
                    <li><strong>Analytical Data:</strong> IP address, device model, browser configuration, page views, and navigation metrics collected automatically via cookies or tracking scripts.</li>
                  </ul>
                </div>
              </div>

              {/* Information Usage */}
              <div className="flex gap-4 items-start pb-6 border-b border-sky-100/40">
                <div className="w-10 h-10 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0">
                  <Eye size={20} />
                </div>
                <div>
                  <h2 className="font-manrope font-bold text-lg text-studio-deep-dark mb-2">3. How We Use Your Information</h2>
                  <p className="text-xs md:text-sm leading-relaxed mb-4">
                    We process collected information to fulfill your requests and maintain platform health:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm space-y-2 leading-relaxed">
                    <li>To communicate, respond to inquiries, and build custom business agreements.</li>
                    <li>To operate, secure, and customize your experience on our website.</li>
                    <li>To analyze user engagement metrics and improve our studio offerings and media network channels.</li>
                    <li>To meet legal obligations, investigate security incidents, or prevent fraudulent activities.</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="flex gap-4 items-start pb-6 border-b border-sky-100/40">
                <div className="w-10 h-10 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <h2 className="font-manrope font-bold text-lg text-studio-deep-dark mb-2">4. Data Storage & Security</h2>
                  <p className="text-xs md:text-sm leading-relaxed">
                    We implement modern security practices, including SSL encryption and secure databases, to prevent unauthorized access, alteration, or distribution of your personal information. Please note that while we take strict measures, no system is completely immune to security threats.
                  </p>
                </div>
              </div>

              {/* Third Party Links */}
              <div className="flex gap-4 items-start pb-6 border-b border-sky-100/40">
                <div className="w-10 h-10 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <h2 className="font-manrope font-bold text-lg text-studio-deep-dark mb-2">5. Third-Party Integrations & Services</h2>
                  <p className="text-xs md:text-sm leading-relaxed">
                    Our platform includes links to our regional media channels (e.g. YouTube, Instagram, WhatsApp). We do not control these platforms, and their respective privacy policies apply. We recommend reviewing their legal notices before interacting or sharing information on external platforms.
                  </p>
                </div>
              </div>

              {/* Contact Block */}
              <div className="bg-sky-50/50 p-6 rounded-2xl border border-sky-100 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                <div className="space-y-1">
                  <h3 className="font-manrope font-bold text-sm text-studio-deep-dark">Have Questions or Requests?</h3>
                  <p className="text-[11px] text-slate-500 font-inter">Contact our data privacy desk for queries or to request deletion of your information.</p>
                </div>
                <div className="space-y-2 shrink-0">
                  <div className="flex items-center gap-2 text-xs font-semibold text-studio-deep-dark">
                    <Mail size={14} className="text-alvision-blue" />
                    <a href="mailto:hello@alvisionmedia.com" className="hover:text-alvision-blue transition-colors">
                      hello@alvisionmedia.com
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
