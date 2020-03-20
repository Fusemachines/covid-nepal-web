import React, { FC, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import LiveDataTableRow from './LiveDataTableRow';
import { fetchLiveDataAPI, ILiveData } from 'src/services/liveData';

const LiveDataTable: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [liveDataList, setLiveDataList] = useState<Array<ILiveData>>([]);

  useEffect(() => {
    fetchLiveData();
  }, []);

  const fetchLiveData = async () => {
    setIsLoaded(false);
    try {
      const response = await fetchLiveDataAPI();
      setLiveDataList(response.docs);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

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
