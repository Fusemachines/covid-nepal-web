import React, { FC } from 'react';
import { Media } from 'react-bootstrap';

const WhenToTest: FC<{}> = () => {
  return (
    <div className="px-3 py-4">
      <div className="info-title mx-5">Go for immediate Covid-19 test if you are showing following symptoms</div>

      <Media className="mt-4 bg-white px-4 py-3">
        <img alt={'High Fever'} src="/images/highfever.png" className="align-self-center mr-3" />
        <Media.Body className="align-self-center">
          <div className="text-danger font-weight-bold h6">High Fever (Above 100.4° F)</div>
        </Media.Body>
      </Media>

      <Media className="mt-4 bg-white px-4 py-3">
        <img alt={'Ait Transmission'} src="/images/airtransmission.png" className="align-self-center mr-3" />
        <Media.Body className="align-self-center">
          <div className="text-danger font-weight-bold h6">Dry Cough</div>
        </Media.Body>
      </Media>

      <Media className="mt-4 bg-white px-4 py-3">
        <img alt={'Use Nose Rag'} src="/images/usenose-rag.png" className="align-self-center mr-3" />
        <Media.Body className="align-self-center">
          <div className="text-danger font-weight-bold h6">Difficulty in breathing</div>
        </Media.Body>
      </Media>
    </div>
  );
};

export default WhenToTest;
