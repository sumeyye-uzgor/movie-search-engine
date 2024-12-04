import React from 'react';

import { InputProps } from '.';
import styles from './Input.module.scss';

const Input: React.FC<InputProps> = ({ className = '', ...rest }) => {
  return <input className={`${styles.input} ${className}`} {...rest} />;
};

export default Input;
