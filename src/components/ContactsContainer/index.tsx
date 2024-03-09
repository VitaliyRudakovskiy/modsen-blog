'use client';

import { memo } from 'react';

import { ContainerProps } from '@/types';

import DynamicContainer from '../DynamicContainer';

import ContactForm from './ContactForm';
import ContactsInfo from './ContactInfo';
import ContactsHeader from './ContactsHeader';
import Map from './Map';

const ContactsContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  return (
    <DynamicContainer locale={locale} timeZone={timeZone} messages={messages}>
      <ContactsHeader />
      <ContactsInfo />
      <ContactForm />
      <Map />
    </DynamicContainer>
  );
};

export default memo(ContactsContainer);
