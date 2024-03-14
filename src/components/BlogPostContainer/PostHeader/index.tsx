'use client';

import { memo } from 'react';
import Image from 'next/image';

import defineAuthorImage from './helpers';
import styles from './PostHeader.module.scss';
import { HeaderProps } from './types';

const PostHeader = ({ currentPost }: HeaderProps) => {
  const { category, createdAt, title, icon, author } = currentPost;
  const authorImage = defineAuthorImage(author);

  return (
    <div className={styles.header} data-cy='post-header'>
      <div className={styles.header__info}>
        <Image
          src={authorImage}
          alt='author profile picture'
          width={70}
          height={70}
        />
        <div className={styles.header__info__posted}>
          <p>{author}</p>
          <span>Posted at {createdAt}</span>
        </div>
      </div>
      <h1 className={styles.header__title}>{title}</h1>
      <div className={styles.header__category}>
        <Image src={icon!} alt='post category icon' />
        <span>{category}</span>
      </div>
    </div>
  );
};

export default memo(PostHeader);
