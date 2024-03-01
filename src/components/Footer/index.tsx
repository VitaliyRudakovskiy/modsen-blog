import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import footerLinks from '@/constants/footerLinks';
import footerSocialMedia from '@/constants/footerSocialMedia';
import ROUTES from '@/constants/routes';

import FooterForm from '../FooterForm';

import styles from './Footer.module.scss';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__nav}>
        <h4>
          <Link href={ROUTES.HOME}>Modsen Client Blog</Link>
        </h4>
        <ul className={styles.footer__nav_list}>
          {footerLinks.map(({ path, localeName }) => (
            <li key={localeName}>
              <Link href={path}>{t(`links.${localeName}`)}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <FooterForm />
      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottom__links}>
          <p>Finstreet 118 2561 Fintown</p>
          <span>Hello@finsweet.com</span>
          <span>020 7993 2905</span>
        </div>
        <ul className={styles.footer__bottom__social}>
          {footerSocialMedia.map(({ name, image, path }) => (
            <li key={name}>
              <Link href={path} target='_blank'>
                <Image src={image} alt={`${name}-icon`} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;