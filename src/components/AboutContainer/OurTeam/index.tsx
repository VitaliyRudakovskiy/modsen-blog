'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import hands from '@/assets/images/our-team-image.webp';
import { LOREM_X12, LOREM_X64 } from '@/constants/quotes';

import styles from './OurTeam.module.scss';

const OurTeam = () => {
  const t = useTranslations('about');

  return (
    <section className={styles.team} data-cy='about-team'>
      <div className={styles.team__info}>
        <h2>{t('team')}</h2>
        <h4>{LOREM_X12}</h4>
        <p>{LOREM_X64}</p>
      </div>
      <div className={styles.team__image}>
        <Image
          className={styles.team__image__bg}
          src={hands}
          alt='our team image'
        />
      </div>
    </section>
  );
};

export default OurTeam;
