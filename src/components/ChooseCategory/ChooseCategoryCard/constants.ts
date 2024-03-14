import ROUTES from '@/constants/routes';

const transformCategoryCardPath = (label: string) =>
  `${ROUTES.CATEGORY}/${label.toLowerCase()}`;

export default transformCategoryCardPath;
