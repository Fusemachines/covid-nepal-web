import React from 'react';
import { Row, Col, Nav, Tab, Table, Media } from 'react-bootstrap';
import Menu from '../Navbar';

const Home = () => (
  <>
    <Menu />

    <div className="container-fluid mt-3">
      <Row>
        <Col md="12" lg="4" className="mt-2">
          <div className="rounded bg-bluelight p-4">
            <div className="mb-3 border-bottom pb-2">
              <div className="d-inline-block">
                <div className="h5 mb-0 font-weight-bold">Government Virus Counts</div>
                <small>Updated 1 minutes ago</small>
              </div>
            </div>
            <div className="clearfix"></div>

            <Row className="mb-3">
              {/* nepal data */}
              <Col xs="6">
                <div className="font-weight-bold h5 mb-3">Nepal Update</div>
                {/* total tested */}
                <div className="">Total Samples Tested</div>
                <div className="h3 m-0 font-weight-bold  d-inline-block">562</div>
                <div className="text-success d-inline-block">
                  <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.192" height="11" viewBox="0 0 11.192 11">
                      <g id="Group_99" data-name="Group 99" transform="translate(-381 -206)">
                        <circle
                          id="Ellipse_5"
                          data-name="Ellipse 5"
                          cx="5.5"
                          cy="5.5"
                          r="5.5"
                          transform="translate(381 206)"
                          fill="#8aca2b"
                          opacity="0.2"
                        />
                        <g id="Group_70" data-name="Group 70" transform="translate(219.365 -207.365) rotate(45)">
                          <line
                            id="Line_10"
                            data-name="Line 10"
                            y2="7"
                            transform="translate(414.5 174.5)"
                            fill="none"
                            stroke="#8aca2b"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_11"
                            data-name="Line 11"
                            x1="3"
                            y2="3"
                            transform="translate(411.5 174.5)"
                            fill="none"
                            stroke="#8aca2b"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_12"
                            data-name="Line 12"
                            x2="3"
                            y2="3"
                            transform="translate(414.5 174.5)"
                            fill="none"
                            stroke="#8aca2b"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <small>0.10%</small>
                </div>

                {/* total Comformed */}
                <div className="mt-3">Total Conformed</div>
                <div className="h3 m-0 font-weight-bold  d-inline-block">1</div>
                <div className="text-success d-inline-block">
                  <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.192" height="11" viewBox="0 0 11.192 11">
                      <g id="Group_99" data-name="Group 99" transform="translate(-381 -206)">
                        <circle
                          id="Ellipse_5"
                          data-name="Ellipse 5"
                          cx="5.5"
                          cy="5.5"
                          r="5.5"
                          transform="translate(381 206)"
                          fill="#8aca2b"
                          opacity="0.2"
                        />
                        <g id="Group_70" data-name="Group 70" transform="translate(219.365 -207.365) rotate(45)">
                          <line
                            id="Line_10"
                            data-name="Line 10"
                            y2="7"
                            transform="translate(414.5 174.5)"
                            fill="none"
                            stroke="#8aca2b"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_11"
                            data-name="Line 11"
                            x1="3"
                            y2="3"
                            transform="translate(411.5 174.5)"
                            fill="none"
                            stroke="#8aca2b"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_12"
                            data-name="Line 12"
                            x2="3"
                            y2="3"
                            transform="translate(414.5 174.5)"
                            fill="none"
                            stroke="#8aca2b"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <small>0.10%</small>
                </div>

                {/* total Recovered */}
                <div className="mt-3">Total Recovered</div>
                <div className="h3 m-0 font-weight-bold d-inline-block ">1</div>
                <div className="d-inline-block text-warning">
                  <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.192" height="11" viewBox="0 0 11.192 11">
                      <g id="Group_100" data-name="Group 100" transform="translate(-557 -206)">
                        <circle
                          id="Ellipse_6"
                          data-name="Ellipse 6"
                          cx="5.5"
                          cy="5.5"
                          r="5.5"
                          transform="translate(557 206)"
                          fill="#fedb41"
                          opacity="0.2"
                        />
                        <g id="Group_71" data-name="Group 71" transform="translate(395.365 -207.365) rotate(45)">
                          <line
                            id="Line_10"
                            data-name="Line 10"
                            y2="7"
                            transform="translate(414.5 174.5)"
                            fill="none"
                            stroke="#fedb41"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_11"
                            data-name="Line 11"
                            x1="3"
                            y2="3"
                            transform="translate(411.5 174.5)"
                            fill="none"
                            stroke="#fedb41"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_12"
                            data-name="Line 12"
                            x2="3"
                            y2="3"
                            transform="translate(414.5 174.5)"
                            fill="none"
                            stroke="#fedb41"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <small>1%</small>
                </div>

                {/* total serious */}
                <div className="mt-3">Total Serious</div>
                <div className="h3 m-0 font-weight-bold d-inline-block">0</div>
                <div className="h6 text-danger d-inline-block">
                  <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11.192" viewBox="0 0 11 11.192">
                      <g id="Group_102" data-name="Group 102" transform="translate(-558 -295)">
                        <circle
                          id="Ellipse_8"
                          data-name="Ellipse 8"
                          cx="5.5"
                          cy="5.5"
                          r="5.5"
                          transform="translate(558 295)"
                          fill="#e42929"
                          opacity="0.2"
                        />
                        <g id="Group_73" data-name="Group 73" transform="translate(563.243 305.192) rotate(-135)">
                          <line
                            id="Line_10"
                            data-name="Line 10"
                            y2="7"
                            transform="translate(3 0)"
                            fill="none"
                            stroke="#e42929"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_11"
                            data-name="Line 11"
                            x1="3"
                            y2="3"
                            transform="translate(0 0)"
                            fill="none"
                            stroke="#e42929"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_12"
                            data-name="Line 12"
                            x2="3"
                            y2="3"
                            transform="translate(3 0)"
                            fill="none"
                            stroke="#e42929"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <small>0%</small>
                </div>

                {/* total serious */}
                <div className="mt-3">Total Death</div>
                <div className="h3 m-0 font-weight-bold d-inline-block">0</div>
                <div className="h6 text-danger d-inline-block">
                  <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11.192" viewBox="0 0 11 11.192">
                      <g id="Group_102" data-name="Group 102" transform="translate(-558 -295)">
                        <circle
                          id="Ellipse_8"
                          data-name="Ellipse 8"
                          cx="5.5"
                          cy="5.5"
                          r="5.5"
                          transform="translate(558 295)"
                          fill="#e42929"
                          opacity="0.2"
                        />
                        <g id="Group_73" data-name="Group 73" transform="translate(563.243 305.192) rotate(-135)">
                          <line
                            id="Line_10"
                            data-name="Line 10"
                            y2="7"
                            transform="translate(3 0)"
                            fill="none"
                            stroke="#e42929"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_11"
                            data-name="Line 11"
                            x1="3"
                            y2="3"
                            transform="translate(0 0)"
                            fill="none"
                            stroke="#e42929"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_12"
                            data-name="Line 12"
                            x2="3"
                            y2="3"
                            transform="translate(3 0)"
                            fill="none"
                            stroke="#e42929"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <small>0%</small>
                </div>
              </Col>
              {/* global data */}
              <Col xs="6">
                <div className="font-weight-bold h5 mb-3">Global Update</div>

                {/* total tested */}
                <div className="">Total Samples Tested</div>
                <div className="h3 m-0 font-weight-bold  d-inline-block">562</div>
                <div className="text-success d-inline-block">
                  <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.192" height="11" viewBox="0 0 11.192 11">
                      <g id="Group_99" data-name="Group 99" transform="translate(-381 -206)">
                        <circle
                          id="Ellipse_5"
                          data-name="Ellipse 5"
                          cx="5.5"
                          cy="5.5"
                          r="5.5"
                          transform="translate(381 206)"
                          fill="#8aca2b"
                          opacity="0.2"
                        />
                        <g id="Group_70" data-name="Group 70" transform="translate(219.365 -207.365) rotate(45)">
                          <line
                            id="Line_10"
                            data-name="Line 10"
                            y2="7"
                            transform="translate(414.5 174.5)"
                            fill="none"
                            stroke="#8aca2b"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_11"
                            data-name="Line 11"
                            x1="3"
                            y2="3"
                            transform="translate(411.5 174.5)"
                            fill="none"
                            stroke="#8aca2b"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_12"
                            data-name="Line 12"
                            x2="3"
                            y2="3"
                            transform="translate(414.5 174.5)"
                            fill="none"
                            stroke="#8aca2b"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <small>0.10%</small>
                </div>

                {/* total Comformed */}
                <div className="mt-3">Total Conformed</div>
                <div className="h3 m-0 font-weight-bold  d-inline-block">1</div>
                <div className="text-success d-inline-block">
                  <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.192" height="11" viewBox="0 0 11.192 11">
                      <g id="Group_99" data-name="Group 99" transform="translate(-381 -206)">
                        <circle
                          id="Ellipse_5"
                          data-name="Ellipse 5"
                          cx="5.5"
                          cy="5.5"
                          r="5.5"
                          transform="translate(381 206)"
                          fill="#8aca2b"
                          opacity="0.2"
                        />
                        <g id="Group_70" data-name="Group 70" transform="translate(219.365 -207.365) rotate(45)">
                          <line
                            id="Line_10"
                            data-name="Line 10"
                            y2="7"
                            transform="translate(414.5 174.5)"
                            fill="none"
                            stroke="#8aca2b"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_11"
                            data-name="Line 11"
                            x1="3"
                            y2="3"
                            transform="translate(411.5 174.5)"
                            fill="none"
                            stroke="#8aca2b"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_12"
                            data-name="Line 12"
                            x2="3"
                            y2="3"
                            transform="translate(414.5 174.5)"
                            fill="none"
                            stroke="#8aca2b"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <small>0.10%</small>
                </div>

                {/* total Recovered */}
                <div className="mt-3">Total Recovered</div>
                <div className="h3 m-0 font-weight-bold d-inline-block ">1</div>
                <div className="d-inline-block text-warning">
                  <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.192" height="11" viewBox="0 0 11.192 11">
                      <g id="Group_100" data-name="Group 100" transform="translate(-557 -206)">
                        <circle
                          id="Ellipse_6"
                          data-name="Ellipse 6"
                          cx="5.5"
                          cy="5.5"
                          r="5.5"
                          transform="translate(557 206)"
                          fill="#fedb41"
                          opacity="0.2"
                        />
                        <g id="Group_71" data-name="Group 71" transform="translate(395.365 -207.365) rotate(45)">
                          <line
                            id="Line_10"
                            data-name="Line 10"
                            y2="7"
                            transform="translate(414.5 174.5)"
                            fill="none"
                            stroke="#fedb41"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_11"
                            data-name="Line 11"
                            x1="3"
                            y2="3"
                            transform="translate(411.5 174.5)"
                            fill="none"
                            stroke="#fedb41"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_12"
                            data-name="Line 12"
                            x2="3"
                            y2="3"
                            transform="translate(414.5 174.5)"
                            fill="none"
                            stroke="#fedb41"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <small>1%</small>
                </div>

                {/* total serious */}
                <div className="mt-3">Total Serious</div>
                <div className="h3 m-0 font-weight-bold d-inline-block">0</div>
                <div className="h6 text-danger d-inline-block">
                  <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11.192" viewBox="0 0 11 11.192">
                      <g id="Group_102" data-name="Group 102" transform="translate(-558 -295)">
                        <circle
                          id="Ellipse_8"
                          data-name="Ellipse 8"
                          cx="5.5"
                          cy="5.5"
                          r="5.5"
                          transform="translate(558 295)"
                          fill="#e42929"
                          opacity="0.2"
                        />
                        <g id="Group_73" data-name="Group 73" transform="translate(563.243 305.192) rotate(-135)">
                          <line
                            id="Line_10"
                            data-name="Line 10"
                            y2="7"
                            transform="translate(3 0)"
                            fill="none"
                            stroke="#e42929"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_11"
                            data-name="Line 11"
                            x1="3"
                            y2="3"
                            transform="translate(0 0)"
                            fill="none"
                            stroke="#e42929"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_12"
                            data-name="Line 12"
                            x2="3"
                            y2="3"
                            transform="translate(3 0)"
                            fill="none"
                            stroke="#e42929"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <small>0%</small>
                </div>

                {/* total serious */}
                <div className="mt-3">Total Death</div>
                <div className="h3 m-0 font-weight-bold d-inline-block">0</div>
                <div className="h6 text-danger d-inline-block">
                  <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11.192" viewBox="0 0 11 11.192">
                      <g id="Group_102" data-name="Group 102" transform="translate(-558 -295)">
                        <circle
                          id="Ellipse_8"
                          data-name="Ellipse 8"
                          cx="5.5"
                          cy="5.5"
                          r="5.5"
                          transform="translate(558 295)"
                          fill="#e42929"
                          opacity="0.2"
                        />
                        <g id="Group_73" data-name="Group 73" transform="translate(563.243 305.192) rotate(-135)">
                          <line
                            id="Line_10"
                            data-name="Line 10"
                            y2="7"
                            transform="translate(3 0)"
                            fill="none"
                            stroke="#e42929"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_11"
                            data-name="Line 11"
                            x1="3"
                            y2="3"
                            transform="translate(0 0)"
                            fill="none"
                            stroke="#e42929"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_12"
                            data-name="Line 12"
                            x2="3"
                            y2="3"
                            transform="translate(3 0)"
                            fill="none"
                            stroke="#e42929"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <small>0%</small>
                </div>
              </Col>
            </Row>

            <small>
              *Disclaimer: Aliquam faucibus, odio nec commodo aliqum, neque felis placerat dui, a porta ante lectus
              dapibus est. Aliquam a bibendum mi
            </small>
          </div>
        </Col>

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

        {/* latest news */}
        <Col md="12" lg="3" className="mt-2 order-lg-first">
          <div className="rounded bg-bluelight p-3 h-100">
            <div className="h5 font-weight-bold mb-3">Latest News</div>

            <div className="">Latest News</div>
          </div>
        </Col>
      </Row>

      {/* hospital data */}
      <Row className="mt-5">
        <Col sm="12">
          <div className="rounded bg-bluelight px-3 py-4">
            <div className="d-md-flex filter-wrapper mb-4">
              <div className="h5 font-weight-bold mb-3 mr-auto">Hospital Capacity Data</div>
              <div className="ml-auto">
                <div className="filter d-inline-block">
                  <span>Provinance</span>
                  <select className="custom-select form-control-sm filter-select">
                    <option>Kathmandu</option>
                    <option>Bhaktapur</option>
                  </select>
                </div>
                <div className="filter d-inline-block">
                  <span>Provinance</span>
                  <select className="custom-select form-control-sm filter-select">
                    <option>Kathmandu</option>
                    <option>Bhaktapur</option>
                  </select>
                </div>
                <div className="filter d-inline-block">
                  <span>Provinance</span>
                  <select className="custom-select form-control-sm filter-select">
                    <option>Kathmandu</option>
                    <option>Bhaktapur</option>
                  </select>
                </div>
              </div>
            </div>
            {/* filter ended */}

            {/* table */}
            <Table responsive className="text-white">
              <thead>
                <tr>
                  <th>Name of Hospital</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>No. of beds</th>
                  <th>No. of ICU beds</th>
                  <th>Covid-19 Test</th>
                  <th>Isolation Rooms</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div>Bir Hospital</div>
                  </td>
                  <td>Ranipokhari, Kathmandu</td>
                  <td>
                    <div className="badges">
                      <div className="badges-item m-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                          <path
                            id="Icon_material-call"
                            data-name="Icon material-call"
                            d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                            transform="translate(-1.75 -1.75)"
                            fill="#00c571"
                          />
                        </svg>
                        9851255839
                      </div>
                    </div>
                  </td>
                  <td>100</td>
                  <td>20</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  </>
);

export default Home;
