import React from 'react';
import { Col } from 'react-bootstrap';

import VirusCountsCard from './VirusCountsCard';
import VirusCountsGraph from './VirusCountsGraph';

const VirusCounts = () => {
  return (
    <Col md="12" lg="4" className="mt-2">
      <VirusCountsCard />
      <VirusCountsGraph />
    </Col>
  );
};

export default VirusCounts;
