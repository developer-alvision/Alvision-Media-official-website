'use client';

import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { LogoGlyph } from './Navbar';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/alvisionmedia/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: 'hover:text-pink-500 hover:bg-pink-50',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61555940187223',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    color: 'hover:text-blue-600 hover:bg-blue-50',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/916262949423?text=Hello%20Alvision%20Media,%20I%20would%20like%20to%20know%20more%20about%20your%20services.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    color: 'hover:text-emerald-500 hover:bg-emerald-50',
  },
  {
    label: 'Call Us',
    href: 'tel:+916262949423',
    icon: <Phone className="w-4 h-4" aria-hidden="true" />,
    color: 'hover:text-alvision-blue hover:bg-sky-50',
  },
];

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

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className={`w-8 h-8 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 transition-all duration-200 ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
