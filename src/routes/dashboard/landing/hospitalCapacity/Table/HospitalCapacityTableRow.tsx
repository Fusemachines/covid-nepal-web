import React, { FC } from 'react';
import { TextCaptionIcon } from 'src/components/TextCaption/TextCaptionIcons';
import { IHospitalCapacity } from 'src/services/hospitals';

interface ILiveTableRowProps {
  hospitalCapacity: IHospitalCapacity;
}

const HospitalCapacityTableRow: FC<ILiveTableRowProps> = props => {
  const {
    hospitalCapacity: { nameOfHospital, numberOfBed, numberOfPatient, covid19Symptom, covid19SymptomPercentage }
  } = props;
  return (
    <>
      {}
      <tr>
        <td>
          <div>{nameOfHospital}</div>
          <small>{numberOfBed} Beds</small>
        </td>
        <td>{numberOfPatient}</td>
        <td>
          {covid19Symptom}
          <small className="d-block text-success">
            <TextCaptionIcon type={'success'} />
            {covid19SymptomPercentage}%
          </small>
        </td>
      </tr>
    </>
  );
};

export default HospitalCapacityTableRow;
