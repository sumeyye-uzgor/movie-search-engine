import React from 'react';

import { ErrorProps } from '.';
import styles from './Error.module.scss';
import Title from '../Title';
import LinkButton from '../LinkButton';

const Error: React.FC<ErrorProps> = ({
  message,
  buttonText,
  buttonLink = '/',
}) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorIcon}>
        <span>!</span>
      </div>
      <Title
        text="An error occurred. Please try again later."
        className={styles.errorText}
      />
      {message && (
        <Title variant="subTitle" text={message} className={styles.errorText} />
      )}
      {buttonText && <LinkButton to={buttonLink}>{buttonText}</LinkButton>}
    </div>
  );
};

export default Error;
