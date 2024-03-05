'use client';

import { useTranslations } from 'next-intl';

import { LOREM_X12 } from '@/constants/quotes';

import Slider from './Slider';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
  const t = useTranslations('testimonials');

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__content}>
        <div className={styles.testimonials__content__info}>
          <h6>{t('subtitle')}</h6>
          <h2>{t('title')}</h2>
          <p>{LOREM_X12}</p>
        </div>
        <div className={styles.testimonials__content__divider} />
        <div className={styles.testimonials__content__slider}>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
