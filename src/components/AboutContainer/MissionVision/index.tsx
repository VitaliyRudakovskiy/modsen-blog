'use client';

import { useTranslations } from 'next-intl';

import SmoothAppear from '@/components/SmoothAppear';
import { LOREM_X36 } from '@/constants/quotes';

import missionBlocks from './missionBlocks';
import styles from './MissionVision.module.scss';

const MissionVision = () => {
  const t = useTranslations('about');

  return (
    <SmoothAppear>
      <section className={styles.mission} data-cy='about-mission'>
        <div className={styles.mission__container}>
          {missionBlocks.map(({ title, text }) => (
            <div key={title}>
              <h6>{t(title)}</h6>
              <h3>{t(text)}</h3>
              <p>{LOREM_X36}</p>
            </div>
          ))}
        </div>
      </section>
    </SmoothAppear>
  );
};

export default MissionVision;
