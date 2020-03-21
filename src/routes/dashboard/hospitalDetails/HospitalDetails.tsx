import React, { FC, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import DetailsBox from './DetailsBox';
import InformationBox from './InformationBox';

const HospitalDetails: FC<{}> = () => {
  const { hospitalId } = useParams();
  const [hospitalDetails, setHospitalDetails] = useState({});
  // TODO:pragyakar fetch details here

  return (
    <div className="container-fluid mt-4">
      <Row className="mb-2">
        <Col md={4}>
          <DetailsBox />
        </Col>

        <Col md={8} lg={7}>
          <InformationBox />
        </Col>
      </Row>
    </div>
  );
};

export default HospitalDetails;
