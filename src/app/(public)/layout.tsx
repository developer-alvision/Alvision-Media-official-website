import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LiquidCursor from '@/components/LiquidCursor';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-deep-black text-premium-white">
      <LiquidCursor />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
