import React, { FC } from 'react';
import GovernmentNoticeItem from './GovernmentNoticeItem';

const GovernmentNotices: FC<{}> = () => {
  return (
    <ul className="notices__list">
      <GovernmentNoticeItem
        category="Press Release"
        date="26 March 2020"
        title="Novel Corona Disease Prevention and Control High Level Coordination Committee"
        url="https://drive.google.com/open?id=1qYd5Vr7n-O6eRmCGodjZ49pjcCGbmFC1"
      />

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
        category="Press Release"
        date="24 March 2020"
        title="Press Release Video as of March 24 by Ministry of Health"
        url="https://drive.google.com/open?id=1geRCtoaOHg0nCTk-4ZFE4vthxtvcy4ji"
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
        category="Press Release"
        date="18 March 2020"
        title="Updated notice on travel restriction related to COVID-19"
        url="https://drive.google.com/drive/folders/1QhLMbT76t6Zu1sFy5qlB5aoDbHVAcnHx"
      />
    </ul>
  );
};

export default GovernmentNotices;
