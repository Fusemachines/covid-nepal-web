import React, { FC } from 'react';
import { Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import NoTranslate from '../NoTranslate';

interface INavItemProps {
  to: string;
  title: string;
  active: boolean;
  exact?: boolean;
  className?: string;
}

const NavItem: FC<INavItemProps> = props => {
  const history = useHistory();

  const { to, title, active, className, children } = props;

  const onSelect = (eventKey: any, e: any) => {
    e.preventDefault();
    history.push(to);
  };

  return (
    <Nav.Link href={to} onSelect={onSelect} className={`${active ? 'activeT' : ''} ${className}`}>
      {children? children : <NoTranslate noTranslate={title} />}
    </Nav.Link>
  );
};

export default NavItem;
