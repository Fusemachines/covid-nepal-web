import React, { createContext, useState, useEffect } from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import RequestorsTab from "./Tabs/RequestorsTab";
import SupportersTab from "./Tabs/SupportersTab";
import RequestsFulfilled from "./Tabs/RequestsFulfilledTab";
import { IRequestor, fetchRequestorsAPI } from "src/services/frontline";

export interface IRequestorsContext {
  isLoaded: boolean;
  requestorsList: Array<IRequestor>;
}

export const RequestorsContext = createContext({} as IRequestorsContext);

const SupportUsTabs = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [requestorsList, setRequestorsList] = useState<Array<IRequestor>>([]);

  useEffect(() => {
    fetchRequestors();
  }, []);

  const fetchRequestors = async () => {
    setIsLoaded(false);
    try {
      const response = await fetchRequestorsAPI();
      setRequestorsList(response.docs);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

  return (
    <Row className="my-5 justify-content-center tab-container">
      <Col sm="12">
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Supporter">
            <SupportersTab />
          </Tab>

          <Tab eventKey="requestForSupport" title="Request for Support">
            <RequestorsContext.Provider value={{ isLoaded, requestorsList }}>
              <RequestorsTab />
            </RequestorsContext.Provider>
          </Tab>
          <Tab eventKey="requestFulfilled" title="Request Fulfilled">
            <RequestorsContext.Provider value={{ isLoaded, requestorsList }}>
              <RequestsFulfilled />
            </RequestorsContext.Provider>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default SupportUsTabs;
