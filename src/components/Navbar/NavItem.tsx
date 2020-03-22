import React, { FC } from 'react';
import { Nav } from 'react-bootstrap';
import { /* NavLink, */ useHistory } from 'react-router-dom';

interface INavItemProps {
  to: string;
  title: string;
  active: boolean;
  exact?: boolean;
}

const NavItem: FC<INavItemProps> = props => {
  const history = useHistory();

  const { to, title, active /* , exact = true */ } = props;

  const onSelect = (eventKey: any, e: any) => {
    e.preventDefault();
    history.push(to);
  };

  return (
    <Nav.Link
      href={to}
      onSelect={onSelect}
      /* exact={exact} to={to} */ className={`nav-link ${active ? 'active' : ''}`}
    >
      {title}
    </Nav.Link>
  );
};

export default NavItem;
