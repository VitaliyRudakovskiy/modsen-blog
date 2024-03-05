'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import photo from '@/assets/images/featured-post-image.webp';
import { DUIS_X22, LOREM_X12 } from '@/constants/quotes';
import Button from '@/UI/Button';

import styles from './FeaturedPost.module.scss';

const FeaturedPost = () => {
  const t = useTranslations('posts.featured');

  return (
    <div className={styles.featured_post}>
      <Image
        className={styles.featured_post_image}
        src={photo}
        alt='post with hotel image'
        priority
      />
      <p className={styles.featured_post_author}>
        {t('by')} <span>John Doe</span> | {t('date')}
      </p>
      <h3 className={styles.featured_post_title}>{LOREM_X12}</h3>
      <p className={styles.featured_post_text}>{DUIS_X22}</p>
      <Button variant='primary'>{t('readMoreButton')}</Button>
    </div>
  );
};

export default FeaturedPost;
