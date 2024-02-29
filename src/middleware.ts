import createMiddleware from 'next-intl/middleware';

import LOCALES from './constants/locales';

export default createMiddleware({
  defaultLocale: 'en',
  locales: LOCALES,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/', '/(en|ru)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
