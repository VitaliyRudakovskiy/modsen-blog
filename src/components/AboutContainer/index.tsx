'use client';

import { memo } from 'react';

import { ContainerProps } from '@/types';

import DynamicContainer from '../DynamicContainer';
import JoinTeam from '../JoinTeam';
import ListOfAuthors from '../ListOfAuthors';

import AboutHeader from './AboutHeader';
import MissionVision from './MissionVision';
import OurTeam from './OurTeam';
import Overview from './Overview';
import WhyWeStarted from './WhyWeStarted';

const AboutContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  return (
    <DynamicContainer locale={locale} timeZone={timeZone} messages={messages}>
      <AboutHeader />
      <Overview />
      <MissionVision />
      <OurTeam />
      <WhyWeStarted />
      <ListOfAuthors isFull />
      <JoinTeam />
    </DynamicContainer>
  );
};

export default memo(AboutContainer);
