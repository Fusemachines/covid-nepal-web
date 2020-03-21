import React, { FC, useContext, useState } from 'react';
import { Table } from 'react-bootstrap';

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
      <small>
        <i>
          *Disclaimer: We are sourcing this data from various sources such as government website, situation report,
          hospital operators, doctors, etc. We need your help to continue gathering this information across all
          hospitals in Nepal. If you would like to help collect data, please sign up{' '}
          <a className={'text-white'} href="https://covidnepal.org/about/#join-us">
            here
          </a>
          .
        </i>
      </small>
      <Table responsive className="text-white">
        <thead>
          <tr>
            <th>Name of Hospital</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Num of Beds</th>
            <th>Num of ICU Beds</th>
            <th>Num of Ventilators</th>
            <th>Num of Isolation Beds</th>
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
