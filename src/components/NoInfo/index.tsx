'use client';

import { memo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import getLinkBack from '@/helpers/getLinkBack';
import getTranslations from '@/helpers/getTranslations';
import Button from '@/UI/Button';

import styles from './NoInfo.module.scss';
import { NoInfoProps } from './types';

const NoInfo = ({ isPost }: NoInfoProps) => {
  const translations = getTranslations(isPost);
  const t = useTranslations(translations);

  const link = getLinkBack(isPost);

  return (
    <section className={styles.nopost}>
      <h1>{t('noData')}</h1>
      <Button variant='primary'>
        <Link className={styles.link} href={link}>
          {t('back')}
        </Link>
      </Button>
    </section>
  );
};

export default memo(NoInfo);
