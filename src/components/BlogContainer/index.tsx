'use client';

import { NextIntlClientProvider } from 'next-intl';

import { ContainerProps } from '@/types';

import ChooseCategory from '../ChooseCategory';
import JoinTeam from '../JoinTeam';

import BlogHeader from './BlogHeader';
import BlogPosts from './BlogPosts';

const BlogContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone={timeZone}
      messages={messages}
    >
      <main>
        <BlogHeader />
        <BlogPosts />
        <ChooseCategory />
        <JoinTeam />
      </main>
    </NextIntlClientProvider>
  );
};

export default BlogContainer;
