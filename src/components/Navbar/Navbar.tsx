import React, { FC, useState, useEffect } from 'react';
import { Navbar as Navigation, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import * as routes from 'src/constants/routes';
import TransparentButton from 'src/components/Buttons/TransparentButton';
import EmergencyButton from 'src/components/Buttons/EmergencyButton';
import NavItem from './NavItem';
import en from 'src/i18n/en';



// import i18n from '../../i18n';
import Contacts from 'src/routes/dashboard/contacts';
// import { setCookie } from '../../utils/storage';

const Navbar: FC<{}> = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [language, setLanguage] = useState(location.search.includes('ne') ? 'ne' : 'en');

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { t } = useTranslation();
  // i18n.use

  /* const interLang = i18n();
  const { navBar } = interLang; */

  useEffect(() => {
    const path = location.pathname.split('/');
    console.log(path);
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
    <React.Fragment>
      <div className="text-center bg-bluelight covid-alert">
        <a className="small" href="https://bit.ly/covidnepal_report_error_newinfo" target="blank">
          {t(en.HelpUsKeepDataReliable)}
        </a>
      </div>

      <Navigation collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Link to={routes.DASHBOARD}>
          <Navigation.Brand className="font-weight-bold">
            <span className="mr-2">{t(en.covid19)}</span>
            <span>{t(en.Nepal)}</span>
          </Navigation.Brand>
        </Link>

        {/* language */}
        <div className="lang mobile-flag">
          <label htmlFor="np-lang" className={language === 'ne' ? 'active' : ''}>
            <input
              type="radio"
              id="np-lang"
              /* onClick={() => setLanguagePath('ne')} */
              name="lang-mobile"
              value="ne"
              checked={language === 'ne'}
            />
            <img src="/images/nepal.png" className="mx-1" /> {t(en.NEP)}
          </label>

          <label htmlFor="en-lang" className={language === 'en' ? 'active' : ''}>
            <input
              type="radio"
              id="en-lang"
              /* onClick={() => setLanguagePath('en')} */
              name="lang-mobile"
              value="en"
              checked={language === 'en'}
            />
            {t(en.ENG)} <img src="/images/english.png" className="mx-1" />
          </label>
        </div>

        {/* emergency contact */}
        <EmergencyButton text={t(en.EmergencyContact)} handleClick={toggleEmergencyContact} className="mob-view" />

        <Navigation.Toggle aria-controls="responsive-navbar-nav" />

        <Navigation.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavItem title={t(en.Home)} to={routes.DASHBOARD} active={routes.DASHBOARD === currentPath} />
            <NavItem title={t(en.Symptoms)} to={routes.SYMPTOMS} active={routes.SYMPTOMS === currentPath} />
            <NavItem title={t(en.JoinUs)} exact={false} to={routes.JOIN_US} active={routes.JOIN_US === currentPath} />
          </Nav>

          <Nav>
            <Link to={routes.NOTICES}>
              <TransparentButton
                text={t(en.GovNotice)}
                handleClick={() => {}}
                active={routes.NOTICES === currentPath}
              />
            </Link>
            <EmergencyButton
              text={t(en.EmergencyContact)}
              handleClick={toggleEmergencyContact}
              className="desktop-view"
            />

            {/* language */}
            <div className="lang menu-flag">
              <label htmlFor="np-lang" className={language === 'ne' ? 'active' : ''}>
                <input
                  type="radio"
                  id="np-lang"
                  /* onClick={() => setLanguagePath('ne')} */
                  name="language"
                  value="ne"
                  checked={language === 'ne'}
                />
                <img src="/images/nepal.png" className="mx-1" alt="nepal" /> {t(en.NEP)}
              </label>

              <label htmlFor="en-lang" className={language === 'en' ? 'active' : ''}>
                <input
                  type="radio"
                  id="en-lang"
                  /* onClick={() => setLanguagePath('en')} */
                  name="language"
                  value="en"
                  checked={language === 'en'}
                />
                {t(en.NEP)} <img src="/images/english.png" className="mx-1" />
              </label>
            </div>
          </Nav>
        </Navigation.Collapse>
      </Navigation>
      <Contacts visibility={isSidebarVisible} toggleContacts={toggleEmergencyContact} />
    </React.Fragment>
  );
};

export default Navbar;
