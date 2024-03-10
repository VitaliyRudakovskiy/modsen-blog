'use client';

import { memo, useRef, useState } from 'react';

import TAGS from '@/constants/tags';
import useFilteredPosts from '@/hooks/useFilteredPosts';
import { BlogPost } from '@/types/blogPost';
import Button from '@/UI/Button';

import styles from './Tags.module.scss';
import { TagsProps } from './types';

const Tags = ({ posts, setPosts }: TagsProps) => {
  const [chosenTags, setChosenTags] = useState<string[]>([]);
  const initialPosts = useRef<BlogPost[]>(posts);

  useFilteredPosts(initialPosts.current, chosenTags, setPosts);

  const filterByTags = (tag: string) => () => {
    setChosenTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((prevTag) => prevTag !== tag);
      }
      return [...prevTags, tag];
    });
  };

  const clearTags = () => {
    setChosenTags([]);
    setPosts(initialPosts.current);
  };

  return (
    <div className={styles.tags}>
      {Object.values(TAGS).map((tag) => (
        <button
          key={tag}
          onClick={filterByTags(tag)}
          className={`${styles.tag} ${chosenTags.includes(tag) ? styles.tag__active : ''}`}
          type='button'
          data-cy='category-tag'
        >
          {tag}
        </button>
      ))}
      <Button variant='primary' onClick={clearTags}>
        Clear tags
      </Button>
    </div>
  );
};

export default memo(Tags);
