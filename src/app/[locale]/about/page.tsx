import { useMessages, useTimeZone } from 'next-intl';
import { unstable_setRequestLocale as setLocale } from 'next-intl/server';

import AboutContainer from '@/components/AboutContainer';
import { LocaleParams } from '@/types';

const About = ({ params: { locale } }: LocaleParams) => {
  setLocale(locale);
  const messages = useMessages();
  const timeZone = useTimeZone() as string;

  return (
    <AboutContainer locale={locale} timeZone={timeZone} messages={messages} />
  );
};

export default About;
