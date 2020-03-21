import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import NepalCovidCases from './NepalCovidCases';
import GlobalCovidCases from './GlobalCovidCases';
import { fetchCovidCasesCountsAPI, ICovidCasesCounts } from 'src/services/covidCases';
import RefreshIcon from 'src/components/Icons/RefreshIcon';

const CovidCases = () => {
  const [covidCasesCounts, setCovidCasesCounts] = useState<ICovidCasesCounts | null>(null);
  const [timeOfFetch, setTimeOfFetch] = useState<Date>(new Date());
  const [updatedTime, setUpdatedTime] = useState(0);

  useEffect(() => {
    fetchCovidCases();
    let covidInterval = window.setInterval(getUpdatedTime, 30000);
    return () => {
      clearInterval(covidInterval);
    };
  }, []);

  const fetchCovidCases = async () => {
    try {
      const response = await fetchCovidCasesCountsAPI();
      setCovidCasesCounts(response);
      setTimeOfFetch(new Date());
    } catch (error) {
      console.log(error);
    } finally {
      getUpdatedTime();
    }
  };

  const getUpdatedTime = () => {
    const currentTime = new Date();
    const interval = currentTime.getMinutes() - timeOfFetch.getMinutes();
    setUpdatedTime(interval);
  };

  return (
    <>
      <Col md="12" lg="4" className="mt-2">
        <div className="rounded bg-bluelight p-4">
          <div className="mb-3 border-bottom pb-2">
            <div className="d-inline-block">
              <div className="h5 mb-0 font-weight-bold">Covid-19 Cases</div>
              <small>
                {updatedTime > 0 ? `Updated ${updatedTime} minutes ago` : `Updated a while ago`}
                <i className="ml-2 pointer" onClick={() => fetchCovidCases()}>
                  <RefreshIcon />
                </i>
              </small>
            </div>
          </div>
          <div className="clearfix"></div>

          <Row className="mb-3">
            <NepalCovidCases covidCasesCounts={covidCasesCounts} />
            <GlobalCovidCases covidCasesCounts={covidCasesCounts} />
          </Row>

          <small>
            *Disclaimer: These numbers are obtained from{' '}
            <a className={'text-white'} target="_blank" href="https://heoc.mohp.gov.np/">
              Nepal Government
            </a>{' '}
            and{' '}
            <a className={'text-white'} target="_blank" href="https://coronavirus.jhu.edu/map.html">
              {' '}
              Johns Hopkins University
            </a>{' '}
            and being updated as the numbers from these sources get updated.
          </small>
        </div>
      </Col>
    </>
  );
};

export default CovidCases;
