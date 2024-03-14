import { blogPosts } from '@/constants/blogPosts';

const getAuthorPosts = (name: string) => {
  return blogPosts.filter(({ author }) => author === name);
};

export default getAuthorPosts;
