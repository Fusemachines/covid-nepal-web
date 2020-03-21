import React, { FC, useState, useEffect } from 'react';
import { Navbar as Navigation, Nav } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';

import * as routes from 'src/constants/routes';
import TransparentButton from 'src/components/Buttons/TransparentButton';
import EmergencyButton from 'src/components/Buttons/EmergencyButton';
import NavItem from './NavItem';

import i18n from '../../i18n';
import { setCookie } from '../../utils/storage';

interface INavbarProps {
  toggleSidebar: () => void;
}

const Navbar: FC<INavbarProps> = props => {
  const { toggleSidebar } = props;
  const location = useLocation();
  const history = useHistory();
  const currentPath = location.pathname;
  const [language, setLanguage] = useState('en');
  const interLang = i18n();
  const { navBar } = interLang;

  const setLanguagePath = (lang: string) => {
    setLanguage(lang);
    history.push(location.pathname + `?lang=${lang}`);
    setCookie('googtrans', `/en/${lang}`);

    try {
      const googleTeCombo: any = document.getElementsByClassName('goog-te-combo')[0];
      googleTeCombo.value = lang;
      window.location.reload();
    } catch (e) {}
  };

  return (
    <React.Fragment>
      <Navigation collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Link to={routes.DASHBOARD}>
          <Navigation.Brand className="font-weight-bold">
            <span className="mr-2">COVID</span>
            <span>{navBar.Nepal}</span>
          </Navigation.Brand>
        </Link>

        {/* language */}
        <div className="lang mobile-flag">
          <label htmlFor="np-lang" className={language === 'ne' ? 'active' : ''}>
            <input
              type="radio"
              id="np-lang"
              onClick={() => setLanguagePath('ne')}
              name="language"
              value="np"
              checked={language === 'ne'}
            />
            <img src="/images/nepal.png" className="mx-1" /> {navBar.NEP}
          </label>

          <label htmlFor="en-lang" className={language === 'en' ? 'active' : ''}>
            <input
              type="radio"
              id="en-lang"
              onClick={() => setLanguagePath('en')}
              name="language"
              value="en"
              checked={language === 'en'}
            />
            {navBar.ENG} <img src="/images/english.png" className="mx-1" />
          </label>
        </div>

        <Navigation.Toggle aria-controls="responsive-navbar-nav" />

        <Navigation.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavItem title={'Home'} to={routes.DASHBOARD} active={routes.DASHBOARD === currentPath} />
            <NavItem title={'Symptoms'} to={routes.SYMPTOMS} active={routes.SYMPTOMS === currentPath} />
            <NavItem title={'About'} to={routes.ABOUT} active={routes.ABOUT === currentPath} />
          </Nav>

          <Nav>
            {/* <TransparentButton text={'Covid-19 Cases'} handleClick={() => ({})} /> */}
            <EmergencyButton text={navBar.EmergencyContact} handleClick={toggleSidebar} />

            {/* language */}
            <div className="lang menu-flag">
              <label htmlFor="np-lang" className={language === 'ne' ? 'active' : ''}>
                <input
                  type="radio"
                  id="np-lang"
                  onClick={() => setLanguage('ne')}
                  name="language"
                  value="ne"
                  checked={language === 'ne'}
                />
                <img src="/images/nepal.png" className="mx-1" /> {navBar.NEP}
              </label>

              <label htmlFor="en-lang" className={language === 'en' ? 'active' : ''}>
                <input
                  type="radio"
                  id="en-lang"
                  onClick={() => setLanguage('en')}
                  name="language"
                  value="en"
                  checked={language === 'en'}
                />
                {navBar.ENG} <img src="/images/english.png" className="mx-1" />
              </label>
            </div>
          </Nav>
        </Navigation.Collapse>
      </Navigation>
    </React.Fragment>
  );
};

export default Navbar;
