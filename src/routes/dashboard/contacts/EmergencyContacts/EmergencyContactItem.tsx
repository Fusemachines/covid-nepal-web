import React, { FC } from 'react';
import { IContact } from 'src/services/contacts';
import ContactBadge from 'src/components/Badges/ContactBadge';

interface IEmergencyContactItemProps {
  contact: IContact;
}

const EmergencyContactItem: FC<IEmergencyContactItemProps> = props => {
  const { contact } = props;

  return (
    <div className="info-item py-3 mt-4">
      <div>
        {contact.name}
        <small className="float-right">
          {contact.openingTime} - {contact.closingTime}
        </small>
      </div>
      <div className="badges mt-2">
        {contact.mobile.map(mobile => (
          <ContactBadge contactNumber={mobile} />
        ))}
        {contact.landLine.map(landline => (
          <ContactBadge contactNumber={landline} />
        ))}
      </div>
    </div>
  );
};

export default EmergencyContactItem;
