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
    getVirusCounts();
    window.setInterval(getUpdatedTime, 30000);
    return () => {
      clearInterval();
    };
  }, []);

  const getVirusCounts = async () => {
    try {
      setTimeOfFetch(new Date());
      const response = await fetchCovidCasesCountsAPI();
      setCovidCasesCounts(response);
    } catch (error) {
      console.log(error);
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
                <i className="ml-2 pointer" onClick={() => getVirusCounts()}>
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
            *Disclaimer: Aliquam faucibus, odio nec commodo aliqum, neque felis placerat dui, a porta ante lectus
            dapibus est. Aliquam a bibendum mi
          </small>
        </div>
      </Col>
    </>
  );
};

export default CovidCases;
