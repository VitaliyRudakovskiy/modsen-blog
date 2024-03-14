'use client';

import { memo } from 'react';
import { useTranslations } from 'next-intl';

import SmoothAppear from '@/components/SmoothAppear';
import getThreeExtraPosts from '@/helpers/getThreeExtraPosts';

import ExtraPost from './ExtraPost';
import getPostCategory from './helpers';
import styles from './ReadNext.module.scss';
import { ReadNextProps } from './types';

const ReadNext = ({ id }: ReadNextProps) => {
  const t = useTranslations('blogPost');

  const postCategory = getPostCategory(id);
  const extraPosts = getThreeExtraPosts(id, postCategory);

  return (
    <SmoothAppear>
      <section className={styles.next} data-cy='post-read-next'>
        <h2 className={styles.next__title}>{t('readNext')}</h2>
        <div className={styles.next__extra}>
          {extraPosts.map((post) => (
            <ExtraPost key={post.id} post={post} />
          ))}
        </div>
      </section>
    </SmoothAppear>
  );
};

export default memo(ReadNext);
