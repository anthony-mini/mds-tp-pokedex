import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePrevPageClick: () => void;
  handleNextPageClick: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  handlePrevPageClick,
  handleNextPageClick
}) => {
  return (
    <div>
      <button onClick={handlePrevPageClick} disabled={currentPage === 1}>
        Page précédente
      </button>
      <span>{`Page ${currentPage} sur ${totalPages}`}</span>
      <button onClick={handleNextPageClick} disabled={currentPage === totalPages}>
        Page suivante
      </button>
    </div>
  );
};

export default Pagination;
