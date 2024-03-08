'use client';

import { useTranslations } from 'next-intl';

import styles from './Aside.module.scss';
import Categories from './Categories';
import Searchbar from './Searchbar';
import Tags from './Tags';
import { AsideProps } from './types';

const Aside = ({ posts, name, setPosts }: AsideProps) => {
  const t = useTranslations('category');

  return (
    <aside className={styles.category__aside}>
      <Searchbar posts={posts} />
      <h2>{t('title')}</h2>
      <Categories name={name} />
      <h2>{t('tagsTitle')}</h2>
      <Tags posts={posts} setPosts={setPosts} />
    </aside>
  );
};

export default Aside;
