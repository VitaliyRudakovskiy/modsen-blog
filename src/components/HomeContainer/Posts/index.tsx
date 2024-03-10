'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import ROUTES from '@/constants/routes';

import AllPosts from './AllPosts';
import FeaturedPost from './FeaturedPost';
import styles from './Posts.module.scss';

const Posts = () => {
  const t = useTranslations('posts');

  return (
    <section className={styles.posts} data-cy='home-posts'>
      <div className={styles.posts__featured}>
        <h2>{t('featured.title')}</h2>
        <FeaturedPost />
      </div>
      <div className={styles.posts__all}>
        <div className={styles.posts__all_header}>
          <h2>{t('all.title')}</h2>
          <Link className={styles.view_all} href={ROUTES.BLOG}>
            {t('all.viewAll')}
          </Link>
        </div>
        <AllPosts />
      </div>
    </section>
  );
};

export default Posts;
