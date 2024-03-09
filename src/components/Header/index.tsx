'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import headerLinks from '@/constants/headerLinks';
import ROUTES from '@/constants/routes';
import isLinkActive from '@/helpers/isLinkActive';

import LocaleSwitcher from '../LocaleSwitcher';
import VideoModal from '../VideoModal';

import styles from './Header.module.scss';

const Header = () => {
  const t = useTranslations('header');
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h4>
          <Link href={ROUTES.HOME}>Modsen Client Blog</Link>
        </h4>
        <LocaleSwitcher />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          {headerLinks.map(({ path, localeName }) => (
            <li key={localeName}>
              <Link
                className={isLinkActive(path, pathname) ? styles.active : ''}
                href={path}
              >
                {t(`links.${localeName}`)}
              </Link>
            </li>
          ))}
        </ul>

        <VideoModal />
      </nav>
    </header>
  );
};

export default Header;
