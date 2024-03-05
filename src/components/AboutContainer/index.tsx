'use client';

import { NextIntlClientProvider } from 'next-intl';

import { ContainerProps } from '@/types';

import JoinTeam from '../JoinTeam';
import ListOfAuthors from '../ListOfAuthors';

import AboutHeader from './AboutHeader';
import MissionVision from './MissionVision';
import OurTeam from './OurTeam';
import Overview from './Overview';
import WhyWeStarted from './WhyWeStarted';

const AboutContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone={timeZone}
      messages={messages}
    >
      <main>
        <AboutHeader />
        <Overview />
        <MissionVision />
        <OurTeam />
        <WhyWeStarted />
        <ListOfAuthors isFull />
        <JoinTeam />
      </main>
    </NextIntlClientProvider>
  );
};

export default AboutContainer;
