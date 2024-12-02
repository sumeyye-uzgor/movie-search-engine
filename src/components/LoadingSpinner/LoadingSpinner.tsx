import React from 'react';
import styles from './LoadingSpinner.module.scss';

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
