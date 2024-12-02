import React from 'react';
import styles from './Title.module.scss';
import { TitleProps } from '.';

const Title: React.FC<TitleProps> = ({
  text,
  variant = 'pageTitle',
  className = '',
}) => {
  return (
    <div className={`${styles.title} ${styles[variant]} ${className}`}>
      {text}
    </div>
  );
};

export default Title;
