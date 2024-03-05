import { useMessages, useTimeZone } from 'next-intl';
import { unstable_setRequestLocale as setLocale } from 'next-intl/server';

import ContactsContainer from '@/components/ContactsContainer';
import { LocaleParams } from '@/types';

const Contact = ({ params: { locale } }: LocaleParams) => {
  setLocale(locale);
  const messages = useMessages();
  const timeZone = useTimeZone() as string;

  return (
    <ContactsContainer
      locale={locale}
      timeZone={timeZone}
      messages={messages}
    />
  );
};

export default Contact;
