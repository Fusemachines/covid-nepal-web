import React, { FC } from "react";

import resources from "src/constants/notices/resources.json";
import ResourceItem from "./ResourceItem";

const Resources: FC<{}> = () => {
  return (
    <ul className="resources__list">
      {resources.reverse().map(resource => (
        <ResourceItem
          title={resource.title}
          url={resource.url}
          imageUrl={resource.imageUrl}
        />
      ))}
    </ul>
  );
};

export default Resources;
