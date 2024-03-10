'use client';

import { KeyboardEvent, memo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import chooseCategoryCards from '@/constants/chooseCategoryCards';
import ROUTES from '@/constants/routes';

import styles from './Categories.module.scss';
import { CategoriesProps } from './types';

const Categories = ({ name }: CategoriesProps) => {
  const t = useTranslations('chooseCategory');
  const router = useRouter();
  const redirectToCategory = (label: string) => () =>
    router.push(`${ROUTES.CATEGORY}/${label}`);

  const handleKeyDown =
    (label: string) => (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') redirectToCategory(label)();
    };

  return (
    <div className={styles.category__cards} data-cy='category-name'>
      {chooseCategoryCards.map(({ icon, label }) => (
        <div
          key={label}
          className={`${styles.category__card} ${name === label ? styles.active : ''}`}
          onClick={redirectToCategory(label)}
          onKeyDown={handleKeyDown(label)}
          role='button'
          tabIndex={0}
          data-cy={`category-name-${label}`}
        >
          <Image src={icon} alt={label} />
          <p>{t(label)}</p>
        </div>
      ))}
    </div>
  );
};

export default memo(Categories);
