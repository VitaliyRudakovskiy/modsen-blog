'use client';

import Image from 'next/image';
import Link from 'next/link';

import { LOREM_X8 } from '@/constants/quotes';
import transformCategoryCardPath from '@/helpers/transformCategoryCardPath';

import styles from './ChooseCategoryCard.module.scss';
import { CardProps } from './types';

const ChooseCategoryCard = ({ icon, label }: CardProps) => {
  const path = transformCategoryCardPath(label);

  return (
    <div className={styles.card}>
      <Link href={path}>
        <Image className={styles.card__image} src={icon} alt={label} />
        <h3 className={styles.card__title}>{label}</h3>
        <p className={styles.card__text}>{LOREM_X8}</p>
      </Link>
    </div>
  );
};

export default ChooseCategoryCard;
