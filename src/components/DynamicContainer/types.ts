import { ReactNode } from 'react';
import { AbstractIntlMessages } from 'next-intl';

export type DynamicComponentWrapperProps = {
  children: ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
  timeZone: string;
};
