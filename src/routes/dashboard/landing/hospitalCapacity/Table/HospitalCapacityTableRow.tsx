import React, { FC } from 'react';

import { IHospitalCapacity } from 'src/services/hospitals';
import ContactBadge from 'src/components/Badges/ContactBadge';

interface ILiveTableRowProps {
  hospitalCapacity: IHospitalCapacity;
}

const HospitalCapacityTableRow: FC<ILiveTableRowProps> = props => {
  const {
    hospitalCapacity: { nameOfHospital, numberOfBed, numberOfPatient, covid19Symptom, covid19SymptomPercentage }
  } = props;
  return (
    <>
      <tr>
        <td>
          <div>{nameOfHospital}</div>
        </td>
        <td>Ranipokhari, Kathmandu</td>
        <td>
          <div className="badges">
            <ContactBadge contactNumber={'9851255839'} />
          </div>
        </td>
        <td>{numberOfBed}}</td>
        <td>20</td>
        <td>Available</td>
        <td>Available</td>
      </tr>
    </>
  );
};

export default HospitalCapacityTableRow;
