import React from 'react';
import Menu from '../Navbar';
import { Row, Col, Tab, Nav, Media } from 'react-bootstrap';

const NoticesandResources = () => (
  <>
    <Menu />

    <div className="container">
      <Row className="mt-5 bg-bluelight semi-rounded justify-content-center">
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
                <ul className="notices__list">
                  <li>
                    <a href="https://drive.google.com/file/d/1ouT9PpNpGuWJSWlQuvZzqGS5f3Ur2Jzb/view" className="p-3">
                      <h5 className="notices__title">Press Release as of 21 March 2020</h5>
                      <div className="notices__tag mr-3">
                        <img src="/images/tag.svg" />
                        <span>Press Release</span>
                      </div>
                      <div className="notices__date">
                        <img src="/images/history.svg" />
                        <span>20 March 2020</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/1c1aju7qThbnHGKCiqqxdfIobWWO9ulRP/view" className="p-3">
                      <h5 className="notices__title">Situation Report_COVID-19 #42 (as of 20 March 2020)</h5>
                      <div className="notices__tag mr-3">
                        <img src="/images/tag.svg" />
                        <span>Press Release</span>
                      </div>
                      <div className="notices__date">
                        <img src="/images/history.svg" />
                        <span>20 March 2020</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/drive/folders/1QhLMbT76t6Zu1sFy5qlB5aoDbHVAcnHx" className="p-3">
                      <h5 className="notices__title">Situation Reports #1 to #41</h5>
                      <div className="notices__tag mr-3">
                        <img src="/images/tag.svg" />
                        <span>Reports</span>
                      </div>
                      <div className="notices__date">
                        <img src="/images/history.svg" />
                        <span>19 March 2020</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/drive/folders/1QhLMbT76t6Zu1sFy5qlB5aoDbHVAcnHx" className="p-3">
                      <h5 className="notices__title">Updated notice on travel restriction related to COVID-19</h5>
                      <div className="notices__tag mr-3">
                        <img src="/images/tag.svg" />
                        <span>Press Release</span>
                      </div>
                      <div className="notices__date">
                        <img src="/images/history.svg" />
                        <span>18 March 2020</span>
                      </div>
                    </a>
                  </li>
                </ul>
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
