'use client';

import { memo } from 'react';
import { NextIntlClientProvider } from 'next-intl';

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
    <NextIntlClientProvider
      locale={locale}
      timeZone={timeZone}
      messages={messages}
    >
      <main>
        <AuthorInfo currentAuthor={currentAuthor} />
        <Posts currentAuthor={currentAuthor} />
      </main>
    </NextIntlClientProvider>
  );
};

export default memo(AuthorContainer);
