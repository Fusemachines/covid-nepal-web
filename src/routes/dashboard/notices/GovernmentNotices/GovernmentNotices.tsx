import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import GovernmentNoticeItem from './GovernmentNoticeItem';
import lo from 'src/i18n/locale.json';

const GovernmentNotices: FC<{}> = () => {
  const [t] = useTranslation();

  return (
    <ul className="notices__list">
      <GovernmentNoticeItem
        category="Press Release"
        date="25 March 2020"
        title="MoHP 4:15pm Daily Press Brief as of 25th March"
        url="https://youtu.be/TSWADtbqAPg"
      />

      <GovernmentNoticeItem
        category="Press Release"
        date="25 March 2020"
        title="MOHP notice on Rectifying The Flight Number of Air Arabia"
        url="https://drive.google.com/open?id=1UwpLZ-BCf3m4Vjwt9HD4kzNVhSzppMYe"
      />

      <GovernmentNoticeItem
        category="Reports"
        date="25 March 2020"
        title="Covid-outbreak updates- as of March 25"
        url="https://drive.google.com/open?id=1Ahreq6VwU6qkn2aNVQ-E0UTzQxLZE7-2"
      />

      <GovernmentNoticeItem
        category={t(lo.notic_pressRelease)}
        date="24 March 2020"
        title="Press Release Video as of March 24 by Ministry of Health"
        url="https://drive.google.com/open?id=1geRCtoaOHg0nCTk-4ZFE4vthxtvcy4ji"
      />

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
