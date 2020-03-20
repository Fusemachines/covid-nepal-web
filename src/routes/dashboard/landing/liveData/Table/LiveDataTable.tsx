import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import LiveDataTableRow from './LiveDataTableRow';

const LiveDataTable: FC<{}> = () => {
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
        <LiveDataTableRow />
      </tbody>
    </Table>
  );
};

export default LiveDataTable;
