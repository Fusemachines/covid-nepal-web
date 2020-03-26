import React, { FC, useState, useEffect } from 'react';
import { Navbar as Navigation, Nav, Dropdown } from 'react-bootstrap';
import { Link, useLocation /*useHistory*/ } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';

import * as routes from 'src/constants/routes';
// import TransparentButton from 'src/components/Buttons/TransparentButton';
import EmergencyButton from 'src/components/Buttons/EmergencyButton';
import NavItem from './NavItem';
import lo from 'src/i18n/locale.json';

// import i18n from '../../i18n';
import Contacts from 'src/routes/dashboard/contacts';
// import LanguageSelectCommingSoon from './LanguageSelectCommingSoon';
import { setCookie } from '../../utils/storage';

interface INavbarProps {
  language: string,
  setLanguage: (lang: string) => void
}

const Navbar: FC<INavbarProps> = props => {
  // const [show, setShow] = useState(true);
  const [cookies, setCookieFunction] = useCookies(['googtrans']);

  const location = useLocation();
  // const history = useHistory();
  const currentPath = location.pathname;
  const googtrans = cookies['googtrans'] || localStorage.getItem('googtrans') || 'en';
  // const [language, setLanguage] = useState(googtrans.includes('ne') ? 'ne' : 'en');
  const language = googtrans.includes('ne') ? 'ne' : 'en';
  // const interLang = i18n();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { t } = useTranslation();

  // i18n.use

  /* const interLang = i18n();
  const { navBar } = interLang; */

  const languageTranslate = (lang: string, setLanguage = false) => {
    if (lang === 'ne') {
      setCookie('googtrans', `/en/${lang}`, setCookieFunction);
      try {
        const googleTeCombo: any = document.getElementsByClassName('goog-te-combo')[0];
        googleTeCombo.value = lang;
        const element = getElementFromIframe(':1.confirm');
        if (element && element.click) {
          element.click();
        } else {
          // alert('1');
          window.location.reload();
        }
      } catch (e) {
        // setCookie('googtrans', `/en/${lang}`);
        console.log(e);
      }
    } else {
      // setCookie('googtrans', `/en/${lang}`);
      setCookie('googtrans', ``, setCookieFunction);
      // deleteCookie('googtrans');
      const element = getElementFromIframe(':1.restore');
      if (element && element.click) {
        element.click();
      } else {
        // alert('2');
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
    if (language === lang) {
      return;
    }
    // setLanguage(lang);
    // history.push(location.pathname + `?lang=${lang}`);
    languageTranslate(lang, true);
  };

  useEffect(() => {
    const googtrans = localStorage.getItem('googtrans') || 'en';
    if (googtrans.includes('ne')) {
      languageTranslate('ne');
    } else {
      setCookie('googtrans', `/en/en`, setCookieFunction);
      // deleteCookie('googtrans')
    }
  }, []);

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
      <div className="text-center bg-bluelight covid-alert d-flex">
        <a className="small mx-auto" href="https://bit.ly/covidnepal_report_error_newinfo" target="_blank" rel="noopener noreferrer">
          {t(lo.nav_HelpUsKeepDataReliable)}
        </a>
        <div className="d-none d-sm-none d-md-block social-link">
          <a href="https://www.facebook.com/covidnepalorg/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="6.574" height="14.166" viewBox="0 0 6.574 14.166">
              <path
                id="Path_675"
                data-name="Path 675"
                d="M201.008,217.719h-2.939v-7.07h-1.035c-.363,0-.363,0-.363-.366v-2.14h1.4c0-.077,0-.139,0-.2.008-.6-.017-1.2.032-1.8a2.577,2.577,0,0,1,2.439-2.548c.874-.07,1.758-.026,2.637-.033,0,0,.009.005.024.015v2.414h-.167c-.454,0-.907,0-1.361,0a.567.567,0,0,0-.649.572c-.028.517-.007,1.036-.007,1.57h2.228c-.013.159-.023.3-.037.443-.065.651-.134,1.3-.2,1.953-.011.114-.072.124-.163.123-.545,0-1.091,0-1.636,0h-.205Z"
                transform="translate(-196.672 -203.553)"
                fill="#fff"
              />
            </svg>
          </a>

          <a href="https://twitter.com/covidnepalorg" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="14.655" height="11.726" viewBox="0 0 14.655 11.726">
              <path
                id="Path_676"
                data-name="Path 676"
                d="M111.4,279.778h-1.531c-.418-.072-.84-.129-1.254-.221A8.786,8.786,0,0,1,106,278.481v-.038a5.944,5.944,0,0,0,4.346-1.18,3.251,3.251,0,0,1-1.662-.628,2.856,2.856,0,0,1-1.036-1.435,4.335,4.335,0,0,0,1.2-.076,3.221,3.221,0,0,1-1.622-1.072,2.953,2.953,0,0,1-.644-1.864,2.924,2.924,0,0,0,1.234.317,3.135,3.135,0,0,1-1.136-1.784,2.736,2.736,0,0,1,.373-2.12c.066.049.091.129.143.181a13.987,13.987,0,0,0,1.014.98,8.387,8.387,0,0,0,4.695,1.9c.282.023.289.024.254-.261a2.867,2.867,0,0,1,.837-2.457,3.056,3.056,0,0,1,4.223-.081.294.294,0,0,0,.327.084l1.485-.548c.055-.021.108-.048.162-.073l.036.042a3.111,3.111,0,0,1-1.155,1.5,5.277,5.277,0,0,0,1.585-.424v.076a.576.576,0,0,0-.084.076,6.625,6.625,0,0,1-1.292,1.316.4.4,0,0,0-.108.263c-.023.322-.01.648-.043.969a8.513,8.513,0,0,1-2.237,4.991,8.077,8.077,0,0,1-5.006,2.575C111.721,279.729,111.558,279.754,111.4,279.778Z"
                transform="translate(-106 -268.052)"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
      </div>

      <Navigation collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Link to={routes.DASHBOARD}>
          <Navigation.Brand className="font-weight-bold">
            <span className="mr-2">{t(lo.nav_covid19)}</span>
            <span>{t(lo.nav_Nepal)}</span>
          </Navigation.Brand>
        </Link>

        {/* Temporary Langauge Select */}
        {/* <LanguageSelectCommingSoon isMobile={true} /> */}
        {/* language */}
        <Dropdown className="lang-selector mobile-flag">
            <Dropdown.Toggle as={'div'} id="dropdown-custom-components">
            {language === 'ne'?
            <><img src="/images/nepal.png" className="mx-1" alt="eng" /> <span>Nep</span></>
            :
              <><img src="/images/english.png" className="mx-1" alt="eng" /> <span>Eng</span></>
            }
            </Dropdown.Toggle>

            <Dropdown.Menu as={'div'} alignRight>
              <Dropdown.Item onClick={() => setLanguagePath('en')}><img src="/images/english.png" className="mr-1" alt="eng" /> <span>Eng</span></Dropdown.Item>
              <Dropdown.Item onClick={() => setLanguagePath('ne')}><img src="/images/nepal.png" className="mr-1" alt="nepal" /> <span>Nep</span></Dropdown.Item>
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
        <EmergencyButton text={t(lo.com_EmergencyContact)} handleClick={toggleEmergencyContact} className="mob-view" />

        <Navigation.Toggle aria-controls="responsive-navbar-nav" />

        <Navigation.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavItem title={t(lo.nav_Home)} to={routes.DASHBOARD} active={routes.DASHBOARD === currentPath} />
            <NavItem title={t(lo.nav_Symptoms)} to={routes.SYMPTOMS} active={routes.SYMPTOMS === currentPath} />
            {/* <NavItem title={t(lo.nav_JoinUs)} exact={false} to={routes.JOIN_US} active={routes.JOIN_US === currentPath} /> */}

            <NavItem title={t(lo.nav_GovNotice)} exact={false} to={routes.NOTICES} active={routes.NOTICES === currentPath} />
            {/* <NavItem title={t(lo.nav_FAQ)} exact={false} to={routes.FAQ} active={routes.FAQ === currentPath} /> */}
          </Nav>

          <Nav>
            {/* <NavItem
              title={t(lo.nav_GovNotice)}
              exact={false}
              to={routes.NOTICES}
              active={routes.NOTICES === currentPath}
              className="btn btn-outline-white btn-sm"
            /> */}
            {/* <Link to={routes.NOTICES}>
              <TransparentButton
                text={t(en.GovNotice)}
                handleClick={() => {}}
                active={routes.NOTICES === currentPath}
              />
            </Link> */}

            
            <NavItem title={t(lo.nav_JoinUs)} exact={false} to={routes.JOIN_US} active={routes.JOIN_US === currentPath} className="btn btn-outline-white btn-sm" />
            {/* <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdsnaeqk6sTTDe6MelxQ_zQPAP--Ud2zSxrMgcpQPOL_Pubmw/viewform?pli=1"
              target="_blank"
              className="btn btn-outline-white btn-sm nav-link"
            >
              Sign up
            </a> */}

            <EmergencyButton
              text={t(lo.com_EmergencyContact)}
              handleClick={toggleEmergencyContact}
              className="desktop-view"
            />
            {/* Temporary Langauge Select */}
            {/* <LanguageSelectCommingSoon isMobile={false} /> */}

            <div className="d-sm-block d-md-none social-link mt-4">
              <a href="https://www.facebook.com/covidnepalorg/" target="_blank" rel="noopener noreferrer" >
                <svg xmlns="http://www.w3.org/2000/svg" width="6.574" height="14.166" viewBox="0 0 6.574 14.166">
                  <path
                    id="Path_675"
                    data-name="Path 675"
                    d="M201.008,217.719h-2.939v-7.07h-1.035c-.363,0-.363,0-.363-.366v-2.14h1.4c0-.077,0-.139,0-.2.008-.6-.017-1.2.032-1.8a2.577,2.577,0,0,1,2.439-2.548c.874-.07,1.758-.026,2.637-.033,0,0,.009.005.024.015v2.414h-.167c-.454,0-.907,0-1.361,0a.567.567,0,0,0-.649.572c-.028.517-.007,1.036-.007,1.57h2.228c-.013.159-.023.3-.037.443-.065.651-.134,1.3-.2,1.953-.011.114-.072.124-.163.123-.545,0-1.091,0-1.636,0h-.205Z"
                    transform="translate(-196.672 -203.553)"
                    fill="#fff"
                  />
                </svg>
              </a>

              <a href="https://twitter.com/covidnepalorg" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14.655" height="11.726" viewBox="0 0 14.655 11.726">
                  <path
                    id="Path_676"
                    data-name="Path 676"
                    d="M111.4,279.778h-1.531c-.418-.072-.84-.129-1.254-.221A8.786,8.786,0,0,1,106,278.481v-.038a5.944,5.944,0,0,0,4.346-1.18,3.251,3.251,0,0,1-1.662-.628,2.856,2.856,0,0,1-1.036-1.435,4.335,4.335,0,0,0,1.2-.076,3.221,3.221,0,0,1-1.622-1.072,2.953,2.953,0,0,1-.644-1.864,2.924,2.924,0,0,0,1.234.317,3.135,3.135,0,0,1-1.136-1.784,2.736,2.736,0,0,1,.373-2.12c.066.049.091.129.143.181a13.987,13.987,0,0,0,1.014.98,8.387,8.387,0,0,0,4.695,1.9c.282.023.289.024.254-.261a2.867,2.867,0,0,1,.837-2.457,3.056,3.056,0,0,1,4.223-.081.294.294,0,0,0,.327.084l1.485-.548c.055-.021.108-.048.162-.073l.036.042a3.111,3.111,0,0,1-1.155,1.5,5.277,5.277,0,0,0,1.585-.424v.076a.576.576,0,0,0-.084.076,6.625,6.625,0,0,1-1.292,1.316.4.4,0,0,0-.108.263c-.023.322-.01.648-.043.969a8.513,8.513,0,0,1-2.237,4.991,8.077,8.077,0,0,1-5.006,2.575C111.721,279.729,111.558,279.754,111.4,279.778Z"
                    transform="translate(-106 -268.052)"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>

            {/* language */}
            <Dropdown className="lang-selector menu-flag">
              <Dropdown.Toggle as={'div'} id="dropdown-custom-components">
              {language === 'ne'?
              <><img src="/images/nepal.png" className="mx-1" alt="eng" /> <span>Nep</span></>
              :
                <><img src="/images/english.png" className="mx-1" alt="eng" /> <span>Eng</span></>
              }
              </Dropdown.Toggle>

              <Dropdown.Menu as={'div'} alignRight>
                <Dropdown.Item onClick={() => setLanguagePath('en')}><img src="/images/english.png" className="mr-1" alt="eng" /> <span>Eng</span></Dropdown.Item>
                <Dropdown.Item onClick={() => setLanguagePath('ne')}><img src="/images/nepal.png" className="mr-1" alt="nepal" /> <span>Nep</span></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <div className="lang menu-flag">
              <label htmlFor="np-lang" className={language === 'ne' ? 'active' : ''}>
                <input
                  type="radio"
                  id="np-lang"
                  onClick={() => setLanguagePath('ne')}
                  name="language"
                  value="ne"
                  checked={language === 'ne'}
                />
                <img src="/images/nepal.png" className="mx-1" alt="nepal" /> {t(lo.nav_NEP)}
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
                {t(lo.nav_ENG)} <img src="/images/english.png" className="mx-1" alt="eng" />
              </label>
            </div> */}
          </Nav>
        </Navigation.Collapse>
      </Navigation>
      <Contacts visibility={isSidebarVisible} toggleContacts={toggleEmergencyContact} />
    </React.Fragment>
  );
};

export default Navbar;
