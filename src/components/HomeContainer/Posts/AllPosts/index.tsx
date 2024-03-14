'use client';

import PostCard from './PostCard';
import postCards from './postCards';

const AllPosts = () => {
  return (
    <div>
      {postCards.map(({ id }) => (
        <PostCard key={id} id={id} />
      ))}
    </div>
  );
};

export default AllPosts;
