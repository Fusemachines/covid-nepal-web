import React from 'react';
import { Row, Col, Nav, Tab, Table, Media, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Menu from '../Navbar';

// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

const Home = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Menu />

      <div className="container-fluid mt-3">
        <Row>
          <Col md="12" lg="4" className="mt-2">
            <div className="rounded bg-bluelight p-4">
              <div className="mb-3 border-bottom pb-2">
                <div className="d-inline-block">
                  <div className="h5 mb-0 font-weight-bold">Covid-19 Cases</div>
                  <small>
                    Updated 1 minutes ago
                    <i className="ml-2 pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="9.327" height="9.333" viewBox="0 0 9.327 9.333">
                        <path
                          id="Icon_material-refresh"
                          data-name="Icon material-refresh"
                          d="M10.3,3.7a4.667,4.667,0,1,0,1.213,4.462H10.3A3.5,3.5,0,1,1,7,3.5,3.45,3.45,0,0,1,9.462,4.538L7.583,6.417h4.083V2.333L10.3,3.7Z"
                          transform="translate(-2.339 -2.333)"
                          fill="#80b8e7"
                        />
                      </svg>
                    </i>
                  </small>
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
                                    strokeLinecap="square"
                                    strokeWidth="2"
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
                            <Table responsive hover className="text-white">
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

              {/* <div className="covid-verified">
                <img src="/images/verified.svg" />
                <span>Verified</span>
              </div> */}
            </div>
          </Col>
        </Row>

        {/* hospital data */}
        <Row className="my-3">
          <Col sm="12">
            <div className="rounded bg-bluelight px-3 py-4">
              <div className="d-md-flex filter-wrapper mb-4">
                <div className="h5 font-weight-bold mb-3 mr-auto">Hospital Capacity Data</div>

                <div className="mx-auto">
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip id={`tooltip-total`} className="covid-hospital-count">
                        The total number of hospitals listed in covidnepal.org
                      </Tooltip>
                    }
                  >
                    <div className="count-box yellow">
                      <span>Total Hospitals </span> <span className="count">100</span>
                    </div>
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip id={`tooltip-verified`} className="covid-hospital-count">
                        The number of hospitals we called and verified the information.
                      </Tooltip>
                    }
                  >
                    <div className="count-box green">
                      <span>Total Verified </span> <span className="count">40</span>
                    </div>
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip id={`tooltip-review`} className="covid-hospital-count">
                        The number of hospitals we are currently verifying the information.
                      </Tooltip>
                    }
                  >
                    <div className="count-box blue">
                      <span>In Review </span> <span className="count">60</span>
                    </div>
                  </OverlayTrigger>
                </div>

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
                    <th>Covid-19 Tests</th>
                    <th>Contact</th>
                    <th>Isolation Beds</th>
                    <th>ICU</th>
                    <th>Govt Designated Center</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <div>
                        Bir Hospital
                        
                        <OverlayTrigger
                          placement={'top'}
                          overlay={
                            <Tooltip id={`tooltip-total`} className="covid-hospital-count">
                              Verified by covidnepal.org
                            </Tooltip>
                          }
                        >
                          <img src="/images/verified.svg" className="ml-2" />
                        </OverlayTrigger>
                      </div>
                    </td>
                    <td>
                      <div>Ranipokhari, Kathmandu</div>

                      <a className="pointer" onClick={handleShow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7.454" height="10" viewBox="0 0 7.454 10">
                          <path
                            id="Path_652"
                            data-name="Path 652"
                            d="M235.11,340.85c-.655-.886-1.3-1.739-1.921-2.6a18.066,18.066,0,0,1-1.358-1.957,3.685,3.685,0,0,1,2.733-5.4,3.766,3.766,0,0,1,4.256,3.3,3.7,3.7,0,0,1-.689,2.539C237.154,338.11,236.138,339.455,235.11,340.85Zm0-4.342a1.927,1.927,0,0,0,1.949-1.933,1.947,1.947,0,0,0-3.893-.008A1.932,1.932,0,0,0,235.112,336.509Z"
                            transform="translate(-231.382 -330.85)"
                            fill="#fff"
                          />
                        </svg>
                        <span className="ml-2">Map</span>
                      </a>
                    </td>
                    <td>
                      <div className="badges">
                        <div className="badges-item m-0">Available</div>
                      </div>
                    </td>
                    <td>01-4331390, 01-4332160</td>
                    <td>-</td>
                    <td>-</td>
                    <td>
                      <div className="badges">
                        <div className="badges-item m-0">Yes</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </div>

      {/* modal for maps */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Bir Hospital</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="map-large">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4035172171098!2d85.31146271500164!3d27.704824882792977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fffc37200b%3A0xfcc471d3e99106bc!2sBir%20Hospital!5e0!3m2!1sen!2snp!4v1584781293143!5m2!1sen!2snp"
              width="600"
              height="450"
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>

      
      <div className="small pt-2 pb-3 text-center text-lightblue">
        Suported by 
        <a href="https://fusemachines.com/" className="text-white mx-2" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="77.601" height="11.328" viewBox="0 0 77.601 11.328">
            <path id="Path_6355" data-name="Path 6355" d="M169.377,209.458a.244.244,0,0,0-.266-.269h-.461v-1.633h1.939c.62,0,.886.266.886.884v2.768a.994.994,0,0,0,1.986,0v-3.65h2.1v4.207a.244.244,0,0,0,.266.268h.461v1.908l-1.854,0a.84.84,0,0,1-.873-.856v-.229h-.023a2.15,2.15,0,0,1-1.942,1.078c-1.235,0-2.218-.582-2.218-2.34Zm8.483,2.056a3.075,3.075,0,0,0,1.83.878c.3,0,.473-.083.473-.3,0-.509-3.127-.675-3.127-2.655,0-1.314,1.248-1.884,2.568-1.884,1.019,0,2.426.284,2.426,1.386v.605H180.21v-.177c0-.166-.266-.284-.569-.284s-.557.094-.557.284c0,.629,3.163.544,3.163,2.594,0,1.233-1.1,1.979-2.559,1.979a3.816,3.816,0,0,1-2.764-1.113Zm8.179-3.955a2.705,2.705,0,0,1,2.819,2.945c0,.2-.048.613-.048.613h-3.846a1.362,1.362,0,0,0,1.421,1.113,2.836,2.836,0,0,0,1.619-.638l.816,1.371a3.92,3.92,0,0,1-2.6.971,3.161,3.161,0,0,1-3.349-3.2,3.032,3.032,0,0,1,3.17-3.181m.723,2.315a.767.767,0,0,0-.723-.779.976.976,0,0,0-1.015.779Zm5.263-4.778h.7V216.41h-.7Zm31.3.435a.413.413,0,1,1-.413.412.415.415,0,0,1,.413-.412m.287,8.41h-.57v-6.385h.57ZM241.6,212.2a1.487,1.487,0,0,1-.639,1.292,3.1,3.1,0,0,1-1.814.451,4.349,4.349,0,0,1-1.993-.384v-.615a4.418,4.418,0,0,0,1.993.471,2.648,2.648,0,0,0,1.408-.307.938.938,0,0,0,.48-.821c0-1.527-2.759-1.218-3.532-2.45a1.39,1.39,0,0,1-.192-.754,1.284,1.284,0,0,1,.59-1.11,2.877,2.877,0,0,1,1.65-.408,4.931,4.931,0,0,1,1.924.38l-.215.52a4.464,4.464,0,0,0-1.709-.383,2.494,2.494,0,0,0-1.216.253.781.781,0,0,0-.449.7c0,1.481,2.741,1.172,3.523,2.432a1.35,1.35,0,0,1,.193.73m-7.821,1.741a2.724,2.724,0,0,1-2.128-.84,3.071,3.071,0,0,1-.765-2.236,3.67,3.67,0,0,1,.738-2.4,2.434,2.434,0,0,1,1.987-.9,2.144,2.144,0,0,1,1.744.77,3.2,3.2,0,0,1,.639,2.1v.46h-4.508a2.65,2.65,0,0,0,.6,1.853,2.119,2.119,0,0,0,1.692.678,5.251,5.251,0,0,0,.941-.074,5.9,5.9,0,0,0,1.028-.323v.518a4.6,4.6,0,0,1-.98.314,5.336,5.336,0,0,1-.989.082m-.168-5.87a1.879,1.879,0,0,0-1.452.6,2.823,2.823,0,0,0-.639,1.718h3.87a2.731,2.731,0,0,0-.471-1.7,1.56,1.56,0,0,0-1.307-.614m-4.454,5.872v-4.058a1.994,1.994,0,0,0-.4-1.374,1.619,1.619,0,0,0-1.234-.428,2.136,2.136,0,0,0-1.643.568,2.671,2.671,0,0,0-.522,1.84v3.453h-.57l0-6.385h.485l.1.984h.036a2.348,2.348,0,0,1,2.17-.977q2.13,0,2.133,2.285v4.093Zm-7.852,0v-4.058a2,2,0,0,0-.4-1.374,1.618,1.618,0,0,0-1.233-.428,2.132,2.132,0,0,0-1.644.568,2.678,2.678,0,0,0-.522,1.84v3.453h-.569v-8.847h.569v2.739l-.03.8h.043a2.109,2.109,0,0,1,.884-.816,3.117,3.117,0,0,1,1.333-.254q2.128,0,2.13,2.285v4.093Zm-7.106,0a2.682,2.682,0,0,1-2.1-.845,3.409,3.409,0,0,1-.76-2.362,3.175,3.175,0,0,1,.788-2.308,2.79,2.79,0,0,1,2.162-.864,4.368,4.368,0,0,1,1.554.281l-.154.507a4.558,4.558,0,0,0-1.413-.271,2.142,2.142,0,0,0-1.745.712,2.788,2.788,0,0,0-.593,1.932,3.031,3.031,0,0,0,.593,1.985,2.032,2.032,0,0,0,1.658.716,4.051,4.051,0,0,0,1.585-.305v.53a3.612,3.612,0,0,1-1.573.292m-4.458,0-.153-1.1h-.046a2.933,2.933,0,0,1-.969.855,2.591,2.591,0,0,1-1.178.251,2.037,2.037,0,0,1-1.435-.474,1.687,1.687,0,0,1-.511-1.305,1.611,1.611,0,0,1,.763-1.423,4.149,4.149,0,0,1,2.209-.536l1.192-.034v-.316a2.114,2.114,0,0,0-.364-1.349,1.406,1.406,0,0,0-1.169-.453,3.907,3.907,0,0,0-1.8.483l-.212-.495a4.764,4.764,0,0,1,2.039-.485,2.027,2.027,0,0,1,1.539.537,2.347,2.347,0,0,1,.51,1.67l.009,4.173Zm-2.311-.513a1.99,1.99,0,0,0,2.158-2.163v-.616l-1.093.046a4.107,4.107,0,0,0-1.88.413,1.331,1.331,0,0,0-.2,2,1.459,1.459,0,0,0,1.017.325m-3.713.515v-4.1a2.045,2.045,0,0,0-.359-1.336,1.353,1.353,0,0,0-1.093-.422,1.8,1.8,0,0,0-1.424.531,2.513,2.513,0,0,0-.46,1.665v3.664h-.58v-4.276q0-1.584-1.452-1.585a1.705,1.705,0,0,0-1.434.575,2.982,2.982,0,0,0-.448,1.833v3.453h-.57v-6.36h.472l.121.96h.034a1.808,1.808,0,0,1,.736-.722,2.2,2.2,0,0,1,1.055-.256,1.8,1.8,0,0,1,1.9,1.111h.021a2.144,2.144,0,0,1,.822-.823,2.368,2.368,0,0,1,1.171-.288,2,2,0,0,1,1.537.548,2.476,2.476,0,0,1,.513,1.738v4.093Zm-38.954-4.748H164v-1.637h.764v-.144c0-2.05,1.853-2.33,2.86-2.33a4.9,4.9,0,0,1,.631.037v1.771a2.42,2.42,0,0,0-.341-.023c-.412,0-1.054.071-1.054.607v.083h1.152v1.637H166.86v4.748h-2.1Z" transform="translate(-164 -205.083)" fill="#fff"/>
          </svg>
        </a>
      </div>
    </>
  );
};

export default Home;
