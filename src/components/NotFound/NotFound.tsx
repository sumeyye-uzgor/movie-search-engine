import React from 'react';
import styles from './NotFound.module.scss';
import LinkButton from '../LinkButton';

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <LinkButton to="/">Back to Movies List</LinkButton>
    </div>
  );
};

export default NotFound;
