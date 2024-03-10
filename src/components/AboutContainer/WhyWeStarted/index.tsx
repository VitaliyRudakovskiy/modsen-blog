'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import teamImage from '@/assets/images/why-we-started-image.webp';
import { LOREM_X12, LOREM_X64 } from '@/constants/quotes';

import styles from './WhyWeStarted.module.scss';

const WhyWeStarted = () => {
  const t = useTranslations('about');

  return (
    <section className={styles.start} data-cy='about-why'>
      <div className={styles.start__image}>
        <Image
          className={styles.start__image__bg}
          src={teamImage}
          alt='why we started image'
        />
      </div>
      <div className={styles.start__info}>
        <h2>{t('why')}</h2>
        <h4>{LOREM_X12}</h4>
        <p>{LOREM_X64}</p>
      </div>
    </section>
  );
};

export default WhyWeStarted;
