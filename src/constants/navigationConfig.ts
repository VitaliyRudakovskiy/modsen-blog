import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation';

import LOCALES from './locales';
import ROUTES from './routes';

const pathnames: Record<string, string> = {
  '/': ROUTES.HOME,
  '/about': ROUTES.ABOUT_US,
  '/posts': ROUTES.BLOG,
  '/contact': ROUTES.CONTACT_US,
  '/privacy': ROUTES.PRIVACY_POLICY,
} satisfies Pathnames<typeof LOCALES>;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales: LOCALES,
    pathnames,
    localePrefix: 'always',
  });
