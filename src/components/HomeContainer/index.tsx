'use client';

import { NextIntlClientProvider } from 'next-intl';

import About from '../AboutUs';
import ChooseCategory from '../ChooseCategory';
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
      <About />
      <ChooseCategory />
    </NextIntlClientProvider>
  );
};

export default HomeContainer;
