'use client';

import { useTranslations } from 'next-intl';

import {
  LOREM_X5,
  LOREM_X12,
  LOREM_X111,
  LOREM_X162,
} from '@/constants/quotes';

import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
  const t = useTranslations('privacy');

  return (
    <main className={styles.privacy}>
      <div className={styles.privacy__header} data-cy='privacy-header'>
        <h1 className={styles.privacy__header_title}>{t('title')}</h1>
        <p className={styles.privacy__header_subtitle}>{t('update')}</p>
      </div>
      <section className={styles.privacy__main} data-cy='privacy-content'>
        <h2>{LOREM_X5}</h2>
        <p>{LOREM_X162}</p>
        <h4>{LOREM_X12}</h4>
        <p>{LOREM_X111}</p>
        <p>{LOREM_X111}</p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
