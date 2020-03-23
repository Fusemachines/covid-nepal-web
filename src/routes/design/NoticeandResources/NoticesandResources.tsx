import React from 'react';
import Menu from '../Navbar';
import { Row, Col, Tab, Nav, Media } from 'react-bootstrap';

const NoticesandResources = () => (
  <>
    <Menu />

    <div className="container">
      <Row className="mt-5 bg-bluelight semi-rounded">
        <Col lg={10} className="pt-4 pb-4">
          <Tab.Container id="left-tabs-example" defaultActiveKey="resources">
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
                <div className="p-4">Government Notices</div>
              </Tab.Pane>

              <Tab.Pane eventKey="resources">
                <ul className="resources__list">
                  <li>
                    <a href="https://www.unicef.org/nepal/stories/novel-coronavirus" className="p-3">
                      <Media>
                        <img
                          width={80}
                          height={80}
                          className="mr-3"
                          src="/images/protect_yourself.png"
                          alt="Generic placeholder"
                        />
                        <Media.Body>
                          <h5 className="resources__title">How to protect yourself and others against COVID-19</h5>
                          <span className="resources__link">
                            https://www.unicef.org/nepal/stories/novel-coronavirus
                          </span>
                        </Media.Body>
                      </Media>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.unicef.org/nepal/join-fight-against-misinformation" className="p-3">
                      <Media>
                        <img
                          width={80}
                          height={80}
                          className="mr-3"
                          src="/images/fight_misinformation.png"
                          alt="Generic placeholder"
                        />
                        <Media.Body>
                          <h5 className="resources__title">Join the fight against misinformation</h5>
                          <span className="resources__link">
                            https://www.unicef.org/nepal/join-fight-against-misinformation
                          </span>
                        </Media.Body>
                      </Media>
                    </a>
                  </li>
                </ul>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </div>
  </>
);

export default NoticesandResources;
