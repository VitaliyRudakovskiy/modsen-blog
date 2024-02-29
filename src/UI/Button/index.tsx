import buttonVariants from '@/constants/buttonVariants';

import styles from './Button.module.scss';
import { ButtonProps } from './types';

const Button = ({
  variant,
  type = 'button',
  disabled = false,
  dataCy = '',
  children,
}: ButtonProps) => {
  const variantClass = styles[buttonVariants[variant]];
  const className = `${styles.button} ${variantClass}`;

  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      data-cy={dataCy}
    >
      {children}
    </button>
  );
};

export default Button;
