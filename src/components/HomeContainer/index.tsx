'use client';

import { NextIntlClientProvider } from 'next-intl';

import About from '../AboutUs';
import ChooseCategory from '../ChooseCategory';
import Hero from '../Hero';
import ListOfAuthors from '../ListOfAuthors';
import Logotips from '../Logotips';
import Posts from '../Posts';
import SpecialPost from '../SpecialPost';
import Testimonials from '../Testimonials';

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
      <SpecialPost />
      <ListOfAuthors />
      <Logotips />
      <Testimonials />
    </NextIntlClientProvider>
  );
};

export default HomeContainer;
