import React, { FC } from 'react';
import { Row, Col, Tab, Nav } from 'react-bootstrap';

import WhereToTest from './WhereToTest';
import WhenToTest from './WhenToTest';

const TestingInfoTabs: FC<{}> = () => {
  return (
    <Tab.Container defaultActiveKey="first">
      <Row>
        {/* Tab header */}
        <Col sm={12}>
          <Nav fill variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="first" className="p-3">
                Where to get tested?
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="second" className="p-3">
                When to get tested?
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        {/* Tab body */}
        <Col sm={12} className="text-white">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <WhereToTest />
            </Tab.Pane>

            <Tab.Pane eventKey="second">
              <WhenToTest />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default TestingInfoTabs;
