import { MouseEventHandler } from 'react';

export type BurgerProps = {
  isOpen: boolean;
  toggleMenu: MouseEventHandler<HTMLButtonElement>;
};
