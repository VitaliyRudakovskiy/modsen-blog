'use client';

import { NextIntlClientProvider } from 'next-intl';

import Hero from '../Hero';
import Posts from '../Posts';

import { HomeContainerProps } from './types';

const HomeContainer = ({ locale, messages, timeZone }: HomeContainerProps) => {
  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone={timeZone}
      messages={messages}
    >
      <Hero />
      <Posts />
    </NextIntlClientProvider>
  );
};

export default HomeContainer;
