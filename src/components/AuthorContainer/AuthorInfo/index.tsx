'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import footerSocialMedia from '@/constants/footerSocialMedia';
import { LOREM_X32 } from '@/constants/quotes';

import { AuthorProps } from '../types';

import styles from './AuthorInfo.module.scss';

const AuthorInfo = ({ currentAuthor }: AuthorProps) => {
  const t = useTranslations('authorPost');
  const { name, logo } = currentAuthor;

  return (
    <section className={styles.author}>
      <div className={styles.author__content}>
        <Image
          className={styles.author__content__image}
          src={logo}
          alt='author picture'
        />
        <div>
          <h1 className={styles.author__header}>{t('title', { name })}</h1>
          <p className={styles.author__text}>{LOREM_X32}</p>
          <ul className={styles.author__links}>
            {footerSocialMedia.map(({ path, image, name: linkName }) => (
              <li key={linkName}>
                <Link href={path} target='_blank' rel='noopener noreferrer'>
                  <Image src={image} alt={linkName} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(AuthorInfo);
