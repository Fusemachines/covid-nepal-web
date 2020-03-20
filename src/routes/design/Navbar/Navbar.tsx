import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import RightBar from '../EmergencyCall';

const Menu = () => (
  <React.Fragment>
    <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="/design" className="font-weight-bold">
        <span className="mr-2">nCOVID</span>
        <span>NEPAL</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/design" className="active">
            Home
          </Nav.Link>
          <Nav.Link href="/design/symptoms">Symptoms</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="" className="btn btn-outline-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20.571" className="mr-1" height="18" viewBox="0 0 20.571 18">
              <path
                id="Path_647"
                data-name="Path 647"
                d="M-699.588,87.078h-8.94a1.27,1.27,0,0,1-1.171-1.9c.477-.885,1.008-1.74,1.514-2.609q1.72-2.95,3.44-5.9,2.014-3.451,4.033-6.9a1.277,1.277,0,0,1,2.267.007c1.121,1.907,2.232,3.82,3.348,5.729q1.735,2.968,3.471,5.935c.709,1.214,1.413,2.43,2.126,3.642a1.305,1.305,0,0,1-1.168,2C-693.641,87.067-696.615,87.078-699.588,87.078Zm1.294-9.626c0-.648.006-1.3,0-1.945a1.3,1.3,0,0,0-1.293-1.277,1.293,1.293,0,0,0-1.275,1.277q-.011,1.925,0,3.85a1.231,1.231,0,0,0,.611,1.1,1.212,1.212,0,0,0,1.274.041,1.245,1.245,0,0,0,.682-1.159C-698.289,78.709-698.294,78.081-698.294,77.453Zm-1.288,7.056a1.3,1.3,0,0,0,1.288-1.282,1.3,1.3,0,0,0-1.264-1.287,1.3,1.3,0,0,0-1.307,1.283A1.3,1.3,0,0,0-699.583,84.509Z"
                transform="translate(709.868 -69.084)"
                fill="#fff"
              />
            </svg>
            Govt. Notices
          </Nav.Link>

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

          <Nav.Link className="d-none d-lg-block">Language</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <RightBar />
  </React.Fragment>
);

export default Menu;
