import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

/* import { Link } from 'react-router-dom';
import JoinUsIcon from 'src/components/Icons/JoinUsIcon';
import { JOIN_US } from 'src/constants/routes'; */

import lo from 'src/i18n/locale.json';

const JoinUs = () => {
  const [t] = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container">
        <Row className="mt-4">
          <Col sm="12" className="my-3">
            <h1 className="text-center font-weight-bold">{t(lo.nav_FAQ)}</h1>
          </Col>

          <Col sm="12" className="my-3">
            <div className="rounded bg-bluelight p-4">
              <ul className="numc">
                <li className="mb-4">
                  <div className="font-18 mb-2">{t(lo.faq_q1_ques)}</div>
                  <p>{t(lo.faq_q1_ans_1)}</p>
                  <p>{t(lo.faq_q1_ans_2)}</p>
                </li>

                <li className="mb-4">
                  <div className="font-18 mb-2">{t(lo.faq_q2_ques)}</div>
                  <p>{t(lo.faq_q2_ans)}</p>
                </li>

                <li className="mb-4">
                  <div className="font-18 mb-2">{t(lo.faq_q3_ques)}</div>
                  <p>{t(lo.faq_q3_ans)}</p>
                </li>

                <li className="mb-4">
                  <div className="font-18 mb-2">{t(lo.faq_q4_ques)}</div>
                  <p>{t(lo.faq_q4_ans)}</p>
                </li>

                <li>
                  <div className="font-18 mb-2">{t(lo.faq_q5_ques)}</div>
                  <p>{t(lo.faq_q5_ans)}</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default JoinUs;
