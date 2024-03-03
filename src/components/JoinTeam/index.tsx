import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LOREM_X12 } from '@/constants/quotes';
import ROUTES from '@/constants/routes';
import Button from '@/UI/Button';

import styles from './JoinTeam.module.scss';

const JoinTeam = () => {
  const t = useTranslations('joinTeam');

  return (
    <section className={styles.join_team}>
      <h2>{t('title')}</h2>
      <p>{LOREM_X12}</p>
      <Button variant='primary'>
        <Link href={ROUTES.CONTACT_US}>{t('button')}</Link>
      </Button>
    </section>
  );
};

export default JoinTeam;
