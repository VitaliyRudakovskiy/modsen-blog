import { forwardRef } from 'react';

import styles from './Input.module.scss';
import { InputProps } from './types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = 'text', dataCy = '', ...props }, ref) => (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      ref={ref}
      data-cy={dataCy}
      {...props}
    />
  )
);

Input.displayName = 'Input';
export default Input;
