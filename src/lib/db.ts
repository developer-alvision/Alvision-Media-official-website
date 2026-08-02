import fs from 'fs';
import path from 'path';

// Interfaces for our database entities
export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: 'super_admin' | 'content_manager' | 'marketing_manager' | 'designer';
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
  status: 'new' | 'contacted' | 'in_progress' | 'converted' | 'lost';
  created_at: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  category: 'social_media' | 'ai' | 'marketing' | 'creator_economy' | 'youtube_growth';
  content: string;
  author: string;
  image_url: string;
  published_at: string;
}

export interface Channel {
  id: string;
  name: string;
  slug: string;
  subscribers: string;
  videos_count: number;
  views_count: string;
  description: string;
  logo_url: string;
  category: string;
  url: string;
}

export interface PortfolioProject {
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

export interface Campaign {
  id: string;
  name: string;
  reach: string;
  conversions: string;
  revenue_generated: string;
  status: 'active' | 'completed' | 'paused';
  analytics_json: string; // JSON string containing daily reach/metrics
}

export interface CareerApplication {
  id: string;
  job_title: string;
  applicant_name: string;
  email: string;
  portfolio_url: string;
  resume_url: string;
  status: 'applied' | 'reviewing' | 'interviewed' | 'hired' | 'rejected';
  submitted_at: string;
}

interface DatabaseSchema {
  users: User[];
  leads: Lead[];
  blogs: Blog[];
  channels: Channel[];
  portfolio: PortfolioProject[];
  campaigns: Campaign[];
  careers: CareerApplication[];
}

const DB_FILE_PATH = path.join(process.cwd(), 'database.json');

// Initial Seed Data
const defaultData: DatabaseSchema = {
  users: [
    { id: '1', name: 'Super Admin', email: 'admin@alvisionmedia.com', passwordHash: 'admin123', role: 'super_admin' },
    { id: '2', name: 'Sarah Content', email: 'content@alvisionmedia.com', passwordHash: 'content123', role: 'content_manager' },
    { id: '3', name: 'Michael Marketer', email: 'marketing@alvisionmedia.com', passwordHash: 'marketing123', role: 'marketing_manager' },
    { id: '4', name: 'David Designer', email: 'designer@alvisionmedia.com', passwordHash: 'design123', role: 'designer' }
  ],
  leads: [
    {
      id: 'l-1',
      name: 'Rohan Sharma',
      email: 'rohan@sharmatech.co',
      phone: '+91 98765 43210',
      company: 'Sharma Tech Solutions',
      message: 'Looking for a comprehensive Social Media and WhatsApp Marketing strategy for our new SaaS product.',
      service: 'Social Media Marketing',
      status: 'new',
      created_at: '2026-07-01T10:30:00.000Z'
    },
    {
      id: 'l-2',
      name: 'Priya Patel',
      email: 'priya@organicbeauty.in',
      phone: '+91 87654 32109',
      company: 'Organic Beauty Co.',
      message: 'We want to scale our D2C brand using Influencer Marketing campaigns with Tamil creators.',
      service: 'Influencer Marketing',
      status: 'contacted',
      created_at: '2026-07-02T14:15:00.000Z'
    },
    {
      id: 'l-3',
      name: 'Amit Patel',
      email: 'amit@patelbuilders.com',
      phone: '+91 76543 21098',
      company: 'Patel Builders & Developers',
      message: 'Need high-intent lead generation using targeted Google Search & Performance Max ads.',
      service: 'Google Ads',
      status: 'in_progress',
      created_at: '2026-07-03T09:00:00.000Z'
    },
    {
      id: 'l-4',
      name: 'Anjali Nair',
      email: 'anjali@fitfreetraining.com',
      phone: '+91 65432 10987',
      company: 'FitFree Training Academy',
      message: 'Interested in corporate web design and landing page development.',
      service: 'Web Development',
      status: 'converted',
      created_at: '2026-06-25T11:45:00.000Z'
    }
  ],
  blogs: [
    {
      id: 'b-1',
      title: 'Cracking the YouTube Algorithm in 2026',
      slug: 'cracking-youtube-algorithm-2026',
      category: 'youtube_growth',
      content: 'The YouTube algorithm has evolved from simple click-through rates and watch time to understanding deep viewer satisfaction metrics, returning viewer loyalty, and contextual search associations. In this post, we break down how Alvision Media optimized our channels to gain over 3M subscribers. First, focus on the first 30 seconds - viewer retention curves are highly weighted. Second, construct video packages (thumbnail + title) that trigger high curiosity without clickbait. Lastly, utilize the community tab to build returning viewer habits.',
      author: 'Alvision Team',
      image_url: '/images/service_social.png',
      published_at: '2026-07-04T12:00:00.000Z'
    },
    {
      id: 'b-2',
      title: 'WhatsApp Marketing: The Next Frontier for D2C Brands',
      slug: 'whatsapp-marketing-d2c-brands',
      category: 'marketing',
      content: 'Email open rates are hovering around 15%, while WhatsApp messages enjoy an astounding 98% open rate. For D2C brands, this represents a massive opportunity to drive direct sales, recover abandoned carts, and offer rapid support. In this guide, we outline our WhatsApp Automation pipeline using official Meta Cloud API, building smart opt-in templates, and optimizing broadcasts so that they do not feel spammy.',
      author: 'Marketing Desk',
      image_url: '/images/service_whatsapp.png',
      published_at: '2026-07-03T10:00:00.000Z'
    },
    {
      id: 'b-3',
      title: 'Leveraging AI in Modern Graphic Design Workflows',
      slug: 'ai-in-graphic-design-workflows',
      category: 'ai',
      content: 'AI is not replacing graphic designers; it is giving them superpowers. From generative fill to automated color-palette harmonizers, tools like Midjourney and Adobe Firefly have shortened the ideation cycle from days to minutes. Read how our creative studio mixes AI-driven concepts with human craftsmanship to deliver premium assets that convert.',
      author: 'Design Studio',
      image_url: '/images/service_design.png',
      published_at: '2026-07-01T08:30:00.000Z'
    }
  ],
  channels: [
    {
      id: 'c-1',
      name: 'Slam Book Tamil',
      slug: 'slam-book-tamil',
      subscribers: '1.2M',
      videos_count: 320,
      views_count: '145M',
      description: 'Tamil Nadu\'s leading lifestyle, celebrity interview, and pop-culture digital network. Celebrated for its unique, personal, and conversational formatting.',
      logo_url: '/images/Slam Book Tamil.png',
      category: 'Entertainment & Lifestyle',
      url: 'https://youtube.com/c/slambooktamil'
    },
    {
      id: 'c-2',
      name: 'Jajabordiary',
      slug: 'jajabordiary',
      subscribers: '410K',
      videos_count: 185,
      views_count: '48M',
      description: 'A premium travel and cinematography diary exploring hidden gems, offbeat cultures, and premium stays across India and the globe.',
      logo_url: '/images/Jajabordiary.png',
      category: 'Travel & Cinematography',
      url: 'https://youtube.com/c/jajabordiary'
    },
    {
      id: 'c-3',
      name: 'Mr. Guru',
      slug: 'mr-guru',
      subscribers: '850K',
      videos_count: 290,
      views_count: '98M',
      description: 'Premium tech education, programming tutorials, software development guidelines, and career mentorship delivered in regional languages.',
      logo_url: '/images/Mr.Guru.png',
      category: 'Tech & Education',
      url: 'https://youtube.com/c/mrguru'
    },
    {
      id: 'c-4',
      name: 'Alvision Fusion',
      slug: 'alvision-fusion',
      subscribers: '280K',
      videos_count: 420,
      views_count: '32M',
      description: 'Short-form informative content, business analysis, and digital tech trends packaged for the modern fast-paced consumer.',
      logo_url: '/images/Alvision Fusion.png',
      category: 'Infotainment & Shorts',
      url: 'https://youtube.com/c/alvisionfusion'
    },
    {
      id: 'c-5',
      name: 'Alvision Tamil',
      slug: 'alvision-tamil',
      subscribers: '550K',
      videos_count: 210,
      views_count: '65M',
      description: 'Local business case studies, regional financial advice, entrepreneur interviews, and digital success stories in Tamil.',
      logo_url: '/images/Alvision Tamil.png',
      category: 'Business & Finance',
      url: 'https://youtube.com/c/alvisiontamil'
    },
    {
      id: 'c-6',
      name: 'Wild Card',
      slug: 'wild-card',
      subscribers: '180K',
      videos_count: 95,
      views_count: '18M',
      description: 'Deep dives into pop-culture phenomena, movie essays, and digital community memes that connect with Gen-Z audiences.',
      logo_url: '/images/Wild Card.jpeg',
      category: 'Pop Culture & Analysis',
      url: 'https://youtube.com/c/wildcard'
    }
  ],
  portfolio: [
    {
      id: 'p-1',
      title: 'WhatsApp Automation Scaling',
      category: 'WhatsApp Marketing',
      client_name: 'D2C Apparel Brand',
      metrics: '340% ROI, 22% Cart Recovery',
      description: 'Configured automated abandoned-cart triggers, custom product recommendations, and automated customer support workflows using WhatsApp API.',
      image_url: '/assets/port-whatsapp.jpg',
      case_study_content: 'By integrating direct Shopify checkout links within automated WhatsApp reminders, we recovered over 22% of abandoned carts. We also set up custom FAQ chatbots that resolved 80% of routine inquiries instantly, saving the support team 40+ hours per week.',
      created_at: '2026-06-15T00:00:00.000Z'
    },
    {
      id: 'p-2',
      title: 'Vocal for Local - Tamil Influencer Campaign',
      category: 'Influencer Marketing',
      client_name: 'Food & Beverage Giant',
      metrics: '4.5M Reach, 8% Engagement Rate',
      description: 'Curated partnership with 12 micro and macro regional Tamil creators to promote organic traditional foods.',
      image_url: '/assets/port-influencer.jpg',
      case_study_content: 'Alvision mapped regional storytelling styles with product benefits. Through channels like Slam Book Tamil, we co-created organic vlog integrated segments, boosting brand awareness by 110% in Southern Tier-2 cities.',
      created_at: '2026-05-20T00:00:00.000Z'
    },
    {
      id: 'p-3',
      title: 'Modern D2C Skincare Web Launch',
      category: 'Web Development',
      client_name: 'Aura Skin Lab',
      metrics: '0.9s Load Time, 4.2% Conversion Rate',
      description: 'A custom glassmorphic headless ecommerce landing page built with Next.js and optimized for conversion and Core Web Vitals.',
      image_url: '/assets/port-web.jpg',
      case_study_content: 'Designed a highly interactive skincare selector wizard that helps users customize products dynamically. Combined with a seamless single-page check-out process, Aura Skin Lab experienced a 45% increase in site conversion rate compared to their legacy platform.',
      created_at: '2026-06-28T00:00:00.000Z'
    }
  ],
  campaigns: [
    {
      id: 'camp-1',
      name: 'WhatsApp Cart Recovery Q2',
      reach: '250,000',
      conversions: '45,000',
      revenue_generated: '₹12,50,000',
      status: 'active',
      analytics_json: JSON.stringify({
        labels: ['June 28', 'June 29', 'June 30', 'July 1', 'July 2', 'July 3', 'July 4'],
        reach: [10000, 15000, 22000, 31000, 42000, 55000, 68000],
        conversions: [1200, 1800, 2500, 3400, 4800, 6100, 7500]
      })
    },
    {
      id: 'camp-2',
      name: 'Google Ads High Intent Search',
      reach: '1,200,000',
      conversions: '85,000',
      revenue_generated: '₹28,00,000',
      status: 'active',
      analytics_json: JSON.stringify({
        labels: ['June 28', 'June 29', 'June 30', 'July 1', 'July 2', 'July 3', 'July 4'],
        reach: [120000, 130000, 125000, 140000, 155000, 160000, 170000],
        conversions: [8200, 8500, 8100, 9200, 10100, 10500, 11200]
      })
    },
    {
      id: 'camp-3',
      name: 'Tamil Influencer Summer Fest',
      reach: '4,500,000',
      conversions: '110,000',
      revenue_generated: '₹18,50,000',
      status: 'completed',
      analytics_json: JSON.stringify({
        labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
        reach: [500000, 1200000, 2000000, 2800000, 3500000, 4100000, 4500000],
        conversions: [10000, 30000, 52000, 72000, 88000, 101000, 110000]
      })
    }
  ],
  careers: [
    {
      id: 'car-1',
      job_title: 'Video Editor (Tamil/English Content)',
      applicant_name: 'Vignesh Kumar',
      email: 'vignesh@editguru.com',
      portfolio_url: 'https://vimeo.com/vigneshvids',
      resume_url: '/resumes/vignesh_resume.pdf',
      status: 'reviewing',
      submitted_at: '2026-07-02T16:40:00.000Z'
    },
    {
      id: 'car-2',
      job_title: 'Graphic Designer',
      applicant_name: 'Sneha Reddy',
      email: 'sneha@behance.net/sneha_draws',
      portfolio_url: 'https://behance.net/sneha_draws',
      resume_url: '/resumes/sneha_designer.pdf',
      status: 'applied',
      submitted_at: '2026-07-04T09:12:00.000Z'
    }
  ]
};

// Database class that handles reading, writing, and querying
class JSONDb {
  private data: DatabaseSchema | null = null;

