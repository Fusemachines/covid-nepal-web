import React, { FC } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

interface INavItemProps {
  to: string;
  title: string;
  active: boolean;
  exact?: boolean;
}

const NavItem: FC<INavItemProps> = props => {
  const { to, title, active, exact = true } = props;

  return (
    <NavLink exact={exact} to={to} className={`nav-link ${active ? 'active' : ''}`}>
      {title}
    </NavLink>
  );
};

export default NavItem;
