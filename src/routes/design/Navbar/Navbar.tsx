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
            <svg xmlns="http://www.w3.org/2000/svg" width="20.723" height="14.295" viewBox="0 0 20.723 14.295">
              <g id="Group_874" data-name="Group 874" transform="translate(-128.973 -305.09)">
                <path id="Path_699" data-name="Path 699" d="M421.374,348.452l-.9-.9a6.514,6.514,0,0,0,.013-8.111l.9-.871A7.571,7.571,0,0,1,421.374,348.452Z" transform="translate(-273.525 -31.412)" fill="#fff"/>
                <path id="Path_700" data-name="Path 700" d="M393.835,371.911l-.913-.934a4.086,4.086,0,0,0,.02-4.73l.917-.918A5.271,5.271,0,0,1,393.835,371.911Z" transform="translate(-247.667 -56.523)" fill="#fff"/>
                <path id="Path_701" data-name="Path 701" d="M143.654,307.028a1.955,1.955,0,0,0-1.637-1.917,1.164,1.164,0,0,0-.8.129q-2.232,1.246-4.484,2.456a1.7,1.7,0,0,1-.769.2c-1.173.023-2.349-.014-3.521.031a3.664,3.664,0,0,0-.931,7.145c.134.043.269.084.413.128a.1.1,0,0,1,.065.12l-1.117,3.934a.1.1,0,0,0,.088.124h0c1.264,0,2.528,0,3.792.006.2,0,.229-.1.272-.251.333-1.181.673-2.361,1.012-3.54.119-.413.153-.426.545-.211q2.353,1.289,4.708,2.573a1.167,1.167,0,0,0,.516.121,1.953,1.953,0,0,0,1.845-1.907c.011-.9,0-1.806,0-2.708C143.657,311.316,143.664,309.172,143.654,307.028Z" transform="translate(0 0)" fill="#fff"/>
              </g>
            </svg>

            <span className="new-notification" />
          </Dropdown.Toggle>

          <Dropdown.Menu as={'div'} alignRight>
            <div className="noti-title">Announcement</div>
            <div className="noti-content">
              <a href="#">
                Government announced all Nepal lockdown from 6 AM Chaitra 11 to 6 PM Chaitra 18.
                <div className="mt-2"><span className="badges-green">General</span> <span className="time">6:00 PM Mon</span></div>
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

                <div className="mt-2"><span className="badges-drak">Developer</span> <span className="time">6:00 PM Mon</span></div>
              </a>

              <a href="#">
                Government announced all Nepal lockdown from 6 AM Chaitra 11 to 6 PM Chaitra 18.
                <div className="mt-2"><span className="badges-green">General</span> <span className="time">6:00 PM Mon</span></div>
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

                <div className="mt-2"><span className="badges-green">General</span> <span className="time">6:00 PM Mon</span></div>
              </a>

              <a href="#">
                Government announced all Nepal lockdown from 6 AM Chaitra 11 to 6 PM Chaitra 18.
                <div className="mt-2"><span className="badges-green">General</span> <span className="time">6:00 PM Mon</span></div>
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

                <div className="mt-2"><span className="badges-green">General</span> <span className="time">6:00 PM Mon</span></div>
              </a>

              <a href="#">
                Government announced all Nepal lockdown from 6 AM Chaitra 11 to 6 PM Chaitra 18.
                <div className="mt-2"><span className="badges-green">General</span> <span className="time">6:00 PM Mon</span></div>
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

                <div className="mt-2"><span className="badges-green">General</span> <span className="time">6:00 PM Mon</span></div>
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
          <Nav.Link href="/design/news">News</Nav.Link>
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
          <Dropdown className="lang-selector">
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
