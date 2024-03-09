import { useLocale } from 'next-intl';

import LOCALES from '@/constants/locales';
import { usePathname, useRouter } from '@/constants/navigationConfig';

import styles from './LocaleSwitcher.module.scss';

const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onButtonClick = (newLocale: string) => () => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className={styles.locales}>
      {LOCALES.map((currLocale) => (
        <div
          role='button'
          className={`${styles.locales__option} ${currLocale === locale ? styles.locales__option__active : ''}`}
          key={currLocale}
          onClick={onButtonClick(currLocale)}
          onKeyDown={onButtonClick(currLocale)}
          tabIndex={0}
        >
          {currLocale}
        </div>
      ))}
    </div>
  );
};

export default LocaleSwitcher;
