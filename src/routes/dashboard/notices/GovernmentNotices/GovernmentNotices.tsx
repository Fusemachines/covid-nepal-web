import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import GovernmentNoticeItem from './GovernmentNoticeItem';
import lo from 'src/i18n/locale.json';

const GovernmentNotices: FC<{}> = () => {
  const [t] = useTranslation();

  return (
    <ul className="notices__list">
      <GovernmentNoticeItem
        category={t(lo.notic_pressRelease)}
        date="20 March 2020"
        title={t(lo.notic_pressRelease21March)}
        url="https://drive.google.com/file/d/1ouT9PpNpGuWJSWlQuvZzqGS5f3Ur2Jzb/view"
      />

      <GovernmentNoticeItem
        category={t(lo.notic_pressRelease)}
        date="20 March 2020"
        title={t(lo.notic_situationReport20March)}
        url="https://drive.google.com/file/d/1c1aju7qThbnHGKCiqqxdfIobWWO9ulRP/view"
      />

      <GovernmentNoticeItem
        category={t(lo.notic_reports)}
        date="19 March 2020"
        title={t(lo.notic_situationReport1To41)}
        url="https://drive.google.com/drive/folders/1QhLMbT76t6Zu1sFy5qlB5aoDbHVAcnHx"
      />

      <GovernmentNoticeItem
        category={t(lo.notic_pressRelease)}
        date="18 March 2020"
        title={t(lo.notic_travelRestriction)}
        url="https://drive.google.com/drive/folders/1QhLMbT76t6Zu1sFy5qlB5aoDbHVAcnHx"
      />
    </ul>
  );
};

export default GovernmentNotices;
