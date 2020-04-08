import React, { FC } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import GovernmentNotices from './GovernmentNotices';
import Resources from './Resources';
import Support from './Support';
import lo from 'src/i18n/en';

const NoticesTabs: FC<{}> = () => {
  const [t] = useTranslation();

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="notice">
      <Nav variant="tabs" className="notices">
        <Nav.Item>
          <Nav.Link eventKey="notice">{t(lo.notic_governNotice)}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="resources">{t(lo.notic_resources)}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="support">{t(lo.notic_support)}</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="notice">
          <GovernmentNotices />
        </Tab.Pane>
        <Tab.Pane eventKey="resources">
          <Resources />
        </Tab.Pane>
        <Tab.Pane eventKey="support">
          <Support />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default NoticesTabs;
