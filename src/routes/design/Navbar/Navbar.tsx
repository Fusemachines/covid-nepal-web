import React from 'react';
import { Navbar, Nav, Dropdown, Media } from 'react-bootstrap';
// import RightBar from '../EmergencyCall';

const Menu = () => (
  <React.Fragment>
    <div className="text-center bg-bluelight covid-alert d-flex">
      <a className="small mx-auto" href="https://bit.ly/covidnepal_report_error_newinfo" target="blank">
        Help us keep data reliable! Report Errors, New Info and Verify Data
      </a>
      <div className="d-none d-sm-none d-md-block social-link">
        <Dropdown className="covid-notificatio">
          <Dropdown.Toggle as={'a'} id="dropdown-custom-components">
            <svg xmlns="http://www.w3.org/2000/svg" width="13.264" height="15.779" viewBox="0 0 13.264 15.779">
              <path
                id="Path_683"
                data-name="Path 683"
                d="M-574.593,919.785a1.7,1.7,0,0,0-.285-.281c-.216-.176-.447-.333-.658-.515a3.758,3.758,0,0,1-1.133-1.939,8.83,8.83,0,0,1-.275-2.234,5.722,5.722,0,0,0-.114-1.253,3.791,3.791,0,0,0-2.183-2.729c-.186-.086-.383-.148-.582-.224a1.284,1.284,0,0,0-.165-1.136A1.267,1.267,0,0,0-581,908.9a1.244,1.244,0,0,0-.969.349,1.3,1.3,0,0,0-.362,1.37c-.152.054-.3.1-.438.157a3.645,3.645,0,0,0-.421.2,3.892,3.892,0,0,0-2,3.343c-.028.422-.026.846-.051,1.268a7.065,7.065,0,0,1-.275,1.595,3.886,3.886,0,0,1-.879,1.6,5.248,5.248,0,0,1-.74.616c-.076.055-.15.113-.222.173a.854.854,0,0,0-.234,1.124,1.52,1.52,0,0,0,.723.7,4.655,4.655,0,0,0,1.266.423,15.75,15.75,0,0,0,2.318.273l.354.02a1.913,1.913,0,0,0,.856,2.249,1.794,1.794,0,0,0,2.087-.053,1.9,1.9,0,0,0,.772-2.19c.4-.03.807-.057,1.21-.091a11.207,11.207,0,0,0,1.626-.245,4.091,4.091,0,0,0,1.234-.463,1.428,1.428,0,0,0,.6-.641A.84.84,0,0,0-574.593,919.785Zm-6.482-10.136a.561.561,0,0,1,.562.561.566.566,0,0,1-.563.563.566.566,0,0,1-.562-.564A.561.561,0,0,1-581.074,909.649Zm1.19,13.143a1.064,1.064,0,0,1-.029.2c-.006.026-.014.052-.022.077l-.013.038a1.246,1.246,0,0,1-.216.367,1.345,1.345,0,0,1-.223.215l-.034.025a1.054,1.054,0,0,1-.531.191,1.212,1.212,0,0,1-.3-.015q-.066-.011-.133-.029a1.141,1.141,0,0,1-.859-.933,1.049,1.049,0,0,1-.022-.231,1.174,1.174,0,0,1,.065-.359l.016-.044q.016-.044.036-.087a.1.1,0,0,1,.1-.063l.486,0h.486c.321,0,.642,0,.964,0a.143.143,0,0,1,.057.009.086.086,0,0,1,.038.03l.01.016.009.019q.027.064.047.127l.013.042a1.278,1.278,0,0,1,.051.288c0,.014,0,.027,0,.04s0,.027,0,.04S-579.884,922.778-579.885,922.791Z"
                transform="translate(587.702 -908.896)"
                fill="#fff"
              />
            </svg>

            <span className="new-notification" />
          </Dropdown.Toggle>

          <Dropdown.Menu as={'div'} alignRight>
            <div className="noti-title">Notification</div>
            <div className="noti-content">
              <a href="#">
                Government announced all Nepal lockdown from 6 AM Chaitra 11 to 6 PM Chaitra 18.
                <span className="time">6:00 PM Mon</span>
              </a>

              <a href="#">
                <Media>
                  <Media.Body className="align-self-center">
                    Government announced all Nepal lockdown from 6 AM Chaitra 11 to 6 PM Chaitra 18.
                  </Media.Body>
                  <div className="ml-2 align-self-center image-hold">
                    <img src="/images/containedobject.png" alt="Image Here" className="img-fluid" />
                  </div>
                </Media>

                <span className="time">6:00 PM Mon</span>
              </a>

              <a href="#">
                Government announced all Nepal lockdown from 6 AM Chaitra 11 to 6 PM Chaitra 18.
                <span className="time">6:00 PM Mon</span>
              </a>

              <a href="#">
                <Media>
                  <Media.Body className="align-self-center">
                    Government announced all Nepal lockdown from 6 AM Chaitra 11 to 6 PM Chaitra 18.
                  </Media.Body>
                  <div className="ml-2 align-self-center image-hold">
                    <img src="/images/containedobject.png" alt="Image Here" className="img-fluid" />
                  </div>
                </Media>

                <span className="time">6:00 PM Mon</span>
              </a>

              <a href="#">
                Government announced all Nepal lockdown from 6 AM Chaitra 11 to 6 PM Chaitra 18.
                <span className="time">6:00 PM Mon</span>
              </a>

              <a href="#">
                <Media>
                  <Media.Body className="align-self-center">
                    Government announced all Nepal lockdown from 6 AM Chaitra 11 to 6 PM Chaitra 18.
                  </Media.Body>
                  <div className="ml-2 align-self-center image-hold">
                    <img src="/images/containedobject.png" alt="Image Here" className="img-fluid" />
                  </div>
                </Media>

                <span className="time">6:00 PM Mon</span>
              </a>

              <a href="#">
                Government announced all Nepal lockdown from 6 AM Chaitra 11 to 6 PM Chaitra 18.
                <span className="time">6:00 PM Mon</span>
              </a>

              <a href="#">
                <Media>
                  <Media.Body className="align-self-center">
                    Government announced all Nepal lockdown from 6 AM Chaitra 11 to 6 PM Chaitra 18.
                  </Media.Body>
                  <div className="ml-2 align-self-center image-hold">
                    <img src="/images/containedobject.png" alt="Image Here" className="img-fluid" />
                  </div>
                </Media>

                <span className="time">6:00 PM Mon</span>
              </a>
            </div>
          </Dropdown.Menu>
        </Dropdown>

        <a href="https://www.facebook.com/covidnepalorg/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="6.574" height="14.166" viewBox="0 0 6.574 14.166">
            <path
              id="Path_675"
              data-name="Path 675"
              d="M201.008,217.719h-2.939v-7.07h-1.035c-.363,0-.363,0-.363-.366v-2.14h1.4c0-.077,0-.139,0-.2.008-.6-.017-1.2.032-1.8a2.577,2.577,0,0,1,2.439-2.548c.874-.07,1.758-.026,2.637-.033,0,0,.009.005.024.015v2.414h-.167c-.454,0-.907,0-1.361,0a.567.567,0,0,0-.649.572c-.028.517-.007,1.036-.007,1.57h2.228c-.013.159-.023.3-.037.443-.065.651-.134,1.3-.2,1.953-.011.114-.072.124-.163.123-.545,0-1.091,0-1.636,0h-.205Z"
              transform="translate(-196.672 -203.553)"
              fill="#fff"
            />
          </svg>
        </a>

        <a href="https://twitter.com/covidnepalorg" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="14.655" height="11.726" viewBox="0 0 14.655 11.726">
            <path
              id="Path_676"
              data-name="Path 676"
              d="M111.4,279.778h-1.531c-.418-.072-.84-.129-1.254-.221A8.786,8.786,0,0,1,106,278.481v-.038a5.944,5.944,0,0,0,4.346-1.18,3.251,3.251,0,0,1-1.662-.628,2.856,2.856,0,0,1-1.036-1.435,4.335,4.335,0,0,0,1.2-.076,3.221,3.221,0,0,1-1.622-1.072,2.953,2.953,0,0,1-.644-1.864,2.924,2.924,0,0,0,1.234.317,3.135,3.135,0,0,1-1.136-1.784,2.736,2.736,0,0,1,.373-2.12c.066.049.091.129.143.181a13.987,13.987,0,0,0,1.014.98,8.387,8.387,0,0,0,4.695,1.9c.282.023.289.024.254-.261a2.867,2.867,0,0,1,.837-2.457,3.056,3.056,0,0,1,4.223-.081.294.294,0,0,0,.327.084l1.485-.548c.055-.021.108-.048.162-.073l.036.042a3.111,3.111,0,0,1-1.155,1.5,5.277,5.277,0,0,0,1.585-.424v.076a.576.576,0,0,0-.084.076,6.625,6.625,0,0,1-1.292,1.316.4.4,0,0,0-.108.263c-.023.322-.01.648-.043.969a8.513,8.513,0,0,1-2.237,4.991,8.077,8.077,0,0,1-5.006,2.575C111.721,279.729,111.558,279.754,111.4,279.778Z"
              transform="translate(-106 -268.052)"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
    </div>

    <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="/design" className="font-weight-bold">
        <span className="mr-2">nCOVID</span>
        <span>NEPAL</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/design/landing" className="active">
            Home
          </Nav.Link>
          <Nav.Link href="/design/symptoms">Symptoms</Nav.Link>
          <Nav.Link href="/design/notices&resources">Notices</Nav.Link>
          <Nav.Link href="/design/landing">FAQ</Nav.Link>
        </Nav>

        <Nav>          
          <Nav.Link href="/design/landing" className="btn btn-outline-white">Join Us</Nav.Link>

          <div className="btn-group mx-3" role="group">
            <button type="button" className="btn btn-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="18.491" height="18.483" viewBox="0 0 18.491 18.483">
                <path
                  id="Path_34"
                  data-name="Path 34"
                  d="M96.67,239.322c-.319-.07-.642-.126-.957-.211a16.573,16.573,0,0,1-7.945-4.778,24.951,24.951,0,0,1-2.319-2.78,14.031,14.031,0,0,1-1.718-3.63,14.809,14.809,0,0,1-.55-1.931,4.5,4.5,0,0,1,.489-2.908c.065-.13.141-.254.2-.385a3.266,3.266,0,0,1,3.077-1.859.628.628,0,0,1,.627.338c.258.45.505.907.766,1.356.4.693.815,1.38,1.223,2.07.051.085.1.169.153.256a.7.7,0,0,1-.1.907c-.3.311-.629.6-.952.892-.306.277-.624.539-.93.817a.656.656,0,0,0-.164.887c.522.861,1.017,1.744,1.6,2.559a12.2,12.2,0,0,0,4,3.446c.319.18.639.357.964.524a.582.582,0,0,0,.733-.128c.286-.3.555-.609.831-.916.291-.323.564-.666.878-.966a.758.758,0,0,1,1.094-.106q1.644.953,3.289,1.906c.637.369.706.5.571,1.222-.062.329-.147.654-.225.98a2.009,2.009,0,0,1-.79,1.147,5.868,5.868,0,0,1-2.86,1.253.288.288,0,0,0-.08.038Z"
                  transform="translate(-83.111 -220.839)"
                  fill="#fff"
                />
              </svg>
            </button>
            <button type="button" className="btn btn-success">
              Emergency Call
            </button>
          </div>

          {/* langiage */}
          <Dropdown className="lang-selector my-1">
            <Dropdown.Toggle as={'div'} id="dropdown-custom-components">
              <img src="/images/english.png" className="mx-1" alt="eng" /> <span>Eng</span>
            </Dropdown.Toggle>

            <Dropdown.Menu as={'div'} alignRight>
              <Dropdown.Item><img src="/images/english.png" className="mr-1" alt="eng" /> <span>Eng</span></Dropdown.Item>
              <Dropdown.Item><img src="/images/nepal.png" className="mr-1" alt="nepal" /> <span>Nep</span></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>

    {/* <RightBar /> */}
  </React.Fragment>
);

export default Menu;
