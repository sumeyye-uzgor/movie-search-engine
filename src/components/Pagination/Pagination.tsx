import React, { useState } from 'react';
import styles from './Pagination.module.scss';
import { PaginationProps } from '.';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [visibleRange, setVisibleRange] = useState(5);

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
      <button
        className={`${styles.button} ${styles.first}`}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        className={`${styles.button} ${styles.prev}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {generatePageNumbers().map((page, index) => (
        <button
          key={index}
          className={`${styles.circleButton} ${
            currentPage === page ? styles.active : ''
          }`}
          onClick={() => handlePageClick(page)}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
      <button
        className={`${styles.button} ${styles.next}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <button
        className={`${styles.button} ${styles.last}`}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
