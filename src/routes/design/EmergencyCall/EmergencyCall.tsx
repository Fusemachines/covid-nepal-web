import React from 'react';
import { Table } from 'react-bootstrap';

const Call = () => (
  <>
    <div className="right-bar show">
      <div className="content">
        {/* Emergency call */}
        <div className="px-4 mt-4">
          <div className="h4">
            Emergency Contacts
            <div className="float-right pointer">&times;</div>
          </div>

          <div className="info-list">
            <div className="info-item py-3 mt-2">
              <div>
                COVID-19 Hotline <small className="float-right">8 AM - 8 PM</small>
              </div>
              <div className="badges mt-2">
                <div className="badges-item">
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
                <div className="badges-item">
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
                <div className="badges-item">
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
            </div>

            <div className="info-item py-3 mt-2">
              <div>Nepal Police</div>
              <div className="badges mt-2">
                <div className="badges-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                    <path
                      id="Icon_material-call"
                      data-name="Icon material-call"
                      d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                      transform="translate(-1.75 -1.75)"
                      fill="#00c571"
                    />
                  </svg>
                  100
                </div>
                <div className="badges-item">
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
            </div>
          </div>
        </div>

        {/* filter */}
        <div className="filter-wrapper px-4 py-4">
          <div className="h4 d-inline-block">Hospital Contacts</div>

          <div className="filter d-inline-block">
            <span>Province</span>
            <select className="custom-select form-control-sm">
              <option>Bagmati</option>
            </select>
          </div>

          <div className="filter d-inline-block">
            <span>District</span>
            <select className="custom-select form-control-sm">
              <option>Kathmandu</option>
            </select>
          </div>
        </div>

        {/* Hospital */}

        <div className="px-4">
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
      </div>
    </div>
  </>
);

export default Call;
