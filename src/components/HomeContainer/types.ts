import { AbstractIntlMessages } from 'next-intl';

export type HomeContainerProps = {
  locale: string;
  messages: AbstractIntlMessages;
  timeZone: string;
};
