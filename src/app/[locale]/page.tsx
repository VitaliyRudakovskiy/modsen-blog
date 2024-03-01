import { useMessages, useTimeZone } from 'next-intl';
import { unstable_setRequestLocale as setLocale } from 'next-intl/server';

import HomeContainer from '@/components/HomeContainer';
import { LocaleParams } from '@/types';

import styles from './page.module.scss';

const Home = ({ params: { locale } }: LocaleParams) => {
  setLocale(locale);
  const messages = useMessages();
  const timeZone = useTimeZone() as string;

  return (
    <main className={styles.main}>
      <HomeContainer locale={locale} timeZone={timeZone} messages={messages} />
    </main>
  );
};

export default Home;
