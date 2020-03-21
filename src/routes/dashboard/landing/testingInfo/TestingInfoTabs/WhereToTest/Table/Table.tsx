import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';
import { IAllocatedHospital } from 'src/services/hospitals';

interface IAllocatedHospitalTableProps {
  allocatedHospitals: IAllocatedHospital[];
}

const AllocatedHospitalTable: FC<IAllocatedHospitalTableProps> = props => {
  const { allocatedHospitals } = props;
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
        {allocatedHospitals.map(hospital => (
          <TableRow hospital={hospital} />
        ))}
      </tbody>
    </Table>
  );
};

export default AllocatedHospitalTable;
