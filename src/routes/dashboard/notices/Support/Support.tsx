import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import SupportItem from './SupportItem';
import lo from 'src/i18n/locale.json';

const Resources: FC<{}> = () => {
  const [t] = useTranslation();

  return (
      <ul className="resources__list">

        <SupportItem
            title={
            'Call to Doctor Sewa'
            }
            url={'https://covid.hamropatro.com/'}
            imageUrl={'/images/calldoctor.jpg'}
        />

        <SupportItem
            title={
            'Corona Nepal'
            }
            url={'http://www.coronanepal.org/'}
            imageUrl={'/images/coronanepal.jpg'}
        />
    </ul>
  );
};

export default Resources;
