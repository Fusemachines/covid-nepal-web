import React, { FC } from 'react';
import { Navbar as Navigation, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import * as routes from 'src/constants/routes';
import TransparentButton from 'src/components/Buttons/TransparentButton';
import EmergencyButton from 'src/components/Buttons/EmergencyButton';
import NavItem from './NavItem';

interface INavbarProps {
  toggleSidebar: () => void;
}

const Navbar: FC<INavbarProps> = props => {
  const { toggleSidebar } = props;
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <React.Fragment>
      <Navigation collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Link to={routes.DASHBOARD}>
          <Navigation.Brand className="font-weight-bold">
            <span className="mr-2">nCOVID</span>
            <span>NEPAL</span>
          </Navigation.Brand>
        </Link>

        <Navigation.Toggle aria-controls="responsive-navbar-nav" />

        <Navigation.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavItem title={'Home'} to={routes.DASHBOARD} active={routes.DASHBOARD === currentPath} />
            <NavItem title={'Symptoms'} to={routes.SYMPTOMS} active={routes.SYMPTOMS === currentPath} />
          </Nav>

          <Nav>
            <TransparentButton text={'Covid-19 Casea'} handleClick={() => ({})} />
            <EmergencyButton text={'Emergency Contact'} handleClick={toggleSidebar} />
            <Nav.Link className="d-none d-lg-block">Language</Nav.Link>
          </Nav>
        </Navigation.Collapse>
      </Navigation>
    </React.Fragment>
  );
};

export default Navbar;
