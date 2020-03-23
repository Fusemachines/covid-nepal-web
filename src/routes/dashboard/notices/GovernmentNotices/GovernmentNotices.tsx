import React, { FC } from 'react';
import GovernmentNoticeItem from './GovernmentNoticeItem';

const GovernmentNotices: FC<{}> = () => {
  return (
    <ul className="notices__list">
      <GovernmentNoticeItem
        category="Press Release"
        date="23 March 2020"
        title="भोलि बिहान ६ बजेदेखि देशभर लक डाउन, घरबाहिर ननिस्कन आदेश [निर्णयसहित]"
        url="https://ekantipur.com/news/2020/03/23/158497075637384607.html"
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
