import React from 'react';
import Menu from '../Navbar';
import { Row, Col, Tab, Nav, Media } from 'react-bootstrap';

const NoticesandResources = () => (
  <>
    <Menu />

    <div className="container resources-page">
      <Row className="mt-5 bg-bluelight semi-rounded justify-content-center">
        <Col lg={10} className="pt-4 pb-4">
          <Tab.Container id="left-tabs-example" defaultActiveKey="supports">
            <Nav variant="tabs" className="">
              <Nav.Item>
                <Nav.Link eventKey="notice">Government Notices</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="resources">Resources</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="supports">Other Covid-19 Supports</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="notice">
                <ul className="notices__list">
                  <li>
                    <a href="https://drive.google.com/file/d/1ouT9PpNpGuWJSWlQuvZzqGS5f3Ur2Jzb/view" className="p-3">
                      <h5 className="notices__title">Press Release as of 21 March 2020</h5>
                      <div className="notices__tag mr-3">
                        <img alt="" src="/images/tag.svg" />
                        <span>Press Release</span>
                      </div>
                      <div className="notices__date">
                        <img alt="" src="/images/history.svg" />
                        <span>20 March 2020</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/1c1aju7qThbnHGKCiqqxdfIobWWO9ulRP/view" className="p-3">
                      <h5 className="notices__title">Situation Report_COVID-19 #42 (as of 20 March 2020)</h5>
                      <div className="notices__tag mr-3">
                        <img alt="" src="/images/tag.svg" />
                        <span>Press Release</span>
                      </div>
                      <div className="notices__date">
                        <img alt="" src="/images/history.svg" />
                        <span>20 March 2020</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/drive/folders/1QhLMbT76t6Zu1sFy5qlB5aoDbHVAcnHx" className="p-3">
                      <h5 className="notices__title">Situation Reports #1 to #41</h5>
                      <div className="notices__tag mr-3">
                        <img alt="" src="/images/tag.svg" />
                        <span>Reports</span>
                      </div>
                      <div className="notices__date">
                        <img alt="" src="/images/history.svg" />
                        <span>19 March 2020</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/drive/folders/1QhLMbT76t6Zu1sFy5qlB5aoDbHVAcnHx" className="p-3">
                      <h5 className="notices__title">Updated notice on travel restriction related to COVID-19</h5>
                      <div className="notices__tag mr-3">
                        <img alt="" src="/images/tag.svg" />
                        <span>Press Release</span>
                      </div>
                      <div className="notices__date">
                        <img alt="" src="/images/history.svg" />
                        <span>18 March 2020</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </Tab.Pane>

              <Tab.Pane eventKey="resources">
                <ul className="resources__list">
                  <li>
                    <a href="https://www.unicef.org/nepal/stories/novel-coronavirus" className="p-3">
                      <Media>
                        <img
                          width={80}
                          height={80}
                          className="mr-3"
                          src="/images/protect_yourself.png"
                          alt="Generic placeholder"
                        />
                        <Media.Body>
                          <h5 className="resources__title">How to protect yourself and others against COVID-19</h5>
                          <span className="resources__link">
                            https://www.unicef.org/nepal/stories/novel-coronavirus
                          </span>
                        </Media.Body>
                      </Media>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.unicef.org/nepal/join-fight-against-misinformation" className="p-3">
                      <Media>
                        <img
                          width={80}
                          height={80}
                          className="mr-3"
                          src="/images/fight_misinformation.png"
                          alt="Generic placeholder"
                        />
                        <Media.Body>
                          <h5 className="resources__title">Join the fight against misinformation</h5>
                          <span className="resources__link">
                            https://www.unicef.org/nepal/join-fight-against-misinformation
                          </span>
                        </Media.Body>
                      </Media>
                    </a>
                  </li>
                </ul>
              </Tab.Pane>

              <Tab.Pane eventKey="supports">
                <ul className="resources__list">
                  <li>
                    <a href="https://covid.hamropatro.com/" className="p-3">
                      <Media>
                        <img
                          width={80}
                          height={80}
                          className="mr-3"
                          src="/images/calldoctor.jpg"
                          alt="call to doctor"
                        />
                        <Media.Body>
                          <h5 className="resources__title">Call to Doctor Sewa</h5>
                          <span className="resources__link">https://covid.hamropatro.com/</span>
                        </Media.Body>
                      </Media>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.coronanepal.org/" className="p-3">
                      <Media>
                        <img
                          width={80}
                          height={80}
                          className="mr-3"
                          src="/images/coronanepal.jpg"
                          alt="Generic placeholder"
                        />
                        <Media.Body>
                          <h5 className="resources__title">Corona Nepal</h5>
                          <span className="resources__link">http://www.coronanepal.org/</span>
                        </Media.Body>
                      </Media>
                    </a>
                  </li>
                </ul>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </div>

    <div className="small  pt-2 pb-3  text-center supported-by">
      Supported by
      <a href="https://fusemachines.com/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="77.601" height="11.328" viewBox="0 0 77.601 11.328">
          <path
            id="Path_6355"
            data-name="Path 6355"
            d="M169.377,209.458a.244.244,0,0,0-.266-.269h-.461v-1.633h1.939c.62,0,.886.266.886.884v2.768a.994.994,0,0,0,1.986,0v-3.65h2.1v4.207a.244.244,0,0,0,.266.268h.461v1.908l-1.854,0a.84.84,0,0,1-.873-.856v-.229h-.023a2.15,2.15,0,0,1-1.942,1.078c-1.235,0-2.218-.582-2.218-2.34Zm8.483,2.056a3.075,3.075,0,0,0,1.83.878c.3,0,.473-.083.473-.3,0-.509-3.127-.675-3.127-2.655,0-1.314,1.248-1.884,2.568-1.884,1.019,0,2.426.284,2.426,1.386v.605H180.21v-.177c0-.166-.266-.284-.569-.284s-.557.094-.557.284c0,.629,3.163.544,3.163,2.594,0,1.233-1.1,1.979-2.559,1.979a3.816,3.816,0,0,1-2.764-1.113Zm8.179-3.955a2.705,2.705,0,0,1,2.819,2.945c0,.2-.048.613-.048.613h-3.846a1.362,1.362,0,0,0,1.421,1.113,2.836,2.836,0,0,0,1.619-.638l.816,1.371a3.92,3.92,0,0,1-2.6.971,3.161,3.161,0,0,1-3.349-3.2,3.032,3.032,0,0,1,3.17-3.181m.723,2.315a.767.767,0,0,0-.723-.779.976.976,0,0,0-1.015.779Zm5.263-4.778h.7V216.41h-.7Zm31.3.435a.413.413,0,1,1-.413.412.415.415,0,0,1,.413-.412m.287,8.41h-.57v-6.385h.57ZM241.6,212.2a1.487,1.487,0,0,1-.639,1.292,3.1,3.1,0,0,1-1.814.451,4.349,4.349,0,0,1-1.993-.384v-.615a4.418,4.418,0,0,0,1.993.471,2.648,2.648,0,0,0,1.408-.307.938.938,0,0,0,.48-.821c0-1.527-2.759-1.218-3.532-2.45a1.39,1.39,0,0,1-.192-.754,1.284,1.284,0,0,1,.59-1.11,2.877,2.877,0,0,1,1.65-.408,4.931,4.931,0,0,1,1.924.38l-.215.52a4.464,4.464,0,0,0-1.709-.383,2.494,2.494,0,0,0-1.216.253.781.781,0,0,0-.449.7c0,1.481,2.741,1.172,3.523,2.432a1.35,1.35,0,0,1,.193.73m-7.821,1.741a2.724,2.724,0,0,1-2.128-.84,3.071,3.071,0,0,1-.765-2.236,3.67,3.67,0,0,1,.738-2.4,2.434,2.434,0,0,1,1.987-.9,2.144,2.144,0,0,1,1.744.77,3.2,3.2,0,0,1,.639,2.1v.46h-4.508a2.65,2.65,0,0,0,.6,1.853,2.119,2.119,0,0,0,1.692.678,5.251,5.251,0,0,0,.941-.074,5.9,5.9,0,0,0,1.028-.323v.518a4.6,4.6,0,0,1-.98.314,5.336,5.336,0,0,1-.989.082m-.168-5.87a1.879,1.879,0,0,0-1.452.6,2.823,2.823,0,0,0-.639,1.718h3.87a2.731,2.731,0,0,0-.471-1.7,1.56,1.56,0,0,0-1.307-.614m-4.454,5.872v-4.058a1.994,1.994,0,0,0-.4-1.374,1.619,1.619,0,0,0-1.234-.428,2.136,2.136,0,0,0-1.643.568,2.671,2.671,0,0,0-.522,1.84v3.453h-.57l0-6.385h.485l.1.984h.036a2.348,2.348,0,0,1,2.17-.977q2.13,0,2.133,2.285v4.093Zm-7.852,0v-4.058a2,2,0,0,0-.4-1.374,1.618,1.618,0,0,0-1.233-.428,2.132,2.132,0,0,0-1.644.568,2.678,2.678,0,0,0-.522,1.84v3.453h-.569v-8.847h.569v2.739l-.03.8h.043a2.109,2.109,0,0,1,.884-.816,3.117,3.117,0,0,1,1.333-.254q2.128,0,2.13,2.285v4.093Zm-7.106,0a2.682,2.682,0,0,1-2.1-.845,3.409,3.409,0,0,1-.76-2.362,3.175,3.175,0,0,1,.788-2.308,2.79,2.79,0,0,1,2.162-.864,4.368,4.368,0,0,1,1.554.281l-.154.507a4.558,4.558,0,0,0-1.413-.271,2.142,2.142,0,0,0-1.745.712,2.788,2.788,0,0,0-.593,1.932,3.031,3.031,0,0,0,.593,1.985,2.032,2.032,0,0,0,1.658.716,4.051,4.051,0,0,0,1.585-.305v.53a3.612,3.612,0,0,1-1.573.292m-4.458,0-.153-1.1h-.046a2.933,2.933,0,0,1-.969.855,2.591,2.591,0,0,1-1.178.251,2.037,2.037,0,0,1-1.435-.474,1.687,1.687,0,0,1-.511-1.305,1.611,1.611,0,0,1,.763-1.423,4.149,4.149,0,0,1,2.209-.536l1.192-.034v-.316a2.114,2.114,0,0,0-.364-1.349,1.406,1.406,0,0,0-1.169-.453,3.907,3.907,0,0,0-1.8.483l-.212-.495a4.764,4.764,0,0,1,2.039-.485,2.027,2.027,0,0,1,1.539.537,2.347,2.347,0,0,1,.51,1.67l.009,4.173Zm-2.311-.513a1.99,1.99,0,0,0,2.158-2.163v-.616l-1.093.046a4.107,4.107,0,0,0-1.88.413,1.331,1.331,0,0,0-.2,2,1.459,1.459,0,0,0,1.017.325m-3.713.515v-4.1a2.045,2.045,0,0,0-.359-1.336,1.353,1.353,0,0,0-1.093-.422,1.8,1.8,0,0,0-1.424.531,2.513,2.513,0,0,0-.46,1.665v3.664h-.58v-4.276q0-1.584-1.452-1.585a1.705,1.705,0,0,0-1.434.575,2.982,2.982,0,0,0-.448,1.833v3.453h-.57v-6.36h.472l.121.96h.034a1.808,1.808,0,0,1,.736-.722,2.2,2.2,0,0,1,1.055-.256,1.8,1.8,0,0,1,1.9,1.111h.021a2.144,2.144,0,0,1,.822-.823,2.368,2.368,0,0,1,1.171-.288,2,2,0,0,1,1.537.548,2.476,2.476,0,0,1,.513,1.738v4.093Zm-38.954-4.748H164v-1.637h.764v-.144c0-2.05,1.853-2.33,2.86-2.33a4.9,4.9,0,0,1,.631.037v1.771a2.42,2.42,0,0,0-.341-.023c-.412,0-1.054.071-1.054.607v.083h1.152v1.637H166.86v4.748h-2.1Z"
            transform="translate(-164 -205.083)"
            fill="#fff"
          />
        </svg>
      </a>
    </div>
  </>
);

export default NoticesandResources;
