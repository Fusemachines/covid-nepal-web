import React, { FC } from 'react';
import { TextCaptionIcon } from 'src/components/TextCaption/TextCaptionIcons';
import { ILiveData } from 'src/services/liveData';

interface ILiveTableRowProps {
  liveData: ILiveData;
}

const LiveDataTableRow: FC<ILiveTableRowProps> = props => {
  const {
    liveData: { nameOfHospital, numberOfBed, numberOfPatient, covid19Symptom, covid19SymptomPercentage }
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

export default LiveDataTableRow;
