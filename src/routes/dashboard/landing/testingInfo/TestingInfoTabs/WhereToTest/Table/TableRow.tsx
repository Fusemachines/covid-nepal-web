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
    <tr>
      <td>
        <div>{hospital.name}</div>
      </td>
      <td className="text-center">
        <div>{(hospital.availableTime && hospital.availableTime.length && hospital.availableTime[0]) || ''}</div>
        <small>{hospital.openDays}</small>
      </td>
      <td className="align-middle" onClick={e => e.stopPropagation()}>
        {/* <div className="h5 text-warning font-weight-bold text-right"> */}
        {/* {hospital.contact && hospital.contact.join(', ')} */}
        {hospital.contact.map((number, index) =>
          index === hospital.contact.length - 1 ? (
            <a className="text-white" href={`tel:${number}`}>
              {number}
            </a>
          ) : (
            <>
              <a className="text-white" href={`tel:${number}`}>
                {number}
              </a>
              ,{' '}
            </>
          )
        )}
        {/* </div> */}
      </td>
      <td>
        <a
          href={'javascript:void(0)'}
          className="text-white small"
          onClick={() => history.push(`/hospital/${hospital.nameSlug}`)}
          style={{ cursor: 'pointer' }}
        >
          More info
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
