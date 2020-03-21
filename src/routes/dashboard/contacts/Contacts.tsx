import React, { FC } from 'react';
import HospitalContacts from './HospitalContacts';
import { Tab, Nav } from 'react-bootstrap';
import EmergencyContacts from './EmergencyContacts';
import SquareRightArrow from 'src/components/Icons/SquareRightArrow';

interface IContactsProps {
  visibility: boolean;
  toggleContacts: () => void;
}

const Contacts: FC<IContactsProps> = props => {
  const { visibility, toggleContacts } = props;

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
                Emergency Contacts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="py-3 m-0">
                Hospital Contacts
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
