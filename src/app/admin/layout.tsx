'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ShieldAlert, LayoutDashboard, Database, FileText, LogOut, 
  ArrowLeft, CheckCircle2, ChevronDown, UserCircle2 
} from 'lucide-react';
import { LogoGlyph } from '@/components/Navbar';

interface SimulatedUser {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'content_manager' | 'marketing_manager' | 'designer';
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  
  const [currentUser, setCurrentUser] = useState<SimulatedUser | null>(null);
  const [roleSelectOpen, setRoleSelectOpen] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  // Load simulated user on mount
  useEffect(() => {
    if (pathname === '/admin/login') {
      setAuthorized(true);
      return;
    }

    const sessionData = localStorage.getItem('alvision_user');
    if (!sessionData) {
      router.push('/admin/login');
    } else {
      setCurrentUser(JSON.parse(sessionData));
      setAuthorized(true);
    }
  }, [pathname, router]);

  // Bypass layout wrapping for the login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (!authorized || !currentUser) {
    return (
      <div className="min-h-screen bg-deep-black text-premium-white flex flex-col items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-alvision-blue mb-4" />
        <span className="text-xs text-slate-gray font-poppins">Verifying administrative credentials...</span>
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth', { method: 'DELETE' });
    } catch {}
    localStorage.removeItem('alvision_user');
    router.push('/admin/login');
  };

  const handleSimulateRoleChange = (role: SimulatedUser['role']) => {
    const updated = {
      ...currentUser,
      role,
      name: `Simulated ${role.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase())}`
    };
    setCurrentUser(updated);
    localStorage.setItem('alvision_user', JSON.stringify(updated));
    setRoleSelectOpen(false);
    // Force a reload of the component page state by invoking router refresh
    router.refresh();
  };

  const roleLabels: Record<SimulatedUser['role'], string> = {
    super_admin: 'Super Admin (Full Access)',
    content_manager: 'Content Manager',
    marketing_manager: 'Marketing Manager',
    designer: 'Creative Designer'
  };

  const menuItems = [
    { name: 'Dashboard Analytics', path: '/admin/dashboard', icon: LayoutDashboard, roles: ['super_admin', 'marketing_manager'] },
    { name: 'Leads CRM Pipeline', path: '/admin/crm', icon: Database, roles: ['super_admin', 'marketing_manager'] },
    { name: 'Content CMS Editor', path: '/admin/content', icon: FileText, roles: ['super_admin', 'content_manager', 'designer'] }
  ];

  const hasAccess = (itemRoles: string[]) => {
    return itemRoles.includes(currentUser.role);
  };

  return (
    <div className="min-h-screen bg-white text-dark-navy flex flex-col md:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-slate-50 border-r border-slate-gray/10 flex flex-col justify-between p-6 md:sticky md:top-0 md:h-screen z-20 shrink-0">
        <div className="space-y-8">
          
          {/* Logo block */}
          <Link href="/" className="flex items-center space-x-2 border-b border-slate-gray/5 pb-4">
            <LogoGlyph className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="font-montserrat font-900 text-base tracking-wider text-dark-navy">
                ALVISION<span className="text-alvision-blue">CONSOLE</span>
              </span>
              <span className="text-[8px] font-inter tracking-[0.2em] text-slate-gray -mt-0.5">ADMIN PANEL</span>
            </div>
          </Link>

          {/* Current User Simulator dropdown */}
          <div className="relative">
            <span className="text-[9px] uppercase tracking-wider text-slate-500 font-inter block mb-2">Simulate Console Role</span>
            <button
              onClick={() => setRoleSelectOpen(!roleSelectOpen)}
              className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-gray/15 text-left text-xs font-semibold flex items-center justify-between hover:border-slate-gray/25 transition-all shadow-sm"
            >
              <span className="flex items-center gap-2 truncate text-slate-700">
                <UserCircle2 size={16} className="text-alvision-blue shrink-0" />
                {roleLabels[currentUser.role]}
              </span>
              <ChevronDown size={14} className="text-slate-500 transition-transform duration-300" style={{ transform: roleSelectOpen ? 'rotate(180deg)' : 'none' }} />
            </button>

            {roleSelectOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-gray/15 rounded-xl shadow-lg p-1.5 space-y-1 z-35 animate-in fade-in slide-in-from-top-2 duration-200">
                {(Object.keys(roleLabels) as Array<SimulatedUser['role']>).map((role) => (
                  <button
                    key={role}
                    onClick={() => handleSimulateRoleChange(role)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium font-poppins transition-colors ${
                      currentUser.role === role 
                        ? 'bg-alvision-blue text-deep-black font-semibold' 
                        : 'hover:bg-slate-50 text-slate-500 hover:text-dark-navy'
                    }`}
                  >
                    {roleLabels[role]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {menuItems.map((item, idx) => {
              const Icon = item.icon;
              const active = pathname === item.path;
              const allowed = hasAccess(item.roles);
              return (
                <Link
                  key={idx}
                  href={allowed ? item.path : '#'}
                  className={`w-full px-4 py-3 rounded-xl text-xs md:text-sm font-semibold font-poppins flex items-center gap-3 transition-all duration-300 border ${
                    !allowed
                      ? 'opacity-40 cursor-not-allowed border-transparent text-slate-400 hover:text-slate-400'
                      : active
                        ? 'bg-alvision-blue text-deep-black border-alvision-blue shadow-sm font-bold'
                        : 'bg-transparent border-transparent hover:bg-slate-100 text-slate-500 hover:text-dark-navy'
                  }`}
                  onClick={(e) => {
                    if (!allowed) {
                      e.preventDefault();
                      alert(`Permissions Denied: The "${roleLabels[currentUser.role]}" role does not have authorization to view this panel. Simulate Super Admin or Marketing Manager to access.`);
                    }
                  }}
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-slate-gray/10 pt-4 mt-6 space-y-3.5">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-alvision-blue transition-colors px-2 font-poppins"
          >
            <ArrowLeft size={14} /> Back to Website
          </Link>
          
          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 rounded-xl text-xs font-bold text-red-500 hover:text-red-600 bg-red-50/5 hover:bg-red-50 border border-red-200 transition-all flex items-center justify-center gap-2"
          >
            <LogOut size={14} />
            <span>Sign Out Console</span>
          </button>
        </div>
      </aside>

      {/* Main Panel Viewport */}
      <main className="flex-grow p-6 md:p-10 relative overflow-y-auto max-h-screen bg-white text-dark-navy">
        {children}
      </main>

    </div>
  );
}
