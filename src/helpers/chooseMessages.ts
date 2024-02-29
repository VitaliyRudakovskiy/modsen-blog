import { AbstractIntlMessages } from 'next-intl';

const chooseMessages = (messages: AbstractIntlMessages, namespace: string) => {
  const result: Record<string, string | AbstractIntlMessages> = {};

  Object.keys(messages).forEach((key) => {
    if (key.startsWith(namespace)) {
      result[key] = messages[key];
    }
  });
  return result;
};

export default chooseMessages;
