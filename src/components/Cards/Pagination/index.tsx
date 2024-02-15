import React from 'react';
import { Link } from 'react-router-dom';
import { PaginationProps } from '../../../interfaces';
import { Arrow } from '../../../assets/index';

const Pagination: React.FC<PaginationProps> = ({ currentId }) => {
  return (
    <div className="pagination">
      <div className="circle-block">
        <Link
          to={`/pokemon/${currentId - 1}`}
          className={currentId === 1 ? 'disabled' : ''}>
          <img src={Arrow} alt="" />
        </Link>
      </div>
      <div className="circle-block">
        <Link to={`/pokemon/${currentId + 1}`}>
          <img src={Arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
