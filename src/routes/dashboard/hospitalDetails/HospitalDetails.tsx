import React, { FC, useState, useEffect, createContext } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import DetailsBox from "./DetailsBox";
import InformationBox from "./InformationBox";
import { IHospital } from "src/services/hospitals";
import { fetchSingleHospitalDetailAPI } from "src/services/hospitals";

interface IHospitalDetailsContext {
  isLoaded: boolean;
  hospital: IHospital;
}

export const HospitalDetailsContext = createContext({} as IHospitalDetailsContext);

const HospitalDetails: FC<{}> = () => {
  const { hospitalId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hospitalDetails, setHospitalDetails] = useState<IHospital>({} as IHospital);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchHospitalDetails();
  }, []);

  const fetchHospitalDetails = async () => {
    setIsLoaded(false);
    try {
      if (hospitalId) {
        const response: IHospital = await fetchSingleHospitalDetailAPI(hospitalId);
        setHospitalDetails(response);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoaded(true);
    }
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <Row className="mb-2">
          <Col md={4}>
            <HospitalDetailsContext.Provider value={{ isLoaded, hospital: hospitalDetails }}>
              <DetailsBox />
            </HospitalDetailsContext.Provider>
          </Col>

          <Col md={8} lg={7}>
            <InformationBox hospital={hospitalDetails} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HospitalDetails;
