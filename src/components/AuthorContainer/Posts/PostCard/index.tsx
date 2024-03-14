'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SmoothAppear from '@/components/SmoothAppear';
import { LOREM_X19 } from '@/constants/quotes';
import ROUTES from '@/constants/routes';

import styles from './PostCard.module.scss';
import { PostCardProps } from './types';

const PostCard = ({ post }: PostCardProps) => {
  const { id, image, category, title } = post;

  return (
    <SmoothAppear>
      <div className={styles.card} data-cy='author-post'>
        <Image
          className={styles.card__image}
          src={image}
          alt='blog post picture'
        />
        <div>
          <h6 className={styles.card__subtitle}>{category}</h6>
          <Link href={`${ROUTES.BLOG}/${id}`}>
            <h2 className={styles.card__title}>{title}</h2>
          </Link>
          <p className={styles.card__text}>{LOREM_X19}</p>
        </div>
      </div>
    </SmoothAppear>
  );
};

export default memo(PostCard);
