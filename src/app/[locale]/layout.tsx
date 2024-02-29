import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale as setLocale } from 'next-intl/server';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LOCALES from '@/constants/locales';

import { LocaleLayoutProps } from './types';

export const metadata: Metadata = {
  title: 'Modsen Blog',
  description: 'Modsen Blog application made via Next.js',
};

export const generateStaticParams = () => {
  return LOCALES.map((locale) => ({ locale }));
};

const LocaleLayout = ({ children, params: { locale } }: LocaleLayoutProps) => {
  setLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
        </NextIntlClientProvider>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default LocaleLayout;
