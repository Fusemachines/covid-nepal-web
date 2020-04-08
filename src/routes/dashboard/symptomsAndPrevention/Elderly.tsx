import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Elderly = () => (
  <>
    <div className="container mt-3 mb-4">
      <Row>
        <Col sm="12">
          <h1 className="prevention-title">Elderly People</h1>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg="6" sm="12">
          <p>
            Based on currently available information and clinical expertise,{' '}
            <span className="text-bold">older adults and people</span> of any age who have serious underlying medical
            conditions might be at <span className="text-bold">higher risk</span> for severe illness from COVID-19.
          </p>
        </Col>
      </Row>

      <Row className="mt-5 justify-content-between align-items-center">
        <Col lg="6" sm="12">
          <h5 className="prevention-topic">1. How to Take Care of Elderly People?</h5>
          <div className="paragraph-wrapper text-onahau">
            <p>
              Here are some things that you need to know to keep elderly people safer, and what to do if they do become
              infected with COVID-19 :
            </p>
            <p>
              - As a caretaker you should take all the precautions you can to{' '}
              <span className="text-bold">avoid becoming infected</span> yourself and eventually infect the elderly.
              <br />- <span className="text-bold">Practice social distance</span> but not social isolation. Seniors
              should be encouraged to use technology to stay connected with their friends, children or their close
              circles.
              <br />- Give them <span className="text-bold">small tasks</span> like organizing old pictures or cooking
              favorite family recipes to make them feel more involved.
              <br />- <span className="text-bold">Postpone unnecessary doctor visits.</span> If an older adult in your
              care is feeling well, consider helping them postpone elective procedures, annual checkups and other
              non-essential doctor visits.
              <br />- <span className="text-bold">Avoid travel.</span> Older adults should put off non-essential travel,
              particularly cruises or trips with itineraries that would expose them to crowds. <br />-{' '}
              <span className="text-bold">Pick an emergency contact.</span> If you’re the main caregiver, designate
              someone nearby whom you could rely on to care for your elderly family member if you yourself become ill.
              <br />
            </p>
          </div>
        </Col>
        <Col lg="6" sm="12" className="mt-5 mt-lg-0r">
          <img src="/images/elderly_people.svg" alt="elderly people" />
        </Col>
      </Row>
    </div>
  </>
);

export default Elderly;
