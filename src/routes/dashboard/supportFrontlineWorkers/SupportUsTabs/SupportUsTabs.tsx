import React from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import RequestorsTab from "./Tabs/RequestorsTab";
import SupportersTab from "./Tabs/SupportersTab";
import RequestsFulfilled from "./Tabs/RequestsFulfilledTab";

const SupportUsTabs = () => {
  return (
    <Row className="my-5 justify-content-center tab-container">
      <Col sm="12">
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Supporter">
            <SupportersTab />
          </Tab>

          <Tab eventKey="requestForSupport" title="Request for Support">
            <RequestorsTab />
          </Tab>
          <Tab eventKey="requestFulfilled" title="Request Fulfilled">
            <RequestsFulfilled />
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default SupportUsTabs;
