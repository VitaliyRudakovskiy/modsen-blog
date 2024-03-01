'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { DUIS_X22 } from '@/constants/quotes';
import ROUTES from '@/constants/routes';
import Button from '@/UI/Button';

import styles from './Hero.module.scss';

const Hero = () => {
  const t = useTranslations('hero');

  return (
    <section className={styles.hero}>
      <h6 className={styles.hero__subtitle}>{t('subtitle')}</h6>
      <h1 className={styles.hero__title}>{t('title')}</h1>
      <p className={styles.hero__author}>
        {t('by')} <span>James West</span> | {t('date')}
      </p>
      <p className={styles.hero__text}>{DUIS_X22}</p>
      <Button variant='primary'>
        <Link href={ROUTES.BLOG}>{t('readMoreButton')}</Link>
      </Button>
    </section>
  );
};

export default Hero;
