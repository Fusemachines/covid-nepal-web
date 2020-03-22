import React, { FC } from 'react';
import HospitalCross from 'src/components/Icons/HospitalCross';
import AllocatedHospitalsTable from './Table';

const WhereToTest: FC<{}> = () => {
  return (
    <div className="px-3 py-4">
      <div className="h5 m-0">
        <HospitalCross />
        Hospitals where you may get tested for Covid-19
      </div>
      <div className="mt-4">
        <AllocatedHospitalsTable />
      </div>
    </div>
  );
};

export default WhereToTest;
