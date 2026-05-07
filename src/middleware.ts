import { NextResponse, type NextRequest } from 'next/server';
import { defaultLanguage, isLanguage, languageCookieName } from '@/lib/i18n';

const PUBLIC_FILE = /\.(.*)$/;

function preferredLanguage(request: NextRequest) {
  const cookieLanguage = request.cookies.get(languageCookieName)?.value;
  return isLanguage(cookieLanguage) ? cookieLanguage : defaultLanguage;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split('/')[1];
  if (isLanguage(firstSegment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-tnk-lang', firstSegment);
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    response.cookies.set(languageCookieName, firstSegment, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
    return response;
  }

  const language = preferredLanguage(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${language}${pathname === '/' ? '' : pathname}`;
  url.search = search;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
