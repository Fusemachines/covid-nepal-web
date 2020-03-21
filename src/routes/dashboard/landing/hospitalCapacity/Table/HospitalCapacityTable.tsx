import React, { FC, useContext, useState } from 'react';
import { Table } from 'react-bootstrap';

import HospitalCapacityTableRow from './HospitalCapacityTableRow';
import { HospitalCapacityTableContext } from '../HospitalCapacity';
import MapsModal from 'src/components/MapsModal';
import MapsIframe from 'src/components/MapsIframe';

const HospitalCapacityTable: FC<{}> = () => {
  const { isLoaded, hospitalCapacityList } = useContext(HospitalCapacityTableContext);

  const [showMapsModal, setShowMapsModal] = useState(false);
  const [mapURL, setMapURL] = useState('');

  const toggleMapsModal = (title?: string) => {
    setShowMapsModal(prevShowMapsState => !prevShowMapsState);
    if (title) {
      setMapURL(title);
    }
  };

  return (
    <>
      <Table responsive className="text-white">
        <thead>
          <tr>
            <th>Name of Hospital</th>
            <th>Address</th>
            <th>Covid-19 Tests</th>
            <th>Contact</th>
            <th>Isolation Beds</th>
            <th>ICU</th>
            <th>Govt Designated Center</th>
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
        <MapsModal showModal={showMapsModal} title={mapURL} toggleModal={toggleMapsModal}>
          <div className="map-large">
            <MapsIframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4035172171098!2d85.31146271500164!3d27.704824882792977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fffc37200b%3A0xfcc471d3e99106bc!2sBir%20Hospital!5e0!3m2!1sen!2snp!4v1584781293143!5m2!1sen!2snp" />
          </div>
        </MapsModal>
      )}
    </>
  );
};

export default HospitalCapacityTable;
