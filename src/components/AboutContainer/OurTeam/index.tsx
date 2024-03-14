'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import hands from '@/assets/images/our-team-image.webp';
import SmoothAppear from '@/components/SmoothAppear';
import { LOREM_X12, LOREM_X64 } from '@/constants/quotes';

import styles from './OurTeam.module.scss';

const OurTeam = () => {
  const t = useTranslations('about');

  return (
    <SmoothAppear>
      <section className={styles.team} data-cy='about-team'>
        <div className={styles.team__info}>
          <h2>{t('team')}</h2>
          <h4>{LOREM_X12}</h4>
          <p>{LOREM_X64}</p>
        </div>
        <div className={styles.team__image}>
          <Image src={hands} alt="people are holding each other's hands" />
        </div>
      </section>
    </SmoothAppear>
  );
};

export default OurTeam;
