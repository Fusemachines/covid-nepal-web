import React from 'react';
import { Table, Tab, Nav } from 'react-bootstrap';

const Call = () => (
  <>
    <div className="right-bar show">
      <div className="overlay" />

      <div className="toggle-rightbar">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <g id="Group_629" data-name="Group 629" transform="translate(-671)">
            <g id="Group_621" data-name="Group 621" transform="translate(670.582)">
              <rect
                id="Rectangle_660"
                data-name="Rectangle 660"
                width="40"
                height="40"
                transform="translate(0.418)"
                fill="#fff"
              />
            </g>
            <g id="Group_86" data-name="Group 86" transform="translate(874.5 -400.5) rotate(90)">
              <line
                id="Line_10"
                data-name="Line 10"
                y2="20"
                transform="translate(420.071 174.5)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <line
                id="Line_11"
                data-name="Line 11"
                x1="8.571"
                y2="8.571"
                transform="translate(411.5 174.5)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <line
                id="Line_12"
                data-name="Line 12"
                x2="8.571"
                y2="8.571"
                transform="translate(420.071 174.5)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeWidth="1"
              />
            </g>
          </g>
        </svg>
      </div>

      {/* use emergency class for green color while emergency number is active */}
      <div className="content">
        <Tab.Container defaultActiveKey="first">
          <Nav fill variant="tabs" className="contact">
            <Nav.Item>
              <Nav.Link eventKey="first" className="py-3 m-0">
                Emergency Contacts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="py-3 m-0">
                Hospita Contacts
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="px-5">
                <div className="info-list">
                  <div className="info-item py-3 mt-2">
                    <div className="font-16">Consular Service Hotline | 24hrs</div>

                    <span className="rounded bg-success px-3 py-1 mr-2 mt-2 d-inline-block">
                      <i className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                          <path
                            id="Icon_material-call"
                            data-name="Icon material-call"
                            d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                            transform="translate(-1.75 -1.75)"
                            fill="#ffffff"
                          />
                        </svg>
                      </i>
                      0091-8929601925
                    </span>
                  </div>

                  <div className="info-item py-3 mt-2">
                    <div className="font-16">COVID-19 Hotline | 8 AM - 8 PM</div>

                    <span className="rounded bg-success px-3 py-1 mr-2 mt-2 d-inline-block">
                      <i className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                          <path
                            id="Icon_material-call"
                            data-name="Icon material-call"
                            d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                            transform="translate(-1.75 -1.75)"
                            fill="#ffffff"
                          />
                        </svg>
                      </i>
                      9851255839
                    </span>

                    <span className="rounded bg-success px-3 py-1 mr-2 mt-2 d-inline-block">
                      <i className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                          <path
                            id="Icon_material-call"
                            data-name="Icon material-call"
                            d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                            transform="translate(-1.75 -1.75)"
                            fill="#ffffff"
                          />
                        </svg>
                      </i>
                      9851255837
                    </span>

                    <span className="rounded bg-success px-3 py-1 mr-2 mt-2 d-inline-block">
                      <i className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                          <path
                            id="Icon_material-call"
                            data-name="Icon material-call"
                            d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                            transform="translate(-1.75 -1.75)"
                            fill="#ffffff"
                          />
                        </svg>
                      </i>
                      9851255834
                    </span>
                  </div>

                  <div className="info-item py-3 mt-2">
                    <div className="font-16">Nepal Police | 24hrs</div>

                    <span className="rounded bg-success px-3 py-1 mr-2 mt-2 d-inline-block">
                      <i className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                          <path
                            id="Icon_material-call"
                            data-name="Icon material-call"
                            d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                            transform="translate(-1.75 -1.75)"
                            fill="#ffffff"
                          />
                        </svg>
                      </i>
                      100
                    </span>

                    <span className="rounded bg-success px-3 py-1 mr-2 mt-2 d-inline-block">
                      <i className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                          <path
                            id="Icon_material-call"
                            data-name="Icon material-call"
                            d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                            transform="translate(-1.75 -1.75)"
                            fill="#ffffff"
                          />
                        </svg>
                      </i>
                      01-4228435
                    </span>
                  </div>

                  <div className="info-item py-3 mt-2">
                    <div className="font-16">Sukraraj Tropical And Infectious Disease Hospital</div>

                    <div className="d-flex mt-3">
                      <div className="col-5">1) Dr. Shrawan K. Mishra :</div>
                      <div className="col-7">
                        <span className="rounded bg-success px-3 py-1 mx-2 d-inline-block">
                          <i className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                              <path
                                id="Icon_material-call"
                                data-name="Icon material-call"
                                d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                                transform="translate(-1.75 -1.75)"
                                fill="#ffffff"
                              />
                            </svg>
                          </i>
                          9851168220
                        </span>
                      </div>
                    </div>

                    <div className="d-flex mt-3">
                      <div className="col-5">2) Dr. Ranjit Shah : </div>
                      <div className="col-7">
                        <span className="rounded bg-success px-3 py-1 mx-2 d-inline-block">
                          <i className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                              <path
                                id="Icon_material-call"
                                data-name="Icon material-call"
                                d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                                transform="translate(-1.75 -1.75)"
                                fill="#ffffff"
                              />
                            </svg>
                          </i>
                          9872701465
                        </span>
                      </div>
                    </div>

                    <div className="d-flex mt-3">
                      <div className="col-5">3) Mr. Rajesh K. Gupta :</div>
                      <div className="col-7">
                        <span className="rounded bg-success px-3 py-1 mx-2 d-inline-block">
                          <i className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                              <path
                                id="Icon_material-call"
                                data-name="Icon material-call"
                                d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                                transform="translate(-1.75 -1.75)"
                                fill="#ffffff"
                              />
                            </svg>
                          </i>
                          9851239988
                        </span>
                      </div>
                    </div>

                    <div className="d-flex mt-3">
                      <div className="col-5">4) Mr. Dinesh Thapa Magar : </div>
                      <div className="col-7">
                        <span className="rounded bg-success px-3 py-1 mx-2 d-inline-block">
                          <i className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                              <path
                                id="Icon_material-call"
                                data-name="Icon material-call"
                                d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                                transform="translate(-1.75 -1.75)"
                                fill="#ffffff"
                              />
                            </svg>
                          </i>
                          9823168540
                        </span>
                        <small className="ml3">(Nights only)</small>
                      </div>
                    </div>

                    <div className="d-flex mt-3">
                      <div className="col-5">5) Mr. Naresh Thapa Magar :</div>
                      <div className="col-7">
                        <span className="rounded bg-success px-3 py-1 mx-2 d-inline-block">
                          <i className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                              <path
                                id="Icon_material-call"
                                data-name="Icon material-call"
                                d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                                transform="translate(-1.75 -1.75)"
                                fill="#ffffff"
                              />
                            </svg>
                          </i>
                          9803152149
                        </span>
                        <small className="ml3">(Nights only)</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="second">
              <div className="mt-4">
                {/* filter */}
                <div className="d-md-flex filter-wrapper mb-4">
                  <div className="mr-auto">
                    <div className="filter d-inline-block">
                      <span>Provinance</span>
                      <select className="custom-select form-control-sm filter-select">
                        <option>Kathmandu</option>
                        <option>Bhaktapur</option>
                      </select>
                    </div>
                    <div className="filter d-inline-block">
                      <span>District</span>
                      <select className="custom-select form-control-sm filter-select">
                        <option>Kathmandu</option>
                        <option>Bhaktapur</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* table */}
                <Table className="text-white">
                  <tbody>
                    <tr>
                      <td>Sukraraj Hospital, Teku</td>
                      <td className="text-right">
                        <div className="badges">
                          <div className="badges-item mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                              <path
                                id="Icon_material-call"
                                data-name="Icon material-call"
                                d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                                transform="translate(-1.75 -1.75)"
                                fill="#00c571"
                              />
                            </svg>
                            01-4228435
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>Bir Hospital, Ranipokhari</td>
                      <td className="text-right">
                        <div className="badges">
                          <div className="badges-item mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                              <path
                                id="Icon_material-call"
                                data-name="Icon material-call"
                                d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                                transform="translate(-1.75 -1.75)"
                                fill="#00c571"
                              />
                            </svg>
                            01-4228435
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>Teaching Hospital, Marajgunj</td>
                      <td className="text-right">
                        <div className="badges">
                          <div className="badges-item mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                              <path
                                id="Icon_material-call"
                                data-name="Icon material-call"
                                d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                                transform="translate(-1.75 -1.75)"
                                fill="#00c571"
                              />
                            </svg>
                            01-4228435
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>Sukraraj Hospital, Teku</td>
                      <td className="text-right">
                        <div className="badges">
                          <div className="badges-item mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                              <path
                                id="Icon_material-call"
                                data-name="Icon material-call"
                                d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                                transform="translate(-1.75 -1.75)"
                                fill="#00c571"
                              />
                            </svg>
                            01-4228435
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  </>
);

export default Call;
