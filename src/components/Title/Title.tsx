import React from 'react';

import { TitleProps } from '.';
import styles from './Title.module.scss';

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
