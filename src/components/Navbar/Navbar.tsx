import React, { FC, useState, useEffect } from 'react';
import { Navbar as Navigation, Nav, Alert } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';

import * as routes from 'src/constants/routes';
// import TransparentButton from 'src/components/Buttons/TransparentButton';
import EmergencyButton from 'src/components/Buttons/EmergencyButton';
import NavItem from './NavItem';

import i18n from '../../i18n';
import { setCookie, deleteCookie } from '../../utils/storage';

interface INavbarProps {
  toggleSidebar: () => void;
}

const Navbar: FC<INavbarProps> = props => {
  const [show, setShow] = useState(true);

  const { toggleSidebar } = props;
  const location = useLocation();
  const history = useHistory();
  const currentPath = location.pathname;
  const googtrans = localStorage.getItem('googtrans') || 'en';
  const [language, setLanguage] = useState(googtrans.includes('ne') ? 'ne' : 'en');
  const interLang = i18n();
  const { navBar } = interLang;

  const languageTranslate = (lang: string, setLanguage = false) => {
    if (lang === 'ne') {
      setCookie('googtrans', `/en/${lang}`);
      try {
        const googleTeCombo: any = document.getElementsByClassName('goog-te-combo')[0];
        googleTeCombo.value = lang;
        const element = getElementFromIframe(':1.confirm');
        if (element && element.click) {
          element.click();
        } else {
          alert('1');
          window.location.reload();
        }
      } catch (e) {
        // setCookie('googtrans', `/en/${lang}`);
        console.log(e);
      }
    } else {
      // setCookie('googtrans', `/en/${lang}`);
      deleteCookie('googtrans');
      const element = getElementFromIframe(':1.restore');
      if (element && element.click) {
        element.click();
      } else {
        alert('2');
        window.location.reload();
      }
    }
  };

  function getElementFromIframe(id: string) {
    const iframe: HTMLIFrameElement = document.getElementById(':1.container') as HTMLIFrameElement;
    if (!iframe) {
      return null;
    }
    if (iframe && iframe.contentWindow && iframe.contentWindow.document) {
      const IframeDocument = iframe.contentWindow.document;
      return IframeDocument.getElementById(id);
    } else {
      return null;
    }
  }

  const setLanguagePath = (lang: string) => {
    setLanguage(lang);
    // history.push(location.pathname + `?lang=${lang}`);
    languageTranslate(lang, true);
  };

  useEffect(() => {
    const googtrans = localStorage.getItem('googtrans') || 'en';
    if (googtrans.includes('ne')) {
      languageTranslate('ne');
    } else {
      setCookie('googtrans', `/en/en`);
      // deleteCookie('googtrans')
    }
  }, [language, location.search]);

  return (
    <React.Fragment>
      <div className="text-center bg-bluelight covid-alert">
        <a className="small" href="https://bit.ly/covidnepal_report_error_newinfo" target="blank">
          Help us keep data reliable! Report Errors, New Info and Verify Data
        </a>
      </div>

      <Navigation collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Link to={routes.DASHBOARD}>
          <Navigation.Brand className="font-weight-bold">
            <span className="mr-2">COVID-19</span>
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
              name="lang-mobile"
              value="ne"
              checked={language === 'ne'}
            />
            <img src="/images/nepal.png" className="mx-1" /> {navBar.NEP}
          </label>

          <label htmlFor="en-lang" className={language === 'en' ? 'active' : ''}>
            <input
              type="radio"
              id="en-lang"
              onClick={() => setLanguagePath('en')}
              name="lang-mobile"
              value="en"
              checked={language === 'en'}
            />
            {navBar.ENG} <img src="/images/english.png" className="mx-1" />
          </label>
        </div>

        {/* emergency contact */}
        <EmergencyButton text={navBar.EmergencyContact} handleClick={toggleSidebar} className="mob-view" />

        <Navigation.Toggle aria-controls="responsive-navbar-nav" />

        <Navigation.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavItem title={'Home'} to={routes.DASHBOARD} active={routes.DASHBOARD === currentPath} />
            <NavItem title={'Symptoms'} to={routes.SYMPTOMS} active={routes.SYMPTOMS === currentPath} />
            <NavItem title={'Join Us'} exact={false} to={routes.JOIN_US} active={routes.JOIN_US === currentPath} />
          </Nav>

          <Nav>
            {/* <TransparentButton text={'Covid-19 Cases'} handleClick={() => ({})} /> */}
            <EmergencyButton text={navBar.EmergencyContact} handleClick={toggleSidebar} className="desktop-view" />

            {/* language */}
            <div className="lang menu-flag">
              <label htmlFor="np-lang" className={language === 'ne' ? 'active' : ''}>
                <input
                  type="radio"
                  id="np-lang"
                  onClick={() => setLanguagePath('ne')}
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
                  onClick={() => setLanguagePath('en')}
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
