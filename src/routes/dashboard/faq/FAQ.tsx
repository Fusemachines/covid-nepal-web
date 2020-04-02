import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import lo from "src/i18n/en";
import Scrollspy from "react-scrollspy";

import General from "./General";
import Mythbusters from "./Mythbusters";

const JoinUs = () => {
  const [t] = useTranslation();

  return (
    <>
      <div className="container faq-container">
        <Row className="mt-4">
          <Col md={3}>
            <Scrollspy items={["general", "mythbusters", ""]} currentClassName="active" className="faq-menu">
              <li className="faq--item">
                <a href="#general" className="faq__link">
                  {t(lo.faq_generatFAQ)}
                </a>
              </li>
              <li className="faq--item">
                <a href="#mythbusters" className="faq__link">
                  Mythbusters
                </a>
              </li>
            </Scrollspy>
          </Col>

          <Col md="9" className="mb-3">
            <div className="rounded bg-bluelight px-4">
              <div className="py-4 border-bottom border-dark" id="general">
                <General />
              </div>

              <div className="py-5" id="mythbusters">
                <Mythbusters />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default JoinUs;
