import React from 'react';
import { Col, Row, Tab, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import HospitalCapacity from 'src/routes/dashboard/landing/hospitals/hospitalCapacity';
import lo from 'src/i18n/en';
import HubHospitals from './hubHospitals';

const Hospitals = () => {
  const [t] = useTranslation();

  return (
    <>
      <Row className="mt-3">
        <Col sm="12">
          <div className="rounded bg-bluelight overflow-hidden">
            <Tab.Container id="left-tabs-example" defaultActiveKey="hospital-capacity">
              <Row>
                <Col lg={4}>
                  <Nav fill variant="tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="hospital-capacity">
                        <div>{t(lo.contac_hospitalCapacityData)}</div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="hub-hospital">Hub Hospital</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                <Col sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="hospital-capacity">
                      <HospitalCapacity />
                    </Tab.Pane>
                    <Tab.Pane eventKey="hub-hospital">
                      <HubHospitals />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Hospitals;
