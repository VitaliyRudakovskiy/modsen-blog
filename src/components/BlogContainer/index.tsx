'use client';

import { NextIntlClientProvider } from 'next-intl';

import { ContainerProps } from '@/types';

import BlogHeader from '../BlogHeader';
import BlogPosts from '../BlogPosts';
import ChooseCategory from '../ChooseCategory';
import JoinTeam from '../JoinTeam';

const BlogContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone={timeZone}
      messages={messages}
    >
      <BlogHeader />
      <BlogPosts />
      <ChooseCategory />
      <JoinTeam />
    </NextIntlClientProvider>
  );
};

export default BlogContainer;