  constructor() {
    this.init();
  }

  private init() {
    try {
      if (!fs.existsSync(DB_FILE_PATH)) {
        this.data = defaultData;
        this.save();
      } else {
        const fileContent = fs.readFileSync(DB_FILE_PATH, 'utf-8');
        this.data = JSON.parse(fileContent);
        
        // Merge in any missing keys dynamically in case of updates
        let updated = false;
        for (const key of Object.keys(defaultData) as Array<keyof DatabaseSchema>) {
          if (!this.data![key]) {
            (this.data as any)[key] = defaultData[key];
            updated = true;
          }
        }
        if (updated) this.save();
      }
    } catch (e) {
      console.error("Database initialization error, falling back to in-memory:", e);
      this.data = defaultData;
    }
  }

  private save() {
    if (!this.data) return;
    try {
      fs.writeFileSync(DB_FILE_PATH, JSON.stringify(this.data, null, 2), 'utf-8');
    } catch (e) {
      console.error("Database save failed:", e);
    }
  }

  // Getters
  public getUsers(): User[] { return this.data?.users || []; }
  public getLeads(): Lead[] { return this.data?.leads || []; }
  public getBlogs(): Blog[] { return this.data?.blogs || []; }
  public getChannels(): Channel[] { return this.data?.channels || []; }
  public getPortfolio(): PortfolioProject[] { return this.data?.portfolio || []; }
  public getCampaigns(): Campaign[] { return this.data?.campaigns || []; }
  public getCareers(): CareerApplication[] { return this.data?.careers || []; }

