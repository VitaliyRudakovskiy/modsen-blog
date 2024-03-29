'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { DUIS_X22 } from '@/constants/quotes';
import ROUTES from '@/constants/routes';

import styles from './ExtraPost.module.scss';
import { ExtraPostProps } from './types';

const ExtraPost = ({ post }: ExtraPostProps) => {
  const { id, image, author, createdAt, title } = post;

  return (
    <div className={styles.post} data-cy='extra-post'>
      <Image
        className={styles.post__image}
        src={image}
        alt='extra blog post picture'
      />
      <p className={styles.post__info}>
        By <span>{author}</span> | {createdAt}
      </p>
      <Link href={`${ROUTES.BLOG}/${id}`} data-cy={`extra-post-${id}`}>
        <h3 className={styles.post__title}>{title}</h3>
      </Link>
      <p className={styles.post__text}>{DUIS_X22}</p>
    </div>
  );
};

export default memo(ExtraPost);
