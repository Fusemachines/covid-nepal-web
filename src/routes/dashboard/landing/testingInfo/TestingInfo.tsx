import React, { FC } from 'react';
import { Col } from 'react-bootstrap';
import TestingInfoTabs from './TestingInfoTabs';

const TestingInfo: FC<{}> = () => {
  return (
    <Col md="12" lg="5" className="mt-2">
      <div className="rounded bg-bluelight h-100 overflow-hidden">
        <TestingInfoTabs />
      </div>
    </Col>
  );
};

export default TestingInfo;
