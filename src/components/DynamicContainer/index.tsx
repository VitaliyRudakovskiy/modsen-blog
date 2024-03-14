import { Children, useEffect, useRef, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';

import { DynamicComponentWrapperProps } from './types';

const DynamicContainer = ({
  children,
  messages,
  locale,
  timeZone,
}: DynamicComponentWrapperProps) => {
  const [showItems, setShowItems] = useState(1);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setShowItems((prev) => prev + 1);
      },
      { threshold: 1 }
    );

    const target = observerTarget.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={timeZone}
    >
      <div>
        {Children.toArray(children).map((child, index) => {
          if (index < showItems) return child;
          return null;
        })}
        <div ref={observerTarget} />
      </div>
    </NextIntlClientProvider>
  );
};

export default DynamicContainer;
