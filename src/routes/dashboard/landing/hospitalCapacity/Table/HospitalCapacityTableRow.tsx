import React, { FC } from 'react';

import { IHospital } from 'src/services/hospitals';
import LocationIcon from 'src/components/Icons/LocationIcon';
import { IMapModalValues } from './HospitalCapacityTable';

export interface IHospitalCapacityTableRowProps {
  hospitalCapacity: IHospital;
  toggleMapsModal: (mapModalValues: IMapModalValues) => void;
}

const HospitalCapacityTableRow: FC<IHospitalCapacityTableRowProps> = props => {
  const {
    hospitalCapacity: { _id, name, location: address, mapLink: mapURL, contact, totalBeds, numIsolationBeds, icu },
    toggleMapsModal
  } = props;
  return (
    <>
      <tr onClick={() => window.location.assign(`/hospital/${_id}`)}>
        <td>
          <div>{name}</div>
        </td>
        <td>
          <div>{address}</div>
          <a className="pointer" onClick={() => toggleMapsModal({ title: name, mapURL })}>
            <LocationIcon />
            <span className="ml-2">Map</span>
          </a>
        </td>
        <td>
          {contact
            ? contact.map((number, index) => (index === contact.length - 1 ? `${number}` : `${number},`))
            : 'N/A'}
        </td>

        <td>{totalBeds ? totalBeds : 'N/A'}</td>

        <td>{icu ? icu : 'N/A'}</td>

        <td>{'N/A - sourcing info'}</td>

        <td>{numIsolationBeds ? numIsolationBeds : 'N/A'}</td>
      </tr>
    </>
  );
};

export default HospitalCapacityTableRow;
