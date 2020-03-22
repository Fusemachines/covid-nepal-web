import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import GreenContactBadge from 'src/components/Badges/GreenContactBadge';
import { IContact } from 'src/services/contacts';

interface IHospitalContactsRecordsProps {
  hospitalContacts: IContact[];
}

const HospitalContactsRecords: FC<IHospitalContactsRecordsProps> = props => {
  const { hospitalContacts } = props;

  return (
    <div className="px-3">
      <Table className="text-white">
        <tbody>
          {hospitalContacts.map(contact => (
            <tr>
              <td>{contact.name}</td>
              <td className="text-right">
                {contact.landLine.map(number => (
                  <div className="badges badge-cus">
                    <GreenContactBadge contactNumber={number} />
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HospitalContactsRecords;
