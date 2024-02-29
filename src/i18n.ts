import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import LOCALES from './constants/locales';

export default getRequestConfig(async ({ locale }) => {
  if (!LOCALES.includes(locale)) notFound();

  return {
    messages: (
      await (locale === 'en'
        ? import('../messages/en.json')
        : import(`../messages/${locale}.json`))
    ).default,
    timeZone: 'Europe/Warsaw',
  };
});
