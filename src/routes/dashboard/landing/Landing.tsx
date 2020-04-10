import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars";

import CovidCases from "src/routes/dashboard/landing/covidCases";
import HospitalCapacity from "src/routes/dashboard/landing/hospitalCapacity";
import TestingInformation from "src/routes/dashboard/landing/testingInfo";
import LatestNews from "./latestNews";

const Landing = () => {
  return (
    <>
      <div className="container-fluid mt-3">
        <Row>
          <CovidCases />

          <TestingInformation />

          <Col md="12" lg="3" className="mt-2 order-lg-first">
            <Scrollbars>
              {/* <div className="tweet-wrapper"> */}
              <LatestNews />
              {/* </div> */}
            </Scrollbars>
          </Col>
        </Row>
        <HospitalCapacity />
      </div>
    </>
  );
};

export default Landing;
