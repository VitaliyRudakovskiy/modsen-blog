import { ReactNode } from 'react';

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  dataCy?: string;
  children: string | ReactNode;
  onClick?: () => void;
};
