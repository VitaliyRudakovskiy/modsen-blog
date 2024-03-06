'use client';

import { ChangeEvent, ReactNode, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import styles from './Select.module.scss';

interface LocaleSwitcherSelectProps {
  children: ReactNode;
  defaultValue: string;
}

const Select = ({ children, defaultValue }: LocaleSwitcherSelectProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    startTransition(() => {
      router.replace(pathname, { locale: e.target.value });
    });
  }

  return (
    <div className={styles.select__wrapper}>
      <select
        className={`${styles.select} ${isPending && styles.pending})`}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
