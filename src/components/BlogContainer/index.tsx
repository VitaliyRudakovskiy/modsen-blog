'use client';

import { NextIntlClientProvider } from 'next-intl';

import { ContainerProps } from '@/types';

import BlogHeader from '../BlogHeader';

const BlogContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone={timeZone}
      messages={messages}
    >
      <BlogHeader />
    </NextIntlClientProvider>
  );
};

export default BlogContainer;
