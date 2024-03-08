const getTranslations = (isPost: boolean) => {
  return isPost ? 'blogPost' : 'authorPost';
};

export default getTranslations;
