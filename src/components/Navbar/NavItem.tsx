import React, { FC } from 'react';
import { Nav } from 'react-bootstrap';
// import { NavLink, useHistory } from 'react-router-dom';

interface INavItemProps {
  to: string;
  title: string;
  active: boolean;
  exact?: boolean;
}

const NavItem: FC<INavItemProps> = props => {
  // const history = useHistory();

  const { to, title, active /* , exact = true */ } = props;

  return (
    <Nav.Link href={to} /* exact={exact} to={to} */ className={`nav-link ${active ? 'active' : ''}`}>
      {title}
    </Nav.Link>
  );
};

export default NavItem;
