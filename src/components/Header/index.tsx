'use client';

import { useState } from 'react';
import Link from 'next/link';

import ROUTES from '@/constants/routes';

import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h4>
          <Link href={ROUTES.HOME}>Modsen Client Blog</Link>
        </h4>
      </div>
    </header>
  );
};

export default Header;
