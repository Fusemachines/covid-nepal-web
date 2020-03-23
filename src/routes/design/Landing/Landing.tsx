import React from 'react';
import { Row, Col, Nav, Tab, Table, Media, Modal } from 'react-bootstrap';
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
            </div>
          </Col>
        </Row>

        {/* hospital data */}
        <Row className="my-3">
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
                      <div>Bir Hospital</div>
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
    </>
  );
};

export default Home;
