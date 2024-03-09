'use client';

import { ContainerProps } from '@/types';

import ChooseCategory from '../ChooseCategory';
import DynamicContainer from '../DynamicContainer';
import JoinTeam from '../JoinTeam';

import BlogHeader from './BlogHeader';
import BlogPosts from './BlogPosts';

const BlogContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  return (
    <DynamicContainer locale={locale} timeZone={timeZone} messages={messages}>
      <BlogHeader />
      <BlogPosts />
      <ChooseCategory />
      <JoinTeam />
    </DynamicContainer>
  );
};

export default BlogContainer;
