import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>
      <div>
        <Link href='/about'>About</Link>
      </div>
    </main>
  );
};

export default Home;
