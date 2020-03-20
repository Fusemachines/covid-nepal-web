import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Call = () => (
  <>
    <div className="right-bar">
      <div className="p-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="21.207" height="18.557" viewBox="0 0 21.207 18.557">
          <g id="Group_86" data-name="Group 86" transform="translate(195 -410.793) rotate(90)">
            <line
              id="Line_10"
              data-name="Line 10"
              y2="20"
              transform="translate(420.071 174.5)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-width="1"
            />
            <line
              id="Line_11"
              data-name="Line 11"
              x1="8.571"
              y2="8.571"
              transform="translate(411.5 174.5)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-width="1"
            />
            <line
              id="Line_12"
              data-name="Line 12"
              x2="8.571"
              y2="8.571"
              transform="translate(420.071 174.5)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-width="1"
            />
          </g>
        </svg>
      </div>

      {/*  */}
      <div className="px-5">
        <div className="h4">Emergency Contacts</div>

        <div className="info-list">
          <div className="info-item py-3 mt-4">
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

          <div className="info-item py-3 mt-4">
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
        </div>
      </div>
    </div>
  </>
);

export default Call;
