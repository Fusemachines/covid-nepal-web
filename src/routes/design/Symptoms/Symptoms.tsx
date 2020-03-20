import React from 'react';
import { Row, Col, Media } from 'react-bootstrap';
import Menu from '../Navbar';

const Symptoms = () => (
  <>
    <Menu />

    <div className="container mt-3">
      <Row className="mt-5">
        <Col lg="3" className="mt-4 text-white">
          <div className="h5 title bg-orange">Contagion</div>

          <Media className="mt-4">
            <img src="/images/airtransmission.png" className="align-self-center mr-3" />
            <Media.Body className="align-self-center">Air Transmission</Media.Body>
          </Media>

          <Media className="mt-4">
            <img src="/images/humancontact.png" className="align-self-center mr-3" />
            <Media.Body className="align-self-center">Human Contact</Media.Body>
          </Media>

          <Media className="mt-4">
            <img src="/images/containedobject.png" className="align-self-center mr-3" />
            <Media.Body className="align-self-center">Containted Objects</Media.Body>
          </Media>

          <Media className="mt-4">
            <img src="/images/unvaccinatedanimals.png" className="align-self-center mr-3" />
            <Media.Body className="align-self-center">Unvaccinated Animals</Media.Body>
          </Media>
        </Col>

        <Col lg="6" className="mt-4">
          <img src="/images/symptoms.png" className="img-responsive" />
        </Col>

        <Col lg="3" className="mt-4">
          <div className="h5 title bg-yellow">Preventions</div>

          <Media className="mt-4">
            <img src="/images/wearmasks.png" className="align-self-center mr-3" />
            <Media.Body className="align-self-center">Wear Masks</Media.Body>
          </Media>

          <Media className="mt-4">
            <img src="/images/washhand.png" className="align-self-center mr-3" />
            <Media.Body className="align-self-center">Wash your Hands</Media.Body>
          </Media>

          <Media className="mt-4">
            <img src="/images/usenose-rag.png" className="align-self-center mr-3" />
            <Media.Body className="align-self-center">Use Nose-Rag</Media.Body>
          </Media>

          <Media className="mt-4">
            <img src="/images/avoid.png" className="align-self-center mr-3" />
            <Media.Body className="align-self-center">Avoid Contact with Unvaccinated Animals</Media.Body>
          </Media>
        </Col>
      </Row>
    </div>
  </>
);

export default Symptoms;
