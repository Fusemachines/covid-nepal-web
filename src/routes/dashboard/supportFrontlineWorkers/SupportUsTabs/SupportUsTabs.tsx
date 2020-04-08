import React, { createContext, useState, useEffect } from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import RequestorsTab from './Tabs/RequestorsTab';
import SupportersTab from './Tabs/SupportersTab';
import RequestsFulfilledTab from './Tabs/RequestsFulfilledTab';
import { IRequestor } from 'src/services/frontline';

const SupportUsTabs = () => {
  return (
    <Row className="my-5 justify-content-center tab-container">
      <Col sm="12">
        <Tabs defaultActiveKey="requestsForSupport" id="uncontrolled-tab-example" className="notices">
          <Tab eventKey="requestsForSupport" title="Requests for Support">
            <RequestorsTab />
          </Tab>
          <Tab eventKey="supporters" title="Supporters">
            <SupportersTab />
          </Tab>

          <Tab eventKey="requestsFulfilled" title="Requests Fulfilled">
            <RequestsFulfilledTab />
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default SupportUsTabs;
