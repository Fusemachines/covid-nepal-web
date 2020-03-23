import React, { FC } from 'react';
import ResourceItem from './ResourceItem';

const Resources: FC<{}> = () => {
  return (
    <ul className="resources__list">
      <ResourceItem
        title={'How to protect yourself and others against COVID-19'}
        url={'https://www.unicef.org/nepal/stories/novel-coronavirus'}
        imageUrl={'/images/protect_yourself.png'}
      />

      <ResourceItem
        title={'Join the fight against misinformation'}
        url={'https://www.unicef.org/nepal/join-fight-against-misinformation'}
        imageUrl={'/images/fight_misinformation.png'}
      />
    </ul>
  );
};

export default Resources;
