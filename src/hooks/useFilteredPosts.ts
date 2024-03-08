import { Dispatch, SetStateAction, useEffect } from 'react';

import { BlogPost } from '@/types/blogPost';

const useFilteredPosts = (
  initialPosts: BlogPost[],
  chosenTags: string[],
  setPosts: Dispatch<SetStateAction<BlogPost[]>>
) => {
  useEffect(() => {
    if (chosenTags.length) {
      const filteredPosts = initialPosts.filter(({ tags }) =>
        chosenTags.every((tag) => tags!.includes(tag))
      );
      setPosts(filteredPosts);
    } else {
      setPosts(initialPosts);
    }
  }, [initialPosts, chosenTags, setPosts]);
};

export default useFilteredPosts;
