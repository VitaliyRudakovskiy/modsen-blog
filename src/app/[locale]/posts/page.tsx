import { useMessages, useTimeZone } from 'next-intl';
import { unstable_setRequestLocale as setLocale } from 'next-intl/server';

import BlogContainer from '@/components/BlogContainer';
import { LocaleParams } from '@/types';

const Posts = ({ params: { locale } }: LocaleParams) => {
  setLocale(locale);
  const messages = useMessages();
  const timeZone = useTimeZone() as string;

  return (
    <BlogContainer locale={locale} timeZone={timeZone} messages={messages} />
  );
};

export default Posts;
