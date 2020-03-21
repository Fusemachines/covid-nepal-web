import React from 'react';
import { Row, Col, Media } from 'react-bootstrap';

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
          <img alt={''} src="/images/symptoms.png" className="img alt={''}-responsive" />
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
    </div>
  </>
);

export default Symptoms;
