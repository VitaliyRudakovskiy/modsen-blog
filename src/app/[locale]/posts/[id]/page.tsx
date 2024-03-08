import { useMessages, useTimeZone } from 'next-intl';

import BlogPostContainer from '@/components/BlogPostContainer';
import NoPost from '@/components/NoInfo';
import getCurrentPost from '@/helpers/getCurrentPost';
import { PostProps } from '@/types/posts';

const Post = ({ params: { locale, id } }: PostProps) => {
  const messages = useMessages();
  const timeZone = useTimeZone() as string;

  const currentPost = getCurrentPost(id);

  if (!currentPost) return <NoPost isPost />;

  return (
    <BlogPostContainer
      locale={locale}
      timeZone={timeZone}
      messages={messages}
      currentPost={currentPost}
    />
  );
};

export default Post;
