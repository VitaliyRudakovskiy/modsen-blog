'use client';

import { memo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import ROUTES from '@/constants/routes';

import styles from './PostCard.module.scss';
import { PostCardProps } from './types';

const PostCard = ({ id }: PostCardProps) => {
  const t = useTranslations('posts');

  return (
    <div className={styles.post_card}>
      <div className={styles.post_card__header}>
        <span className={styles.post_card__author}>John Deo</span> | {t('date')}
      </div>
      <Link href={`${ROUTES.BLOG}/${id}`} data-cy='home-post-card-link'>
        <h4>{t('text')}</h4>
      </Link>
    </div>
  );
};

export default memo(PostCard);
