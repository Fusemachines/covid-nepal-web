import React, { useEffect } from 'react';
import { Row, Col, Media, Table } from 'react-bootstrap';

const Symptoms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container mt-3">
        <Row className="mt-5">
          <Col lg="3" className="mt-4 text-white">
            <div className="h5 title bg-orange">CONTAGION</div>

            <Media className="mt-4">
              <img alt={''} src="/images/airtransmission.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Air Transmission</Media.Body>
            </Media>

            <Media className="mt-4">
              <img alt={''} src="/images/humancontact.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Human Contact</Media.Body>
            </Media>

            {/* <Media className="mt-4">
              <img alt={''} src="/images/containedobject.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Contaminated Objects</Media.Body>
            </Media>

            <Media className="mt-4">
              <img alt={''} src="/images/unvaccinatedanimals.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Unvaccinated Animals</Media.Body>
            </Media> */}
          </Col>

          <Col lg="6" className="mt-4">
            <img alt={''} src="/images/symptoms.png" className="img-fluid" />
          </Col>

          <Col lg="3" className="mt-4">
            <div className="h5 title bg-yellow">PREVENTIONS</div>

            <Media className="mt-4">
              <img alt={''} src="/images/wearmasks.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Wear Masks</Media.Body>
            </Media>

            <Media className="mt-4">
              <img alt={''} src="/images/washhand.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Wash your Hands</Media.Body>
            </Media>

            <Media className="mt-4">
              <img alt={''} src="/images/usenose-rag.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Use Nose-Rag</Media.Body>
            </Media>

            {/* <Media className="mt-4">
              <img alt={''} src="/images/avoid.png" className="align-self-center mr-3" />
              <Media.Body className="align-self-center">Avoid Contact with Unvaccinated Animals</Media.Body>
            </Media> */}
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center">
          <Col md="9" sm="12">
            <div className="rounded oveflow-hidden bg-bluelight p-3">
              <Table className="symptoms-table" responsive>
                <thead className="font-weight-bold text-white">
                  <tr>
                    <th className="">Symptoms</th>
                    <th className="">COVID-19</th>
                    <th className="">Common Cold</th>
                    <th>Flu</th>
                    <th>Allergies</th>
                  </tr>
                </thead>

                <tbody className="text-white">
                  <tr>
                    <td className="">Fever</td>
                    <td className="font-weight-bold text-warning">Common</td>
                    <td className="">Rare</td>
                    <td>Common</td>
                    <td>Sometimes</td>
                  </tr>

                  <tr>
                    <td className="">Dry cough</td>
                    <td className="font-weight-bold text-warning">Common</td>
                    <td className="">Mild</td>
                    <td>Common</td>
                    <td>Sometimes</td>
                  </tr>

                  <tr>
                    <td className="">Shortness of breath</td>
                    <td className="font-weight-bold text-warning">Common</td>
                    <td className="">No</td>
                    <td>No</td>
                    <td>Common</td>
                  </tr>

                  <tr>
                    <td className="">Headache</td>
                    <td className="text-warning font-weight-bold">Sometimes</td>
                    <td className="">Rare</td>
                    <td>Common</td>
                    <td>Sometimes</td>
                  </tr>

                  <tr>
                    <td className="">Aches and pains</td>
                    <td className="text-warning font-weight-bold">Sometimes</td>
                    <td className="">Common</td>
                    <td>Common</td>
                    <td>No</td>
                  </tr>

                  <tr>
                    <td className="">Sore throat</td>
                    <td className="text-warning font-weight-bold">Sometimes</td>
                    <td className="">Common</td>
                    <td>Common</td>
                    <td>No</td>
                  </tr>

                  <tr>
                    <td className="">Fatigue</td>
                    <td className="text-warning font-weight-bold">Sometimes</td>
                    <td className="">Sometimes</td>
                    <td>Common</td>
                    <td>Sometimes</td>
                  </tr>

                  <tr>
                    <td className="">Diarrhea</td>
                    <td className="text-warning font-weight-bold">Rare</td>
                    <td className="">No</td>
                    <td>Sometimes*</td>
                    <td>No</td>
                  </tr>

                  <tr>
                    <td className="">Runny nose</td>
                    <td className="text-warning font-weight-bold">Rare</td>
                    <td className="">Common</td>
                    <td>Sometimes</td>
                    <td>Common</td>
                  </tr>

                  <tr>
                    <td className="">Sneezing</td>
                    <td className="text-warning font-weight-bold">No</td>
                    <td className="">Common</td>
                    <td>No</td>
                    <td>Common</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="small my-3 text-center text-lightblue">
              Sources: CDC, WHO, American College of Allergy, Asthma and Immunology
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Symptoms;
