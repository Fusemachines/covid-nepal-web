import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { ICovidCasesCounts } from "src/services/covidCases";
import { setCommas } from "src/utils/stringManipulation";
import lo from "src/i18n/locale.json";
import TranslateNumber from "src/components/TranslateNumber";
import useLanguage from "src/customHooks/useLanguage";

interface IGlobalCovidCasesProps {
  covidCasesNepalCounts: ICovidCasesCounts | null;
  covidCasesGlobalCounts: ICovidCasesCounts | null;
}

const CovidCount: FC<IGlobalCovidCasesProps> = ({ covidCasesNepalCounts, covidCasesGlobalCounts }) => {
  const language = useLanguage();
  const { t } = useTranslation();

  return (
    <>
      <Row className="mb-3">
        <Col xs="6">
          <div className="font-weight-bold h5">{`${t(lo.nav_Nepal)} ${t(lo.covC_Update)}`}</div>
          <div className="small-xs">({t(lo.covC_nepalGovReportNo)})</div>
        </Col>
        <Col xs="6">
          <div className="font-weight-bold h5">{`${t(lo.covC_Global)} ${t(lo.covC_Update)}`}</div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs="6">
          <div className="">{t(lo.covC_totalTested)}</div>
          <div className="h3 m-0 font-weight-bold  d-inline-block">
            <TranslateNumber
              originalValue={covidCasesNepalCounts ? setCommas(covidCasesNepalCounts.testedTotal) : "-"}
              language={language}
            />
          </div>
          {/* <TextCaption type={'success'} value={'0.10'} /> */}
        </Col>
        <Col xs="6"></Col>
      </Row>

      <Row className="mb-3">
        <Col xs="6">
          <div className="">{t(lo.covC_totalConfirmed)}</div>
          <div className="h3 m-0 font-weight-bold  d-inline-block">
            <TranslateNumber
              originalValue={covidCasesNepalCounts ? setCommas(covidCasesNepalCounts.confirmedTotal) : "-"}
              language={language}
            />
          </div>
          {/* <TextCaption type={'success'} value={'0.10'} /> */}
        </Col>
        <Col xs="6">
          <div className="">{t(lo.covC_totalConfirmed)}</div>
          <div className="h3 m-0 font-weight-bold  d-inline-block">
            {" "}
            <TranslateNumber
              originalValue={covidCasesGlobalCounts ? setCommas(covidCasesGlobalCounts.confirmedTotal) : "-"}
              language={language}
            />
          </div>
          {/* <TextCaption type={'success'} value={'0.10'} /> */}
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs="6">
          <div className="">{t(lo.covC_totalRecovered)}</div>
          <div className="h3 m-0 font-weight-bold d-inline-block ">
            <TranslateNumber
              originalValue={covidCasesNepalCounts ? setCommas(covidCasesNepalCounts.recoveredTotal) : "-"}
              language={language}
            />
          </div>
          {/* <TextCaption type={'warning'} value={'0.10'} /> */}
        </Col>
        <Col xs="6">
          <div className="">{t(lo.covC_totalRecovered)}</div>
          <div className="h3 m-0 font-weight-bold d-inline-block ">
            {" "}
            <TranslateNumber
              originalValue={covidCasesGlobalCounts ? setCommas(covidCasesGlobalCounts.recoveredTotal) : "-"}
              language={language}
            />
          </div>
          {/* <TextCaption type={'warning'} value={'0.10'} /> */}
        </Col>
      </Row>

      <Row className="mb-2">
        <Col xs="6">
          <div className="">{t(lo.covC_totalDeath)}</div>
          <div className="h3 m-0 font-weight-bold d-inline-block">
            <TranslateNumber
              originalValue={covidCasesNepalCounts ? setCommas(covidCasesNepalCounts.deathTotal) : "-"}
              language={language}
            />
          </div>
          {/* <TextCaption type={'danger'} value={'0.10'} /> */}
        </Col>
        <Col xs="6">
          <div className="">{t(lo.covC_totalDeath)}</div>
          <div className="h3 m-0 font-weight-bold d-inline-block">
            {" "}
            <TranslateNumber
              originalValue={covidCasesGlobalCounts ? setCommas(covidCasesGlobalCounts.deathTotal) : "-"}
              language={language}
            />
          </div>
          {/* <TextCaption type={'danger'} value={'0.10'} /> */}
        </Col>
      </Row>
    </>
  );
};

export default CovidCount;
