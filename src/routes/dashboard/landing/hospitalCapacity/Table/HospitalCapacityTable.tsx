import React, { FC, useContext } from 'react';
import { Table } from 'react-bootstrap';

import HospitalCapacityTableRow from './HospitalCapacityTableRow';
import { HospitalCapacityTableContext } from '../HospitalCapacity';

const HospitalCapacityTable: FC<{}> = () => {
  const { isLoaded, hospitalCapacityList } = useContext(HospitalCapacityTableContext);

  return (
    <Table className="text-white">
      <thead>
        <tr>
          <th>Name of Hospital</th>
          <th>No. of Patients</th>
          <th>Covid-19 Symptoms</th>
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
