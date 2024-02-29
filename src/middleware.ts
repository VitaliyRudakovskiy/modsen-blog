import createMiddleware from 'next-intl/middleware';

import LOCALES from './constants/locales';

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/(en|ru)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
