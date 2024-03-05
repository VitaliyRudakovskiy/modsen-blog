'use client';

import { useTranslations } from 'next-intl';

import { LOREM_X36 } from '@/constants/quotes';

import styles from './MissionVision.module.scss';

const MissionVision = () => {
  const t = useTranslations('about');

  return (
    <section className={styles.mission}>
      <div className={styles.mission__container}>
        <div className={styles.mission__left}>
          <h6>{t('missionTitle')}</h6>
          <h3>{t('missionText')}</h3>
          <p>{LOREM_X36}</p>
        </div>
        <div className={styles.mission__right}>
          <h6>{t('visionTitle')}</h6>
          <h3>{t('visionText')}</h3>
          <p>{LOREM_X36}</p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
