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
      <div className="mt-40 md:mt-48 w-full">
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
                className="relative overflow-hidden bg-slate-200"
                style={{ height: `${project.height}px` }}
              >
                {/* Fallback solid color for images since they might not exist yet */}
                <div className="absolute inset-0 bg-slate-200 w-full h-full"></div>
                
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Metric Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold rounded-full text-[#0EA5E9]">
                  {project.metric}
                </div>
              </div>
              
              <div className="mt-6 flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs md:text-sm font-medium text-slate-500 font-inter uppercase tracking-widest">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-inter text-slate-900 group-hover:text-[#0EA5E9] transition-colors line-clamp-2">
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
