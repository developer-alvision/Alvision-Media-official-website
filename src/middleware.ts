import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simplistic in-memory rate limiter cache for edge middleware
const ipCache = new Map<string, Array<number>>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 100; // Allow max 100 requests per minute per IP

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1';

  // 1. Rate Limiting Check
  const now = Date.now();
  let timestamps = ipCache.get(ip) || [];
  
  // Clean expired timestamps
  timestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
  
  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return new NextResponse(
      JSON.stringify({ error: 'Too many requests. Rate limit exceeded.' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    );
  }
  
  timestamps.push(now);
  ipCache.set(ip, timestamps);

  // 2. Authentication Check for Admin Dashboard Routes
  if (
    pathname.startsWith('/admin') && 
    pathname !== '/admin/login' && 
    !pathname.startsWith('/admin/_next')
  ) {
    const sessionCookie = request.cookies.get('alvision_session');

    if (!sessionCookie) {
      // Redirect to login page
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    try {
      // Decode simulated cookie structure
      const session = JSON.parse(sessionCookie.value);
      if (!session || !session.role) {
        throw new Error('Invalid session');
      }
    } catch {
      // Clear cookie and redirect to login
      const loginUrl = new URL('/admin/login', request.url);
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete('alvision_session');
      return response;
    }
  }

  // Set X-Frame-Options to deny clickjacking
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}

// Config to specify matching paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (except for leads/auth logs)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets (brand logo assets)
     */
    '/((?!_next/static|_next/image|favicon.ico|assets).*)',
  ],
};
