import { ReactNode } from 'react';

export type ButtonProps = {
  variant: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  dataCy?: string;
  children: string | ReactNode;
};
