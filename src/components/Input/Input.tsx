import React from 'react';
import styles from './Input.module.scss';
import { InputProps } from '.';

const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  placeholder,
  onChange,
  className = '',
  disabled = false,
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`${styles.input} ${className}`}
      disabled={disabled}
    />
  );
};

export default Input;
