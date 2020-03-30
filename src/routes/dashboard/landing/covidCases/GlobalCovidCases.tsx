import React, { FC } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { ICovidCasesCounts } from "src/services/covidCases";
import { setCommas } from "src/utils/stringManipulation";
import lo from "src/i18n/locale.json";
import { useCookies } from "react-cookie";
import TranslateNumber from "src/components/TranslateNumber";

interface IGlobalCovidCasesProps {
  covidCasesCounts: ICovidCasesCounts | null;
}

const GlobalCovidCases: FC<IGlobalCovidCasesProps> = ({ covidCasesCounts }) => {
  const [cookies] = useCookies(["googtrans"]);
  const googtrans = cookies["googtrans"] || localStorage.getItem("googtrans") || "en";
  const language = googtrans.includes("ne") ? "ne" : "en";
  const { t } = useTranslation();

  return (
    <>
      <Col xs="6">
        <div className="font-weight-bold h5">{`${t(lo.covC_Global)} ${t(lo.covC_Update)}`}</div>
        <div className="invisible small-xs mb-3">({t(lo.covC_whoReportedNo)})</div>

        {/* donot delete this */}
        <div className="invisible">
          <div className="mt-3">{t(lo.covC_totalTested)}</div>
          <div className="h3 m-0 font-weight-bold  d-inline-block">
            {" "}
            <TranslateNumber
              originalValue={covidCasesCounts ? setCommas(covidCasesCounts.confirmedTotal) : "-"}
              language={language}
            />
          </div>
        </div>
        {/* to make height equal */}

        <div className="mt-3">{t(lo.covC_totalConfirmed)}</div>
        <div className="h3 m-0 font-weight-bold  d-inline-block">
          {" "}
          <TranslateNumber
            originalValue={covidCasesCounts ? setCommas(covidCasesCounts.confirmedTotal) : "-"}
            language={language}
          />
        </div>
        {/* <TextCaption type={'success'} value={'0.10'} /> */}

        <div className="mt-3">{t(lo.covC_totalRecovered)}</div>
        <div className="h3 m-0 font-weight-bold d-inline-block ">
          {" "}
          <TranslateNumber
            originalValue={covidCasesCounts ? setCommas(covidCasesCounts.recoveredTotal) : "-"}
            language={language}
          />
        </div>
        {/* <TextCaption type={'warning'} value={'0.10'} /> */}

        <div className="mt-3">{t(lo.covC_totalDeath)}</div>
        <div className="h3 m-0 font-weight-bold d-inline-block">
          {" "}
          <TranslateNumber
            originalValue={covidCasesCounts ? setCommas(covidCasesCounts.deathTotal) : "-"}
            language={language}
          />
        </div>
        {/* <TextCaption type={'danger'} value={'0.10'} /> */}
      </Col>
    </>
  );
};

export default GlobalCovidCases;
