import Image from 'next/image';
import Link from 'next/link';

import { DUIS_X22 } from '@/constants/quotes';
import ROUTES from '@/constants/routes';

import styles from './BlogPost.module.scss';
import { BlogPostProps } from './types';

const BlogPost = ({ id, image, category, title }: BlogPostProps) => {
  return (
    <div className={styles.post} data-cy={`blog-post-${id}`}>
      <Image
        className={styles.post__image}
        src={image}
        alt='blog post image'
        priority
      />
      <div className={styles.post__main}>
        <h6>{category}</h6>
        <Link href={`${ROUTES.BLOG}/${id}`} data-cy={`blog-post-title-${id}`}>
          <h2>{title}</h2>
        </Link>
        <p>{DUIS_X22}</p>
      </div>
    </div>
  );
};

export default BlogPost;
