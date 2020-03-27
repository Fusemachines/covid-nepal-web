import React, { FC, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import TableRow from './TableRow';
import {
  IFetchAllocatedHospitalListAPIResponse,
  fetchAllocatedHospitalListAPI,
  IHospital
} from 'src/services/hospitals';
import Loader from 'src/components/Loader';
import lo from 'src/i18n/locale.json'

const AllocatedHospitalTable: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [allocatedHospitalList, setAllocatedHospitalList] = useState<IHospital[]>([] as IHospital[]);
  const { t } = useTranslation();

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
          <th>{t(lo.contac_hospitalName)}</th>
          <th className="w-125">{t(lo.contac_openHours)}</th>
          <th>{t(lo.hosp_Contact)}</th>
          <th className="w-76"></th>
        </tr>
      </thead>

      <tbody>
        {isLoaded ? (
          allocatedHospitalList.length > 0 ? (
            allocatedHospitalList.map((hospital, index) => <TableRow key={index} hospital={hospital} />)
          ) : (
            <tr>
              <td colSpan={4}>
              <span>{t(lo.com_noRecordsFound)}</span>
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
