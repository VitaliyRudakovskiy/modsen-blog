'use client';

import { useTranslations } from 'next-intl';

import Button from '@/UI/Button';

import styles from './FooterForm.module.scss';

const FooterForm = () => {
  const t = useTranslations();

  return (
    <div className={styles.form__container}>
      <form className={styles.form}>
        <h2>{t(`footer.form.title`)}</h2>
        <div className={styles.form__content}>
          <input
            className={styles.form__content_input}
            type='email'
            placeholder={t(`footer.form.inputPlaceholder`)}
            name='user_email'
          />
          <Button variant='primary' type='submit'>
            {t(`footer.form.buttonText`)}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FooterForm;
