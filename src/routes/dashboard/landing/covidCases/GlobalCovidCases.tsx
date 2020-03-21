import React, { FC } from 'react';
import { Col } from 'react-bootstrap';
import TextCaption from 'src/components/TextCaption/TextCaption';
import { ICovidCasesCounts } from 'src/services/covidCases';

interface IGlobalCovidCasesProps {
  covidCasesCounts: ICovidCasesCounts | null;
}

const GlobalCovidCases: FC<IGlobalCovidCasesProps> = ({ covidCasesCounts }) => {
  return (
    <>
      <Col xs="6">
        <div className="font-weight-bold h5 mb-3">Global Update</div>

        <div className="">Total Samples Tested</div>
        <div className="h3 m-0 font-weight-bold  d-inline-block">
          {' '}
          {covidCasesCounts ? covidCasesCounts.testedGlobal : '-'}
        </div>
        {/* <TextCaption type={'success'} value={'0.10'} /> */}

        <div className="mt-3">Total Confirmed</div>
        <div className="h3 m-0 font-weight-bold  d-inline-block">
          {' '}
          {covidCasesCounts ? covidCasesCounts.confirmedGlobal : '-'}
        </div>
        {/* <TextCaption type={'success'} value={'0.10'} /> */}

        <div className="mt-3">Total Recovered</div>
        <div className="h3 m-0 font-weight-bold d-inline-block ">
          {' '}
          {covidCasesCounts ? covidCasesCounts.recoveredGlobal : '-'}
        </div>
        {/* <TextCaption type={'warning'} value={'0.10'} /> */}

        <div className="mt-3">Total Serious</div>
        <div className="h3 m-0 font-weight-bold d-inline-block">
          {' '}
          {covidCasesCounts ? covidCasesCounts.seriousGlobal : '-'}
        </div>
        {/* <TextCaption type={'danger'} value={'0.10'} /> */}

        <div className="mt-3">Total Death</div>
        <div className="h3 m-0 font-weight-bold d-inline-block">
          {' '}
          {covidCasesCounts ? covidCasesCounts.deathGlobal : '-'}
        </div>
        {/* <TextCaption type={'danger'} value={'0.10'} /> */}
      </Col>
    </>
  );
};

export default GlobalCovidCases;
