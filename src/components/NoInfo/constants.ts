import ROUTES from '@/constants/routes';

export const getTranslations = (isPost: boolean) => {
  return isPost ? 'blogPost' : 'authorPost';
};

export const getLinkBack = (isPost: boolean) => {
  return isPost ? ROUTES.BLOG : ROUTES.HOME;
};
