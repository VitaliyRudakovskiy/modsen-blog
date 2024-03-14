import headerLinks from '@/constants/headerLinks';
import ROUTES from '@/constants/routes';

const footerLinks = [
  ...headerLinks,
  { path: ROUTES.PRIVACY_POLICY, localeName: 'privacy' },
];

export default footerLinks;
