'use client';

import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useTranslations } from 'next-intl';

import emailPattern from '@/constants/emailPattern';
import Button from '@/UI/Button';
import subscribe from '@/utils/subsribe';

import styles from './FooterForm.module.scss';

const FooterForm = () => {
  const t = useTranslations('footer.form');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setIsValidEmail(emailPattern.test(e.target.value));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await subscribe(input);
    } catch (error) {
      throw new Error(`Something went wrong: ${error}`);
    } finally {
      setInput('');
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.form__container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>{t('title')}</h2>
        <div className={styles.form__content}>
          <input
            value={input}
            onChange={handleChange}
            className={styles.form__content_input}
            type='email'
            placeholder={t('inputPlaceholder')}
            data-cy='footer-input'
          />
          <Button
            variant='primary'
            type='submit'
            disabled={!isValidEmail || isLoading}
            dataCy='footer-subscribe-button'
          >
            {t('buttonText')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FooterForm;
