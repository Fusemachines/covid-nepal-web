import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import lo from 'src/i18n/en';
import SymtomSVG from './SymtomSVG';
import SymtomChart from './SymptomChart';

const Symptoms = () => {
  const [t] = useTranslation();

  return (
    <>
      <div className="container mt-3">
        <Row className="mt-5 align-items-center">
          <Col lg="5">
            <SymtomSVG />
          </Col>
          <Col lg="7" sm="12" className="mt-5 mt-lg-0">
            <div className="rounded oveflow-hidden bg-bluelight p-3">
              <SymtomChart />
            </div>
            <div className="small mt-3 text-lightblue">* {t(lo.sym_SometimeChildren)}</div>
            <div className="small mb-3 mt-1 text-lightblue">{t(lo.sym_sourcesFooter)}</div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Symptoms;
