'use client';

import { memo, useState } from 'react';

import { BlogPost } from '@/types/blogPost';
import { PostsProps } from '@/types/posts';

import Aside from './Aside';
import styles from './CategoryContainer.module.scss';
import CategoryPosts from './CategoryPosts';

const CategoryContainer = ({ posts, name }: PostsProps) => {
  const [currPosts, setCurrPosts] = useState<BlogPost[]>(posts);

  return (
    <section className={styles.categories}>
      <CategoryPosts posts={currPosts} />
      <Aside posts={currPosts} name={name} setPosts={setCurrPosts} />
    </section>
  );
};

export default memo(CategoryContainer);
