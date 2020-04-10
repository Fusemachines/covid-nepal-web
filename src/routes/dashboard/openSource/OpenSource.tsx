import React from 'react';
import { Row, Col, Media } from 'react-bootstrap';

const OpenSource = () => (
  <>
    <div className="container mt-3 mb-4">
      <Row className="mt-5 justify-content-center">
        <Col lg="4" sm="12">
          <h1 className="text-bold">
            Covidnepal.org
            <br /> Open Source Community
          </h1>
        </Col>
        <Col lg="6" sm="12" className="mt-5 mt-lg-0 flex-column">
          <article className="mb-4">
            <h6 className="text-bold">What is covidnepal.org open source guiding principle?</h6>
            <p>
              Covidnepal.org was started with a vision to extend collaboration to a wider community at a grassroots
              level to help drive continued engagement and relevancy. We are excited and encourage the wider Nepal tech
              community to be a part of this initiative.
            </p>
          </article>
          <article className="mb-4">
            <h6 className="text-bold">What is covidnepal.org open source license type?</h6>
            <p>GNU General Public License (GPL) 3.0 </p>
          </article>
          <article className="mb-4">
            <h6 className="text-bold">Who are the current moderators / maintainers of this open-source project?</h6>
          </article>
          <article>
            <h6 className="text-bold">Where is the codebase?</h6>
            <p>
              <a className="btn btn-light text-bold" href="https://github.com/Fusemachines/covid-nepal-web" target="_blank">
                <svg className="img-fluid mr-2" viewBox="0 0 16 16" version="1.1" width="22" height="22" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                 </path></svg>Github</a>
            </p>
          </article>
          <article>
            <h6 className="text-bold">Current Maintainers:</h6>
            <p>
              <span className="text-bold">Prashanna Jung Rana</span>
              <br />
              <span className="text-bold">Rabin Bhandari</span>
              <br />
              <span className="text-bold">Jagatjyoti G Tuladhar</span>
            </p>
          </article>
          <article>
            <h6 className="text-bold">Do you want to be a moderator? Be part of the moderator team</h6>
            <p>
            <a className="btn btn-green" href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSe9jQqlQyLnsebxWTn7mfQN9anEdm9gPUf29EYbo6lQWHZY9g/viewform" target="_blank">Apply to be moderator now</a>
            </p>
          </article>
        </Col>
      </Row>

      <Row className="mt-5 justify-content-center">
        <Col lg="10" sm="12">
          <div className="px-3 px-md-5 bg-bluelight py-4 rounded">
            <div className="border-bottom text-center">
              <img className="mb-3 img-fluid" src="/images/contributor.svg" alt="Contributor" />
              <h3 className="text-center text-bold">Contributor Code of Conduct</h3>
              <h5 className="text-center text-bold">Version 0.1b-covidnepal</h5>
            </div>
            <p className="mt-4">
              As contributors and maintainers of the COVID Nepal project, we pledge to respect everyone who contributes
              by posting issues, updating documentation, submitting pull requests, providing feedback in comments, and
              any other activities.
              <br /> <br />
              Communication through any of Covid Nepal's channels (GitHub, Gitter, IRC, mailing lists, Slack, etc.) must
              be constructive and never resort to personal attacks, trolling, public or private harassment, insults, or
              other unprofessional conduct.
              <br /> <br />
              We promise to extend courtesy and respect to everyone involved in this project regardless of gender,
              gender identity, sexual orientation, disability, age, race, ethnicity, religion, or level of experience.
              We expect anyone contributing to the Angular project to do the same.
              <br /> <br />
              If any member of the community violates this code of conduct, the maintainers of the COVID Nepal project
              may take action, removing issues, comments, and PRs or blocking accounts as deemed appropriate.
              <br /> <br />
              If you are subject to or witness unacceptable behavior, or have any other concerns, please let us know
              through our{' '}
              <a href="https://gitter.im/covidnepalopensource/community" target="_blank" className="text-white">
                Gitter
              </a>
              .
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mt-5 justify-content-center">
        <Col sm="12">
          <h3 className="text-center mb-5 text-bold">Current Request for Help</h3>
        </Col>
        <Col md="4" sm="12">
          <div className="bg-greenlight p-4 rounded h-100">
            <img className="mb-3" src="/images/dashboard.svg" alt="Interactive Dashboard" />
            <h6 className="text-bold">Interactive Dashboard</h6>
            <p>
              1. Nepal map with covid cases
              <br />
              2. Nepal map with hospital capacity data
            </p>
          </div>
        </Col>
        <Col md="4" sm="12" className="mt-3 mt-md-0">
          <div className="bg-greenlight p-4 rounded h-100">
            <img className="mb-3" src="/images/interactive_training.svg" alt="Interactive Training" />
            <h6 className="text-bold">Interactive Training</h6>
            <p>Interactive training for frontline workers (How to wear PPE, Clean PPE etc)</p>
          </div>
        </Col>
        <Col md="4" sm="12" className="mt-3 mt-md-0">
          <div className="bg-greenlight p-4 rounded h-100">
            <img className="mb-3" src="/images/nepali_doctors.svg" alt="Nepali Doctors" />
            <h6 className="text-bold">HOW-TO for Nepal Doctors</h6>
            <p>
              1. How can they check for other hospital capacity
              <br />
              2. How can they check and contact for referrals on ICU in times of emergency
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mt-5 justify-content-center">
        <Col md="5" sm="12" className="d-flex justify-content-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe9jQqlQyLnsebxWTn7mfQN9anEdm9gPUf29EYbo6lQWHZY9g/viewform"
            target="_blank"
            className="btn btn-yellow px-4 py-2"
          >
            Apply to be a moderator
            <br /> of our Open Source Community
          </a>
        </Col>
      </Row>
    </div>
  </>
);

export default OpenSource;
