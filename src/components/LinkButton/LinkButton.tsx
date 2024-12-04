import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkButton.module.scss';
import { LinkButtonProps } from '.';

const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  children,
  variant = 'default',
}) => {
  return (
    <Link to={to} className={`${styles.linkButton} ${styles[variant]}`}>
      {children}
    </Link>
  );
};

export default LinkButton;
