import React from 'react';

import { ContainerProps } from '.';
import styles from './Container.module.scss';

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
