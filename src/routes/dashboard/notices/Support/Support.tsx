import React, { FC } from "react";

import support from "src/constants/notices/support.json";
import SupportItem from "./SupportItem";

const Resources: FC<{}> = () => {

  return (
    <ul className="resources__list">
      {support.reverse().map(support => (
        <SupportItem key={support._id} title={support.title} url={support.url} imageUrl={support.imageUrl} />
      ))}
    </ul>
  );
};

export default Resources;
