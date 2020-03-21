import React from 'react';
import { Row, Col, Tab, Nav, Media, Table } from 'react-bootstrap';

import CovidCases from 'src/routes/dashboard/landing/covidCases';
import HospitalCapacity from 'src/routes/dashboard/landing/hospitalCapacity';

const Landing = () => (
  <>
    <div className="container-fluid mt-3">
      <Row>
        <CovidCases />

        {/* tabpannel */}
        <Col md="12" lg="5" className="mt-2">
          <div className="rounded bg-bluelight h-100 overflow-hidden">
            <Tab.Container defaultActiveKey="first">
              <Row>
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

                <Col sm={12} className="text-white">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="px-3 py-4">
                        <div className="h5 m-0">
                          <span className="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <g id="Group_583" data-name="Group 583" transform="translate(-764 -193)">
                                <g id="Group_581" data-name="Group 581" transform="translate(768.8 197.8)">
                                  <path
                                    id="Union_1"
                                    data-name="Union 1"
                                    d="M7.143,14.4a2,2,0,0,1-2-2V9.257H2a2,2,0,0,1-2-2V7.142a2,2,0,0,1,2-2H5.143V2a2,2,0,0,1,2-2h.113a2,2,0,0,1,2,2V5.143H12.4a2,2,0,0,1,2,2v.114a2,2,0,0,1-2,2H9.257V12.4a2,2,0,0,1-2,2Z"
                                    fill="#fff"
                                  />
                                </g>
                                <g
                                  id="Rectangle_789"
                                  data-name="Rectangle 789"
                                  transform="translate(764 193)"
                                  fill="none"
                                  stroke="#fff"
                                  stroke-linecap="square"
                                  stroke-width="2"
                                >
                                  <rect width="24" height="24" rx="4" stroke="none" />
                                  <rect x="1" y="1" width="22" height="22" rx="3" fill="none" />
                                </g>
                              </g>
                            </svg>
                          </span>
                          Hospitals allocated for Covid-19
                        </div>

                        {/* table */}
                        <div className="mt-4">
                          <Table responsive className="text-white">
                            <thead>
                              <tr>
                                <th>Name of Hospital</th>
                                <th>Open Hours</th>
                                <th>No. of beds available</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>
                                  <div>Bir Hospital</div>
                                </td>
                                <td className="text-center">
                                  <div>8 AM - 3 PM</div>
                                  <small>Sun - Fri</small>
                                </td>
                                <td className="align-middle">
                                  <div className="h5 text-warning font-weight-bold text-right">50 / 120</div>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div>Bir Hospital</div>
                                </td>
                                <td className="text-center">
                                  <div>8 AM - 3 PM</div>
                                  <small>Sun - Fri</small>
                                </td>
                                <td className="align-middle">
                                  <div className="h5 text-warning font-weight-bold text-right">50 / 120</div>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div>Bir Hospital</div>
                                </td>
                                <td className="text-center">
                                  <div>8 AM - 3 PM</div>
                                  <small>Sun - Fri</small>
                                </td>
                                <td className="align-middle">
                                  <div className="h5 text-warning font-weight-bold text-right">50 / 120</div>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div>Bir Hospital</div>
                                </td>
                                <td className="text-center">
                                  <div>8 AM - 3 PM</div>
                                  <small>Sun - Fri</small>
                                </td>
                                <td className="align-middle">
                                  <div className="h5 text-warning font-weight-bold text-right">50 / 120</div>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <div className="px-3 py-4">
                        <div className="info-title mx-5">
                          Go for immediate Covid-19 test if you are showing following symptoms
                        </div>

                        <Media className="mt-4 bg-white px-4 py-3">
                          <img alt={''} src="/images/highfever.png" className="align-self-center mr-3" />
                          <Media.Body className="align-self-center">
                            <div className="text-danger font-weight-bold h6">High Fever (Above 100.4° F)</div>
                          </Media.Body>
                        </Media>

                        <Media className="mt-4 bg-white px-4 py-3">
                          <img alt={''} src="/images/airtransmission.png" className="align-self-center mr-3" />
                          <Media.Body className="align-self-center">
                            <div className="text-danger font-weight-bold h6">Dry Cough</div>
                          </Media.Body>
                        </Media>

                        <Media className="mt-4 bg-white px-4 py-3">
                          <img alt={''} src="/images/usenose-rag.png" className="align-self-center mr-3" />
                          <Media.Body className="align-self-center">
                            <div className="text-danger font-weight-bold h6">Difficulty in breathing</div>
                          </Media.Body>
                        </Media>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Col>

        <Col md="12" lg="3" className="mt-2 order-lg-first">
          <div className="rounded bg-bluelight p-3">
            <div className="h5 font-weight-bold mb-3">Latest News</div>

            <div className="">Latest News</div>
          </div>
        </Col>
      </Row>
      <HospitalCapacity />
    </div>
  </>
);

export default Landing;
