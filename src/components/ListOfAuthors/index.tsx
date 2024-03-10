'use client';

import { memo } from 'react';
import { useTranslations } from 'next-intl';

import defineAuthorsList from '@/helpers/defineAuthorsList';

import AuthorCard from './AuthorCard';
import styles from './ListOfAuthors.module.scss';
import { ListOfAuthorsProps } from './types';

const ListOfAuthors = ({ isFull = false }: ListOfAuthorsProps) => {
  const t = useTranslations('authors');
  const authors = defineAuthorsList(isFull);

  return (
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
  );
};

export default memo(ListOfAuthors);
