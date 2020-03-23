import React, { FC, useContext, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import HospitalCapacityTableRow from './HospitalCapacityTableRow';
import { HospitalCapacityTableContext } from '../HospitalCapacity';
import MapsModal from 'src/components/MapsModal';
import MapsIframe from 'src/components/MapsIframe';

export interface IMapModalValues {
  title: string;
  mapURL: string;
}

const HospitalCapacityTable: FC<{}> = () => {
  const { isLoaded, hospitalCapacityList } = useContext(HospitalCapacityTableContext);

  const [showMapsModal, setShowMapsModal] = useState(false);
  const [mapModalValues, setMapModalValues] = useState<IMapModalValues>({} as IMapModalValues);

  const toggleMapsModal = (mapModalValues?: IMapModalValues) => {
    setShowMapsModal(prevShowMapsState => !prevShowMapsState);
    if (mapModalValues) {
      const { title, mapURL } = mapModalValues;
      setMapModalValues({ title, mapURL });
    }
  };

  return (
    <>
      <div className="small mb-3 mt-1">
        <i>
          *Disclaimer: We are sourcing this data from various sources such as government website, situation report,
          hospital operators, doctors, etc. We need your help to continue gathering this information across all
          hospitals in Nepal. If you would like to help collect data, please sign up{' '}
          <Link className={'text-white'} to="/join-us">
            here
          </Link>
          .
        </i>
      </div>
      <Table responsive className="text-white">
        <thead>
          <tr>
            <th>Name of Hospital</th>
            <th>Address</th>
            <th>Contact</th>
            <th>No. of Beds</th>
            <th>No. of ICU Beds</th>
            <th>No. of Ventilators</th>
            <th>No. of Isolation Beds</th>
          </tr>
        </thead>

        <tbody>
          {isLoaded ? (
            hospitalCapacityList.length > 0 ? (
              hospitalCapacityList.map(hospitalCapacity => {
                return (
                  <HospitalCapacityTableRow
                    key={hospitalCapacity._id}
                    hospitalCapacity={hospitalCapacity}
                    toggleMapsModal={toggleMapsModal}
                  />
                );
              })
            ) : (
              <span>No records found</span>
            )
          ) : (
            <span>Loading...</span>
          )}
        </tbody>
      </Table>

      {showMapsModal && (
        <MapsModal showModal={showMapsModal} title={mapModalValues.title} toggleModal={toggleMapsModal}>
          <div className="map-large">
            <MapsIframe url={mapModalValues.mapURL} />
          </div>
        </MapsModal>
      )}
    </>
  );
};

export default HospitalCapacityTable;
