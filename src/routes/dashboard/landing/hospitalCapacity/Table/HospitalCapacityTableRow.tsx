import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { IHospital } from 'src/services/hospitals';
import LocationIcon from 'src/components/Icons/LocationIcon';
import { IMapModalValues } from './HospitalCapacityTable';
import NotAvailable from 'src/components/NotAvailable';

export interface IHospitalCapacityTableRowProps {
  hospitalCapacity: IHospital;
  toggleMapsModal: (mapModalValues: IMapModalValues) => void;
}

const HospitalCapacityTableRow: FC<IHospitalCapacityTableRowProps> = props => {
  const history = useHistory();
  const {
    hospitalCapacity: {
      _id,
      name,
      location: address,
      mapLink: mapURL,
      contact,
      totalBeds,
      numIsolationBeds,
      icu,
      nameSlug,
      ventilators
    },
    toggleMapsModal
  } = props;

  const showMapModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (address) {
      toggleMapsModal({ title: name, mapURL });
    }
  };

  return (
    <>
      <tr onClick={() => history.push(`/hospital/${nameSlug}`)} style={{ cursor: 'pointer' }}>
        <td>
          <div>{name}</div>
        </td>
        <td onClick={showMapModal}>
          {address ? (
            <>
              <div style={{ textTransform: 'capitalize' }}>{address}</div>

              <LocationIcon />
              <span className="ml-2">Map</span>
            </>
          ) : (
            <NotAvailable id={'address-' + _id} />
          )}
        </td>
        <td onClick={e => e.stopPropagation()}>
          {contact ? (
            contact.map((number, index) => (
              <a key={index} className="text-white" href={`tel:${number}`}>
                {number} {index === contact.length - 1 ? ' ' : ', '}
              </a>
            ))
          ) : (
            <NotAvailable id={'contact-' + _id} />
          )}
        </td>

        <td onClick={e => e.stopPropagation()}>{totalBeds ? totalBeds : <NotAvailable id={'bed-' + _id} />}</td>

        <td onClick={e => e.stopPropagation()}>{icu ? icu : <NotAvailable id={'icu-' + _id} />}</td>

        <td onClick={e => e.stopPropagation()}>
          {ventilators ? ventilators : <NotAvailable id={'ventilators-' + _id} />}
        </td>

        <td onClick={e => e.stopPropagation()}>
          {numIsolationBeds ? numIsolationBeds : <NotAvailable id={'isolation-bed-' + _id} placement="left" />}
        </td>
      </tr>
    </>
  );
};

export default HospitalCapacityTableRow;
