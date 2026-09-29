'use client';

import React, { useEffect, useRef, useState } from 'react';

const faqs = [
  { num: '01', q: 'What services does Alvision Media offer?', a: 'We provide digital marketing, video editing & post-production, content creation, media distribution across our 3M+ subscriber network, acquisition & lead funnels, and custom web development.' },
  { num: '02', q: 'Can these services be taken separately?', a: 'Yes. Each service can be commissioned independently or combined into a complete project tailored to your brand goals.' },
  { num: '03', q: 'How does a project with Alvision Media work?', a: 'We begin by understanding your business, then move through strategy, creative development, production, and launch with continuous optimization.' },
  { num: '04', q: 'How long does a website project take?', a: 'Typical website projects take 4-8 weeks from strategy to launch, depending on complexity and content requirements.' },
  { num: '05', q: 'Can Alvision Media handle design and development together?', a: 'Absolutely. Our integrated team handles everything from visual identity and UI/UX design to full-stack web development and deployment.' }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = -1;
      let closestDistance = Infinity;

      itemRefs.current.forEach((el, idx) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - elCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = idx;
          }
        }
      });

      if (closestDistance < window.innerHeight * 0.4) {
        setActiveIndex(closestIndex);
      } else {
        setActiveIndex(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-[#0D0D0C] text-white py-24 md:py-32 w-full font-inter overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col border-t border-[rgba(255,255,255,0.14)]">
          {faqs.map((faq, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={faq.num}
                ref={el => { itemRefs.current[idx] = el; }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 border-b border-[rgba(255,255,255,0.14)] transition-all duration-500 ease-out"
              >
                <div className="md:col-span-1">
                  <span className={`text-lg italic font-serif transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/40'}`}>
                    ({faq.num})
                  </span>
                </div>
                
                <div className="md:col-span-5">
                  <h3 className={`text-2xl md:text-3xl font-bold leading-snug transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/40'}`}>
                    {faq.q}
                  </h3>
                </div>
                
                <div className="md:col-span-6 md:pl-8">
                  <p className={`text-lg leading-relaxed font-manrope transition-colors duration-500 ${isActive ? 'text-[#D1D1D1]' : 'text-white/30'}`}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-32 w-full flex justify-center pb-12 overflow-hidden">
        <h2 className="text-[10vw] font-bold leading-none tracking-tighter text-white uppercase text-center whitespace-nowrap">
          LET&apos;S BUILD.
        </h2>
      </div>
    </section>
  );
}
