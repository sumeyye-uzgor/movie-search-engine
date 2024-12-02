import React from 'react';
import styles from './Title.module.scss';
import { TitleProps } from '.';

const Title: React.FC<TitleProps> = ({ text, className = '' }) => {
  return <h1 className={`${styles.title} ${className}`}>{text}</h1>;
};

export default Title;
