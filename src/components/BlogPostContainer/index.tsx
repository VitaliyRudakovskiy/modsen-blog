'use client';

import { memo } from 'react';

import DynamicContainer from '../DynamicContainer';
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
    <DynamicContainer locale={locale} timeZone={timeZone} messages={messages}>
      <PostHeader currentPost={currentPost} />
      <PostContent />
      <ReadNext id={currentPost.id} />
      <JoinTeam />
    </DynamicContainer>
  );
};

export default memo(BlogPostContainer);
