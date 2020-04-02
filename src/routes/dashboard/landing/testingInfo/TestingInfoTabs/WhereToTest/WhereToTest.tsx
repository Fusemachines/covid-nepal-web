import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import HospitalCross from 'src/components/Icons/HospitalCross';
import AllocatedHospitalsTable from './Table';
import lo from 'src/i18n/en';

const WhereToTest: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <div className="px-3 py-4">
      <div className="h5 m-0 d-flex">
        <HospitalCross />
        <div>{t(lo.contac_hospitalWhereToGetTested)}</div>
      </div>
      <div className="mt-4">
        <AllocatedHospitalsTable />
      </div>
    </div>
  );
};

export default WhereToTest;
