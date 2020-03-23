import React, { FC, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import TableRow from './TableRow';
import {
  IFetchAllocatedHospitalListAPIResponse,
  fetchAllocatedHospitalListAPI,
  IHospital
} from 'src/services/hospitals';
import Loader from 'src/components/Loader';

const AllocatedHospitalTable: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [allocatedHospitalList, setAllocatedHospitalList] = useState<IHospital[]>([] as IHospital[]);

  useEffect(() => {
    fetchAllocatedHospitalList();
  }, []);

  const fetchAllocatedHospitalList = async () => {
    try {
      const response: IFetchAllocatedHospitalListAPIResponse = await fetchAllocatedHospitalListAPI();
      setAllocatedHospitalList(response.docs);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoaded(true);
    }
  };

  return (
    <Table responsive className="text-white h-50">
      <thead>
        <tr>
          <th>Hospital Name</th>
          <th>Open Hours</th>
          <th>Phone Number</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {isLoaded ? (
          allocatedHospitalList.length > 0 ? (
            allocatedHospitalList.map((hospital, index) => <TableRow key={index} hospital={hospital} />)
          ) : (
            <tr>
              <td colSpan={4}>
                <span>No records found</span>
              </td>
            </tr>
          )
        ) : (
          <tr>
            <td colSpan={4}>
              <Loader />
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default AllocatedHospitalTable;
