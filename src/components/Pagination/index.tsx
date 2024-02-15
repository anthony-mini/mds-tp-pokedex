// Pagination.tsx
import React from 'react';
import { Arrow } from '../../assets';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange
}) => {
  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    } else {
      onPageChange(1);
    }
  };

  const handlePreviousPageClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    } else {
      onPageChange(totalPages);
    }
  };

  const count = `${currentPage} / ${totalPages}`;

  return (
    <div className="flex justify-between items-center">
      <button onClick={handlePreviousPageClick} className="pagination-grid">
        <img src={Arrow} alt="" />
      </button>

      <span className="count">{count}</span>

      <button onClick={handleNextPageClick} className="pagination-grid">
        <img src={Arrow} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
