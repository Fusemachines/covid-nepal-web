import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import HospitalCross from 'src/components/Icons/HospitalCross';
import AllocatedHospitalsTable from './Table';
import lo from 'src/i18n/locale.json';

const WhereToTest: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <div className="px-3 py-4">
      <div className="h5 m-0">
        <HospitalCross />
        {t(lo.contac_hospitalWhereToGetTested)}
      </div>
      <div className="mt-4">
        <AllocatedHospitalsTable />
      </div>
    </div>
  );
};

export default WhereToTest;
