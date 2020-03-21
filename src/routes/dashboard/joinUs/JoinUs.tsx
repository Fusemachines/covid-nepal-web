import React from 'react';
import { Row, Col } from 'react-bootstrap';
import JoinUsIcon from 'src/components/Icons/JoinUsIcon';
import { JOIN_US } from 'src/constants/routes';

const JoinUs = () => (
  <>
    <div className="container-fluid mt-3">
      <Row className="mt-5 justify-content-center">
        <Col lg="6" md="8" className="text-center">
          <div className="h1 text-primary font-weight-bold">Open Source Platform for COVID19 for Nepal</div>

          <div className="my-2 text-white my-4 ">
            <a className={'text-white'} target="_blank" href="https://covidnepal.org/">
              covidnepal.org
            </a>{' '}
            is an Open Source Platform started at Fusemachines and asking all like minded citizens of Nepal to join in
            this effort to create an Open Source platform to serve as a reliable source of information about Covid-19 in
            Nepal.
            <br></br>
            Let’s fight this pandemic together!
          </div>

          <a href={`${JOIN_US}/#volunteer-with-us`} className="btn btn-success px-3">
            Join Us
          </a>
        </Col>
      </Row>

      <Row className="mt-5 justify-content-center">
        <Col lg="4" md="8" className="mt-4">
          <div className="bg-bluelight rounded p-4 h-100">
            <div className="font-18">Objective</div>
            <ul className="circle">
              <li>
                Collect reliable data from various trusted sources, so public can stay well informed and leverage that
                data to better manage their fight with this pandemic.
              </li>
              <li>
                Make relevant data easily consumable to get right information quickly, so informed decisions can be made
                during time of panic, should there be one.
              </li>
              <li>
                In future, this could be extended to a public sourced and curated portal for additional real-time
                information on the outbreak.
              </li>
              <li>In future, AI capabilities could be built to provide early warning projections. </li>
            </ul>
          </div>
        </Col>

        <Col lg="4" md="6" className="mt-4">
          <div className="bg-bluelight rounded p-4 h-100">
            <div className="font-18">Our process for collecting data:</div>

            <ul className="circle">
              <li>Goverment released data from various government and it agencies websites and published documents.</li>
              <li>World health Organization (WHO) published data</li>
              <li>Our data team reaching out to hospitals and health clinics to collect data</li>
              <li>Our data team Reaching out to pool of doctors to help with hospital capacity data</li>
              <li>Reaching out to general public to help with data collection</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row className="py-5 mt-5 bg-success justify-content-center" id="volunteer-with-us">
        <Col sm="12" className="mb-3">
          <div className="h4 text-center font-weight-bold">Here is how you can help us:</div>
        </Col>

        <Col lg="3" md="5">
          <div className="">
            Access this form:{' '}
            <a href="https://bit.ly/collectnepalhospitaldata" target="_blank" className="text-white">
              https://bit.ly/collectnepalhospitaldata
            </a>
          </div>
          <div className="my-3">If you have reliable information that can help general public then please input</div>
          <div>Reachout to your contact that may have reliable information and ask them for help.</div>
        </Col>

        <Col md="2">
          <div className="text-white">
            <div className="text-center mb-3">
              <JoinUsIcon />
            </div>
          </div>
        </Col>

        <Col lg="3" md="5">
          <div className="my-3">
            If you would like to contribute to this opensource project as an engineer, data analyst, doctor, nurse,
            government officials, media or any other profession please join this effort by emailing
          </div>
          <div className="mt-3">
            <a
              className="btn btn-primary rounded px-3"
              href="mailto:signmeup@covidnepal.org?Subject=Contribution%20for%20covidnepal"
            >
              signmeup@covidnepal.org
            </a>
          </div>
        </Col>
      </Row>
    </div>
  </>
);

export default JoinUs;
