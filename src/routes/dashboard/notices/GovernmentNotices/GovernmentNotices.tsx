import React, { FC, useState, useEffect } from "react";

import { INotices, fetchNoticesAPI } from "src/services/notices";
import GovernmentNoticeItem from "./GovernmentNoticeItem";
import Loader from 'src/components/Loader';


const GovernmentNotices: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [govtNotices, setNotices] = useState<Array<INotices> | null>(null);

  useEffect(() => {
    setIsLoaded(false);
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await fetchNoticesAPI();
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
