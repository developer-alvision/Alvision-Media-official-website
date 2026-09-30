'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { 
    num: '01', 
    title: 'Digital Marketing', 
    desc: 'Performance marketing across Meta, Google Search, and Performance Max. Targeted campaign strategies, organic growth, and data analytics.',
    tags: ['Meta & Google Ads', 'Campaign Strategy', 'Data Analytics', 'SEO Optimization']
  },
  { 
    num: '02', 
    title: 'Editing & Post-Production', 
    desc: 'High-retention video editing for Reels, YouTube Shorts, and brand films. Color grading, sound engineering, and cinematic cuts.',
    tags: ['Reels & Shorts Cuts', 'Color Grading', 'Sound Engineering', 'Cinematic Edits']
  },
  { 
    num: '03', 
    title: 'Content Creation', 
    desc: 'Cinematic shoots, creative scripting, brand visual assets, and digital campaign packages.',
    tags: ['Creative Scriptwriting', 'Cinematic Shoots', 'Brand Visual Assets', 'Campaign Packages']
  },
  { 
    num: '04', 
    title: 'Media Distribution', 
    desc: 'Multi-platform broadcasting across Alvision native media networks and partner channels.',
    tags: ['Slam Book Tamil', 'Mr. Guru Tech', 'Alvision Tamil Business']
  },
  { 
    num: '05', 
    title: 'Acquisition & Lead Funnels', 
    desc: 'High-intent lead capture and automated acquisition funnels for healthcare partners and enterprise clients.',
    tags: ['Healthcare Patient Funnels', 'Enterprise Lead Capture', 'WhatsApp Workflows', 'Lead Scoring']
  },
  { 
    num: '06', 
    title: 'Web Development', 
    desc: 'Custom Next.js corporate websites, Web Tech & Campaign Strategy integration, and SEO optimization.',
    tags: ['Custom Next.js Sites', 'Responsive Web Design', 'Campaign Integration', 'Core Web Vitals']
  },
  { 
    num: '07', 
    title: 'Stratégie Digitale', 
    desc: 'Comprehensive 9-step growth loop flywheel to scale your content reach and audience retention month after month.',
    tags: ['Market Research', 'Audience Profiling', '9-Step Flywheel', 'Monthly Audits']
  }
];

export default function ServicesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cursorCircleRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animId: number;
    let circleX = mousePos.x;
    let circleY = mousePos.y;

    const followMouse = () => {
      circleX += (mousePos.x - circleX) * 0.15;
      circleY += (mousePos.y - circleY) * 0.15;

      if (cursorCircleRef.current) {
        cursorCircleRef.current.style.left = `${circleX}px`;
        cursorCircleRef.current.style.top = `${circleY}px`;
      }
      animId = requestAnimationFrame(followMouse);
    };

    followMouse();
    return () => cancelAnimationFrame(animId);
  }, [mousePos]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const totalItems = services.length;
      const scrubDuration = totalItems * 100;

      // ScrollTrigger pinning container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${scrubDuration}%`,
        pin: true,
        scrub: true,
      });

      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        const title = item.querySelector('.service-title');
        const desc = item.querySelector('.service-desc');
        
        const startProgress = (index / totalItems) * 100;
        const endProgress = ((index + 1) / totalItems) * 100;
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${startProgress}% top`,
            end: `top+=${endProgress}% top`,
            scrub: true,
          }
        });

        tl.to(title, { color: '#111111', duration: 0.2 }, 0);
        tl.to(desc, { height: 'auto', opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }, 0);

        if (index < totalItems - 1) {
          const tlOut = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${endProgress}% top`,
              end: `top+=${endProgress + (100 / totalItems)}% top`,
              scrub: true,
            }
          });
          tlOut.to(title, { color: 'rgba(0,0,0,0.20)', duration: 0.2 }, 0);
          tlOut.to(desc, { height: 0, opacity: 0, y: 8, duration: 0.3, ease: 'power1.inOut' }, 0);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full bg-[#F2F0E9] rounded-t-[50px] md:rounded-t-[70px] flex flex-col relative h-screen overflow-hidden text-[#111111] shadow-2xl"
    >
      {/* Upper Label */}
      <div className="absolute top-8 left-8 md:top-12 md:left-14 z-20">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 font-inter">
          WHAT WE DO
        </span>
      </div>

      {/* Main Service List Scroll Container */}
      <div className="flex-1 w-full flex items-center justify-start px-6 md:px-20 pt-12 md:pt-24 pb-12 z-10">
        <div className="w-full md:w-[62%] flex flex-col">
          {services.map((service, idx) => (
            <div 
              key={service.num} 
              ref={el => { itemsRef.current[idx] = el; }}
              className="group border-t border-[rgba(0,0,0,0.12)] last:border-b py-5 md:py-7"
            >
              <div className="flex items-baseline space-x-3 md:space-x-5 cursor-pointer">
                <span className="text-lg md:text-2xl italic font-serif text-slate-400 font-normal">
                  ({service.num})
                </span>
                <h3 className="service-title text-[clamp(2.2rem,4.5vw,4.8rem)] font-semibold text-[rgba(0,0,0,0.20)] leading-[0.98] tracking-tight font-inter m-0 transition-colors">
                  {service.title}
                </h3>
              </div>
              
              <div className="service-desc overflow-hidden h-0 opacity-0 translate-y-2 pl-0 md:pl-14">
                <p className="text-base md:text-xl max-w-2xl leading-relaxed font-inter pt-4 text-[#111111]">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {service.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-black/5 text-slate-800 font-inter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Nominee Tab */}
      <div className="hidden md:flex absolute right-0 top-[40%] w-[68px] h-[210px] bg-white rounded-l-2xl shadow-md flex-col items-center justify-between py-5 z-20">
        <span className="font-serif font-black text-2xl text-slate-900">W.</span>
        <span className="writing-mode-vertical rotate-180 text-[10px] font-bold tracking-[0.25em] uppercase text-slate-900 font-inter">
          Nominee
        </span>
      </div>

      {/* Custom Circular Cursor Follower */}
      <div 
        ref={cursorCircleRef} 
        className="hidden md:block fixed pointer-events-none z-50 w-[52px] h-[52px] border border-black/35 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out" 
      />
      <div 
        ref={cursorDotRef} 
        className="hidden md:block fixed pointer-events-none z-50 w-[6px] h-[6px] bg-[#111111] rounded-full -translate-x-1/2 -translate-y-1/2" 
      />
      
      <style dangerouslySetInnerHTML={{__html: `
        .writing-mode-vertical { writing-mode: vertical-rl; }
      `}} />
    </div>
  );
}
