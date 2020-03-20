import React, { FC } from 'react';
import EmergencyContacts from './EmergencyContacts';
import HospitalContacts from './HospitalContacts';

interface IContactsProps {
  visibility: boolean;
  toggleContacts: () => void;
}

const Contacts: FC<IContactsProps> = props => {
  const { visibility, toggleContacts } = props;

  return (
    <div className={`right-bar ${visibility ? 'show' : ''}`}>
      <div className="content">
        <div className="px-4 mt-4">
          <div className="h5">
            Emergency Contacts
            <div className="float-right pointer" onClick={() => toggleContacts()}>
              &times;
            </div>
          </div>

          <EmergencyContacts />

          <HospitalContacts />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
