import React from 'react';
import { Row, Col, Media } from 'react-bootstrap';
import Menu from '../Navbar';

const Symptoms = () => (
  <>
    <Menu />

    <div className="container-fluid mt-3">
      <Row className="mt-5">
        <Col lg="3" className="mt-4 text-white">
          <div className="h5 title">Contagion</div>

          <Media>
            <img src="/images/airtransmission.png" className="img-responsive align-self-center mr-2" />
            <Media.Body>Air Transmission</Media.Body>
          </Media>

          <Media className="mt-3">
            <img src="/images/humancontact.png" className="img-responsive align-self-center mr-2" />
            <Media.Body>Human Contact</Media.Body>
          </Media>

          <Media className="mt-3">
            <img src="/images/containtedobject.png" className="img-responsive align-self-center mr-2" />
            <Media.Body>Containted Objects</Media.Body>
          </Media>

          <Media className="mt-3">
            <img src="/images/unvaccinatedanimals.png" className="img-responsive align-self-center mr-2" />
            <Media.Body>Unvaccinated Animals</Media.Body>
          </Media>
        </Col>
        <Col lg="5" className="mt-4">
          <img src="/images/symptoms.png" className="img-responsive" />
        </Col>

        <Col lg="3" className="mt-4">
          <div className="h5 title bg-yellow">Preventions</div>

          <Media>
            <img src="/images/wearmasks.png" className="img-responsive align-self-center mr-2" />
            <Media.Body>Wear Masks</Media.Body>
          </Media>

          <Media className="mt-3">
            <img src="/images/washhands.png" className="img-responsive align-self-center mr-2" />
            <Media.Body>Wash your Hands</Media.Body>
          </Media>

          <Media className="mt-3">
            <img src="/images/usenose-rag.png" className="img-responsive align-self-center mr-2" />
            <Media.Body>Use Nose-Rag</Media.Body>
          </Media>

          <Media className="mt-3">
            <img src="/images/avoid.png" className="img-responsive align-self-center mr-2" />
            <Media.Body>Avoid Contact with Unvaccinated Animals</Media.Body>
          </Media>
        </Col>
      </Row>
    </div>
  </>
);

export default Symptoms;
