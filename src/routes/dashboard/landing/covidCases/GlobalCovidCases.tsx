import React from 'react';
import { Col } from 'react-bootstrap';
import TextCaption from 'src/components/TextCaption/TextCaption';

const GlobalCovidCases = () => {
  return (
    <>
      <Col xs="6">
        <div className="font-weight-bold h5 mb-3">Global Update</div>

        <div className="">Total Samples Tested</div>
        <div className="h3 m-0 font-weight-bold  d-inline-block">562</div>
        <TextCaption type={'success'} value={'0.10'} />

        <div className="mt-3">Total Confirmed</div>
        <div className="h3 m-0 font-weight-bold  d-inline-block">1</div>
        <TextCaption type={'success'} value={'0.10'} />

        <div className="mt-3">Total Recovered</div>
        <div className="h3 m-0 font-weight-bold d-inline-block ">1</div>
        <TextCaption type={'warning'} value={'0.10'} />

        <div className="mt-3">Total Serious</div>
        <div className="h3 m-0 font-weight-bold d-inline-block">0</div>
        <TextCaption type={'danger'} value={'0.10'} />

        <div className="mt-3">Total Death</div>
        <div className="h3 m-0 font-weight-bold d-inline-block">0</div>
        <TextCaption type={'danger'} value={'0.10'} />
      </Col>
    </>
  );
};

export default GlobalCovidCases;
