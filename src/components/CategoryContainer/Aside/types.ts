import { Dispatch, SetStateAction } from 'react';

import { BlogPost } from '@/types/blogPost';
import { PostsProps } from '@/types/posts';

export type AsideProps = PostsProps & {
  setPosts: Dispatch<SetStateAction<BlogPost[]>>;
};
