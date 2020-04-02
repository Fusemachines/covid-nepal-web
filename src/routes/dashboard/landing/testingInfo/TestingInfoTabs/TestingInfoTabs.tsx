import React, { FC } from 'react';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import WhereToTest from './WhereToTest';
import WhenToTest from './WhenToTest';
import lo from 'src/i18n/en';

const TestingInfoTabs: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <Tab.Container defaultActiveKey="first">
      <Row>
        {/* Tab header */}
        <Col sm={12}>
          <Nav fill variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="first" className="p-3">
                {t(lo.contac_whereToGetTested)}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="second" className="p-3">
                {t(lo.contac_whenToGetTested)}
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
