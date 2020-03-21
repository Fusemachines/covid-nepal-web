import React, { FC, useContext } from 'react';
import { Table } from 'react-bootstrap';

import HospitalCapacityTableRow from './HospitalCapacityTableRow';
import { HospitalCapacityTableContext } from '../HospitalCapacity';

const HospitalCapacityTable: FC<{}> = () => {
  const { isLoaded, hospitalCapacityList } = useContext(HospitalCapacityTableContext);

  return (
    <Table responsive className="text-white">
      <thead>
        <tr>
          <th>Name of Hospital</th>
          <th>Address</th>
          <th>Contact</th>
          <th>No. of beds</th>
          <th>No. of ICU beds</th>
          <th>Covid-19 Test</th>
          <th>Isolation Rooms</th>
        </tr>
      </thead>

      <tbody>
        {isLoaded ? (
          hospitalCapacityList.length > 0 ? (
            hospitalCapacityList.map(hospitalCapacity => {
              return <HospitalCapacityTableRow key={hospitalCapacity._id} hospitalCapacity={hospitalCapacity} />;
            })
          ) : (
            <span>No records found</span>
          )
        ) : (
          <span>Loading...</span>
        )}
      </tbody>
    </Table>
  );
};

export default HospitalCapacityTable;
