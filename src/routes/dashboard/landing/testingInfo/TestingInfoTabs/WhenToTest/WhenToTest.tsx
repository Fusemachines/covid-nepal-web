import React, { FC } from 'react';
import { Media } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import lo from 'src/i18n/locale.json';

const WhenToTest: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <div className="px-3 py-4">
      <div className="info-title mx-5">{t(lo.contac_exposedToDevelopSymptoms)}</div>

      <Media className="mt-4 bg-white px-4 py-3">
        <img alt={'High Fever'} src="/images/highfever.png" className="align-self-center mr-3" />
        <Media.Body className="align-self-center">
          <div className="text-danger font-weight-bold h6">{t(lo.contac_highFever)}</div>
        </Media.Body>
      </Media>

      <Media className="mt-4 bg-white px-4 py-3">
        <img alt={'Ait Transmission'} src="/images/airtransmission.png" className="align-self-center mr-3" />
        <Media.Body className="align-self-center">
          <div className="text-danger font-weight-bold h6">{t(lo.contac_drycough)}</div>
        </Media.Body>
      </Media>

      <Media className="mt-4 bg-white px-4 py-3">
        <img alt={'Use Nose Rag'} src="/images/usenose-rag.png" className="align-self-center mr-3" />
        <Media.Body className="align-self-center">
          <div className="text-danger font-weight-bold h6">{t(lo.contac_difficultToBreathing)}</div>
        </Media.Body>
      </Media>
    </div>
  );
};

export default WhenToTest;
