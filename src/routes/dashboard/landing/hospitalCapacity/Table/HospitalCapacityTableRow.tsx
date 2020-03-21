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
    hospitalCapacity: {
      _id,
      name,
      location: address,
      mapLink: mapURL,
      covidTest,
      contact,
      numIsolationBeds,
      icu,
      govtDesignated
    },
    toggleMapsModal
  } = props;
  return (
    <>
      <tr onClick={() => window.location.assign(`/hospitals/${_id}`)}>
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
          {covidTest ? (
            <div className="badges">
              <div className="badges-item m-0">Available</div>
            </div>
          ) : (
            '-'
          )}
        </td>
        <td>{contact.map((number, index) => (index === contact.length - 1 ? `${number}` : `${number},`))}</td>

        <td>{numIsolationBeds ? numIsolationBeds : '-'}</td>
        <td>{icu ? icu : '-'}</td>

        <td>
          {govtDesignated ? (
            <div className="badges">
              <div className="badges-item m-0">Yes</div>
            </div>
          ) : (
            '-'
          )}
        </td>
      </tr>
    </>
  );
};

export default HospitalCapacityTableRow;
