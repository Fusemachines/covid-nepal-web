import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import HospitalCross from 'src/components/Icons/HospitalCross';
import AllocatedHospitalsTable from './Table';
import lo from 'src/i18n/en';
// import { Scrollbars } from 'react-custom-scrollbars';

const WhereToTest: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <div className="px-3 py-4">
      <div className="h5 m-0 d-flex">
        <HospitalCross />
        <div>{t(lo.contac_hospitalWhereToGetTested)}</div>
      </div>
      <div className="mt-4 hm-3">
          {/* <Scrollbars style={{ height: 360 }} autoHide={false}> */}
            <AllocatedHospitalsTable />
          {/* </Scrollbars>    */}
      </div>
    </div>
  );
};

export default WhereToTest;
