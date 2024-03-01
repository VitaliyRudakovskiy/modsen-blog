import type { Metadata } from 'next';
import { Sen } from 'next/font/google';
import { NextIntlClientProvider, useMessages, useTimeZone } from 'next-intl';
import { unstable_setRequestLocale as setLocale } from 'next-intl/server';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LOCALES from '@/constants/locales';

import { LocaleLayoutProps } from './types';

const sen = Sen({ subsets: ['latin'], weight: ['400', '500', '700'] });

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
  const timeZone = useTimeZone();

  return (
    <html lang={locale}>
      <body className={sen.className}>
        <NextIntlClientProvider timeZone={timeZone} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
