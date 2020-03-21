import React from 'react';
import { Row, Col } from 'react-bootstrap';

import CovidCases from 'src/routes/dashboard/landing/covidCases';
import HospitalCapacity from 'src/routes/dashboard/landing/hospitalCapacity';
import TestingInformation from 'src/routes/dashboard/landing/testingInfo';
import LatestNews from './latestNews';

const Landing = () => (
  <>
    <div className="container-fluid mt-3">
      <Row>
        <CovidCases />

        <TestingInformation />

        <Col md="12" lg="3" className="mt-2 order-lg-first">
          <div className="tweet-wrapper">
            <LatestNews />
          </div>
        </Col>
      </Row>
      <HospitalCapacity />
    </div>
  </>
);

export default Landing;
