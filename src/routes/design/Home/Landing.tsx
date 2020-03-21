import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import Menu from '../Navbar';

const Landing = () => (
  <>
    <Menu />

    <div className="container-fluid mt-3">
      <Row>
        <Col md="12" lg="4" className="mt-2">
          <div className="rounded bg-bluelight p-4">
            <div className="mb-3">
              <div className="d-inline-block ">
                <div className="h5 mb-0 font-weight-bold">Government Virus Counts</div>
                <small>Updated 1 minutes ago</small>
              </div>
            </div>
            <div className="clearfix"></div>
            <Row className="mb-3">
              <Col xs="6">
                <div className="">Total Conformed</div>
                <div className="display-4 font-weight-bold">1</div>
                <div className="h6 text-success">
                  <span className="mr-2">
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
                  0.10%
                </div>
              </Col>

              <Col xs="6">
                <div className="">Total Recovered</div>
                <div className="display-4 font-weight-bold">1</div>
                <div className="h6 text-warning">
                  <span className="mr-2">
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
                  0.10%
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs="6">
                <div className="">Total Serious</div>
                <div className="display-4 font-weight-bold">0</div>
                <div className="h6 text-warning">
                  <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11.192" viewBox="0 0 11 11.192">
                      <g id="Group_101" data-name="Group 101" transform="translate(-381 -295)">
                        <circle
                          id="Ellipse_7"
                          data-name="Ellipse 7"
                          cx="5.5"
                          cy="5.5"
                          r="5.5"
                          transform="translate(381 295)"
                          fill="#ffc400"
                          opacity="0.2"
                        />
                        <g id="Group_72" data-name="Group 72" transform="translate(386.243 305.192) rotate(-135)">
                          <line
                            id="Line_10"
                            data-name="Line 10"
                            y2="7"
                            transform="translate(3 0)"
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
                            transform="translate(0 0)"
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
                            transform="translate(3 0)"
                            fill="none"
                            stroke="#fedb41"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  0%
                </div>
              </Col>

              <Col xs="6">
                <div className="">Total Death</div>
                <div className="display-4 font-weight-bold">0</div>
                <div className="h6 text-danger">
                  <span className="mr-2">
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
                  0%
                </div>
              </Col>
            </Row>
          </div>

          {/* graph */}

          <div className="rounded bg-bluelight p-3 mt-4">
            <div className="h5 font-weight-bold mb-3">Graph</div>

            <div className="">Graph</div>
          </div>
        </Col>

        <Col md="12" lg="5" className="mt-2">
          <div className="rounded bg-bluelight p-3">
            <div className="h5 d-inline-block font-weight-bold mb-3">
              <div className="rec"></div> Live Data
            </div>
            <div className="search-wrapper">
              {/* <input className="form-control form-control-sm" placeholder="search" />
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="12.88" height="12.88" viewBox="0 0 12.88 12.88">
                  <path
                    id="Icon_map-search"
                    data-name="Icon map-search"
                    d="M9.985,8.271A5.094,5.094,0,1,0,8.27,9.984l3.456,3.456,1.714-1.715Zm-4.343.515a3.142,3.142,0,1,1,3.144-3.14A3.147,3.147,0,0,1,5.642,8.786Z"
                    transform="translate(-0.56 -0.56)"
                    fill="#2074b9"
                  />
                </svg>
              </i> */}
              <select className="custom-select form-control-sm">
                <option>Kathmandu</option>
                <option>Bhaktapur</option>
              </select>
            </div>

            <Table className="text-white">
              <thead>
                <tr>
                  <th>Name of Hospital</th>
                  <th>No. of Patients</th>
                  <th>Covid-19 Symptoms</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div>Bir Hospital</div>
                    <small>200 Beds</small>
                  </td>
                  <td>80</td>
                  <td>
                    20
                    <small className="d-block text-success">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                        width="11.192"
                        height="11"
                        viewBox="0 0 11.192 11"
                      >
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
                      0.01%
                    </small>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div>Bir Hospital</div>
                    <small>200 Beds</small>
                  </td>
                  <td>80</td>
                  <td>
                    20
                    <small className="d-block text-success">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                        width="11.192"
                        height="11"
                        viewBox="0 0 11.192 11"
                      >
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
                      0.01%
                    </small>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div>Bir Hospital</div>
                    <small>200 Beds</small>
                  </td>
                  <td>80</td>
                  <td>
                    20
                    <small className="d-block text-success">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                        width="11.192"
                        height="11"
                        viewBox="0 0 11.192 11"
                      >
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
                      0.01%
                    </small>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div>Bir Hospital</div>
                    <small>200 Beds</small>
                  </td>
                  <td>80</td>
                  <td>
                    20
                    <small className="d-block text-success">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                        width="11.192"
                        height="11"
                        viewBox="0 0 11.192 11"
                      >
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
                      0.01%
                    </small>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div>Bir Hospital</div>
                    <small>200 Beds</small>
                  </td>
                  <td>80</td>
                  <td>
                    20
                    <small className="d-block text-success">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                        width="11.192"
                        height="11"
                        viewBox="0 0 11.192 11"
                      >
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
                      0.01%
                    </small>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>

        <Col md="12" lg="3" className="mt-2 order-lg-first">
          <div className="rounded bg-bluelight p-3">
            <div className="h5 font-weight-bold mb-3">Latest News</div>

            <div className="">Latest News</div>
          </div>
        </Col>
      </Row>
    </div>
  </>
);

export default Landing;
