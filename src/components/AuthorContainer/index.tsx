'use client';

import { memo } from 'react';

import DynamicContainer from '../DynamicContainer';

import AuthorInfo from './AuthorInfo';
import Posts from './Posts';
import { AuthorContainerProps } from './types';

const AuthorContainer = ({
  locale,
  messages,
  timeZone,
  currentAuthor,
}: AuthorContainerProps) => {
  return (
    <DynamicContainer locale={locale} timeZone={timeZone} messages={messages}>
      <AuthorInfo currentAuthor={currentAuthor} />
      <Posts currentAuthor={currentAuthor} />
    </DynamicContainer>
  );
};

export default memo(AuthorContainer);
