import React, { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { INotices, fetchNoticesAPI } from "src/services/notices";

import GovernmentNoticeItem from "./GovernmentNoticeItem";

import Loader from 'src/components/Loader';

import lo from "src/i18n/en";

const GovernmentNotices: FC<{}> = () => {
  const [t] = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [govtNotices, setNotices] = useState<Array<INotices> | null>(null);

  useEffect(() => {
    setIsLoaded(false);
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await fetchNoticesAPI();
      // console.log(response);
      setNotices(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

  return (
    <ul className="notices__list">
      { isLoaded ? (govtNotices && govtNotices.map(notice => (
        <GovernmentNoticeItem
          key={notice._id}
          category={notice.tag}
          date={notice.addedAt}
          title={notice.title}
          url={notice.url}
        />
      ))): (
            <Loader />
          
      )}
    </ul>
  );
};

export default GovernmentNotices;
