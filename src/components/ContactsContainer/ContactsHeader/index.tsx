'use client';

import { useTranslations } from 'next-intl';

import { LOREM_X32 } from '@/constants/quotes';

import styles from './ContactsHeader.module.scss';

const ContactsHeader = () => {
  const t = useTranslations('contact');

  return (
    <section className={styles.header} data-cy='contact-header'>
      <div className={styles.header__content}>
        <h6 className={styles.header__subtitle}>{t('subtitle')}</h6>
        <h1 className={styles.header__title}>{t('title')}</h1>
        <p className={styles.header__text}>{LOREM_X32}</p>
      </div>
    </section>
  );
};

export default ContactsHeader;
