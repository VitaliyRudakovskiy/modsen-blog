import Link from 'next/link';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';

import CategoryContainer from '@/components/CategoryContainer';
import { blogPosts } from '@/constants/blogPosts';
import { LOREM_X19 } from '@/constants/quotes';
import ROUTES from '@/constants/routes';

import styles from './Category.module.scss';
import { CategoryProps } from './types';

const Category = ({ params: { name } }: CategoryProps) => {
  const t = useTranslations('category');
  const messages = useMessages();

  const sortedPosts = blogPosts.filter(
    ({ category }) => category.toLowerCase() === name
  );

  return (
    <main className={styles.category}>
      <section className={styles.category__header}>
        <h1>{t(name)}</h1>
        <p>{LOREM_X19}</p>
        <span>
          <Link className={styles.category__link} href={ROUTES.BLOG}>
            {t('blog')} {t(name)}
          </Link>
        </span>
      </section>
      <NextIntlClientProvider messages={messages}>
        <CategoryContainer posts={sortedPosts} name={name} />
      </NextIntlClientProvider>
    </main>
  );
};

export default Category;