  // Lead CRUD
  public addLead(lead: Omit<Lead, 'id' | 'created_at' | 'status'>): Lead {
    const newLead: Lead = {
      ...lead,
      id: `l-${Date.now()}`,
      status: 'new',
      created_at: new Date().toISOString()
    };
    this.data?.leads.unshift(newLead);
    this.save();
    return newLead;
  }

  public updateLeadStatus(id: string, status: Lead['status']): boolean {
    const lead = this.data?.leads.find(l => l.id === id);
    if (lead) {
      lead.status = status;
      this.save();
      return true;
    }
    return false;
  }

  public deleteLead(id: string): boolean {
    if (!this.data) return false;
    const initialLength = this.data.leads.length;
    this.data.leads = this.data.leads.filter(l => l.id !== id);
    if (this.data.leads.length !== initialLength) {
      this.save();
      return true;
    }
    return false;
  }

  // Blog CRUD
  public addBlog(blog: Omit<Blog, 'id' | 'published_at'>): Blog {
    const newBlog: Blog = {
      ...blog,
      id: `b-${Date.now()}`,
      published_at: new Date().toISOString()
    };
    this.data?.blogs.unshift(newBlog);
    this.save();
    return newBlog;
  }

  public deleteBlog(id: string): boolean {
    if (!this.data) return false;
    const initialLength = this.data.blogs.length;
    this.data.blogs = this.data.blogs.filter(b => b.id !== id);
    if (this.data.blogs.length !== initialLength) {
      this.save();
      return true;
    }
    return false;
  }

