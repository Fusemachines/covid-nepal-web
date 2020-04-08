import React, { FC, useContext } from 'react';

import Loader from 'src/components/Loader';
import { HospitalDetailsContext } from '../HospitalDetails';
import DetailsBoxContent from './DetailsBoxContent';

const DetailsBox: FC<{}> = () => {
  const { isLoaded, hospital } = useContext(HospitalDetailsContext);
  return (
    <div className="rounded bg-bluelight overflow-hidden">
      <div className="p-4 text-white">
        {isLoaded ? Object.entries(hospital).length === 0 ? 'No details found' : <DetailsBoxContent /> : <Loader />}
      </div>

      {hospital.mapLink && (
        <div className="maps">
          <iframe title="location" src={hospital.mapLink} width="400" height="300"></iframe>
        </div>
      )}
    </div>
  );
};

export default DetailsBox;
