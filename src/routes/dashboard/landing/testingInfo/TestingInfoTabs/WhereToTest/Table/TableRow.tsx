import React, { FC } from 'react';
import { IHospital } from 'src/services/hospitals';

interface ITableRowProps {
  hospital: IHospital;
}

const TableRow: FC<ITableRowProps> = props => {
  const { hospital } = props;
  return (
    <tr>
      <td>
        <div>{hospital.name}</div>
      </td>
      <td className="text-center">
        <div>
          {hospital.availableTime[0]} AM - {hospital.availableTime[1]} PM
        </div>
        <small>{hospital.openDays}</small>
      </td>
      <td className="align-middle">
        <div className="h5 text-warning font-weight-bold text-right">
          {hospital.availableBeds} / {hospital.totalBeds}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
