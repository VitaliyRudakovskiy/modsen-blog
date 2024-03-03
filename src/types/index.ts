import { AbstractIntlMessages } from 'next-intl';

export type LocaleProps = {
  locale: string;
};

export type LocaleParams = {
  params: LocaleProps;
};

export type onClickProps = {
  onClick: () => void;
};

export type ContainerProps = {
  locale: string;
  messages: AbstractIntlMessages;
  timeZone: string;
};
