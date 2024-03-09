'use client';

import { ContainerProps } from '@/types';

import ChooseCategory from '../ChooseCategory';
import DynamicContainer from '../DynamicContainer';
import JoinTeam from '../JoinTeam';
import ListOfAuthors from '../ListOfAuthors';

import About from './AboutUs';
import Hero from './Hero';
import Logotips from './Logotips';
import Posts from './Posts';
import SpecialPost from './SpecialPost';
import Testimonials from './Testimonials';

const HomeContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  return (
    <DynamicContainer locale={locale} timeZone={timeZone} messages={messages}>
      <Hero />
      <Posts />
      <About />
      <ChooseCategory />
      <SpecialPost />
      <ListOfAuthors />
      <Logotips />
      <Testimonials />
      <JoinTeam />
    </DynamicContainer>
  );
};

export default HomeContainer;
