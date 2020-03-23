import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import GreenContactBadge from 'src/components/Badges/GreenContactBadge';
import { IContact } from 'src/services/contacts';

interface IHospitalContactsRecordsProps {
  isLoaded: boolean;
  hospitalContacts: IContact[];
}

const HospitalContactsRecords: FC<IHospitalContactsRecordsProps> = props => {
  const { isLoaded, hospitalContacts } = props;

  return (
    <div className="px-3">
      <Table className="text-white">
        {isLoaded ? (
          hospitalContacts.length > 0 ? (
            hospitalContacts.map(contact => (
              <tbody>
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
              </tbody>
            ))
          ) : (
            <span>No records found</span>
          )
        ) : (
          <span>Loading...</span>
        )}
      </Table>
    </div>
  );
};

export default HospitalContactsRecords;
