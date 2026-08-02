'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { LogoGlyph } from './Navbar';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-500 border-t border-sky-100/60 relative z-10 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2.5">
              <LogoGlyph className="h-6 w-6" fill="#0EA5E9" />
              <span className="font-manrope font-800 text-sm tracking-widest text-studio-deep-dark uppercase">
                Alvision
              </span>
            </Link>
            <p className="text-xs text-slate-500 max-w-md font-inter leading-relaxed">
              Alvision Media solves the challenges effectively for reaching and engaging target audiences, maximizing brand visibility and driving business growth through strategic planning and execution across various digital and traditional channels.
            </p>
          </div>

          {/* Site links */}
          <div className="space-y-4">
            <h4 className="font-manrope text-xs font-bold uppercase tracking-wider text-studio-deep-dark">Navigation</h4>
            <ul className="space-y-2 text-xs font-inter">
              <li><Link href="/portfolio" className="hover:text-alvision-blue transition-colors">Work</Link></li>
              <li><Link href="/channels" className="hover:text-alvision-blue transition-colors">Channels</Link></li>
              <li><Link href="/services" className="hover:text-alvision-blue transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-alvision-blue transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-alvision-blue transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-alvision-blue transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-alvision-blue transition-colors">Careers</Link></li>
              <li><Link href="/partner" className="hover:text-alvision-blue transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Channels list */}
          <div className="space-y-4">
            <h4 className="font-manrope text-xs font-bold uppercase tracking-wider text-studio-deep-dark">Our Channels</h4>
            <ul className="space-y-2 text-xs font-inter">
              <li><Link href="/channels" className="hover:text-alvision-blue transition-colors">Slam Book Tamil</Link></li>
              <li><Link href="/channels" className="hover:text-alvision-blue transition-colors">Jajabordiary</Link></li>
              <li><Link href="/channels" className="hover:text-alvision-blue transition-colors">Mr. Guru</Link></li>
              <li><Link href="/channels" className="hover:text-alvision-blue transition-colors">Alvision Fusion</Link></li>
              <li><Link href="/channels" className="hover:text-alvision-blue transition-colors">Alvision Tamil</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] font-inter space-y-4 sm:space-y-0 text-slate-400">
          <div>
            <span>&copy; {currentYear} Alvision Media. All Rights Reserved. Designed by Alvision Media</span>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end items-center">
            <Link href="/privacy" className="hover:text-alvision-blue transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-alvision-blue transition-colors">Terms & Conditions</Link>
            <Link href="/admin/login" className="hover:text-alvision-blue flex items-center gap-1 transition-colors">
              <ShieldCheck size={11} /> Admin Console
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
