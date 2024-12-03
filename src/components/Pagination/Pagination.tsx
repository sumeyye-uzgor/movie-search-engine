import React, { useState } from 'react';

import { PaginationProps } from '.';
import styles from './Pagination.module.scss';
import Button from '../Button/index';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [visibleRange] = useState(5);

  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    const startPage = Math.max(2, currentPage - Math.floor(visibleRange / 2));
    const endPage = Math.min(
      totalPages - 1,
      currentPage + Math.floor(visibleRange / 2),
    );

    pages.push(1);

    if (startPage > 2) {
      pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push('...');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number') {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <Button
        variant="transparent"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={styles.firstArrow}
      >
        First
      </Button>
      <Button
        className={styles.prevArrow}
        variant="transparent"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      {generatePageNumbers().map((page, index) => (
        <Button
          key={index}
          variant={'circle'}
          className={page === currentPage ? styles.activeButton : ''}
          onClick={() => handlePageClick(page)}
          disabled={page === '...'}
        >
          {page}
        </Button>
      ))}
      <Button
        className={styles.nextArrow}
        variant="transparent"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
      <Button
        className={styles.lastArrow}
        variant="transparent"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </Button>
    </div>
  );
};

export default Pagination;
