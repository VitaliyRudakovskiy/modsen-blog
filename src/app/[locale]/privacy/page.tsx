import { unstable_setRequestLocale as setLocale } from 'next-intl/server';

import PrivacyPolicy from '@/components/PrivacyPolicy';
import { LocaleParams } from '@/types';

const Privacy = ({ params: { locale } }: LocaleParams) => {
  setLocale(locale);

  return <PrivacyPolicy />;
};

export default Privacy;
