import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Menu = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/design"> nCOVIDNEPAL</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/design">Home</Nav.Link>
          <Nav.Link href="/design">Safety</Nav.Link>
          <Nav.Link href="/design">Symptoms</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default Menu;
