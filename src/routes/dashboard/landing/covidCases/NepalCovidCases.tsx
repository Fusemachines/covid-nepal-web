import React, { FC } from 'react';
import { Col } from 'react-bootstrap';

import TextCaption from 'src/components/TextCaption/TextCaption';
import { ICovidCasesCounts } from 'src/services/covidCases';
import { setCommas } from 'src/utils/stringManipulation';
interface INepalCovidCasesProps {
  covidCasesCounts: ICovidCasesCounts | null;
}

const NepalCovidCases: FC<INepalCovidCasesProps> = ({ covidCasesCounts }) => {
  return (
    <Col xs="6">
      <div className="font-weight-bold h5 mb-3">Nepal Update</div>
      <small>(Nepal Govt. reported numbers)</small>

      <div className="">Total Tested</div>
      <div className="h3 m-0 font-weight-bold  d-inline-block">
        {covidCasesCounts ? setCommas(covidCasesCounts.testedTotal) : '-'}
      </div>
      {/* <TextCaption type={'success'} value={'0.10'} /> */}

      <div className="mt-3">Total Confirmed</div>
      <div className="h3 m-0 font-weight-bold  d-inline-block">
        {covidCasesCounts ? setCommas(covidCasesCounts.confirmedTotal) : '-'}
      </div>
      {/* <TextCaption type={'success'} value={'0.10'} /> */}

      <div className="mt-3">Total Recovered</div>
      <div className="h3 m-0 font-weight-bold d-inline-block ">
        {covidCasesCounts ? setCommas(covidCasesCounts.recoveredTotal) : '-'}
      </div>
      {/* <TextCaption type={'warning'} value={'0.10'} /> */}

      <div className="mt-3">Total Deaths</div>
      <div className="h3 m-0 font-weight-bold d-inline-block">
        {covidCasesCounts ? setCommas(covidCasesCounts.deathTotal) : '-'}
      </div>
      {/* <TextCaption type={'danger'} value={'0.10'} /> */}
    </Col>
  );
};

export default NepalCovidCases;
