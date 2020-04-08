import React, { FC, useState, useEffect } from 'react';
import { Navbar as Navigation, Nav, Dropdown, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';

import * as routes from 'src/constants/routes';
import EmergencyButton from 'src/components/Buttons/EmergencyButton';
import NavItem from './NavItem';
import lo from 'src/i18n/en';
import Contacts from 'src/routes/dashboard/contacts';
import { setCookie, getlocalStorage, deleteCookie } from '../../utils/storage';
import { NoTransWrapper } from '../NoTranslate';
import FacebookIcon from '../Icons/FacebookIcon';
import TwitterIcon from '../Icons/TwitterIcon';

interface INavbarProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Navbar: FC<INavbarProps> = props => {
  const [cookies, setCookieFunction] = useCookies(['googtrans']);

  const location = useLocation();
  const currentPath = location.pathname;
  const googtrans = cookies['googtrans'] || getlocalStorage('googtrans') || 'en';
  const language = googtrans.includes('ne') ? 'ne' : 'en';
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { t } = useTranslation();

  const languageTranslate = (lang: string, setLanguage = false) => {
    if (lang === 'ne') {
      setCookie('googtrans', `/en/${lang}`, setCookieFunction);
      try {
        const googleTeCombo: any = document.getElementsByClassName('goog-te-combo')[0];
        googleTeCombo.value = lang;

        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    } else {
      deleteCookie('googtrans', setCookieFunction);

      window.location.reload();
    }
  };

  const setLanguagePath = (lang: string) => {
    if (language === lang) {
      return;
    }
    languageTranslate(lang, true);
  };

  useEffect(() => {
    const googtrans = localStorage.getItem('googtrans') || 'en';
    if (googtrans.includes('ne')) {
      languageTranslate('ne');
    } else {
      deleteCookie('googtrans', setCookieFunction);
    }
  }, []);

  useEffect(() => {
    const path = location.pathname.split('/');
  }, [location.pathname]);

  useEffect(() => {
    if (isSidebarVisible) {
      document.getElementsByTagName('body')[0].classList.add('modal-open');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('modal-open');
    }
  }, [isSidebarVisible]);

  const toggleEmergencyContact = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="text-center bg-bluelight covid-alert d-flex">
        <a
          className="small mx-auto"
          href="https://bit.ly/covidnepal_report_error_newinfo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t(lo.nav_HelpUsKeepDataReliable)}
        </a>
        <div className="d-none d-sm-none d-md-block social-link">
          <a href="https://www.facebook.com/covidnepalorg/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>

          <a href="https://twitter.com/covidnepalorg" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
        </div>
      </div>

      <Navigation collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Link to={routes.DASHBOARD}>
          <Navigation.Brand className="font-weight-bold">
            <NoTransWrapper>
              <span className="mr-2">{t(lo.nav_covid19)}</span>
              <span>{t(lo.nav_Nepal)}</span>
            </NoTransWrapper>
          </Navigation.Brand>
        </Link>

        {/* Temporary Langauge Select */}
        {/* <LanguageSelectCommingSoon isMobile={true} /> */}
        {/* language */}

        <Dropdown className="lang-selector mobile-flag">
          <Dropdown.Toggle as={'div'} id="dropdown-custom-components">
            {language === 'ne' ? (
              <>
                <img src="/images/nepal.png" className="mx-1" alt="eng" /> <span>{t(lo.nav_NEP)}</span>
              </>
            ) : (
              <>
                <img src="/images/english.png" className="mx-1" alt="eng" /> <span>{t(lo.nav_ENG)}</span>
              </>
            )}
          </Dropdown.Toggle>

          <Dropdown.Menu as={'div'} alignRight>
            <Dropdown.Item onClick={() => setLanguagePath('en')}>
              <img src="/images/english.png" className="mr-1" alt="eng" /> <span>{t(lo.nav_ENG)}</span>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setLanguagePath('ne')}>
              <img src="/images/nepal.png" className="mr-1" alt="nepal" /> <span>{t(lo.nav_NEP)}</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* <div className="lang mobile-flag" style={{ userSelect: 'none' }}>
          <label htmlFor="np-lang" className={language === 'ne' ? 'active' : ''}>
            <input
              type="radio"
              id="np-lang"
              onClick={() => setLanguagePath('ne')}
              name="lang-mobile"
              value="ne"
              checked={language === 'ne'}
            />
            <img alt='nep' src="/images/nepal.png" className="mx-1" /> {t(lo.nav_NEP)}
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
            {t(lo.nav_ENG)} <img src="/images/english.png" className="mx-1" alt='eng' />
          </label>
        </div> */}

        {/* emergency contact */}
        <EmergencyButton text={t(lo.nav_Emergency)} handleClick={toggleEmergencyContact} className="mob-view" />

        <Navigation.Toggle aria-controls="responsive-navbar-nav" />

        <Navigation.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavItem title={t(lo.nav_Home)} to={routes.DASHBOARD} active={routes.DASHBOARD === currentPath} />
            {/* <NavItem title={t(lo.nav_Symptoms)} to={routes.SYMPTOMS} active={routes.SYMPTOMS === currentPath} /> */}
            <Dropdown className="nav-dropdown">
              <Dropdown.Toggle as={'div'} id="dropdown-custom-components">
                Symptoms & Prevention
              </Dropdown.Toggle>

              <Dropdown.Menu as={'div'}>
                <NavItem title={t(lo.nav_Symptoms)} to={routes.SYMPTOMS} active={routes.SYMPTOMS === currentPath} className="" />
                <NavItem title="Protect Yourself" to={routes.PROTECT_YOURSELF} active={routes.PROTECT_YOURSELF === currentPath} className="" />
                <NavItem title="At Home" to={routes.AT_HOME} active={routes.AT_HOME === currentPath} className="" />
                <NavItem title="Parenting & Child Care" to={routes.PARENTING} active={routes.PARENTING === currentPath} className="" />
                <NavItem title="Elderly People" to={routes.ELDERLY} active={routes.ELDERLY === currentPath} className="" />
              </Dropdown.Menu>
            </Dropdown>

            <NavItem
              title={t(lo.nav_GovNotice)}
              exact={false}
              to={routes.NOTICES}
              active={routes.NOTICES === currentPath}
            />
            {/* <NavItem title={t(lo.nav_News)} exact={false} to={routes.NEWS} active={routes.NEWS === currentPath} /> */}
            <NavItem title={t(lo.nav_FAQ)} exact={false} to={routes.FAQ} active={routes.FAQ === currentPath} />
          </Nav>
          <Nav>
            <NavItem title={t(lo.nav_JoinUs)} exact={false} active={routes.JOIN_US === currentPath} to={routes.JOIN_US} className={`btn btn-outline-light mr-2 px-3`} />
            
            <NavItem title={'Support Frontline'} exact={false} active={routes.SUPPORT_FRONTLINE_WORKERS === currentPath} to={routes.SUPPORT_FRONTLINE_WORKERS} className={`btn btn-warning mr-2 px-3`} />

            <EmergencyButton text={t(lo.nav_Emergency)} handleClick={toggleEmergencyContact} className="desktop-view" />
            {/* Temporary Langauge Select */}
            {/* <LanguageSelectCommingSoon isMobile={false} />

           

            {/* language */}
            <Dropdown className="lang-selector menu-flag">
              <Dropdown.Toggle as={'div'} id="dropdown-custom-components">
                {language === 'ne' ? (
                  <>
                    <img src="/images/nepal.svg" className="mx-1" alt="nep" /> <span>{t(lo.nav_NEP)}</span>
                  </>
                ) : (
                  <>
                    <img src="/images/english.svg" className="mx-1" alt="eng" /> <span>{t(lo.nav_ENG)}</span>
                  </>
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu as={'div'} alignRight>
                <Dropdown.Item onClick={() => setLanguagePath('en')}>
                  <img src="/images/english.svg" className="mr-1" alt="eng" /> <span>{t(lo.nav_ENG)}</span>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setLanguagePath('ne')}>
                  <img src="/images/nepal.svg" className="mr-1" alt="nepal" /> <span>{t(lo.nav_NEP)}</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navigation.Collapse>
      </Navigation>
      <Contacts visibility={isSidebarVisible} toggleContacts={toggleEmergencyContact} />
    </>
  );
};

export default Navbar;
