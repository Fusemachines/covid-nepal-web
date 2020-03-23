import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import GreenContactBadge from 'src/components/Badges/GreenContactBadge';
import { IContact } from 'src/services/contacts';
import Loader from 'src/components/Loader';

interface IHospitalContactsRecordsProps {
  isLoaded: boolean;
  hospitalContacts: IContact[];
}

const HospitalContactsRecords: FC<IHospitalContactsRecordsProps> = props => {
  const { isLoaded, hospitalContacts } = props;

  return (
    <div className="px-3">
      {isLoaded ? (
        hospitalContacts.length > 0 ? (
          <Table className="text-white">
            <tbody>
              {hospitalContacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.name}</td>
                  <td className="text-right">
                    {contact.landLine.map((number, index) => (
                      <div className="badges badge-cus" key={index}>
                        <GreenContactBadge contactNumber={number} />
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <span>No records found</span>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default HospitalContactsRecords;
