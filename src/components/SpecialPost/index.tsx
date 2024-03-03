'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import background from '@/assets/images/special-post-background.webp';
import { LOREM_X32 } from '@/constants/quotes';
import ROUTES from '@/constants/routes';
import Button from '@/UI/Button';

import styles from './SpecialPost.module.scss';

const SpecialPost = () => {
  const t = useTranslations('specialPost');

  return (
    <section className={styles.special_post}>
      <Image
        className={styles.special_post__image}
        src={background}
        alt='special post background'
      />
      <div className={styles.special_post__overlay}>
        <h5 className={styles.subtitle}>{t('subtitle')}</h5>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.text}>{LOREM_X32}</p>
        <Button variant='primary'>
          <Link href={ROUTES.ABOUT_US}>{t('button')}</Link>
        </Button>
      </div>
    </section>
  );
};

export default SpecialPost;
