'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import SmoothAppear from '@/components/SmoothAppear';
import { blogPosts, postsPerPage } from '@/constants/blogPosts';

import BlogPost from './BlogPost';
import styles from './BlogPosts.module.scss';

const BlogPosts = () => {
  const t = useTranslations('blogPosts');
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const start = page * postsPerPage;
  const finish = start + postsPerPage;
  const shownPosts = blogPosts.slice(start, finish);

  const pagePrevClick = () => setPage((prevPage) => prevPage - 1);
  const pageNextClick = () => setPage((prevPage) => prevPage + 1);

  return (
    <SmoothAppear>
      <section className={styles.posts} data-cy='blog-posts'>
        <h1>{t('title')}</h1>
        <div className={styles.posts__divider} />
        <div className={styles.posts__list}>
          {shownPosts.map(({ id, image, category, title }) => (
            <BlogPost
              key={id}
              id={id}
              image={image}
              category={category}
              title={title}
            />
          ))}
        </div>
        <div className={styles.posts__buttons}>
          <button
            onClick={pagePrevClick}
            disabled={page === 0}
            type='button'
            data-cy='blog-prev'
          >
            {t('prev')}
          </button>
          <button
            onClick={pageNextClick}
            disabled={page === totalPages - 1}
            type='button'
            data-cy='blog-next'
          >
            {t('next')}
          </button>
        </div>
      </section>
    </SmoothAppear>
  );
};

export default BlogPosts;
