'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

export function LogoGlyph({ className = "h-5 w-5", fill = "#0EA5E9" }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M20 95 L55 25 C58 20 62 20 65 25 L100 95"
        stroke={fill}
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M85 75 H52 C45 75 40 70 40 63 C40 56 45 51 52 51 H70"
        stroke={fill}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Studio', path: '/services' },
    { name: 'Network', path: '/channels' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-white/95 backdrop-blur-md border-b border-slate-200/40 shadow-sm'
          : 'py-8 bg-white/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            href="/" 
            aria-label="Alvision Media Home"
            className="flex items-center space-x-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue rounded-md px-1 py-0.5"
          >
            <LogoGlyph className="h-5 w-5" fill="#0EA5E9" />
            <span className="font-manrope font-800 text-sm tracking-widest uppercase transition-colors duration-300 text-studio-deep-dark">
              Alvision Media
            </span>
          </Link>

          <nav role="navigation" aria-label="Main navigation" className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Magnetic key={link.path}>
                <Link
                  href={link.path}
                  className={`text-[12px] font-semibold tracking-widest uppercase transition-colors duration-300 font-inter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue rounded-md px-2 py-1 nav-link-hover ${
                    isActive(link.path) 
                      ? 'text-alvision-blue font-bold active' 
                      : 'text-studio-deep-dark/60 hover:text-studio-deep-dark'
                  }`}
                >
                  {link.name}
                </Link>
              </Magnetic>
            ))}
          </nav>

          {/* Let's Talk CTA */}
          <div className="hidden md:flex items-center">
            <Magnetic>
              <Link
                href="/contact"
                aria-label="Contact Alvision team to start a project"
                className="text-[12px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 font-manrope border-b pb-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue rounded-sm px-1 text-studio-deep-dark border-studio-deep-dark/15 hover:text-alvision-blue hover:border-alvision-blue"
              >
                Let's Talk <ArrowRight size={12} aria-hidden="true" />
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="focus:outline-none p-1 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-alvision-blue rounded text-studio-deep-dark"
            >
              {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] bg-white/95 backdrop-blur-lg z-45 border-t border-slate-200/55 flex flex-col justify-between py-12 px-8 animate-in fade-in slide-in-from-top-3 duration-300">
          <nav role="navigation" aria-label="Mobile navigation" className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                onClick={() => setMobileMenuOpen(false)}
                href={link.path}
                className={`text-xl font-bold font-manrope tracking-wide border-b border-slate-200/30 pb-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue ${
                  isActive(link.path) ? 'text-alvision-blue' : 'text-studio-deep-dark/60 hover:text-studio-deep-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="space-y-4">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/contact"
              className="w-full text-center py-4 block font-manrope font-bold text-xs uppercase tracking-widest text-deep-black bg-alvision-blue hover:bg-alvision-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue"
            >
              Let's Talk
            </Link>
            <div className="text-[9px] text-slate-400 font-inter text-center">
              © {new Date().getFullYear()} Alvision Media.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