  // Channel CRUD
  public addChannel(channel: Omit<Channel, 'id'>): Channel {
    const newChannel: Channel = {
      ...channel,
      id: `c-${Date.now()}`
    };
    this.data?.channels.unshift(newChannel);
    this.save();
    return newChannel;
  }

  public updateChannel(id: string, updatedChannelData: Partial<Channel>): boolean {
    const idx = this.data?.channels.findIndex(c => c.id === id);
    if (idx !== undefined && idx !== -1) {
      this.data!.channels[idx] = { ...this.data!.channels[idx], ...updatedChannelData };
      this.save();
      return true;
    }
    return false;
  }

  public deleteChannel(id: string): boolean {
    if (!this.data) return false;
    const initialLength = this.data.channels.length;
    this.data.channels = this.data.channels.filter(c => c.id !== id);
    if (this.data.channels.length !== initialLength) {
      this.save();
      return true;
    }
    return false;
  }

  // Portfolio CRUD
  public addPortfolio(project: Omit<PortfolioProject, 'id' | 'created_at'>): PortfolioProject {
    const newProject: PortfolioProject = {
      ...project,
      id: `p-${Date.now()}`,
      created_at: new Date().toISOString()
    };
    this.data?.portfolio.unshift(newProject);
    this.save();
    return newProject;
  }

