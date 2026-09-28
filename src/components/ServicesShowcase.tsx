'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { num: '01', title: 'Digital Marketing', desc: 'Performance marketing across Meta, Google Search, and Performance Max. Targeted campaign strategies, organic growth, and data analytics.' },
  { num: '02', title: 'Editing & Post-Production', desc: 'High-retention video editing for Reels, YouTube Shorts, and brand films. Color grading, sound engineering, and cinematic cuts.' },
  { num: '03', title: 'Content Creation', desc: 'Cinematic shoots, creative scripting, brand visual assets, and digital campaign packages.' },
  { num: '04', title: 'Media Distribution', desc: 'Multi-platform broadcasting across Alvision native media networks (3M+ subscribers) and partner channels.' },
  { num: '05', title: 'Acquisition & Lead Funnels', desc: 'High-intent lead capture and automated acquisition funnels for healthcare partners and enterprise clients.' },
  { num: '06', title: 'Web Development', desc: 'Custom Next.js corporate websites, Web Tech & Campaign Strategy integration, and SEO optimization.' }
];

export default function ServicesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ctx = gsap.context(() => {
      const totalItems = services.length;
      const scrubDuration = totalItems * 100; // ~600%

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
              end: `top+=${endProgress + (100/totalItems)}% top`,
              scrub: true,
            }
          });
          tlOut.to(title, { color: '#BDBBB6', duration: 0.2 }, 0);
          tlOut.to(desc, { height: 0, opacity: 0, y: 10, duration: 0.3, ease: 'power1.inOut' }, 0);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#F2F0E9] rounded-t-[70px] flex flex-col relative h-screen overflow-hidden text-[#111111]">
      <div className="absolute top-8 left-8 md:top-12 md:left-12">
        <span className="text-sm font-medium tracking-widest uppercase">Our Services</span>
      </div>
      
      <div className="flex-1 w-full flex items-center justify-start px-8 md:px-24 pt-24 md:pt-0 pb-12 overflow-y-auto hide-scrollbar">
        <div className="w-full md:w-[60%] flex flex-col space-y-0">
          {services.map((service, idx) => (
            <div 
              key={service.num} 
              ref={el => { itemsRef.current[idx] = el; }}
              className="group border-t border-[rgba(0,0,0,0.14)] last:border-b py-6 md:py-8"
            >
              <div className="flex items-start md:items-center space-x-4 md:space-x-6">
                <span className="text-xl md:text-2xl italic font-serif opacity-70 mt-2 md:mt-0">({service.num})</span>
                <h3 className="service-title text-[clamp(2rem,4vw,4.5rem)] font-bold text-[#BDBBB6] leading-none tracking-tight font-inter m-0 transition-colors">
                  {service.title}
                </h3>
              </div>
              
              <div className="service-desc overflow-hidden h-0 opacity-0 translate-y-4 pl-0 md:pl-16 mt-0">
                <p className="text-lg md:text-xl max-w-2xl leading-relaxed font-manrope pt-4 text-[#111111]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
