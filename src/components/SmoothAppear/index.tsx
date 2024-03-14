import useSmoothAnimation from '@/hooks/useSmoothAnimation';

import styles from './SmoothAppear.module.scss';
import { SmoothAppearProps } from './types';

const SmoothAppear = ({ children }: SmoothAppearProps) => {
  const [ref, entry] = useSmoothAnimation({
    threshold: 0.15,
    executeOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${styles.smooth} ${!entry?.isIntersecting && `${styles.smooth__start}`}`}
    >
      {children}
    </div>
  );
};

export default SmoothAppear;
