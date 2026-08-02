'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, PlusCircle, CheckCircle, Trash2, Tag, 
  User, Briefcase, Sparkles, Lock, AlertCircle, BookOpen 
} from 'lucide-react';

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

interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  client_name: string;
  metrics: string;
  description: string;
  image_url: string;
  case_study_content: string;
  created_at: string;
}

export default function AdminContentCMSPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [portfolios, setPortfolios] = useState<PortfolioProject[]>([]);
  const [userRole, setUserRole] = useState<string>('');
  const [activeSubTab, setActiveSubTab] = useState<'blogs' | 'portfolios'>('blogs');
  const [loading, setLoading] = useState(true);

  // Forms state
  const [blogTitle, setBlogTitle] = useState('');
  const [blogSlug, setBlogSlug] = useState('');
  const [blogCategory, setBlogCategory] = useState('youtube_growth');
  const [blogAuthor, setBlogAuthor] = useState('Alvision Editor');
  const [blogContent, setBlogContent] = useState('');
  const [blogSubmitted, setBlogSubmitted] = useState(false);

  const [portTitle, setPortTitle] = useState('');
  const [portClient, setPortClient] = useState('');
  const [portCategory, setPortCategory] = useState('WhatsApp Marketing');
  const [portMetrics, setPortMetrics] = useState('');
  const [portDesc, setPortDesc] = useState('');
  const [portStudy, setPortStudy] = useState('');
  const [portSubmitted, setPortSubmitted] = useState(false);

  useEffect(() => {
    // Check role
    const session = localStorage.getItem('alvision_user');
    if (session) {
      const u = JSON.parse(session);
      setUserRole(u.role);
      // Designers should land directly on the Portfolios tab
      if (u.role === 'designer') {
        setActiveSubTab('portfolios');
      }
    }

    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const blogRes = await fetch('/api/blogs');
      const portRes = await fetch('/api/portfolio');
      if (blogRes.ok && portRes.ok) {
        setBlogs(await blogRes.json());
        setPortfolios(await portRes.json());
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: blogTitle,
          slug: blogSlug || blogTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
          category: blogCategory,
          content: blogContent,
          author: blogAuthor
        })
      });
      if (res.ok) {
        setBlogSubmitted(true);
        setBlogTitle('');
        setBlogSlug('');
        setBlogContent('');
        fetchContent();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePortSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: portTitle,
          client_name: portClient,
          category: portCategory,
          metrics: portMetrics,
          description: portDesc,
          case_study_content: portStudy
        })
      });
      if (res.ok) {
        setPortSubmitted(true);
        setPortTitle('');
        setPortClient('');
        setPortMetrics('');
        setPortDesc('');
        setPortStudy('');
        fetchContent();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBlog = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    setBlogs(prev => prev.filter(b => b.id !== id));
  };

  const deletePortfolio = async (id: string) => {
    if (!confirm('Are you sure you want to delete this portfolio project?')) return;
    setPortfolios(prev => prev.filter(p => p.id !== id));
  };

  const isAuthorized = userRole === 'super_admin' || userRole === 'content_manager' || userRole === 'designer';
  const canPublishBlogs = userRole === 'super_admin' || userRole === 'content_manager';
  const canPublishPortfolios = userRole === 'super_admin' || userRole === 'content_manager' || userRole === 'designer';

  if (!isAuthorized && userRole !== '') {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-gray/10 max-w-md text-center">
          <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mx-auto mb-6">
            <Lock size={28} />
          </div>
          <h3 className="font-montserrat font-bold text-xl mb-2 text-premium-white">Access Unauthorized</h3>
          <p className="text-slate-gray text-xs md:text-sm font-poppins leading-relaxed mb-6">
            Your current simulated console role lacks rights to edit or write CMS content. Please change your role in the sidebar simulator to Super Admin, Content Manager, or Designer.
          </p>
          <div className="inline-flex items-center gap-1 text-[10px] text-slate-gray font-inter bg-deep-black/60 px-3 py-1.5 rounded-lg border border-slate-gray/5">
            <AlertCircle size={12} className="text-alvision-blue" />
            Security rule enforced at Console router
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-10">
      
      {/* Header title */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <span className="text-gradient-blue text-[10px] font-extrabold uppercase tracking-widest font-inter block mb-1">CMS PUBLISHING</span>
          <h1 className="font-montserrat font-950 text-2xl md:text-3xl lg:text-4xl text-premium-white">
            Ecosystem Content Editor
          </h1>
        </div>

        {/* Subtabs selectors */}
        <div className="flex bg-dark-navy/60 rounded-xl p-1 border border-slate-gray/10 select-none">
          <button
            onClick={() => {
              if (userRole === 'designer') {
                alert('Designer role is restricted to visual portfolio uploads only.');
                return;
              }
              setActiveSubTab('blogs');
              setBlogSubmitted(false);
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold font-montserrat uppercase transition-all duration-300 ${
              activeSubTab === 'blogs' 
                ? 'bg-alvision-blue text-deep-black shadow-md' 
                : 'text-slate-gray hover:text-white'
            } ${userRole === 'designer' ? 'opacity-40 cursor-not-allowed' : ''}`}
          >
            Insights Blogs
          </button>
          <button
            onClick={() => {
              setActiveSubTab('portfolios');
              setPortSubmitted(false);
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold font-montserrat uppercase transition-all duration-300 ${
              activeSubTab === 'portfolios' 
                ? 'bg-alvision-blue text-deep-black shadow-md' 
                : 'text-slate-gray hover:text-white'
            }`}
          >
            Portfolio Studies
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-gray text-xs font-poppins">
          Loading CMS registry logs...
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form publisher */}
          <div className="lg:col-span-7">
            
            {activeSubTab === 'blogs' && (
              <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-gray/10 space-y-6">
                <h3 className="font-montserrat font-bold text-lg text-premium-white flex items-center gap-2 pb-4 border-b border-slate-gray/5">
                  <BookOpen className="text-alvision-blue" size={18} />
                  Write Dynamic Blog Article
                </h3>

                {blogSubmitted ? (
                  <div className="text-center py-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-alvision-blue/10 flex items-center justify-center text-alvision-blue mb-4">
                      <CheckCircle size={24} />
                    </div>
                    <h4 className="font-montserrat font-bold text-lg mb-1">Article Published!</h4>
                    <p className="text-slate-gray text-xs">The post was saved and is now live on the public blog path.</p>
                    <button 
                      onClick={() => setBlogSubmitted(false)}
                      className="mt-6 text-xs text-alvision-blue underline hover:text-white"
                    >
                      Write another article
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBlogSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-gray uppercase tracking-wider mb-2 font-inter">Article Title *</label>
                        <input 
                          type="text" 
                          required 
                          value={blogTitle}
                          onChange={(e) => setBlogTitle(e.target.value)}
                          placeholder="e.g. Scaling YouTube Retention" 
                          className="w-full bg-dark-navy border border-slate-gray/10 rounded-lg px-3.5 py-2.5 text-xs text-premium-white placeholder-slate-gray/40 focus:outline-none focus:border-alvision-blue/50"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-gray uppercase tracking-wider mb-2 font-inter">Custom Slug (Auto-generated if empty)</label>
                        <input 
                          type="text" 
                          value={blogSlug}
                          onChange={(e) => setBlogSlug(e.target.value)}
                          placeholder="scaling-youtube-retention" 
                          className="w-full bg-dark-navy border border-slate-gray/10 rounded-lg px-3.5 py-2.5 text-xs text-premium-white placeholder-slate-gray/40 focus:outline-none focus:border-alvision-blue/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-gray uppercase tracking-wider mb-2 font-inter">Article Category *</label>
                        <select 
                          value={blogCategory}
                          onChange={(e) => setBlogCategory(e.target.value)}
                          className="w-full bg-dark-navy border border-slate-gray/10 rounded-lg px-3.5 py-2.5 text-xs text-premium-white focus:outline-none focus:border-alvision-blue/50"
                        >
                          <option value="youtube_growth">YouTube Growth</option>
                          <option value="marketing">Marketing</option>
                          <option value="ai">Artificial Intelligence</option>
                          <option value="creator_economy">Creator Economy</option>
                          <option value="social_media">Social Media</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-gray uppercase tracking-wider mb-2 font-inter">Author Tag *</label>
                        <input 
                          type="text" 
                          required 
                          value={blogAuthor}
                          onChange={(e) => setBlogAuthor(e.target.value)}
                          className="w-full bg-dark-navy border border-slate-gray/10 rounded-lg px-3.5 py-2.5 text-xs text-premium-white focus:outline-none focus:border-alvision-blue/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-slate-gray uppercase tracking-wider mb-2 font-inter">Article Content *</label>
                      <textarea 
                        rows={6} 
                        required
                        value={blogContent}
                        onChange={(e) => setBlogContent(e.target.value)}
                        placeholder="Write article details. Supports paragraphs separated by double enters..." 
                        className="w-full bg-dark-navy border border-slate-gray/10 rounded-lg px-3.5 py-2.5 text-xs text-premium-white placeholder-slate-gray/40 focus:outline-none focus:border-alvision-blue/50"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3.5 font-montserrat font-bold text-xs text-deep-black bg-gradient-to-r from-alvision-blue to-glow-blue rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-1.5"
                    >
                      Publish Article Inside CMS <PlusCircle size={14} />
                    </button>
                  </form>
                )}
              </div>
            )}

            {activeSubTab === 'portfolios' && (
              <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-gray/10 space-y-6">
                <h3 className="font-montserrat font-bold text-lg text-premium-white flex items-center gap-2 pb-4 border-b border-slate-gray/5">
                  <Briefcase className="text-alvision-blue" size={18} />
                  Upload Portfolio Case Study
                </h3>

                {portSubmitted ? (
                  <div className="text-center py-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-alvision-blue/10 flex items-center justify-center text-alvision-blue mb-4">
                      <CheckCircle size={24} />
                    </div>
                    <h4 className="font-montserrat font-bold text-lg mb-1">Case Study Uploaded!</h4>
                    <p className="text-slate-gray text-xs">The project details are now live on the public portfolio page.</p>
                    <button 
                      onClick={() => setPortSubmitted(false)}
                      className="mt-6 text-xs text-alvision-blue underline hover:text-white"
                    >
                      Upload another project
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePortSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-gray uppercase tracking-wider mb-2 font-inter">Project Title *</label>
                        <input 
                          type="text" 
                          required 
                          value={portTitle}
                          onChange={(e) => setPortTitle(e.target.value)}
                          placeholder="e.g. Aura Skincare App" 
                          className="w-full bg-dark-navy border border-slate-gray/10 rounded-lg px-3.5 py-2.5 text-xs text-premium-white placeholder-slate-gray/40 focus:outline-none focus:border-alvision-blue/50"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-gray uppercase tracking-wider mb-2 font-inter">Client name *</label>
                        <input 
                          type="text" 
                          required 
                          value={portClient}
                          onChange={(e) => setPortClient(e.target.value)}
                          placeholder="Aura Skin Lab" 
                          className="w-full bg-dark-navy border border-slate-gray/10 rounded-lg px-3.5 py-2.5 text-xs text-premium-white placeholder-slate-gray/40 focus:outline-none focus:border-alvision-blue/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-gray uppercase tracking-wider mb-2 font-inter">Campaign Category *</label>
                        <select 
                          value={portCategory}
                          onChange={(e) => setPortCategory(e.target.value)}
                          className="w-full bg-dark-navy border border-slate-gray/10 rounded-lg px-3.5 py-2.5 text-xs text-premium-white focus:outline-none focus:border-alvision-blue/50"
                        >
                          <option>WhatsApp Marketing</option>
                          <option>Influencer Marketing</option>
                          <option>Social Media Marketing</option>
                          <option>Google Ads</option>
                          <option>Web Development</option>
                          <option>Graphic Design</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-gray uppercase tracking-wider mb-2 font-inter">Growth Metric / ROI tag *</label>
                        <input 
                          type="text" 
                          required 
                          value={portMetrics}
                          onChange={(e) => setPortMetrics(e.target.value)}
                          placeholder="340% ROAS, 2.1s Load speed" 
                          className="w-full bg-dark-navy border border-slate-gray/10 rounded-lg px-3.5 py-2.5 text-xs text-premium-white placeholder-slate-gray/40 focus:outline-none focus:border-alvision-blue/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-slate-gray uppercase tracking-wider mb-2 font-inter">Short Objective Description *</label>
                      <input 
                        type="text" 
                        required 
                        value={portDesc}
                        onChange={(e) => setPortDesc(e.target.value)}
                        placeholder="Describe what was accomplished in one sentence..." 
                        className="w-full bg-dark-navy border border-slate-gray/10 rounded-lg px-3.5 py-2.5 text-xs text-premium-white placeholder-slate-gray/40 focus:outline-none focus:border-alvision-blue/50"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-slate-gray uppercase tracking-wider mb-2 font-inter">Strategy & Execution Breakdown *</label>
                      <textarea 
                        rows={4} 
                        required
                        value={portStudy}
                        onChange={(e) => setPortStudy(e.target.value)}
                        placeholder="Provide detailed breakdown of the visual metrics and tech workflows..." 
                        className="w-full bg-dark-navy border border-slate-gray/10 rounded-lg px-3.5 py-2.5 text-xs text-premium-white placeholder-slate-gray/40 focus:outline-none focus:border-alvision-blue/50"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3.5 font-montserrat font-bold text-xs text-deep-black bg-gradient-to-r from-alvision-blue to-glow-blue rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-1.5"
                    >
                      Publish Project to Portfolio <PlusCircle size={14} />
                    </button>
                  </form>
                )}
              </div>
            )}

          </div>

          {/* Right Column: Listing log */}
          <div className="lg:col-span-5 space-y-6">
            
            {activeSubTab === 'blogs' && (
              <div className="glass-panel p-6 rounded-3xl border border-slate-gray/10">
                <h3 className="font-montserrat font-bold text-sm text-premium-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-gray/5">
                  Blogs Registry ({blogs.length})
                </h3>
                <div className="space-y-3 max-h-[450px] overflow-y-auto">
                  {blogs.map((b) => (
                    <div key={b.id} className="flex justify-between items-center p-3 bg-deep-black/60 border border-slate-gray/5 rounded-xl text-xs gap-4 hover:border-slate-gray/15 transition-all">
                      <div className="truncate">
                        <strong className="block font-montserrat text-premium-white truncate">{b.title}</strong>
                        <span className="text-slate-gray text-[10px] block mt-0.5">{b.category.replace('_', ' ')}</span>
                      </div>
                      <button
                        onClick={() => deleteBlog(b.id)}
                        className="p-2 rounded bg-red-500/10 hover:bg-red-500 hover:text-white text-red-400 transition-colors shrink-0"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSubTab === 'portfolios' && (
              <div className="glass-panel p-6 rounded-3xl border border-slate-gray/10">
                <h3 className="font-montserrat font-bold text-sm text-premium-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-gray/5">
                  Portfolio Registry ({portfolios.length})
                </h3>
                <div className="space-y-3 max-h-[450px] overflow-y-auto">
                  {portfolios.map((p) => (
                    <div key={p.id} className="flex justify-between items-center p-3 bg-deep-black/60 border border-slate-gray/5 rounded-xl text-xs gap-4 hover:border-slate-gray/15 transition-all">
                      <div className="truncate">
                        <strong className="block font-montserrat text-premium-white truncate">{p.title}</strong>
                        <span className="text-slate-gray text-[10px] block mt-0.5">Client: {p.client_name}</span>
                      </div>
                      <button
                        onClick={() => deletePortfolio(p.id)}
                        className="p-2 rounded bg-red-500/10 hover:bg-red-500 hover:text-white text-red-400 transition-colors shrink-0"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}
