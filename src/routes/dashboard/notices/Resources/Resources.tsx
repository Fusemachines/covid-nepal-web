import React, { FC, useState, useEffect } from "react";

// import resources from "src/constants/notices/resources.json";
import { INotices, fetchResourcesAPI } from "src/services/notices";
import ResourceItem from "./ResourceItem";
import { useTranslation } from "react-i18next";

const Resources: FC<{}> = () => {
  const [t] = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [resources, setResources] = useState<Array<INotices> | null>(null);

  useEffect(() => {
    setIsLoaded(false);
    fetchNotices();
  }, []);

  
  const fetchNotices = async () => {
    try {
      const response = await fetchResourcesAPI();
      // console.log(response);
      setResources(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };


  return (
    <ul className="resources__list">
      {resources && resources.map(resource => (
        <ResourceItem
          key={resource._id}
          title={resource.title}
          url={resource.url}
          imageUrl={resource.imageUrl}
        />
      ))}
    </ul>
  );
};

export default Resources;
