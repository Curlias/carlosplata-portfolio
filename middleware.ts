import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getLocale, defaultLocale } from '@/lib/i18n/config';

export function middleware(request: NextRequest) {
  // Check if locale cookie exists
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  
  // If cookie exists, continue
  if (localeCookie) {
    return NextResponse.next();
  }

  // Auto-detect language from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || undefined;
  const detectedLocale = getLocale(acceptLanguage);

  // Set cookie and continue
  const response = NextResponse.next();
  response.cookies.set('NEXT_LOCALE', detectedLocale, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: '/',
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
