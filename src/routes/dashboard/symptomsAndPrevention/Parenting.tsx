import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Parenting = () => (
  <>
    <div className="container mt-3 mb-4">
      <Row>
        <Col sm="12">
          <h1 className="prevention-title">Parenting & Childcare</h1>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg="6" sm="12">
          <p>
            Based on available evidence, <span className="text-bold">children do not appear to be at higher risk</span>{' '}
            for <span className="text-bold">COVID-19 than adults</span>. While some children and infants have been sick
            with COVID-19, adults make up most of the known cases to date.
          </p>
        </Col>
      </Row>

      <Row className="mt-5 justify-content-between align-items-center">
        <Col lg="6" sm="12">
          <h5 className="prevention-topic">1. Steps to protect children from getting sick</h5>
          <div className="paragraph-wrapper text-onahau">
            <p>
              - <span className="text-bold">Clean hands</span> often using soap and water or alcohol-based hand
              sanitizer
              <br />- <span className="text-bold">Avoid people</span> who are sick (coughing and sneezing)
              <br />- <span className="text-bold">Clean and disinfect high-touch</span> surfaces daily in household
              common areas (e.g. tables, hard-backed chairs, doorknobs, light switches, remotes, handles, desks,
              toilets, sinks)
              <br />- Launder items including washable plush toys as appropriate in accordance with the manufacturer’s
              instructions. <br />- <span className="text-bold">Limit Social Interactions.</span> While school is out,
              children should not have playdates with children from other households. If children are playing outside
              their own homes, it is essential that they remain 6 feet from anyone who is not in their own household.
              <br />- <span className="text-bold">Practice Social Distancing.</span> If you have small meetups, consider
              hanging out with another family or friend who is also taking extra measures to put distance between
              themselves and others (social distancing).
            </p>
          </div>
        </Col>
        <Col lg="6" sm="12" className="mt-5 mt-lg-0">
          <img className="img-fluid" src="/images/protect_children.svg" alt="protect children" />
        </Col>
      </Row>

      <Row className="mt-5 justify-content-between reverse-row align-items-center">
        <Col lg="6" sm="12">
          <h5 className="prevention-topic">2. Tips to Help children continue learning at Home</h5>
          <div className="paragraph-wrapper text-onahau">
            <p>
              - Many schools are offering lessons online (<span className="text-bold">virtual learning</span>). Review
              assignments from the school, and help your child establish a reasonable pace for completing the work.{' '}
              <br />- <span className="text-bold">Communicate challenges</span> to your school. If you face technology
              or connectivity issues, or if your child is having a hard time completing assignments, let the school
              know.
              <br />- <span className="text-bold">Create a schedule and routine</span> for learning at home, but remain
              flexible.
              <br />- Have <span className="text-bold">consistent bedtimes</span> and get up at the same time, Monday
              through Friday.
              <br />- Structure the day for{' '}
              <span className="text-bold">learning, free time, healthy meals and snacks, and physical activity.</span>
              <br />- <span className="text-bold">Allow flexibility</span> in the schedule—it’s okay to adapt based on
              your day.
              <br />- Look for ways to <span className="text-bold">make learning fun.</span> Have hands-on activities,
              like puzzles, painting, drawing, and craftworks.
            </p>
            <span className="text-italic">Source: MayoClinic</span>
          </div>
        </Col>
        <Col lg="6" sm="12" className="mt-5 mt-lg-0">
          <img className="img-fluid" src="/images/child_learning.svg" alt="child learning" />
        </Col>
      </Row>
    </div>
  </>
);

export default Parenting;
