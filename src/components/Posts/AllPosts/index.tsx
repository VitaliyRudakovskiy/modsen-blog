import postCards from '@/constants/postCards';

import PostCard from './PostCard';

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
