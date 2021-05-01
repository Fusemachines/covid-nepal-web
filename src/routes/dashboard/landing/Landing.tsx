import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars";

import CovidCases from "src/routes/dashboard/landing/covidCases";
import TestingInformation from "src/routes/dashboard/landing/testingInfo";
import LatestNews from "./latestNews";
import Hospitals from "src/routes/dashboard/landing/hospitals";
// import './johnhopkings.css'

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
              {/* <LatestNews /> */}
              <iframe
                src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&hideControls=true&Metric=Confirmed+deaths&Interval=Cumulative&Relative+to+Population=false&Align+outbreaks=false&country=~NPL"
                /* loading="lazy" */
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}></iframe>

              {/* </div> */}
            </Scrollbars>
          </Col>
        </Row>
        <Hospitals />
      </div>
    </>
  );
};

export default Landing;
