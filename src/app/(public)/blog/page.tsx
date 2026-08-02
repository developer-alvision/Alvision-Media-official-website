'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, BookOpen, Search } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  author: string;
  image_url: string;
  published_at: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('/api/blogs');
        if (res.ok) {
          const data = await res.json();
          setBlogs(data);
          setFilteredBlogs(data);
        }
      } catch (error) {
        console.error('Failed to load blog posts', error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    let temp = blogs;
    
    if (activeCategory !== 'All') {
      temp = temp.filter(b => b.category.toLowerCase() === activeCategory.toLowerCase());
    }
    
    if (query.trim() !== '') {
      temp = temp.filter(b => b.title.toLowerCase().includes(query.toLowerCase()) || b.content.toLowerCase().includes(query.toLowerCase()));
    }
    
    setFilteredBlogs(temp);
  };

  const categories = [
    { name: 'All', value: 'All' },
    { name: 'YouTube Growth', value: 'youtube_growth' },
    { name: 'Marketing', value: 'marketing' },
    { name: 'Artificial Intelligence', value: 'ai' }
  ];

  return (
    <main id="main-content" role="main" className="relative bg-white text-dark-navy min-h-screen pt-24 pb-12">
      {/* Ambient background glow */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-alvision-blue/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-glow-blue/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      {/* 1. Header Hero */}
      <section className="py-8 md:py-12 text-center relative z-10 bg-white" aria-label="Insights blog title intro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gradient-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block mb-4 font-inter">ALVISION INSIGHTS</span>
          <h1 className="font-manrope font-800 text-4xl sm:text-5xl md:text-6xl mb-6">
            Ecosystem Growth Insights
          </h1>
          <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg leading-relaxed font-inter">
            Explore articles and analysis on YouTube algorithms, WhatsApp automated flows, AI marketing tools, and D2C scaling metrics.
          </p>
        </div>
      </section>

      {/* 2. Search and Filter Bar */}
      <section className="pb-8 relative z-10 border-b border-slate-200/40 bg-white" aria-label="Search and category actions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2.5 justify-center" role="tablist" aria-label="Filter posts by department">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={activeCategory === cat.value}
                onClick={() => {
                  setActiveCategory(cat.value);
                  let temp = blogs;
                  if (cat.value !== 'All') {
                    temp = temp.filter(b => b.category === cat.value);
                  }
                  if (searchQuery.trim() !== '') {
                    temp = temp.filter(b => b.title.toLowerCase().includes(searchQuery.toLowerCase()));
                  }
                  setFilteredBlogs(temp);
                }}
                className={`px-4 py-2 rounded-full font-manrope font-bold text-xs transition-all duration-300 focus-visible:ring-2 focus-visible:ring-alvision-blue focus-visible:outline-none ${
                  activeCategory === cat.value
                    ? 'bg-alvision-blue text-deep-black shadow-md shadow-alvision-blue/15'
                    : 'bg-white hover:bg-slate-50 text-slate-500 hover:text-dark-navy border border-slate-200/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <label htmlFor="search-input" className="sr-only">Search Articles</label>
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" aria-hidden="true" />
            <input
              id="search-input"
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full bg-white border border-slate-200 rounded-full pl-10 pr-4 py-2 text-sm text-dark-navy placeholder-slate-gray/45 focus:outline-none focus:border-alvision-blue/50 focus:ring-2 focus:ring-alvision-blue/20 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* 3. Blog List Grid */}
      <section className="py-8 md:py-12 relative z-10" aria-label="Articles listing grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20 text-slate-500 text-sm font-inter">
              Loading Alvision insights...
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-20 text-slate-500 text-sm font-inter border border-dashed border-slate-200/80 rounded-2xl">
              No matching articles found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <article 
                  key={blog.id} 
                  className="bg-white border border-slate-200/40 rounded-3xl overflow-hidden flex flex-col justify-between h-[420px] transition-all duration-300 hover:scale-[1.01] hover:border-slate-300 group shadow-sm"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] font-extrabold font-inter uppercase tracking-widest text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-200/40">
                        {blog.category.replace('_', ' ')}
                      </span>
                      <span className="text-[10px] text-slate-400 font-inter flex items-center gap-1.5">
                        <Calendar size={11} aria-hidden="true" /> {new Date(blog.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>

                    <h3 className="font-manrope font-bold text-xl md:text-2xl text-dark-navy mb-3 group-hover:text-alvision-blue transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm font-inter leading-relaxed line-clamp-4">
                      {blog.content}
                    </p>
                  </div>

                  <div className="bg-slate-50 px-6 md:px-8 py-6 border-t border-slate-200/40 flex justify-between items-center mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-alvision-blue/15 flex items-center justify-center text-alvision-blue shrink-0" aria-hidden="true">
                        <User size={14} />
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-400 block uppercase tracking-wider font-inter">Author</span>
                        <strong className="text-xs font-manrope text-dark-navy font-bold">{blog.author}</strong>
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${blog.slug}`}
                      className="text-xs font-bold text-alvision-blue hover:text-dark-navy flex items-center gap-1 group/btn transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alvision-blue rounded px-1"
                    >
                      Read Article 
                      <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
