'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import tick from '@/assets/icons/tick.png';
import SmoothAppear from '@/components/SmoothAppear';
import Button from '@/UI/Button';
import Input from '@/UI/Input';
import sendEmail from '@/utils/sendEmail';
import contactScheme from '@/zod/contactScheme';
import defaultFields from '@/zod/defaultFields';
import { ContactFormFields } from '@/zod/types';

import { contactFormInputs, contactOptions } from './constants';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const t = useTranslations('contact.form');

  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactScheme),
    defaultValues: defaultFields,
    mode: 'onChange',
  });

  const onSubmit = async ({
    name,
    email,
    topic,
    message,
  }: ContactFormFields) => {
    setDisabled(true);
    setIsLoading(true);

    try {
      await sendEmail(name, email, topic, message);
      setIsSuccessful(true);
    } catch (error) {
      throw new Error(`Something went wrong: ${error}`);
    } finally {
      reset();
      setDisabled(false);
      setIsLoading(false);
      setTimeout(() => {
        setIsSuccessful(false);
      }, 3000);
    }
  };

  return (
    <SmoothAppear>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        data-cy='contact-form'
      >
        <div className={styles.form__inputs}>
          {contactFormInputs.map(({ placeholder, type, name }) => (
            <div key={placeholder}>
              <Input
                {...register(name)}
                placeholder={t(`inputs.${placeholder}`)}
                type={type}
                dataCy={`contact-form-input-${name}`}
              />
              {errors && errors[name] && (
                <p className={styles.form__error} data-cy='contact-form-error'>
                  {t(`errors.${errors[name]?.message}`)}
                </p>
              )}
            </div>
          ))}
        </div>

        <select
          {...register('topic')}
          className={`${styles.form__select} ${styles.form__element}`}
        >
          {contactOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <textarea
          {...register('message')}
          className={`${styles.form__textarea} ${styles.form__element}`}
          placeholder={t('inputs.message')}
          rows={5}
        />
        {errors && errors.message && (
          <p className={styles.form__error} data-cy='contact-form-error'>
            {t(`errors.${errors.message.message}`)}
          </p>
        )}

        {isSuccessful && (
          <div className={styles.success} data-cy='contact-form-success'>
            <Image src={tick} alt='green tick icon' width={40} />
            <p>{t('success')}</p>
          </div>
        )}

        <Button
          className={styles.form__button}
          type='submit'
          variant='primary'
          disabled={disabled || !isValid}
        >
          {isLoading ? t('loading') : t('send')}
        </Button>
      </form>
    </SmoothAppear>
  );
};

export default ContactForm;
