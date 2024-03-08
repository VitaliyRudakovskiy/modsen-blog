import { useMessages, useTimeZone } from 'next-intl';

import AuthorContainer from '@/components/AuthorContainer';
import NoInfo from '@/components/NoInfo';
import getCurrentAuthor from '@/helpers/getCurrentAuthor';
import { PostProps } from '@/types/posts';

const Authors = ({ params: { locale, id } }: PostProps) => {
  const messages = useMessages();
  const timeZone = useTimeZone() as string;

  const currentAuthor = getCurrentAuthor(id);

  if (!currentAuthor) return <NoInfo isPost={false} />;

  return (
    <AuthorContainer
      locale={locale}
      timeZone={timeZone}
      messages={messages}
      currentAuthor={currentAuthor}
    />
  );
};

export default Authors;
