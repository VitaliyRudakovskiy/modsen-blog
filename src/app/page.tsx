import { redirect } from 'next/navigation';

import ROUTES from '@/constants/routes';

const RootPage = () => {
  redirect(ROUTES.EN);
};

export default RootPage;
