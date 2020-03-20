import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import ContactBadge from 'src/components/Badges/ContactBadge';
import { IContact } from 'src/services/contacts';

interface IHospitalContactsRecordsProps {
  hospitalContacts: IContact[];
}

const HospitalContactsRecords: FC<IHospitalContactsRecordsProps> = props => {
  const { hospitalContacts } = props;

  return (
    <div className="px-4">
      <Table className="text-white">
        <tbody>
          {hospitalContacts.map(contact => (
            <tr>
              <td>{contact.name}</td>
              <td className="text-right">
                <div className="badges">
                  {contact.landLine.map(number => (
                    <ContactBadge contactNumber={number} />
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HospitalContactsRecords;
