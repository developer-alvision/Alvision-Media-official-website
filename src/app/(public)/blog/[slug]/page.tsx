import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, BookOpen, Clock, Tag } from 'lucide-react';
import { db } from '@/lib/db';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = db.getBlogs().find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Calculate reading time
  const wordsCount = blog.content.split(/\s+/).length;
  const readingTimeMinutes = Math.max(1, Math.ceil(wordsCount / 200));

  return (
    <main id="main-content" role="main" className="relative bg-white text-dark-navy min-h-screen pt-[120px] pb-24">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/4 w-[350px] h-[350px] bg-alvision-blue/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-40 right-1/4 w-[350px] h-[350px] bg-glow-blue/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link 
          href="/blog" 
          aria-label="Back to main blog list"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-alvision-blue transition-colors mb-8 group font-inter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue rounded px-1"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
          Back to Insights
        </Link>

        {/* Article Meta */}
        <div className="mb-8 bg-white">
          <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4 font-inter">
            <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-200/40 text-alvision-blue font-semibold">
              <Tag size={12} aria-hidden="true" /> {blog.category.replace('_', ' ').toUpperCase()}
            </span>
            <span className="flex items-center gap-1"><Calendar size={12} aria-hidden="true" /> {new Date(blog.published_at).toLocaleDateString()}</span>
            <span className="flex items-center gap-1"><User size={12} aria-hidden="true" /> By {blog.author}</span>
            <span className="flex items-center gap-1"><Clock size={12} aria-hidden="true" /> {readingTimeMinutes} min read</span>
          </div>

          <h1 className="font-manrope font-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-dark-navy mb-6">
            {blog.title}
          </h1>
        </div>

        {/* Featured Image - Render actual visual */}
        <div className="w-full h-[300px] md:h-[450px] rounded-3xl border border-sky-100 mb-12 relative overflow-hidden shadow-sm" aria-hidden="true">
          <img 
            src={blog.image_url} 
            alt="" 
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* Content Body */}
        <article className="max-w-3xl font-inter text-slate-655 text-sm md:text-base leading-relaxed space-y-6 md:space-y-8">
          {blog.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-slate-650">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Newsletter Signup widget inside article */}
        <div className="border border-slate-200/40 rounded-2xl p-6 md:p-8 bg-slate-50 mt-16 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
          <div className="max-w-md">
            <h4 className="font-manrope font-bold text-lg mb-1.5 text-dark-navy">Never Miss an Algorithm Update</h4>
            <p className="text-slate-550 text-xs leading-relaxed font-inter">
              We send deep breakdowns of visual hooks, traffic scaling techniques, and WhatsApp conversion parameters weekly.
            </p>
          </div>
          <Link 
            href="/contact" 
            aria-label="Subscribe to our weekly algorithm breakdowns"
            className="px-6 py-2.5 bg-gradient-to-r from-alvision-blue to-glow-blue text-deep-black font-manrope font-bold text-xs rounded-full hover:opacity-90 transition-opacity text-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue"
          >
            Subscribe to Insights
          </Link>
        </div>

      </div>
    </main>
  );
}
