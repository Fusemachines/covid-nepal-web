import React from 'react';
import Menu from '../Navbar';
import { Row, Col, Tab, Nav } from 'react-bootstrap';

const NoticesandResources = () => (
  <>
    <Menu />

    <div className="container">
      <Row>
        <Col lg={10}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="resources">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="notice">Government Notices</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="resources">Resources</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="notice">
                <div className="p-4">Government Notices</div>
              </Tab.Pane>

              <Tab.Pane eventKey="resources">
                <div className="p-4">Resources</div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </div>
  </>
);

export default NoticesandResources;
