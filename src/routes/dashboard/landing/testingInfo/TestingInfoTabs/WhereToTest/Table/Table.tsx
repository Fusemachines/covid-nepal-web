import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';

const AllocatedHospitalTable: FC<{}> = () => {
  return (
    <Table responsive className="text-white">
      <thead>
        <tr>
          <th>Name of Hospital</th>
          <th>Open Hours</th>
          <th>No. of beds available</th>
        </tr>
      </thead>

      <tbody>
        <TableRow />
      </tbody>
    </Table>
  );
};

export default AllocatedHospitalTable;
