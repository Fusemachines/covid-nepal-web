import React from 'react';
import { Row, Col } from 'react-bootstrap';

import SupportUsTabs from './SupportUsTabs';

const SupportFrontlineWorkers = () => {
  return (
      <div className="container-fluid mt-3">
        <Row className="mt-5 justify-content-center">
          <Col lg="8">
            <div className="mt-4 text-white text-center support-heading-wrapper">
              <img src="/images/support-frontline.png" alt="" className="img-fluid" />
              <h1 className="support-heading">SUPPORT FRONTLINE WORKERS</h1>
            </div>
          </Col>

          <Col lg="8" className="mt-4 text-white text-center">
            <p>
              As we all see, hear and read the horrors of this pandemic globally and its devastation, it is that much
              more difficult and harrowing to be at the front-lines of this battle. We at covidnepal.org are undertaking
              an initiative to leverage our open source platform to help connect individuals and organizations that are
              in a position to <span className="text-bold">help and support our front-line workers.</span>
            </p>
          </Col>
        </Row>

        <Row className="mt-3 justify-content-center">
          <Col lg="8" className="mt-4 text-white text-center">
            <h4 className="text-success">LETS FIGHT THIS TOGETHER !</h4>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col md="4" className="mt-4">
            <div className="text-white p-4 bg-bluelight h-100 rounded">
              <p>
                If you are in a position to <span className="text-bold">help our front-line workers</span> in this fight
                against COVID-19 in Nepal, connect with us. We will try our best to match you with front-line workers or
                medical institutions that have expressed the help they need.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdJvqt8pEAFRwjKowDxu7PkaHXhaHZTHm5v0CZCBlQ0rdBZMA/viewform"
                target="_blank"
                className="btn btn-warning text-upper text-bold"
              >
                #PROVIDE_FRONTLINE_HELP
              </a>
            </div>
          </Col>

          <Col md="4" className="mt-4">
            <div className="text-white p-4 bg-bluelight h-100 rounded">
              <p>
                If you are a <span className="text-bold">healthcare worker or represent a medical institution</span> in
                the front-line fight against COVID-19 in Nepal and need help, connect with us. We will try our best to
                match you with people on our support base that have expressed their willingness and ability to provide
                help.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfPuGeJ6U841s8yRYCRpX4jQd2nmaCqKUkGRx4WZWlsLHdh_A/viewform"
                target="_blank"
                className="btn btn-success text-upper text-bold"
              >
                #ASK_FRONTLINE_HELP
              </a>
            </div>
          </Col>
        </Row>
        <SupportUsTabs />
    </div>
  );
};

export default SupportFrontlineWorkers;
