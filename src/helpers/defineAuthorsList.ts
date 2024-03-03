import allAuthors from '@/constants/allAuthors';

const defineAuthorsList = (isFull: boolean) => {
  return isFull ? allAuthors : allAuthors.slice(0, 4);
};

export default defineAuthorsList;
