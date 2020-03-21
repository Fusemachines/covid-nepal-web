import React, { FC } from 'react';

import { IHospitalCapacity } from 'src/services/hospitals';
import LocationIcon from 'src/components/Icons/LocationIcon';

interface ILiveTableRowProps {
  hospitalCapacity: IHospitalCapacity;
  toggleMapsModal: (title: string) => void;
}

const HospitalCapacityTableRow: FC<ILiveTableRowProps> = props => {
  const {
    hospitalCapacity: { nameOfHospital, numberOfBed, numberOfPatient, covid19Symptom, covid19SymptomPercentage },
    toggleMapsModal
  } = props;
  return (
    <>
      <tr>
        <td>
          <div>{nameOfHospital}</div>
        </td>
        <td>
          <div>Ranipokhari, Kathmandu</div>
          <a className="pointer" onClick={() => toggleMapsModal(nameOfHospital)}>
            <LocationIcon />
            <span className="ml-2">Map</span>
          </a>
        </td>
        <td>
          <div className="badges">
            <div className="badges-item m-0">Available</div>
          </div>
        </td>
        <td>01-4331390, 01-4332160</td>

        <td>{}</td>
        <td>20</td>

        <td>
          <div className="badges">
            <div className="badges-item m-0">Yes</div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default HospitalCapacityTableRow;
