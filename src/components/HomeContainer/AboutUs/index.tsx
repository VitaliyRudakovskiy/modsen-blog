'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LOREM_X19, LOREM_X36 } from '@/constants/quotes';
import ROUTES from '@/constants/routes';

import styles from './About.module.scss';

const About = () => {
  const t = useTranslations('about');

  return (
    <section className={styles.about} data-cy='home-about'>
      <div className={styles.about__part}>
        <h6 className={styles.about__title}>{t('title')}</h6>
        <h2 className={styles.header__main}>{t('text')}</h2>
        <p className={styles.about__text}>{LOREM_X19}</p>
        <Link
          className={styles.about__link}
          href={ROUTES.ABOUT_US}
          data-cy='home-about-link'
        >
          {t('link')}
        </Link>
      </div>
      <div className={styles.about__part}>
        <h6 className={styles.about__title}>{t('missionTitle')}</h6>
        <h4 className={styles.header__main}>{t('missionText')}</h4>
        <p className={styles.about__text}>{LOREM_X36}</p>
      </div>
    </section>
  );
};

export default About;
