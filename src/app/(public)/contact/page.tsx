'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormFields = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormFields>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>({});
  const [captchaError, setCaptchaError] = useState('');

  const handleFieldChange = (field: keyof FormFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateForm = () => {
    const nextErrors: Partial<Record<keyof FormFields, string>> = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (trimmedName.length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (trimmedSubject.length < 3) {
      nextErrors.subject = 'Please add a short subject line.';
    }

    if (trimmedMessage.length < 20) {
      nextErrors.message = 'Please share a few more details so we can help properly.';
    }

    return nextErrors;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (!captchaChecked) {
      setCaptchaError('Please complete the verification check.');
      return;
    }

    setIsSubmitting(true);

    try {
      const text = `Hello Alvision Media, I am ${formData.name.trim()}. Email: ${formData.email.trim()}. Subject: ${formData.subject.trim()}. Message: ${formData.message.trim()}`;
      const whatsappUrl = `https://wa.me/916262949423?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      setFormSubmitted(true);
      setFormData(initialForm);
      setCaptchaChecked(false);
      setErrors({});
      setCaptchaError('');
    } catch {
      setErrors((prev) => ({ ...prev, message: 'Failed to redirect to WhatsApp. Please try again.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (field: keyof FormFields) =>
    `w-full rounded-xl border-2 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-300/50 focus:bg-white shadow-sm ${
      errors[field]
        ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
        : 'border-sky-200/70 focus:border-sky-400'
    }`;

  return (
    <div className="relative bg-[#0B0F17] text-white min-h-screen pt-24 pb-20">
      <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 left-1/4 w-[350px] h-[350px] bg-sky-400/10 rounded-full blur-[100px] pointer-events-none" />

      <section className="py-8 md:py-12 text-center relative z-10 bg-[#0B0F17]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-down" duration={600}>
            <span className="text-gradient-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block mb-4">Contact</span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100} duration={700}>
            <h1 className="font-manrope font-extrabold text-4xl sm:text-5xl md:text-6xl mb-6 text-white">Get In Touch</h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200} duration={700}>
            <p className="max-w-xl mx-auto text-slate-300 text-base md:text-lg leading-relaxed font-inter">
              Have a project in mind, want to sponsor a channel, or recruit our creator desks? Reach out directly below.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal variant="scale" delay={300} duration={800} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10" as="div">
        <div className="h-[220px] md:h-[300px] rounded-3xl overflow-hidden border border-slate-800 shadow-md p-2 bg-slate-900">
          <img 
            src="/images/contact_office_banner.png" 
            alt="Alvision Creative Consulting Office Studio" 
            className="w-full h-full object-cover rounded-2xl pointer-events-none"
          />
        </div>
      </ScrollReveal>

      <section className="py-8 relative z-10 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <ScrollReveal variant="fade-right" duration={700} className="lg:col-span-5 space-y-8" as="div">
              <div className="space-y-6">
                <h3 className="font-manrope font-bold text-xl md:text-2xl text-gradient-blue">Direct Channels</h3>

                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-sky-100 shadow-sm hover:shadow-md hover:translate-x-2 hover:border-sky-300/50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0 animate-pulse-glow">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block uppercase tracking-wider font-inter">Email Us</span>
                    <a href="mailto:hello@alvisionmedia.com" className="text-sm font-manrope font-semibold hover:text-alvision-blue transition-colors text-studio-deep-dark">
                      hello@alvisionmedia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-sky-100 shadow-sm hover:shadow-md hover:translate-x-2 hover:border-sky-300/50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0 animate-pulse-glow">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block uppercase tracking-wider font-inter">Call Us</span>
                    <a href="tel:+916262949423" className="text-sm font-manrope font-semibold hover:text-alvision-blue transition-colors text-studio-deep-dark">
                      +91 62629 49423
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-sky-100 shadow-sm hover:shadow-md hover:translate-x-2 hover:border-sky-300/50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-alvision-blue/10 flex items-center justify-center text-alvision-blue shrink-0 animate-pulse-glow">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block uppercase tracking-wider font-inter">Our Office</span>
                    <span className="text-sm font-manrope font-semibold block leading-relaxed text-studio-deep-dark">
                      Revenue Ward, 17/91-4-9, Rajeev Nagar Rd, New Eastpeta, Nemali Nagar, Madanapalle, Andhra Pradesh 517325
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-sky-100 flex items-center justify-between hover:border-emerald-500/30 transition-colors shadow-sm bg-white card-hover-tilt">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="font-manrope font-bold text-xs block text-studio-deep-dark">Instant WhatsApp Chat</span>
                    <span className="text-slate-550 text-[10px] font-inter">Average reply within 10 minutes</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/916262949423?text=Hello%20Alvision%20Media,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-manrope font-bold text-[10px] rounded-lg transition-colors flex items-center gap-1 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 btn-shimmer"
                >
                  Chat <ArrowRight size={10} />
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden border border-sky-100 shadow-sm" style={{ height: '220px' }}>
                <iframe
                  title="Alvision Media Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57.84506!2d78.5136366!3d13.5458146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb265d7fa2d957f%3A0xe3d989ee36190ab2!2sAlvision%20Media!5e0!3m2!1sen!2sin!4v1696500000000!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={150} duration={700} className="lg:col-span-7" as="div">
              <div className="glass-panel p-6 md:p-10 rounded-3xl border-2 border-sky-200/80 shadow-lg shadow-sky-100/30 bg-white card-hover-tilt">
                {formSubmitted ? (
                  <div className="text-center py-16 flex flex-col items-center bg-white">
                    <div className="w-16 h-16 rounded-full bg-alvision-blue/10 flex items-center justify-center text-alvision-blue mb-6">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="font-manrope font-bold text-2xl mb-2 text-studio-deep-dark">Message Delivered!</h3>
                    <p className="text-slate-550 text-sm font-inter">Our marketing consultants will review your query and contact you within 24 hours.</p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 text-xs text-alvision-blue underline hover:text-studio-deep-dark transition-colors font-semibold"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6 bg-white" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-inter">Your Name *</label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleFieldChange('name', e.target.value)}
                        placeholder="e.g. Rohan Sharma"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={inputClasses('name')}
                      />
                      {errors.name && <p id="name-error" className="mt-2 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-inter">Your Email *</label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        placeholder="name@company.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={inputClasses('email')}
                      />
                      {errors.email && <p id="email-error" className="mt-2 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-inter">Subject *</label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleFieldChange('subject', e.target.value)}
                        placeholder="e.g. Partnership inquiry"
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        className={inputClasses('subject')}
                      />
                      {errors.subject && <p id="subject-error" className="mt-2 text-xs text-red-500">{errors.subject}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-inter">Message *</label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleFieldChange('message', e.target.value)}
                        placeholder="Tell us about your brand targets..."
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        maxLength={500}
                        className={`${inputClasses('message')} min-h-[150px] resize-y`}
                      />
                      <div className="mt-2 flex items-center justify-between gap-3">
                        {errors.message ? (
                          <p id="message-error" className="text-xs text-red-500">{errors.message}</p>
                        ) : (
                          <p className="text-[11px] text-slate-400">Share a quick summary of your goals and timeline.</p>
                        )}
                        <span className="text-[11px] text-slate-400">{formData.message.length}/500</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-white border border-sky-100 rounded-xl max-w-sm shadow-sm">
                      <input
                        type="checkbox"
                        id="captcha"
                        checked={captchaChecked}
                        onChange={(e) => setCaptchaChecked(e.target.checked)}
                        className="w-5 h-5 rounded border-sky-100 text-alvision-blue bg-white focus:ring-alvision-blue/30 focus:ring-2 cursor-pointer"
                      />
                      <label htmlFor="captcha" className="text-xs text-slate-655 select-none cursor-pointer flex items-center gap-1.5 font-inter">
                        I am a real brand or creator representative
                        <ShieldCheck size={14} className="text-alvision-blue shrink-0" />
                      </label>
                    </div>

                    {captchaError && (
                      <p className="text-xs text-red-500">{captchaError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 font-manrope font-bold text-sm text-white bg-gradient-to-r from-sky-500 via-alvision-blue to-sky-400 rounded-xl hover:opacity-95 hover:shadow-xl hover:shadow-sky-400/20 transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue btn-shimmer disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <ArrowRight size={16} aria-hidden="true" />}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
