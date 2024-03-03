import Image from 'next/image';

import { LOREM_X19 } from '@/constants/quotes';

import styles from './SliderPage.module.scss';
import { SliderPageProps } from './types';

const SliderPage = ({ image, author, place, isActive }: SliderPageProps) => {
  return (
    <div className={`${styles.slider_page} ${isActive ? styles.active : ''}`}>
      <h4>{LOREM_X19}</h4>
      <div className={styles.slider_page__content}>
        <Image className={styles.slider_page__image} src={image} alt={author} />
        <div>
          <h4>{author}</h4>
          <p>{place}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;
