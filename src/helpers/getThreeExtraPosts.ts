import { blogPosts } from '@/constants/blogPosts';

const getThreeExtraPosts = (currentId: number, postCategory: string) => {
  const filteredPosts = blogPosts.filter(
    ({ id, category }) => id !== currentId && category === postCategory
  );

  const filteredLength = filteredPosts.length;
  if (filteredPosts.length >= 3) return filteredPosts.slice(0, 3);

  const otherPosts = blogPosts
    .filter(({ id, category }) => id !== currentId && category !== postCategory)
    .slice(0, 3 - filteredLength);

  return [...filteredPosts, ...otherPosts];
};

export default getThreeExtraPosts;