  public deletePortfolio(id: string): boolean {
    if (!this.data) return false;
    const initialLength = this.data.portfolio.length;
    this.data.portfolio = this.data.portfolio.filter(p => p.id !== id);
    if (this.data.portfolio.length !== initialLength) {
      this.save();
      return true;
    }
    return false;
  }

  // Campaign CRUD
  public addCampaign(campaign: Omit<Campaign, 'id'>): Campaign {
    const newCampaign: Campaign = {
      ...campaign,
      id: `camp-${Date.now()}`
    };
    this.data?.campaigns.unshift(newCampaign);
    this.save();
    return newCampaign;
  }

  public deleteCampaign(id: string): boolean {
    if (!this.data) return false;
    const initialLength = this.data.campaigns.length;
    this.data.campaigns = this.data.campaigns.filter(c => c.id !== id);
    if (this.data.campaigns.length !== initialLength) {
      this.save();
      return true;
    }
    return false;
  }

  // Career Application CRUD
  public addCareerApplication(app: Omit<CareerApplication, 'id' | 'submitted_at' | 'status'>): CareerApplication {
    const newApp: CareerApplication = {
      ...app,
      id: `car-${Date.now()}`,
      status: 'applied',
      submitted_at: new Date().toISOString()
    };
    this.data?.careers.unshift(newApp);
    this.save();
    return newApp;
  }

  public updateCareerStatus(id: string, status: CareerApplication['status']): boolean {
    const app = this.data?.careers.find(c => c.id === id);
    if (app) {
      app.status = status;
      this.save();
      return true;
    }
    return false;
  }

  // Stats Aggregate
  public getDashboardStats() {
    const leads = this.getLeads();
    const channels = this.getChannels();
    const campaigns = this.getCampaigns();
    const applications = this.getCareers();

    // Summing subscriber numbers like "1.2M" or "410K" to numeric values for dashboard aggregates
    let totalSubs = 0;
    channels.forEach(ch => {
      let val = 0;
      if (ch.subscribers.toLowerCase().includes('m')) {
        val = parseFloat(ch.subscribers) * 1000000;
      } else if (ch.subscribers.toLowerCase().includes('k')) {
        val = parseFloat(ch.subscribers) * 1000;
      } else {
        val = parseFloat(ch.subscribers) || 0;
      }
      totalSubs += val;
    });

    // Total Views
    let totalViews = 0;
    channels.forEach(ch => {
      let val = 0;
      if (ch.views_count.toLowerCase().includes('m')) {
        val = parseFloat(ch.views_count) * 1000000;
      } else if (ch.views_count.toLowerCase().includes('k')) {
        val = parseFloat(ch.views_count) * 1000;
      } else {
        val = parseFloat(ch.views_count) || 0;
      }
      totalViews += val;
    });

    // Total Revenue (simulated from campaigns)
    let totalRevenue = 0;
    campaigns.forEach(c => {
      const cleanVal = parseInt(c.revenue_generated.replace(/[^0-9]/g, ''), 10) || 0;
      totalRevenue += cleanVal;
    });

    return {
      visitors: 85240, // Simulated active visitors
      totalLeads: leads.length,
      newLeads: leads.filter(l => l.status === 'new').length,
      convertedLeads: leads.filter(l => l.status === 'converted').length,
      activeCampaigns: campaigns.filter(c => c.status === 'active').length,
      totalRevenue,
      subscribers: totalSubs,
      totalViews,
      activeCareers: applications.length
    };
  }
}

export const db = new JSONDb();
