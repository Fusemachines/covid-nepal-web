import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import VirusCounts from './virusCounts';

const Landing = () => (
  <>
    <div className="container-fluid mt-3">
      <Row>
        <VirusCounts />

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
                              stroke-linecap="round"
                              stroke-width="1"
                            />
                            <line
                              id="Line_11"
                              data-name="Line 11"
                              x1="3"
                              y2="3"
                              transform="translate(411.5 174.5)"
                              fill="none"
                              stroke="#8aca2b"
                              stroke-linecap="round"
                              stroke-width="1"
                            />
                            <line
                              id="Line_12"
                              data-name="Line 12"
                              x2="3"
                              y2="3"
                              transform="translate(414.5 174.5)"
                              fill="none"
                              stroke="#8aca2b"
                              stroke-linecap="round"
                              stroke-width="1"
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
                              stroke-linecap="round"
                              stroke-width="1"
                            />
                            <line
                              id="Line_11"
                              data-name="Line 11"
                              x1="3"
                              y2="3"
                              transform="translate(411.5 174.5)"
                              fill="none"
                              stroke="#8aca2b"
                              stroke-linecap="round"
                              stroke-width="1"
                            />
                            <line
                              id="Line_12"
                              data-name="Line 12"
                              x2="3"
                              y2="3"
                              transform="translate(414.5 174.5)"
                              fill="none"
                              stroke="#8aca2b"
                              stroke-linecap="round"
                              stroke-width="1"
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
                              stroke-linecap="round"
                              stroke-width="1"
                            />
                            <line
                              id="Line_11"
                              data-name="Line 11"
                              x1="3"
                              y2="3"
                              transform="translate(411.5 174.5)"
                              fill="none"
                              stroke="#8aca2b"
                              stroke-linecap="round"
                              stroke-width="1"
                            />
                            <line
                              id="Line_12"
                              data-name="Line 12"
                              x2="3"
                              y2="3"
                              transform="translate(414.5 174.5)"
                              fill="none"
                              stroke="#8aca2b"
                              stroke-linecap="round"
                              stroke-width="1"
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
                              stroke-linecap="round"
                              stroke-width="1"
                            />
                            <line
                              id="Line_11"
                              data-name="Line 11"
                              x1="3"
                              y2="3"
                              transform="translate(411.5 174.5)"
                              fill="none"
                              stroke="#8aca2b"
                              stroke-linecap="round"
                              stroke-width="1"
                            />
                            <line
                              id="Line_12"
                              data-name="Line 12"
                              x2="3"
                              y2="3"
                              transform="translate(414.5 174.5)"
                              fill="none"
                              stroke="#8aca2b"
                              stroke-linecap="round"
                              stroke-width="1"
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
                              stroke-linecap="round"
                              stroke-width="1"
                            />
                            <line
                              id="Line_11"
                              data-name="Line 11"
                              x1="3"
                              y2="3"
                              transform="translate(411.5 174.5)"
                              fill="none"
                              stroke="#8aca2b"
                              stroke-linecap="round"
                              stroke-width="1"
                            />
                            <line
                              id="Line_12"
                              data-name="Line 12"
                              x2="3"
                              y2="3"
                              transform="translate(414.5 174.5)"
                              fill="none"
                              stroke="#8aca2b"
                              stroke-linecap="round"
                              stroke-width="1"
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
