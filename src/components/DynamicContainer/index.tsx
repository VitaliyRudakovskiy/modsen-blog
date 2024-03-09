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
        if (entries[0].isIntersecting) {
          setShowItems((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    const target = observerTarget.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  const componentsToRender = Children.toArray(children);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={timeZone}
    >
      <div>
        {componentsToRender.slice(0, showItems)}
        <div ref={observerTarget} />
      </div>
    </NextIntlClientProvider>
  );
};

export default DynamicContainer;
