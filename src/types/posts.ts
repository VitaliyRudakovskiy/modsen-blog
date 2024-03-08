import { BlogPost } from '@/types/blogPost';

export type PostsProps = {
  posts: BlogPost[];
  name?: string;
};

export type PostProps = {
  params: {
    id: string;
    locale: string;
  };
};
