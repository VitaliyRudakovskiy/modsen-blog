import { unstable_setRequestLocale as setLocale } from 'next-intl/server';

import { LocaleParams } from '@/types';

import styles from './page.module.scss';

const Home = ({ params: { locale } }: LocaleParams) => {
  setLocale(locale);

  return <main className={styles.main}>HELLO</main>;
};

export default Home;
