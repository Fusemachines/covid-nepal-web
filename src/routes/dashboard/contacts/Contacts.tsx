import React, { FC, useEffect } from 'react';
import HospitalContacts from './HospitalContacts';
import { Tab, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import EmergencyContacts from './EmergencyContacts';
import SquareRightArrow from 'src/components/Icons/SquareRightArrow';
import lo from 'src/i18n/locale.json';

interface IContactsProps {
  visibility: boolean;
  toggleContacts: () => void;
}

const Contacts: FC<IContactsProps> = props => {
  const { visibility, toggleContacts } = props;
  const [t] = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`right-bar ${visibility ? 'show' : ''}`}>
      <div className="overlay" onClick={() => toggleContacts()} />

      <div className="toggle-rightbar pointer" onClick={() => toggleContacts()}>
        <SquareRightArrow />
      </div>

      <div className="content">
        <Tab.Container defaultActiveKey="first">
          <Nav fill variant="tabs" className="contact">
            <Nav.Item>
              <Nav.Link eventKey="first" className="py-3 m-0">
                <span>{t(lo.com_EmergencyContact)}</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="py-3 m-0">
                <span>{t(lo.com_HospitalContact)}</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <EmergencyContacts />
            </Tab.Pane>

            <Tab.Pane eventKey="second">
              <div className="mt-4">
                <HospitalContacts />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Contacts;
