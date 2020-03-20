import React, { FC } from 'react';
import { Col } from 'react-bootstrap';

import LiveDataTable from './Table/LiveDataTable';
import LiveDataFilter from './Table/LiveDataFilter';

const LiveData: FC<{}> = () => {
  return (
    <>
      <Col md="12" lg="5" className="mt-2">
        <div className="rounded bg-bluelight p-3">
          <div className="h5 d-inline-block font-weight-bold mb-3">
            <div className="rec"></div> Live Data
          </div>

          <LiveDataFilter />
          <LiveDataTable />
        </div>
      </Col>
    </>
  );
};

export default LiveData;
