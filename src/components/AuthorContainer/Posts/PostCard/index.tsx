'use client';

import Image from 'next/image';
import Link from 'next/link';

import { LOREM_X19 } from '@/constants/quotes';
import ROUTES from '@/constants/routes';

import styles from './PostCard.module.scss';
import { PostCardProps } from './types';

const PostCard = ({ post }: PostCardProps) => {
  const { id, image, category, title } = post;
  return (
    <div className={styles.card}>
      <Image className={styles.card__image} src={image} alt='blog post image' />
      <div>
        <h6 className={styles.card__subtitle}>{category}</h6>
        <Link href={`${ROUTES.BLOG}/${id}`}>
          <h2 className={styles.card__title}>{title}</h2>
        </Link>
        <p className={styles.card__text}>{LOREM_X19}</p>
      </div>
    </div>
  );
};

export default PostCard;
