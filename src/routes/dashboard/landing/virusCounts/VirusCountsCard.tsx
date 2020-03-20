import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import TextCaption from 'src/components/TextCaption/TextCaption';
import { fetchVirusCountsOfTodayAPI, IVirusCountOfToday } from 'src/services/virusCounts';

const VirusCountsCard = () => {
  const [virusCountsOfToday, setVirusCountsOfToday] = useState<IVirusCountOfToday | null>(null);

  useEffect(() => {
    getVirusCounts();
  }, []);

  const getVirusCounts = async () => {
    try {
      const response = await fetchVirusCountsOfTodayAPI();
      setVirusCountsOfToday(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded bg-bluelight p-4">
      <div className="mb-3">
        <div className="d-inline-block ">
          <div className="h5 mb-0 font-weight-bold">Government Virus Counts</div>
          <small>Updated 1 minutes ago</small>
        </div>
      </div>
      <div className="clearfix"></div>
      <Row className="mb-3">
        <Col xs="6">
          <div className="">Total Confirmed</div>

          <div className="display-4 font-weight-bold">
            {' '}
            {virusCountsOfToday ? virusCountsOfToday.confirmedToday : '-'}
          </div>
          <TextCaption type={'success'} value={'0.10'} />
        </Col>

        <Col xs="6">
          <div className="">Total Recovered</div>
          <div className="display-4 font-weight-bold">
            {' '}
            {virusCountsOfToday ? virusCountsOfToday.recoveredToday : '-'}
          </div>

          <TextCaption type={'warning'} value={'0.10'} />
        </Col>
      </Row>

      <Row>
        <Col xs="6">
          <div className="">Total Serious</div>
          <div className="display-4 font-weight-bold">{virusCountsOfToday ? virusCountsOfToday.seriousToday : '-'}</div>
          <TextCaption type={'warning'} value={'0.10'} />
        </Col>

        <Col xs="6">
          <div className="">Total Death</div>
          <div className="display-4 font-weight-bold">{virusCountsOfToday ? virusCountsOfToday.deathToday : '-'}</div>
          <TextCaption type={'danger'} value={'0.10'} />
        </Col>
      </Row>
    </div>
  );
};

export default VirusCountsCard;
