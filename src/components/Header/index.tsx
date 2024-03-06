'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import headerLinks from '@/constants/headerLinks';
import ROUTES from '@/constants/routes';

import VideoModal from '../VideoModal';

import styles from './Header.module.scss';

const Header = () => {
  const t = useTranslations('header');

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h4>
          <Link href={ROUTES.HOME}>Modsen Client Blog</Link>
        </h4>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          {headerLinks.map(({ path, localeName }) => (
            <li key={localeName}>
              <Link href={path}>{t(`links.${localeName}`)}</Link>
            </li>
          ))}
        </ul>

        <VideoModal />
      </nav>
    </header>
  );
};

export default Header;
