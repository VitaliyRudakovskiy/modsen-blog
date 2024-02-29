import { ReactNode } from 'react';

export type LocaleLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};
