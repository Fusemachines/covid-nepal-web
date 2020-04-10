import React from "react";
import { Row, Col, Media } from "react-bootstrap";

const OpenSource = () => (
  <>

    <div className="container mt-3 mb-4">
      <Row className="mt-5 justify-content-center">
        <Col lg="4" sm="12">
          <h1 className="text-bold">Covidnepal.org<br /> Open Source Guidelines</h1>
        </Col>
        <Col lg="6" sm="12" className="mt-5 mt-lg-0 flex-column">
          <article className="mb-4">
            <h6 className="text-bold">What is covidnepal.org open source guiding principle?</h6>
            <p>Covidnepal.org was started with a vision to extend collaboration to wider community at grassroots level to help drive continued engagement and relevancy. We are excited and encourage the wider nepal tech community to be a part of this initiative. While fusemachines is supporting this initiative and will play a final moderator role should there be a deadlock situation, our intention is to make this as much community driven as possible. </p>
          </article>
          <article className="mb-4">
            <h6 className="text-bold">What is covidnepal.org open source license type?</h6>
            <p>GNU General Public License (GPL) 2.0 </p>
          </article>
          <article className="mb-4">
            <h6 className="text-bold">Who are current members of the Open Source Steering Committee (OSSC) and what do they decide?</h6>
            <p>OSSC will make collective recommendations on what feature roadmap should be built. They will also be responsible for code of conduct oversight and reviewing final code before accepting. Where applicable during deadlock they will decide upon a collective round of voting.  </p>
          </article>
          <article>
            <h6>Current Members:</h6>
            <p><span className="text-bold">Prashanna Jung Rana</span> - prashanna.rana@fusemachines.com <br />
              <span className="text-bold">Rabin Bhandari</span> - rabin@fusemachines.com <br />
              <span className="text-bold">Jagatjyoti G Tuladhar</span> - jagatjyoti@fusemachines.com </p>
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
              As contributors and maintainers of the COVID Nepal project, we pledge to respect everyone who contributes by posting issues, updating documentation, submitting pull requests, providing feedback in comments, and any other activities.<br /> <br />
            Communication through any of Covid Nepal's channels (GitHub, Gitter, IRC, mailing lists, Slack, etc.) must be constructive and never resort to personal attacks, trolling, public or private harassment, insults, or other unprofessional conduct.<br /> <br />
            We promise to extend courtesy and respect to everyone involved in this project regardless of gender, gender identity, sexual orientation, disability, age, race, ethnicity, religion, or level of experience. We expect anyone contributing to the Angular project to do the same.<br /> <br />
            If any member of the community violates this code of conduct, the maintainers of the COVID Nepal project may take action, removing issues, comments, and PRs or blocking accounts as deemed appropriate.<br /> <br />
            If you are subject to or witness unacceptable behavior, or have any other concerns, please let us know through our <a href="https://gitter.im/covidnepalopensource/community" target="_blank" className="text-white">Gitter</a>.
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
              1. Nepal map with covid cases<br />
            2. Nepal map with hospital capacity data
          </p>
          </div>
        </Col>
        <Col md="4" sm="12" className="mt-3 mt-md-0">
          <div className="bg-greenlight p-4 rounded h-100">
            <img className="mb-3" src="/images/interactive_training.svg" alt="Interactive Training" />
            <h6 className="text-bold">Interactive Training</h6>
            <p>
              Interactive training for frontline workers (How to wear PPE, Clean PPE etc)
            </p>
          </div>
        </Col>
        <Col md="4" sm="12" className="mt-3 mt-md-0">
          <div className="bg-greenlight p-4 rounded h-100">
            <img className="mb-3" src="/images/nepali_doctors.svg" alt="Nepali Doctors" />
            <h6 className="text-bold">HOW-TO for Nepal Doctors</h6>
            <p>
              1. How can they check for other hospital capacity<br />
            2. How can they check and contact for referrals on ICU in times of emergency
          </p>
          </div>
        </Col>
      </Row>

      <Row className="mt-5 justify-content-center">
        <Col md="5" sm="12" className="d-flex justify-content-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9jQqlQyLnsebxWTn7mfQN9anEdm9gPUf29EYbo6lQWHZY9g/viewform" target="_blank" className="btn btn-yellow px-4 py-2">Apply to be part of the<br /> Open Source Steering Committee (OSSC)</a>
        </Col>
      </Row>
    </div>

  </>
);

export default OpenSource;
