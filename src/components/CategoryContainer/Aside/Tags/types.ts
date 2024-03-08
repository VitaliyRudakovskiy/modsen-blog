import { Dispatch, SetStateAction } from 'react';

import { BlogPost } from '@/types/blogPost';

export type TagsProps = {
  posts: BlogPost[];
  setPosts: Dispatch<SetStateAction<BlogPost[]>>;
};
