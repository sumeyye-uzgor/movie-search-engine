import React from 'react';

import { ButtonProps } from '.';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  className = '',
  ...rest
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`;
  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
