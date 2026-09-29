'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'Preetham Infra Campaign', category: 'Web Tech & Campaign', year: '2024', metric: '10M Reach', image: '/images/hero_cinematic_studio.png', width: 400, height: 400, yOffset: 0 },
  { title: 'Slam Book Tamil', category: 'Content Production', year: '2024', metric: '18.5M Views', image: '/images/case_influencer_food.png', width: 320, height: 450, yOffset: 40 },
  { title: 'WhatsApp Automation', category: 'Performance Marketing', year: '2024', metric: '22% Recovery', image: '/images/case_cart_recovery.png', width: 450, height: 350, yOffset: -20 },
  { title: 'Tamil Influencer Campaign', category: 'Influencer Marketing', year: '2023', metric: '4.5M Reach', image: '/images/service_influencer.png', width: 350, height: 380, yOffset: 60 },
  { title: 'Healthcare Lead Strategy', category: 'Healthcare Acquisition', year: '2024', metric: 'Multi-Channel', image: '/images/service_google_ads.png', width: 420, height: 420, yOffset: -10 },
  { title: 'D2C Skincare Launch', category: 'Web Development', year: '2024', metric: '0.9s Load', image: '/images/service_web.png', width: 380, height: 360, yOffset: 30 }
];

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client with reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Setup pin and scrub
      const totalWidth = galleryRef.current?.scrollWidth || 0;
      const viewportWidth = window.innerWidth;
      
      // Calculate how far to move left
      // We subtract the viewport width so the last item stops near the right edge
      const xDistance = -(totalWidth - viewportWidth + viewportWidth * 0.1); 

      gsap.to(galleryRef.current, {
        x: xDistance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "center center",
          end: () => `+=${totalWidth}`,
          anticipatePin: 1,
          invalidateOnRefresh: true, // Recalculates on resize
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="bg-[#FAFAFA] relative h-screen w-full overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute top-[10%] md:top-[15%] left-8 md:left-16 lg:left-24 z-10 pointer-events-none">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-inter tracking-tighter text-slate-900 leading-none">
          VIEW,
        </h2>
        <p className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-slate-500 mt-2">
          before you read.
        </p>
      </div>

      {/* Gallery Container */}
      <div className="mt-24 md:mt-32 w-full">
        <div 
          ref={galleryRef}
          className="flex items-center gap-8 md:gap-16 px-8 md:px-24 w-max"
          style={{ willChange: 'transform' }}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative group flex-shrink-0"
              style={{
                width: `${project.width}px`,
                transform: `translateY(${project.yOffset}px)`
              }}
            >
              <div 
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 border border-sky-800/40 shadow-lg"
                style={{ height: `${project.height}px` }}
              >
                {/* Fallback stylized gradient card content when image loads or falls back */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-0">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-mono tracking-widest text-sky-400 uppercase bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-800">
                      {project.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400 font-inter">
                      {project.year}
                    </span>
                  </div>

                  <div>
                    <span className="text-3xl font-extrabold font-manrope text-white block mb-2">
                      {project.title}
                    </span>
                    <span className="text-xs text-sky-300 font-inter block">
                      Metric Performance: <strong className="text-amber-400">{project.metric}</strong>
                    </span>
                  </div>
                </div>
                
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-10"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                
                {/* Metric Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-extrabold rounded-full text-sky-600 shadow-sm z-30">
                  {project.metric}
                </div>
              </div>
              
              <div className="mt-5 flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs font-semibold text-sky-600 font-inter uppercase tracking-widest">
                  <span>{project.category}</span>
                  <span className="text-slate-400">{project.year}</span>
                </div>
                <h3 className="text-lg md:text-xl font-extrabold font-manrope text-slate-950 group-hover:text-sky-600 transition-colors line-clamp-2">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
