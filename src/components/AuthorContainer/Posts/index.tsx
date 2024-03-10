'use client';

import { memo } from 'react';
import { useTranslations } from 'next-intl';

import getAuthorPosts from '@/helpers/getAuthorPosts';

import { AuthorProps } from '../types';

import styles from './AuthorPosts.module.scss';
import PostCard from './PostCard';

const Posts = ({ currentAuthor }: AuthorProps) => {
  const t = useTranslations('authorPost');
  const authorPosts = getAuthorPosts(currentAuthor.name);

  return (
    <section className={styles.posts} data-cy='author-posts'>
      <h2>{t('myPosts')}</h2>
      <div className={styles.posts__wrapper}>
        {authorPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default memo(Posts);
