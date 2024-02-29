import { forwardRef } from 'react';

import styles from './Input.module.scss';
import { InputProps } from './types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputName, type = 'text', placeholder }, ref) => (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      name={inputName}
      ref={ref}
    />
  )
);

Input.displayName = 'Input';
export default Input;
