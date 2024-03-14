import { blogPosts } from '@/constants/blogPosts';

const getPostCategory = (currentId: number): string => {
  return blogPosts.find(({ id }) => id === currentId)!.category;
};

export default getPostCategory;
