import ROUTES from '@/constants/routes';

const getLinkBack = (isPost: boolean) => {
  return isPost ? ROUTES.BLOG : ROUTES.HOME;
};

export default getLinkBack;
