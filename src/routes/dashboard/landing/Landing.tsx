import React from 'react';
import { Row, Col } from 'react-bootstrap';

import VirusCounts from 'src/routes/dashboard/landing/virusCounts';
import LiveData from 'src/routes/dashboard/landing/liveData';

const Landing = () => (
  <>
    <div className="container-fluid mt-3">
      <Row>
        <VirusCounts />
        <LiveData />

        <Col md="12" lg="3" className="mt-2 order-lg-first">
          <div className="rounded bg-bluelight p-3">
            <div className="h5 font-weight-bold mb-3">Latest News</div>

            <div className="">Latest News</div>
          </div>
        </Col>
      </Row>
    </div>
  </>
);

export default Landing;
