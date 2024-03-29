'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import background from '@/assets/images/blog-post-image.webp';
import SmoothAppear from '@/components/SmoothAppear';
import { LOREM_X11, LOREM_X64 } from '@/constants/quotes';
import ROUTES from '@/constants/routes';

import listElements from './listElements';
import styles from './PostContent.module.scss';

const PostContent = () => {
  const t = useTranslations('blogPost');

  return (
    <SmoothAppear>
      <section className={styles.content} data-cy='post-content'>
        <Image
          className={styles.content__image}
          src={background}
          alt='a team of content writers and a woman staring at you'
          priority
        />
        <div className={styles.content__main}>
          <h2 className={styles.content__title}>{LOREM_X11}</h2>
          <p className={styles.content__info}>{LOREM_X64}</p>
          <h2 className={styles.content__title}>{LOREM_X11}</h2>
          <p className={styles.content__info}>{LOREM_X64}</p>
          <p className={styles.content__info}>{LOREM_X64}</p>
          <ul className={styles.content__list}>
            {listElements.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
          <p className={styles.content__info}>{LOREM_X64}</p>
          <h2 className={styles.content__title}>{LOREM_X11}</h2>
          <p className={styles.content__info}>{LOREM_X64}</p>
          <Link className={styles.content__back} href={ROUTES.BLOG}>
            {t('back')}
          </Link>
        </div>
      </section>
    </SmoothAppear>
  );
};

export default PostContent;
