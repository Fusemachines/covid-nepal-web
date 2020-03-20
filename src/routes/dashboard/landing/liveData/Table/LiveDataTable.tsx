import React, { FC, useContext } from 'react';
import { Table } from 'react-bootstrap';

import LiveDataTableRow from './LiveDataTableRow';
import { LiveDataTableContext } from '../LiveData';

const LiveDataTable: FC<{}> = () => {
  const { isLoaded, liveDataList } = useContext(LiveDataTableContext);

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
          liveDataList.length > 0 ? (
            liveDataList.map(liveData => {
              return <LiveDataTableRow key={liveData._id} liveData={liveData} />;
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

export default LiveDataTable;
