import { ContainerProps } from '@/types';
import { BlogPost } from '@/types/blogPost';

export type BlogPostContainerProps = ContainerProps & {
  currentPost: BlogPost;
};
