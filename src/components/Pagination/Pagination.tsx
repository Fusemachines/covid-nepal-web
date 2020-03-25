import React from 'react';
import { Pagination as PG } from 'react-bootstrap';

export interface IPagination {
  total: number;
  size: number;
  page: number;
  pages: number;
}

interface IPaginationProps extends IPagination {
  range?: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.SFC<IPaginationProps> = ({
  page,
  pages: totalPages,
  total: totalItems,
  handlePageChange,
  range = 5,
  size
}) => {
  let items = [];
  let start = 1;
  let end = totalPages;

  if (end - start > range) {
    let lowerDiff = page - Math.floor(range / 2);
    let upperDiff = page + Math.floor(range / 2);

    if (lowerDiff > 0) {
      start = lowerDiff;

      let exceedRange = start + range - 1 - totalPages;

      if (exceedRange > 0 && start - exceedRange > 0) {
        start = start - exceedRange;
      }
    }

    if (upperDiff <= totalPages) {
      end = start + range - 1;
    }
  }

  for (let number = start; number <= end; number++) {
    items.push(
      <PG.Item key={number} active={number === page} onClick={() => handlePageChange(number)}>
        {number}
      </PG.Item>
    );
  }

  let showingStart = 1;
  let showingEnd = size;

  if (page > 1) {
    showingStart += size;
    showingEnd += size;
  }

  if (totalItems < showingEnd) {
    showingEnd = totalItems;
  }

  return totalPages > 0 ? (
    <>
      <div className="row align-items-center">
        <div className="col-md-4">
          <small>
            Showing <span className="font-weight-bold">{size}</span> of {totalItems} entries
          </small>
        </div>

        <div className="col-md-8 text-right">
          <PG className="small">
            <li
              id="prev-button"
              className={`${page === 1 ? 'disabled' : ''}`}
              onClick={page === 1 ? () => {} : () => handlePageChange(page - 1)}
            >
              Prev
            </li>

            {items}

            <li
              id="next-button"
              className={`${page === totalPages ? 'disabled' : ''}`}
              onClick={page === totalPages ? () => {} : () => handlePageChange(page + 1)}
            >
              Next
            </li>
          </PG>
        </div>
      </div>
    </>
  ) : null;
};

export default Pagination;
