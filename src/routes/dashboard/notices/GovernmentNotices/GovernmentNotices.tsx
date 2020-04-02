import React, { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import govtNotices from "src/constants/notices/govtNotices.json";
import GovernmentNoticeItem from "./GovernmentNoticeItem";
import lo from "src/i18n/en";

const GovernmentNotices: FC<{}> = () => {
  const [t] = useTranslation();

  return (
    <ul className="notices__list">
      {govtNotices.map(notice => (
        <GovernmentNoticeItem
          key={notice._id}
          category={notice.category}
          date={notice.date}
          title={notice.title}
          url={notice.url}
        />
      ))}
    </ul>
  );
};

export default GovernmentNotices;
