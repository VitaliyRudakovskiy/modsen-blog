'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import image from '@/assets/images/blog-header-image.webp';
import { DUIS_X22 } from '@/constants/quotes';
import ROUTES from '@/constants/routes';
import Button from '@/UI/Button';

import styles from './BlogHeader.module.scss';

const BlogHeader = () => {
  const t = useTranslations('hero');

  return (
    <section className={styles.header} data-cy='blog-header'>
      <div className={styles.header__main}>
        <h6>{t('blogSubtitle')}</h6>
        <h2>{t('title')}</h2>
        <p className={styles.header__main_author}>
          {t('by')} <span>James West</span> | {t('date')}
        </p>
        <p className={styles.header__main_text}>{DUIS_X22}</p>
        <Button variant='primary' dataCy='blog-header-button'>
          <Link href={`${ROUTES.BLOG}/1`}>{t('readMoreButton')}</Link>
        </Button>
      </div>
      <Image
        className={styles.header__image}
        src={image}
        alt='a man is sitting and smiling in front of computer'
        priority
      />
    </section>
  );
};

export default BlogHeader;
