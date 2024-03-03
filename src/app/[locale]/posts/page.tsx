import { useMessages, useTimeZone } from 'next-intl';
import { unstable_setRequestLocale as setLocale } from 'next-intl/server';

import BlogContainer from '@/components/BlogContainer';
import { LocaleParams } from '@/types';

import styles from './Posts.module.scss';

const Posts = ({ params: { locale } }: LocaleParams) => {
  setLocale(locale);
  const messages = useMessages();
  const timeZone = useTimeZone() as string;

  return (
    <main className={styles.posts__main}>
      <BlogContainer locale={locale} timeZone={timeZone} messages={messages} />
    </main>
  );
};

export default Posts;
