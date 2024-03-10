'use client';

import { memo } from 'react';
import { useTranslations } from 'next-intl';

import BlogPost from '@/components/BlogContainer/BlogPosts/BlogPost';
import { PostsProps } from '@/types/posts';

import styles from './CategoryPosts.module.scss';

const CategoryPosts = ({ posts }: PostsProps) => {
  const t = useTranslations('category');

  return (
    <section className={styles.category__main} data-cy='category-posts'>
      <div className={styles.category__posts}>
        {posts.length ? (
          posts.map(({ image, category, title, id }) => (
            <BlogPost
              key={id}
              category={category}
              image={image}
              title={title}
              id={id}
            />
          ))
        ) : (
          <h2>{t('noPosts')}</h2>
        )}
      </div>
    </section>
  );
};

export default memo(CategoryPosts);
