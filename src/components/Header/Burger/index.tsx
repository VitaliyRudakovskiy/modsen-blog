import { memo } from 'react';

import styles from './Burger.module.scss';
import { BurgerProps } from './types';

const Burger = ({ isOpen, toggleMenu }: BurgerProps) => {
  return (
    <button
      onClick={toggleMenu}
      className={`${styles.burger} ${isOpen && styles.open}`}
    >
      {Array.from({ length: 3 }, (_, k) => k + 1).map((index) => (
        <span key={index} className={styles.line} />
      ))}
    </button>
  );
};

export default memo(Burger);
