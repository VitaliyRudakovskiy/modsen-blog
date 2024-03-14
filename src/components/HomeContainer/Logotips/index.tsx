'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import SmoothAppear from '@/components/SmoothAppear';
import ROUTES from '@/constants/routes';

import logotips from './logotips';
import styles from './Logotips.module.scss';

const Logotips = () => {
  const t = useTranslations('logotips');

  return (
    <SmoothAppear>
      <section className={styles.logotips} data-cy='home-logotips'>
        <div className={styles.logotips__text}>
          <span>{t('weAre')}</span>
          <h4>{t('featuredIn')}</h4>
        </div>
        {logotips.map(({ logo, alt }) => (
          <Link key={alt} href={ROUTES.HOME}>
            <Image className={styles.logotips__image} src={logo} alt={alt} />
          </Link>
        ))}
      </section>
    </SmoothAppear>
  );
};

export default Logotips;
