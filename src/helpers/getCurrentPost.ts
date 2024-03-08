import { blogPosts } from '@/constants/blogPosts';

const getCurrentPost = (id: string) => {
  return blogPosts.find((post) => post.id === +id);
};

export default getCurrentPost;
