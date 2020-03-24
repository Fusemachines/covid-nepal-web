import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import ResourceItem from './ResourceItem';
import lo from 'src/i18n/locale.json';

const Resources: FC<{}> = () => {
  const [t] = useTranslation();

  return (
    <ul className="resources__list">
      <ResourceItem
        title={t(lo.resourc_howToProtectUrself)}
        url={'https://www.unicef.org/nepal/stories/novel-coronavirus'}
        imageUrl={'/images/protect_yourself.png'}
      />

      <ResourceItem
        title={t(lo.resourc_joinFight)}
        url={'https://www.unicef.org/nepal/join-fight-against-misinformation'}
        imageUrl={'/images/fight_misinformation.png'}
      />
    </ul>
  );
};

export default Resources;
