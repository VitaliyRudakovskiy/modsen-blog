'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import footerSocialMedia from '@/constants/footerSocialMedia';
import ROUTES from '@/constants/routes';

import styles from './AuthorCard.module.scss';
import { AuthorCardProps } from './types';

const AuthorCard = ({ id, logo, name, role }: AuthorCardProps) => {
  return (
    <div className={styles.card}>
      <Image className={styles.card__image} src={logo} alt={name} />
      <Link href={`${ROUTES.AUTHORS}/${id}`} data-cy='home-author-card'>
        <h4 className={styles.card__title}>{name}</h4>
      </Link>
      <p>{role} @Company</p>
      <ul className={styles.card__links}>
        {footerSocialMedia.map(({ path, image, name: linkName }) => (
          <li key={path}>
            <Link href={path} target='_blank'>
              <Image src={image} alt={linkName} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(AuthorCard);
