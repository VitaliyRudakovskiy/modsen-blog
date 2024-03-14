import Link from 'next/link';
import { useTranslations } from 'next-intl';

import SmoothAppear from '@/components/SmoothAppear';
import { LOREM_X12 } from '@/constants/quotes';
import ROUTES from '@/constants/routes';
import Button from '@/UI/Button';

import styles from './JoinTeam.module.scss';

const JoinTeam = () => {
  const t = useTranslations('joinTeam');

  return (
    <SmoothAppear>
      <section className={styles.join_team} data-cy='join-team'>
        <h2>{t('title')}</h2>
        <p>{LOREM_X12}</p>
        <Button variant='primary' dataCy='join-now'>
          <Link href={ROUTES.CONTACT_US}>{t('button')}</Link>
        </Button>
      </section>
    </SmoothAppear>
  );
};

export default JoinTeam;
