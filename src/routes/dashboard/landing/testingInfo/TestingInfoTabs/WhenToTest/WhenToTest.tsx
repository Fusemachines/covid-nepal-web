import React, { FC } from 'react';
import { Media } from 'react-bootstrap';

const WhenToTest: FC<{}> = () => {
  return (
    <div className="px-3 py-4">
      <div className="info-title mx-5">
        If you believe you have been exposed to COVID-19 and develop symptoms like fever, cough and difficulty of
        breathing, call your doctor!
      </div>

      <Media className="mt-4 bg-white px-4 py-3">
        <img alt={'High Fever'} src="/images/high.svg" className="align-self-center mr-3" />

        <Media.Body className="align-self-center">
          <div className="text-danger font-weight-bold h6">High Fever</div>
        </Media.Body>
      </Media>

      <Media className="mt-4 bg-white px-4 py-3">
        <img alt={'Ait Transmission'} src="/images/airtransmission.svg" className="align-self-center mr-3" />
        <Media.Body className="align-self-center">
          <div className="text-danger font-weight-bold h6">Dry Cough</div>
        </Media.Body>
      </Media>

      <Media className="mt-4 bg-white px-4 py-3">
        <img alt={'Use Nose Rag'} src="/images/usenose-rag-red.svg" className="align-self-center mr-3" />
        <Media.Body className="align-self-center">
          <div className="text-danger font-weight-bold h6">Difficulty in breathing</div>
        </Media.Body>
      </Media>
    </div>
  );
};

export default WhenToTest;
