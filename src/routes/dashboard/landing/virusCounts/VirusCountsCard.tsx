import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TextCaption from 'src/components/TextCaption/TextCaption';

const VirusCountsCard = () => {
  return (
    <div className="rounded bg-bluelight p-3">
      <div className="mb-3">
        <div className="d-inline-block ">
          <div className="h5 mb-0 font-weight-bold">Covid-19 cases</div>
          <small>Updated 1 minutes ago</small>
        </div>
      </div>
      <div className="clearfix"></div>
      <Row className="mb-3">
        <Col xs="6">
          <div className="">Total Confirmed</div>
          <div className="display-4 font-weight-bold">1</div>
          <TextCaption type={'success'} value={'0.10'} />
        </Col>

        <Col xs="6">
          <div className="">Total Recovered</div>
          <div className="display-4 font-weight-bold">1</div>

          <TextCaption type={'warning'} value={'0.10'} />
        </Col>
      </Row>

      <Row>
        <Col xs="6">
          <div className="">Total Serious</div>
          <div className="display-4 font-weight-bold">0</div>
          <TextCaption type={'warning'} value={'0.10'} />
        </Col>

        <Col xs="6">
          <div className="">Total Death</div>
          <div className="display-4 font-weight-bold">0</div>
          <TextCaption type={'danger'} value={'0.10'} />
        </Col>
      </Row>
    </div>
  );
};

export default VirusCountsCard;
