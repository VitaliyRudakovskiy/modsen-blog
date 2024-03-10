'use client';

import { ChangeEvent, memo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import ROUTES from '@/constants/routes';
import { BlogPost } from '@/types/blogPost';
import { PostsProps } from '@/types/posts';
import Button from '@/UI/Button';

import styles from './Searchbar.module.scss';

const Searchbar = ({ posts }: PostsProps) => {
  const t = useTranslations('category');

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      const lowerCaseQuery = e.target.value.toLowerCase();
      const newFilteredPosts = posts.filter(({ tags }) =>
        tags!.some((tag) => tag.toLowerCase().includes(lowerCaseQuery))
      );
      setFilteredPosts(newFilteredPosts);
    } else {
      setFilteredPosts([]);
    }
  };

  return (
    <div className={styles.searchbar} data-cy='category-searchbar'>
      <div className={styles.searchbar__header}>
        <input
          className={styles.searchbar__input}
          type='text'
          placeholder={t('placeholder')}
          value={searchQuery}
          onChange={handleSearch}
        />
        <Button variant='primary'>{t('button')}</Button>
      </div>

      <div className={styles.dropdown}>
        {filteredPosts.map(({ id, image, title, tags }) => (
          <div
            key={id}
            className={styles.dropdown__item}
            data-cy={`searched-post-${id}`}
          >
            <Image src={image} alt={title} width={80} height={50} />
            <div>
              <Link href={`${ROUTES.BLOG}/${id}`}>
                <h6 className={styles.dropdown__title}>
                  {title.slice(0, 30)}...
                </h6>
              </Link>
              <div className={styles.dropdown__tags}>{tags!.join(', ')}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Searchbar);
