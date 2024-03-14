'use client';

import { memo } from 'react';
import { useTranslations } from 'next-intl';

import SmoothAppear from '@/components/SmoothAppear';

import AuthorCard from './AuthorCard';
import defineAuthorsList from './constants';
import styles from './ListOfAuthors.module.scss';
import { ListOfAuthorsProps } from './types';

const ListOfAuthors = ({ isFull = false }: ListOfAuthorsProps) => {
  const t = useTranslations('authors');
  const authors = defineAuthorsList(isFull);

  return (
    <SmoothAppear>
      <section className={styles.authors} data-cy='list-of-authors'>
        <h2>{t('title')}</h2>
        <div className={styles.authors__list}>
          {authors.map(({ id, logo, name }) => (
            <AuthorCard
              key={id}
              id={id}
              logo={logo}
              name={name}
              role={t('role')}
            />
          ))}
        </div>
      </section>
    </SmoothAppear>
  );
};

export default memo(ListOfAuthors);
