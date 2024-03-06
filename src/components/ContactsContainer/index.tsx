'use client';

import { NextIntlClientProvider } from 'next-intl';

import { ContainerProps } from '@/types';

import ContactForm from './ContactForm';
import ContactsInfo from './ContactInfo';
import ContactsHeader from './ContactsHeader';
import Map from './Map';

const ContactsContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone={timeZone}
      messages={messages}
    >
      <main>
        <ContactsHeader />
        <ContactsInfo />
        <ContactForm />
        <Map />
      </main>
    </NextIntlClientProvider>
  );
};

export default ContactsContainer;
