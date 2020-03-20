import React, { FC } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface INavItemProps {
  to: string;
  title: string;
  active: boolean;
}

const NavItem: FC<INavItemProps> = props => {
  const { to, title, active } = props;

  return (
    <div className={`${active ? 'active' : ''}`}>
      <Link to={to} className="nav-link">
        {title}
      </Link>
    </div>
  );
};

export default NavItem;
