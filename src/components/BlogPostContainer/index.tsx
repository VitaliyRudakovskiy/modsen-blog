'use client';

import { memo } from 'react';
import { NextIntlClientProvider } from 'next-intl';

import JoinTeam from '../JoinTeam';

import PostContent from './PostContent';
import PostHeader from './PostHeader';
import ReadNext from './ReadNext';
import { BlogPostContainerProps } from './types';

const BlogPostContainer = ({
  locale,
  messages,
  timeZone,
  currentPost,
}: BlogPostContainerProps) => {
  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone={timeZone}
      messages={messages}
    >
      <main>
        <PostHeader currentPost={currentPost} />
        <PostContent />
        <ReadNext id={currentPost.id} />
        <JoinTeam />
      </main>
    </NextIntlClientProvider>
  );
};

export default memo(BlogPostContainer);
