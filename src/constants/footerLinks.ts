import headerLinks from './headerLinks';
import ROUTES from './routes';

const footerLinks = [
  ...headerLinks,
  { path: ROUTES.PRIVACY_POLICY, localeName: 'privacy' },
];

export default footerLinks;
