import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AtHome = () => (
  <>
    <div className="container mt-3 mb-4">
      <Row>
        <Col sm="12">
          <h1 className="prevention-title">At Home</h1>
        </Col>
      </Row>

      <Row className="mt-5 justify-content-between">
        <Col lg="6" sm="12">
          <h5 className="prevention-topic">1. Cleaning</h5>
          <div className="paragraph-wrapper text-onahau">
            <p>
              <span className="text-bold">Clean surfaces using soap and water.</span> Practice routine cleaning of
              frequently touched surfaces.
            </p>
            <p>
              <span className="text-bold">High touch surfaces</span> include:
              <br />
              Tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets,
              sinks, etc.
            </p>
            <p>
              <span className="text-bold">Wear disposable gloves</span> to clean and disinfect.
            </p>
          </div>
        </Col>
        <Col lg="6" sm="12" className="mt-5 mt-lg-0 img-center">
          <img className="img-fluid" src="/images/clean.svg" alt="clean" />
        </Col>
      </Row>

      <Row className="mt-5 justify-content-between reverse-row">
        <Col lg="6" sm="12">
          <h5 className="prevention-topic">2. Disinfect</h5>
          <div className="paragraph-wrapper text-onahau">
            <p>
              <span className="text-bold">Clean the area</span> or item with{' '}
              <span className="text-bold">soap and water</span> or another detergent if it is dirty. Then, use a
              household disinfectant.
            </p>
            <p>
              Recommend use of diluted household bleach solutions, alcohol solutions with at least 70% alcohol and EPA
              recommended home-cleaning products. Here’s the link to all the EPA-recommended disinfectants.{' '}
            </p>
            <a href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2">
              https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2
            </a>
            <p>Follow the instructions on the label to ensure safe and effective use of the product.</p>
            <p>
              Diluted household bleach solutions may also be used if appropriate for the surface. Follow the
              manufacturer’s instructions for application and proper ventilation. Never mix household bleach with
              ammonia or any other cleanser. Leave solution on the surface for at least 1 minute.
            </p>
            <p>
              To make a bleach solution, mix:
              <br />- 5 tablespoons (1/3rd cup) bleach per gallon of water
              <br />
              OR
              <br />- 4 teaspoons bleach per quart of water
              <br />
              Alcohol solutions with at least 70% alcohol.
            </p>
          </div>
        </Col>
        <Col lg="6" sm="12" className="mt-5 mt-lg-0 img-center">
          <img className="img-fluid" src="/images/disinfect.svg" alt="disinfect" />
        </Col>
      </Row>

      <Row className="mt-5 justify-content-between">
        <Col lg="6" sm="12">
          <h5 className="prevention-topic">3. Disinfecting Soft surfaces</h5>
          <div className="paragraph-wrapper text-onahau">
            <p>
              <span className="text-bold">For soft surfaces</span> such as carpeted floor, rugs, and drapes,
            </p>
            <p>
              - <span className="text-bold">Clean the surface using soap and water</span> or with cleaners appropriate
              for use on these surfaces.
              <br />- Launder items (if possible) according to the manufacturer’s instructions. Use the{' '}
              <span className="text-bold">warmest appropriate water setting</span> and dry items completely.
            </p>
          </div>
        </Col>
        <Col lg="6" sm="12" className="mt-5 mt-lg-0 img-center">
          <img className="img-fluid" src="/images/disinfect_soft_surface.svg" alt="disinfect_soft_surface" />
        </Col>
      </Row>

      <Row className="mt-5 justify-content-between reverse-row">
        <Col lg="6" sm="12">
          <h5 className="prevention-topic">4. Disinfecting Electronics</h5>
          <div className="paragraph-wrapper text-onahau">
            <p>
              <span className="text-bold">For electronics</span>, such as tablets, touch screens, keyboards, and remote
              controls.
            </p>
            <p>
              - Consider putting a <span className="text-bold">wipeable cover</span> on electronics.
              <br />- <span className="text-bold">Follow manufacturer’s instruction</span> for cleaning and disinfecting
            </p>
            <p>
              If no guidance, <span className="text-bold">use alcohol-based wipes or sprays</span> containing at least
              70% alcohol. Dry surface thoroughly.
            </p>
          </div>
        </Col>
        <Col lg="6" sm="12" className="mt-5 mt-lg-0 img-center">
          <img className="img-fluid" src="/images/disinfect_electronics.svg" alt="disinfect electronics" />
        </Col>
      </Row>

      <Row className="mt-5 justify-content-between">
        <Col lg="6" sm="12">
          <h5 className="prevention-topic">5. Disinfecting Laundry</h5>
          <div className="paragraph-wrapper text-onahau">
            <p>
              <span className="text-bold">For clothing, towels, linens</span> and other items:{' '}
            </p>
            <p>
              - Wear disposable gloves.
              <br />- Wash hands with soap and water as soon as you remove the gloves.
              <br />- Do not shake dirty laundry.
              <br />- Launder items according to the manufacturer’s instructions. Use the warmest appropriate water
              setting and dry items completely.
              <br />- Dirty laundry from a sick person can be washed with other people’s items.
            </p>
            <p className="text-bold mt-4 mb-4">Key times to clean hands at home include:</p>
            <p>
              - After blowing one’s nose, coughing, or sneezing
              <br />- After using the restroom
              <br />- Before eating or preparing food
              <br />- After contact with animals or pets
              <br />- Before and after providing routine care for another person who needs assistance (e.g. a child)
              <br />- Avoid touching your eyes, nose, and mouth with unwashed hands.
            </p>
          </div>
        </Col>
        <Col lg="6" sm="12" className="mt-5 mt-lg-0 img-center">
          <img className="img-fluid" src="/images/disinfect_laundry.svg" alt="disinfect_laundry" />
        </Col>
      </Row>

      <Row className="mt-5 justify-content-between reverse-row">
        <Col lg="6" sm="12">
          <h5 className="prevention-topic">6. When Someone is Sick</h5>
          <div className="paragraph-wrapper text-onahau">
            <p>
              <span className="text-bold">Keep separate bedroom and bathroom</span> for a sick person (if possible).
            </p>
            <p>
              - The sick person should <span className="text-bold">stay separated</span> from other people in the home
              (as much as possible).
              <br />- If you have a separate bedroom and bathroom: Reduce cleaning to as-needed (e.g. soiled items and
              surfaces) to <span className="text-bold">minimize the amount of contact</span> with the sick person.
              <br />- Caregivers can <span className="text-bold">provide personal cleaning supplies</span> to the sick
              person (if appropriate). Supplies include tissues, paper towels, cleaners, and EPA-registered disinfectant
              <br />- If shared bathroom:{' '}
              <span className="text-bold">Clean and disinfect after each use by the sick person.</span> If this is not
              possible, the caregiver should wait as long as possible before cleaning and disinfecting.
              <br />
            </p>
          </div>
        </Col>
        <Col lg="6" sm="12" className="mt-5 mt-lg-0 img-center">
          <img className="img-fluid" src="/images/sick.svg" alt="sick" />
        </Col>
      </Row>
    </div>
  </>
);

export default AtHome;
