import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import ContactBadge from 'src/components/Badges/ContactBadge';

interface IHospitalContactsRecordsProps {}

const HospitalContactsRecords: FC<IHospitalContactsRecordsProps> = props => {
  return (
    <div className="px-4">
      <Table className="text-white">
        <tbody>
          <tr>
            <td>Sukraraj Hospital, Teku</td>
            <td className="text-right">
              <div className="badges">
                <ContactBadge contactNumber={'123'} />
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default HospitalContactsRecords;
