'use client';

import { useTranslations } from 'next-intl';

import { LOREM_X36 } from '@/constants/quotes';

import styles from './AboutHeader.module.scss';

const AboutHeader = () => {
  const t = useTranslations('about');

  return (
    <section className={styles.about_us}>
      <div className={styles.about_us__main}>
        <h6>{t('title')}</h6>
        <h2>{t('text')}</h2>
      </div>
      <div className={styles.about_us__info}>{LOREM_X36}</div>
    </section>
  );
};

export default AboutHeader;
