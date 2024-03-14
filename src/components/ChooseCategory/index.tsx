'use client';

import { useTranslations } from 'next-intl';

import SmoothAppear from '@/components/SmoothAppear';
import chooseCategoryCards from '@/constants/chooseCategoryCards';

import styles from './ChooseCategory.module.scss';
import ChooseCategoryCard from './ChooseCategoryCard';

const ChooseCategory = () => {
  const t = useTranslations('chooseCategory');

  return (
    <SmoothAppear>
      <section className={styles.choose_category} data-cy='home-category'>
        <h2>{t('title')}</h2>
        <div className={styles.choose_category__list}>
          {chooseCategoryCards.map(({ icon, label }) => (
            <div key={label}>
              <ChooseCategoryCard icon={icon} label={label} />
            </div>
          ))}
        </div>
      </section>
    </SmoothAppear>
  );
};

export default ChooseCategory;
