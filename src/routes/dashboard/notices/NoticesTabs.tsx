import React, { FC } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import GovernmentNotices from './GovernmentNotices';
import Resources from './Resources';

const NoticesTabs: FC<{}> = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="notice">
      <Nav variant="tabs" className="">
        <Nav.Item>
          <Nav.Link eventKey="notice">Government Notices</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="resources">Resources</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="notice">
          <GovernmentNotices />
        </Tab.Pane>
        <Tab.Pane eventKey="resources">
          <Resources />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default NoticesTabs;
