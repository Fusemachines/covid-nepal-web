import React, { FC } from 'react';
import { IHospital } from 'src/services/hospitals';
import { useHistory } from 'react-router-dom';

interface ITableRowProps {
  hospital: IHospital;
}

const TableRow: FC<ITableRowProps> = props => {
  const history = useHistory();
  const { hospital } = props;
  return (
    <tr onClick={() => history.push(`/hospital/${hospital.nameSlug}`)} style={{ cursor: 'pointer' }}>
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
        {/* <div className="h5 text-warning font-weight-bold text-right"> */}
        {hospital.contact && hospital.contact.join(',')}
        {/* </div> */}
      </td>
      <td>
        <small>More info</small>
      </td>
    </tr>
  );
};

export default TableRow;
