import React from 'react';
import { Pagination as PG, Row, Col } from 'react-bootstrap';

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
      <Row className="align-items-center pagination-wrapper sticky">
        <Col md="4">
          <small>
            Showing <span className="font-weight-bold">{totalItems < size ? totalItems : size}</span> of {totalItems} entries
          </small>
        </Col>

        <Col md="8">
          <PG className="small justify-content-end align-items-center">
            <li
              id="prev-button"
              className={`${page === 1 ? 'disabled' : ''}`}
              onClick={page === 1 ? () => {} : () => handlePageChange(page - 1)}
            >
              <a className="page-link">
                <svg
                  id="arrow-point-to-right_1_"
                  data-name="arrow-point-to-right (1)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6.088"
                  height="10.68"
                  viewBox="0 0 6.088 10.68"
                >
                  <path
                    id="Path_5803"
                    data-name="Path 5803"
                    d="M5.869,5.869,1.277,10.461A.748.748,0,0,1,.219,9.4L4.282,5.34.219,1.277A.748.748,0,0,1,1.277.219L5.869,4.811a.748.748,0,0,1,0,1.057Z"
                    fill="#8e8e8e"
                  />
                </svg>
              </a>
            </li>

            {items}

            <li
              id="next-button"
              className={`${page === totalPages ? 'disabled' : ''}`}
              onClick={page === totalPages ? () => {} : () => handlePageChange(page + 1)}
            >
              <a className="page-link">
                <svg
                  id="arrow-point-to-right_1_"
                  data-name="arrow-point-to-right (1)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6.088"
                  height="10.68"
                  viewBox="0 0 6.088 10.68"
                >
                  <path
                    id="Path_5803"
                    data-name="Path 5803"
                    d="M5.869,5.869,1.277,10.461A.748.748,0,0,1,.219,9.4L4.282,5.34.219,1.277A.748.748,0,0,1,1.277.219L5.869,4.811a.748.748,0,0,1,0,1.057Z"
                    fill="#8e8e8e"
                  />
                </svg>
              </a>
            </li>
          </PG>
        </Col>
      </Row>
    </>
  ) : null;
};

export default Pagination;
