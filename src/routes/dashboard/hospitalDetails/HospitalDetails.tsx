import React, { FC, useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import DetailsBox from './DetailsBox';
import InformationBox from './InformationBox';
import { IHospital } from 'src/services/hospitals';
import { fetchSingleHospitalDetailAPI } from 'src/services/hospitals';

const HospitalDetails: FC<{}> = () => {
  const { hospitalId } = useParams();
  const [hospitalDetails, setHospitalDetails] = useState<IHospital>({} as IHospital);

  useEffect(() => {
    fetchHospitalDetails();
  }, []);

  const fetchHospitalDetails = async () => {
    try {
      if (hospitalId) {
        const response: IHospital = await fetchSingleHospitalDetailAPI(hospitalId);
        setHospitalDetails(response);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container-fluid mt-4">
      <Row className="mb-2">
        <Col md={4}>
          <DetailsBox hospital={hospitalDetails} />
        </Col>

        <Col md={8} lg={7}>
          <InformationBox hospital={hospitalDetails} />
        </Col>
      </Row>
    </div>
  );
};

export default HospitalDetails;
