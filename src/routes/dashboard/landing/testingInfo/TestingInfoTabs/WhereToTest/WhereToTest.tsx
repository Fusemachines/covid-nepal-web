import React, { FC, useState, useEffect } from 'react';
import HospitalCross from 'src/components/Icons/HospitalCross';
import AllocatedHospitalsTable from './Table';
import {
  IFetchAllocatedHospitalListAPIResponse,
  fetchAllocatedHospitalListAPI,
  IAllocatedHospital
} from 'src/services/hospitals';

const WhereToTest: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [allocatedHospitalList, setAllocatedHospitalList] = useState<IAllocatedHospital[]>([] as IAllocatedHospital[]);

  useEffect(() => {
    setIsLoaded(false);
    fetchAllocatedHospitalList();
  }, []);

  const fetchAllocatedHospitalList = async () => {
    try {
      const response: IFetchAllocatedHospitalListAPIResponse = await fetchAllocatedHospitalListAPI();
      setAllocatedHospitalList(response.docs);
      setIsLoaded(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="px-3 py-4">
      <div className="h5 m-0">
        <HospitalCross />
        Hospitals allocated for Covid-19
      </div>
      <div className="mt-4">
        {isLoaded ? <AllocatedHospitalsTable allocatedHospitals={allocatedHospitalList} /> : 'Loading...'}
      </div>
    </div>
  );
};

export default WhereToTest;
