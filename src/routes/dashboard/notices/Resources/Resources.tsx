import React, { FC, useState, useEffect } from "react";

import { INotices, fetchResourcesAPI } from "src/services/notices";
import ResourceItem from "./ResourceItem";

import Loader from 'src/components/Loader';

const Resources: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [resources, setResources] = useState<Array<INotices> | null>(null);

  useEffect(() => {
    setIsLoaded(false);
    fetchNotices();
  }, []);

  
  const fetchNotices = async () => {
    try {
      const response = await fetchResourcesAPI();
      setResources(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };


  return (
    <ul className="resources__list">
      { isLoaded ?(resources && resources.map(resource => (
        <ResourceItem
          key={resource._id}
          title={resource.title}
          url={resource.url}
          imageUrl={resource.imageUrl}
        />
        ))) : (
          <Loader />
        )}
    </ul>
  );
};

export default Resources;
