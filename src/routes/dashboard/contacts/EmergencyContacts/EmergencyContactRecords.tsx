import React, { FC } from 'react';
import { IContact } from 'src/services/contacts';
import PhoneIcon from 'src/components/Icons/PhoneIcon';

interface IEmergencyContactItemProps {
  contact: IContact;
}

const EmergencyContactItem: FC<IEmergencyContactItemProps> = props => {
  const { contact } = props;

  return (
    <div className="info-item py-3 mt-2">
      <div className="font-16">
        {contact.name} | {contact.openingTime} - {contact.closingTime}
      </div>
      {contact.mobile.map((mobile, index) => (
        <a key={index} className="rounded btn-success px-3 py-1 mx-2 btn my-2" href={`tel:${mobile}`}>
          <PhoneIcon />
          {mobile}
        </a>
      ))}
      {contact.landLine.map((mobile, index) => (
        <a key={index} className="rounded btn-success px-3 py-1 mx-2 btn my-2" href={`tel:${mobile}`}>
          <PhoneIcon />
          {mobile}
        </a>
      ))}
    </div>
  );
};

export default EmergencyContactItem;
