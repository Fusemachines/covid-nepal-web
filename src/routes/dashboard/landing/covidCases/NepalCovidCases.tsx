import React, { FC } from 'react';
import { Col } from 'react-bootstrap';

import TextCaption from 'src/components/TextCaption/TextCaption';
import { ICovidCasesCounts } from 'src/services/covidCases';
import { setCommas } from 'src/utils/stringManipulation';
import TranslateNumber from 'src/components/TranslateNumber';
import { useCookies } from 'react-cookie';
interface INepalCovidCasesProps {
  covidCasesCounts: ICovidCasesCounts | null;
}

const NepalCovidCases: FC<INepalCovidCasesProps> = ({ covidCasesCounts }) => {
  const [cookies] = useCookies(['googtrans']);
  const googtrans = cookies['googtrans'] || localStorage.getItem('googtrans') || 'en';
  const language = googtrans.includes('ne') ? 'ne' : 'en';
  return (
    <Col xs="6">
      <div className="font-weight-bold h5">Nepal Update</div>
      <div className="mb-3 small-xs">(Nepal Govt. reported numbers)</div>

      <div className="">Total Tested</div>
      <div className="h3 m-0 font-weight-bold  d-inline-block">
        <TranslateNumber
          originalString={covidCasesCounts ? setCommas(covidCasesCounts.testedTotal) : '-'}
          language={language}
        />
        {/* {covidCasesCounts ? setCommas(covidCasesCounts.testedTotal) : '-'} */}
      </div>
      {/* <TextCaption type={'success'} value={'0.10'} /> */}

      <div className="mt-3">Total Confirmed</div>
      <div className="h3 m-0 font-weight-bold  d-inline-block">
        <TranslateNumber
          originalString={covidCasesCounts ? setCommas(covidCasesCounts.confirmedTotal) : '-'}
          language={language}
        />
        {/* {covidCasesCounts ? setCommas(covidCasesCounts.confirmedTotal) : '-'} */}
      </div>
      {/* <TextCaption type={'success'} value={'0.10'} /> */}

      <div className="mt-3">Total Recovered</div>
      <div className="h3 m-0 font-weight-bold d-inline-block ">
        <TranslateNumber
          originalString={covidCasesCounts ? setCommas(covidCasesCounts.recoveredTotal) : '-'}
          language={language}
        />
        {/* {covidCasesCounts ? setCommas(covidCasesCounts.recoveredTotal) : '-'} */}
      </div>
      {/* <TextCaption type={'warning'} value={'0.10'} /> */}

      <div className="mt-3">Total Deaths</div>
      <div className="h3 m-0 font-weight-bold d-inline-block">
        <TranslateNumber
          originalString={covidCasesCounts ? setCommas(covidCasesCounts.deathTotal) : '-'}
          language={language}
        />
        {/* {covidCasesCounts ? setCommas(covidCasesCounts.deathTotal) : '-'} */}
      </div>
      {/* <TextCaption type={'danger'} value={'0.10'} /> */}
    </Col>
  );
};

export default NepalCovidCases;
