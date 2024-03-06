import { useLocale } from 'next-intl';

import LOCALES from '@/constants/locales';

import Select from './Select';

const LocaleSwitcher = () => {
  const locale = useLocale();

  console.log(locale);

  return (
    <Select defaultValue={locale}>
      {LOCALES.map((current) => (
        <option key={current} value={current}>
          {current}
        </option>
      ))}
    </Select>
  );
};

export default LocaleSwitcher;
