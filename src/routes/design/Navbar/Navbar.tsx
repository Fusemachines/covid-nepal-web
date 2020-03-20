import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import RightBar from '../EmergencyCall';

const Menu = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/design"> nCOVIDNEPAL</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/design">Home</Nav.Link>
          <Nav.Link href="/design">Safety</Nav.Link>
          <Nav.Link href="/design">Symptoms</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link href="">Dank memes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    {/* <RightBar /> */}
  </>
);

export default Menu;
