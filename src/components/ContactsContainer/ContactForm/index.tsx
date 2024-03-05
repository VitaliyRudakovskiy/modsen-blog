'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';

import contactFormInputs from '@/constants/contactFormInputs';
import contactOptions from '@/constants/contactOptions';
import Button from '@/UI/Button';
import Input from '@/UI/Input';
import contactScheme from '@/yup/contactScheme';
import defaultFields from '@/yup/defaultFields';
import { ContactFormFields } from '@/yup/types';

import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const t = useTranslations('contact.form');
  const [disabled, setDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(contactScheme),
    defaultValues: defaultFields,
    mode: 'onChange',
  });

  const onSubmit = async ({
    email,
    message,
    name,
    place,
  }: ContactFormFields) => {
    console.log(email);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__inputs}>
        {contactFormInputs.map(({ placeholder, type, inputName }) => (
          <div key={placeholder} className={styles.form__inputs__input}>
            <Input
              {...register(inputName)}
              placeholder={placeholder}
              type={type}
              inputName={inputName}
            />
            {errors && errors[inputName] && <p>{errors[inputName]?.message}</p>}
          </div>
        ))}
      </div>
      <select
        className={`${styles.form__select} ${styles.form__element}`}
        {...register('topic')}
      >
        {contactOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <textarea
        className={`${styles.form__textarea} ${styles.form__element}`}
        placeholder={t('inputs.message')}
        {...register('message')}
      />
      {errors && errors.message && (
        <p data-cy='error' className={styles.error}>
          {t(`errors.${errors.message.message}`)}
        </p>
      )}
      <Button
        className={styles.form__button}
        type='submit'
        variant='primary'
        // disabled={disabled || !isValid}
      >
        {t('send')}
      </Button>
    </form>
  );
};

export default ContactForm;
