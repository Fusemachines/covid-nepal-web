import React from 'react';
import Menu from '../Navbar';
import { Row, Col } from 'react-bootstrap';

const Landing = () => (
  <>
    <Menu />
    <div className="container-fluid mt-4">
      <Row className="mb-2">
        <Col md={4}>
          <div className="rounded bg-bluelight overflow-hidden">
            <div className="p-4 text-white">
              <div className="hospital-title">Teku Hospital</div>
              <div className="my-3">
                <img src="" className="img-responsive" alt="hospital" />
              </div>

              <ul className="hospitalinfo-list">
                <li>
                  <span className="text-secondary">Address:</span>{' '}
                  <span className="ml-2 text-success">Teku, Kathmandu</span>
                </li>
                <li>
                  <span className="text-secondary">Open hours:</span>
                  <span className="mx-2">8 AM - 3 PM</span>
                  <span className="ml-3">SUN - FRI</span>
                </li>
                <li>
                  <span className="text-secondary">Beds for COVID-19 patients :</span>
                  <span className="ml-2 h6 mb-0 text-warning font-weight-bold">50 / 120</span>
                </li>
                <li>
                  <span className="text-secondary">Contact :</span>
                  <span className="mx-2 bg-success rounded py-1 px-2">
                    <svg
                      id="Group_16"
                      data-name="Group 16"
                      xmlns="http://www.w3.org/2000/svg"
                      width="98"
                      height="18"
                      viewBox="0 0 98 18"
                    >
                      <path
                        id="Icon_material-call"
                        data-name="Icon material-call"
                        d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                        transform="translate(-1.75 2.25)"
                        fill="#fff"
                      />
                      <text
                        id="_01-4253396"
                        data-name="01-4253396"
                        transform="translate(18)"
                        fill="#fff"
                        font-size="13"
                        font-family="OpenSans-Regular, Open Sans"
                      >
                        <tspan x="0" y="14">
                          01-4253396
                        </tspan>
                      </text>
                    </svg>
                  </span>
                  <span className="mx-2 bg-success rounded py-1 px-2">
                    <svg
                      id="Group_16"
                      data-name="Group 16"
                      xmlns="http://www.w3.org/2000/svg"
                      width="98"
                      height="18"
                      viewBox="0 0 98 18"
                    >
                      <path
                        id="Icon_material-call"
                        data-name="Icon material-call"
                        d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                        transform="translate(-1.75 2.25)"
                        fill="#fff"
                      />
                      <text
                        id="_01-4253396"
                        data-name="01-4253396"
                        transform="translate(18)"
                        fill="#fff"
                        font-size="13"
                        font-family="OpenSans-Regular, Open Sans"
                      >
                        <tspan x="0" y="14">
                          01-4253396
                        </tspan>
                      </text>
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="text-secondary">Hosptial Type :</span>
                  <span className="ml-2">Government</span>
                </li>
              </ul>
            </div>

            <div className="maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14130.828627230478!2d85.3069413!3d27.6954445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd8552665e65d95b!2sTeku%20Hospital%20(Shukraraaj%20Tropical%20%26%20Infectious%20Disease%20Hospital)!5e0!3m2!1sen!2snp!4v1584778123055!5m2!1sen!2snp"
                width="400"
                height="300"
                title="design"
              ></iframe>
            </div>
          </div>
        </Col>

        <Col md={8} lg={7}>
          <div className="py-4 px-5 rounded bg-bluelight">
            <div className="hospital-title">Process of Testing</div>

            <div className="mt-4 text-secondary">
              Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo
              imperdiet, nec elemetum diam elementum.accumsan mauris. Phasellus egestas et risus sit amet hendrerit.
              Nulla facilisi. Cras urna sem, vulputate sed contum a, posuere vel enim.
            </div>

            <ul className="numc mt-5">
              <li>
                In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus
                odio.
              </li>
              <li>
                In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus
                odio.
              </li>
              <li>
                In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus
                odio.
              </li>
              <li>
                In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus
                odio.
              </li>
              <li>
                In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus
                odio.
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
    
  </>
);

export default Landing;
