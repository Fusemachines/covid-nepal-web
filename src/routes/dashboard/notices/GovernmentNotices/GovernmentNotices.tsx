import React, { FC } from 'react';
import GovernmentNoticeItem from './GovernmentNoticeItem';

const GovernmentNotices: FC<{}> = () => {
  return (
    <ul className="notices__list">
      <GovernmentNoticeItem
        category="Press Release"
        date="23 March 2020"
        title="These 8 decisions will be implemented from 6 AM tomorrow"
        url="https://myrepublica.nagariknetwork.com/news/these-8-decisions-will-be-implemented-from-6am-tomorrow/"
      />

      <GovernmentNoticeItem
        category="Press Release"
        date="20 March 2020"
        title="Press Release as of 21 March 2020"
        url="https://drive.google.com/file/d/1ouT9PpNpGuWJSWlQuvZzqGS5f3Ur2Jzb/view"
      />

      <GovernmentNoticeItem
        category="Press Release"
        date="20 March 2020"
        title="Situation Report_COVID-19 #42 (as of 20 March 2020)"
        url="https://drive.google.com/file/d/1c1aju7qThbnHGKCiqqxdfIobWWO9ulRP/view"
      />

      <GovernmentNoticeItem
        category="Reports"
        date="19 March 2020"
        title="Situation Reports #1 to #41"
        url="https://drive.google.com/drive/folders/1QhLMbT76t6Zu1sFy5qlB5aoDbHVAcnHx"
      />

      <GovernmentNoticeItem
        category="Reports"
        date="19 March 2020"
        title="Situation Reports #1 to #41"
        url="https://drive.google.com/drive/folders/1QhLMbT76t6Zu1sFy5qlB5aoDbHVAcnHx"
      />

      <GovernmentNoticeItem
        category="Press Release"
        date="18 March 2020"
        title="Updated notice on travel restriction related to COVID-19"
        url="https://drive.google.com/drive/folders/1QhLMbT76t6Zu1sFy5qlB5aoDbHVAcnHx"
      />
    </ul>
  );
};

export default GovernmentNotices;
