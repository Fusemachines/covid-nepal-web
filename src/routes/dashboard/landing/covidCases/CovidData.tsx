import React, { FC } from 'react';
import { Row, Col } from 'react-bootstrap';
// import TextCaption from 'src/components/TextCaption/TextCaption';
import { useTranslation } from 'react-i18next';
import { ICovidCasesCounts } from 'src/services/covidCases';
import { setCommas } from 'src/utils/stringManipulation';
import lo from 'src/i18n/locale.json';
import { useCookies } from 'react-cookie';
import TranslateNumber from 'src/components/TranslateNumber';

interface IGlobalCovidCasesProps {
  covidCasesCounts: ICovidCasesCounts | null;
}

const GlobalCovidCases: FC<IGlobalCovidCasesProps> = ({ covidCasesCounts }) => {
  const [cookies] = useCookies(['googtrans']);
  const googtrans = cookies['googtrans'] || localStorage.getItem('googtrans') || 'en';
  const language = googtrans.includes('ne') ? 'ne' : 'en';
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
            <div className="invisible d-none small-xs">({t(lo.covC_whoReportedNo)})</div>
        </Col>
    </Row>

    <Row className="mb-3">
        <Col xs="6">
            <div className="">{t(lo.covC_totalTested)}</div>
            <div className="h3 m-0 font-weight-bold  d-inline-block">
            <TranslateNumber
                originalString={covidCasesCounts ? setCommas(covidCasesCounts.testedTotal) : '-'}
                language={language}
            />
            {/* {covidCasesCounts ? setCommas(covidCasesCounts.testedTotal) : '-'} */}
            </div>
        </Col>

        <Col xs="6">
            {/* donot delete this */}
            <div className="invisible">
            <div>{t(lo.covC_totalTested)}</div>
            <div className="h3 m-0 font-weight-bold  d-inline-block">
                {' '}
                {/* <TranslateNumber
                originalString={covidCasesCounts ? setCommas(covidCasesCounts.confirmedGlobal) : '-'}
                language={language}
                /> */}
            </div>
            </div>
            {/* to make height equal */}
        </Col>
    </Row>

    <Row className="mb-3">
        <Col xs="6">
            <div>{t(lo.covC_totalConfirmed)}</div>
            <div className="h3 m-0 font-weight-bold  d-inline-block">
                <TranslateNumber
                originalString={covidCasesCounts ? setCommas(covidCasesCounts.confirmedTotal) : '-'}
                language={language}
                />
                {/* {covidCasesCounts ? setCommas(covidCasesCounts.confirmedTotal) : '-'} */}
            </div>
            {/* <TextCaption type={'success'} value={'0.10'} /> */}
        </Col>

        <Col xs="6">
            <div>{t(lo.covC_totalConfirmed)}</div>
            <div className="h3 m-0 font-weight-bold  d-inline-block">
            {' '}
            {/* <TranslateNumber
                originalString={covidCasesCounts ? setCommas(covidCasesCounts.confirmedGlobal) : '-'}
                language={language}
            /> */}
            {/* {covidCasesCounts ? setCommas(covidCasesCounts.confirmedGlobal) : '-'} */}
            </div>
            {/* <TextCaption type={'success'} value={'0.10'} /> */}
        </Col>
    </Row>

    <Row className="mb-3">
        <Col xs="6">
            <div>{t(lo.covC_totalRecovered)}</div>
            <div className="h3 m-0 font-weight-bold d-inline-block ">
                <TranslateNumber
                originalString={covidCasesCounts ? setCommas(covidCasesCounts.recoveredTotal) : '-'}
                language={language}
                />
                {/* {covidCasesCounts ? setCommas(covidCasesCounts.recoveredTotal) : '-'} */}
            </div>
            {/* <TextCaption type={'warning'} value={'0.10'} /> */}
        </Col>

        <Col xs="6">
            <div>{t(lo.covC_totalRecovered)}</div>
            <div className="h3 m-0 font-weight-bold d-inline-block ">
            {' '}
            {/* <TranslateNumber
                originalString={covidCasesCounts ? setCommas(covidCasesCounts.recoveredGlobal) : '-'}
                language={language}
            /> */}
            {/* {covidCasesCounts ? setCommas(covidCasesCounts.recoveredGlobal) : '-'} */}
            </div>
            {/* <TextCaption type={'warning'} value={'0.10'} /> */}
        </Col>
    </Row>

    <Row className="mb-3">
        <Col xs="6">
            <div>{t(lo.covC_totalDeath)}</div>
            <div className="h3 m-0 font-weight-bold d-inline-block">
                <TranslateNumber
                originalString={covidCasesCounts ? setCommas(covidCasesCounts.deathTotal) : '-'}
                language={language}
                />
                {/* {covidCasesCounts ? setCommas(covidCasesCounts.deathTotal) : '-'} */}
            </div>
            {/* <TextCaption type={'danger'} value={'0.10'} /> */}
        </Col>

        <Col xs="6">
            <div>{t(lo.covC_totalDeath)}</div>
            <div className="h3 m-0 font-weight-bold d-inline-block">
            {' '}
            {/* <TranslateNumber
                originalString={covidCasesCounts ? setCommas(covidCasesCounts.deathGlobal) : '-'}
                language={language}
            /> */}
            {/* {covidCasesCounts ? setCommas(covidCasesCounts.deathGlobal) : '-'} */}
            </div>
            {/* <TextCaption type={'danger'} value={'0.10'} /> */}
        </Col>
    </Row>

    </>
  );
};

export default GlobalCovidCases;
