import allAuthors from '@/constants/allAuthors';

const getCurrentAuthor = (id: string) => {
  return allAuthors.find((author) => author.id === +id);
};

export default getCurrentAuthor;
