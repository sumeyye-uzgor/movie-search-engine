import React from 'react';
import styles from './Error.module.scss';
import { ErrorProps } from '.';
import Title from '../Title';

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorIcon}>
        <span>!</span>
      </div>
      <Title
        text="An error occurred. Please try again later."
        className={styles.errorMessage}
      />
      {message && <Title variant="subTitle" text={message} />}
    </div>
  );
};

export default Error;
