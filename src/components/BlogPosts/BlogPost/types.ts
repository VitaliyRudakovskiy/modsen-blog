import { BlogPost } from '@/types/blogPost';

export type BlogPostProps = Omit<BlogPost, 'createdAt' | 'author'>;
