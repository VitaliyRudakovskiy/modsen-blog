'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import headerLinks from '@/constants/headerLinks';
import ROUTES from '@/constants/routes';
import isLinkActive from '@/helpers/isLinkActive';

import LocaleSwitcher from '../LocaleSwitcher';
import VideoModal from '../VideoModal';

import Burger from './Burger';
import styles from './Header.module.scss';

const Header = () => {
  const t = useTranslations('header');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevOpen) => !prevOpen);

  return (
    <header className={styles.header} data-cy='header'>
      <div className={styles.title}>
        <h4>
          <Link href={ROUTES.HOME}>Modsen Client Blog</Link>
        </h4>
        <LocaleSwitcher />
      </div>
      <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.nav__list}>
          {headerLinks.map(({ path, localeName }) => (
            <li key={localeName}>
              <Link
                className={isLinkActive(path, pathname) ? styles.active : ''}
                href={path}
                onClick={toggleMenu}
              >
                {t(`links.${localeName}`)}
              </Link>
            </li>
          ))}
        </ul>

        <VideoModal setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
};

export default Header;
