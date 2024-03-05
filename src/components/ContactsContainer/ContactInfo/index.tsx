'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import styles from './ContactsInfo.module.scss';

const ContactsInfo = () => {
  const t = useTranslations('contact');

  return (
    <section className={styles.info}>
      <div>
        <h6 className={styles.info__title}>{t('hours')}</h6>
        <div className={styles.info__column}>
          <span>{t('days')}</span>
          <span>{t('time')} </span>
          <p>{t('support')}</p>
        </div>
      </div>
      <div>
        <h6 className={styles.info__title}>{t('subtitle')}</h6>
        <div className={styles.info__column}>
          <Link href='tel:+375291112233'>020 7993 2905</Link>
          <Link href='mailto:hello@finsweet.com'>hello@finsweet.com</Link>
        </div>
      </div>
    </section>
  );
};

export default ContactsInfo;
