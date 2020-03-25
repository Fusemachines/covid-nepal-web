import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import ResourceItem from './ResourceItem';
import lo from 'src/i18n/locale.json';

const Resources: FC<{}> = () => {
  const [t] = useTranslation();

  return (
    <ul className="resources__list">
      <ResourceItem
      /* {t(lo.resourc_howToProtectUrself)} */
        title={'Fact or fiction: How much do you know about the coronavirus disease (COVID-19)?'}
        url={
          'https://www.unicef.org/coronavirus/fact-or-fiction-how-much-do-you-actually-know-about-coronavirus-covid-19'
        }
        imageUrl={'http://cdn.poll-maker.com/51-1749455/coronavirus-quiz-1.png?sz=800'}
      />

      <ResourceItem
        title={'WHO Guidelines - How to protect yourself against COVID-19'}
        url={' https://drive.google.com/open?id=1PFuFqHs7-ZNk1hlrU74e27cUZnd_picy'}
        imageUrl={''}
      />

      <ResourceItem
        title={'Reduce Your Risk of coronavirus infection'}
        url={'https://drive.google.com/open?id=11ZIhFJ9D-Txdo43SCb2umiKQuNoX6C97'}
        imageUrl={''}
      />

      <ResourceItem
        title={'Self Quarantine Rules and Regulations as per Nepal Government'}
        url={'https://drive.google.com/open?id=1a0CLDBliaFHrRWN719CHmg1ddXyHdLTa'}
        imageUrl={''}
      />

      <ResourceItem
        title={'Self-Quarantine_form_english_version_10-03-2020'}
        url={'https://drive.google.com/open?id=1A6Bk1bJEUHugZHwxawudc2g4kHsxRcsO'}
        imageUrl={''}
      />

      <ResourceItem
        title={'Self-Quarantine_form_Nepali_version_10-03-2020.'}
        url={'https://drive.google.com/file/d/1zGT2gf1ANBpsHYNdhbL5VyYzvK8zEGVo/view'}
        imageUrl={''}
      />

      <ResourceItem
        title={'How to protect yourself and others against COVID-19'}
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
