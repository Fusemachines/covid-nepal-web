import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useTranslation, Trans } from 'react-i18next';

import JoinUsIcon from 'src/components/Icons/JoinUsIcon';
import lo from 'src/i18n/locale.json'
import { NoTransWrapper } from 'src/components/NoTranslate';
/* import { JOIN_US } from 'src/constants/routes'; */

const JoinUs = () => {
  const [t] = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container-fluid mt-3">
        <Row className="mt-5 justify-content-center">
          <Col lg="5" md="8" className="text-center">
            <div className="h1 text-primary font-weight-bold">{t(lo.join_openSource)}</div>
            <div className="my-2 text-white my-4 ">
              <Link className='text-white' to="/">covidnepal.org </Link>
              <NoTransWrapper>
                <Trans i18nKey="join_askingAllLikeMinded">
                  is an Open Source Platform started at <a className={'text-white'} rel="noopener noreferrer" target="_blank" href="https://fusemachines.com">
                    Fusemachines
                  </a> and asking all like minded citizens of Nepal to join in this effort to create an Open Source platform to
                  serve as a reliable source of information about Covid-19 in Nepal.
                  <br/>
                  Let’s fight this pandemic together!
                </Trans>
              </NoTransWrapper>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdsnaeqk6sTTDe6MelxQ_zQPAP--Ud2zSxrMgcpQPOL_Pubmw/viewform"
              target="_blank"
              className="btn btn-success px-3"
              rel="noopener noreferrer"
            >{t(lo.nav_JoinUs)}</a>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center">
          <Col lg="4" md="8" className="mt-4">
            <div className="bg-bluelight rounded p-4 h-100">
              <div className="font-18">{t(lo.join_objective)}</div>
              <ul className="circle">
                <li>{t(lo.join_objectiveDetail_1)}</li>
                <li>{t(lo.join_objectiveDetail_2)}</li>
                <li>{t(lo.join_objectiveDetail_3)}</li>
                <li>{t(lo.join_objectiveDetail_4)}</li>
              </ul>
            </div>
          </Col>

          <Col lg="4" md="6" className="mt-4">
            <div className="bg-bluelight rounded p-4 h-100">
              <div className="font-18">{t(lo.join_process)}</div>
              <ul className="circle">
                <li>{t(lo.join_processDetail_1)}</li>
                <li>{t(lo.join_processDetail_2)}</li>
                <li>{t(lo.join_processDetail_3)}</li>
                <li>{t(lo.join_processDetail_4)}</li>
                <li>{t(lo.join_processDetail_5)}</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="py-5 mt-5 bg-success justify-content-center" id="volunteer-with-us">
          <Col sm="12" className="mb-3">
            <div className="h4 text-center font-weight-bold">{t(lo.join_hereHowCanHelpUs)}</div>
          </Col>

          <Col lg="3" md="5">
            <div className="">
              {t(lo.join_accessThisForm)}:
              <a href="https://bit.ly/collectnepalhospitaldata" target="_blank" rel="noopener noreferrer" className="text-white">
                https://bit.ly/collectnepalhospitaldata
              </a>
            </div>
            <div className="my-3">{t(lo.join_reliableInfo)}</div>
            <div>{t(lo.join_reachOut)}</div>
          </Col>

          <Col md="2">
            <div className="text-white">
              <div className="text-center mb-3">
                <JoinUsIcon />
              </div>
            </div>
          </Col>

          <Col lg="3" md="5">
            <div className="my-3">{t(lo.join_contribute)}</div>
            <div className="mt-3">
              <a
                className="btn btn-primary rounded px-3"
                href="mailto:signmeup@covidnepal.org?Subject=Contribution%20for%20covidnepal"
              >
                signmeup@covidnepal.org
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default JoinUs;
