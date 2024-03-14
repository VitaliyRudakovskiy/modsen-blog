import { useEffect, useRef, useState } from 'react';

import { SmootheReturnType, SmoothOptions } from './types';

const useSmoothAnimation = ({
  root = null,
  rootMargin = '0%',
  threshold = 0,
  executeOnce = false,
}: SmoothOptions): SmootheReturnType => {
  const [ref, setRef] = useState<Element | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const hasExecuted = useRef(false);

  const thresholdString = JSON.stringify(threshold);
  useEffect(() => {
    if (
      !ref ||
      !window.IntersectionObserver ||
      (executeOnce && hasExecuted.current)
    )
      return;

    const observer = new IntersectionObserver(
      ([obserserEntry]) => {
        setEntry(obserserEntry);

        if (obserserEntry.isIntersecting && executeOnce) {
          observer.disconnect();
          hasExecuted.current = true;
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [root, rootMargin, thresholdString, ref, executeOnce, entry, threshold]);

  return [setRef, entry];
};

export default useSmoothAnimation;
