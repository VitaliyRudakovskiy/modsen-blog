'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import background from '@/assets/images/about-us-background.webp';
import SmoothAppear from '@/components/SmoothAppear';

import aboutParameters from './aboutParameters';
import styles from './Overview.module.scss';

const Overview = () => {
  const t = useTranslations('about.stats');

  return (
    <SmoothAppear>
      <section className={styles.overview} data-cy='about-overview'>
        <div className={styles.overview__container}>
          <Image
            className={styles.overview__container__image}
            src={background}
            alt='8 people are standing in front of a funicular'
          />
          <div className={styles.overview__stats}>
            <ul className={styles.overview__stats__list}>
              {aboutParameters.map(({ number, param }) => (
                <li key={param}>
                  <p className={styles.overview__stats__number}>{number}</p>
                  <p>{t(param)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SmoothAppear>
  );
};

export default Overview;
