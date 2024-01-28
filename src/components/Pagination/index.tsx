// Pagination.tsx
import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
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
    <div className="flex justify-between items-center bg-white py-2 px-4 rounded">
      <button
        onClick={handlePreviousPageClick}
        className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:bg-blue-600">
        Page précédente
      </button>

      <span className="text-sm px-4">{count}</span>

      <button
        onClick={handleNextPageClick}
        className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:bg-blue-600">
        Page suivante
      </button>
    </div>
  );
};

export default Pagination;
