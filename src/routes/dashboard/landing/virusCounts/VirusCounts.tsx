import React from 'react';
import { Row, Col } from 'react-bootstrap';

import VirusCountsCard from './VirusCountsCard';
import VirusCountsGraph from './VirusCountsGraph';

const VirusCounts = () => {
  return (
    // <Col md="12" lg="4" className="mt-2">
    //   <VirusCountsCard />
    //   <VirusCountsGraph />
    // </Col>

    <>
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
    </>
  );
};

export default VirusCounts;
