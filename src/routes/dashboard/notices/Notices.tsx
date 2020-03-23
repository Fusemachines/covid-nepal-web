import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NoticesTabs from './NoticesTabs';

const GovernmentNoticesandResources = () => (
  <>
    <div className="container resources-page">
      <Row className="mt-5 bg-bluelight semi-rounded justify-content-center">
        <Col lg={10} className="pt-4 pb-4">
          <NoticesTabs />
        </Col>
      </Row>
    </div>
  </>
);

export default GovernmentNoticesandResources;
