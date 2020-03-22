import React from 'react';
import { Row, Col, Media, Table } from 'react-bootstrap';

const Symptoms = () => (
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

          <Media className="mt-4">
            <img alt={''} src="/images/containedobject.png" className="align-self-center mr-3" />
            <Media.Body className="align-self-center">Containted Objects</Media.Body>
          </Media>

          <Media className="mt-4">
            <img alt={''} src="/images/unvaccinatedanimals.png" className="align-self-center mr-3" />
            <Media.Body className="align-self-center">Unvaccinated Animals</Media.Body>
          </Media>
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

          <Media className="mt-4">
            <img alt={''} src="/images/avoid.png" className="align-self-center mr-3" />
            <Media.Body className="align-self-center">Avoid Contact with Unvaccinated Animals</Media.Body>
          </Media>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-center">
        <Col md="6" lg="5" sm="12">
          <Table className="symptoms-table">
            <thead className="font-weight-bold text-white">
              <tr>
                <th className="bg-danger">High Risk</th>
                <th className="bg-red-l4">Sometimes</th>
                <th className="bg-red-l5">Rare</th>
              </tr>
            </thead>

            <tbody className="text-danger">
              <tr>
                <td className="bg-red-l1">Fever</td>
                <td className="bg-red-l2">Headaches</td>
                <td className="bg-red-l3">Diarrohea</td>
              </tr>
              <tr>
                <td className="bg-red-l1">Dry Cough</td>
                <td className="bg-red-l2">Aches & pain</td>
                <td className="bg-red-l3">Runny Nose</td>
              </tr>
              <tr>
                <td className="bg-red-l1">Shortness of breath</td>
                <td className="bg-red-l2">Sore throat</td>
                <td className="bg-red-l3"></td>
              </tr>
            </tbody>
          </Table>

          <div className="small mb-3 text-center text-lightblue">
            Sources: CDC, WHO, American College of Allergy, Asthma and Immunology
          </div>
        </Col>
      </Row>
    </div>
  </>
);

export default Symptoms;
