'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import teamImage from '@/assets/images/why-we-started-image.webp';
import SmoothAppear from '@/components/SmoothAppear';
import { LOREM_X12, LOREM_X64 } from '@/constants/quotes';

import styles from './WhyWeStarted.module.scss';

const WhyWeStarted = () => {
  const t = useTranslations('about');

  return (
    <SmoothAppear>
      <section className={styles.start} data-cy='about-why'>
        <div className={styles.start__image}>
          <Image src={teamImage} alt='group of people at the stairs outside' />
        </div>
        <div className={styles.start__info}>
          <h2>{t('why')}</h2>
          <h4>{LOREM_X12}</h4>
          <p>{LOREM_X64}</p>
        </div>
      </section>
    </SmoothAppear>
  );
};

export default WhyWeStarted;
