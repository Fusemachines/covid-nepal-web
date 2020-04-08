import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ProtectYourself = () => (
  <>
    <div className="container mt-3 mb-4">
      <Row>
        <Col>
          <h1 className="prevention-title">Protect Yourself</h1>
        </Col>
      </Row>

      <Row className="mt-5 align-items-center">
        <Col lg="6" sm="12">
          <h5 className="prevention-topic">1. Wash and Clean your Hands Frequently </h5>
          <div className="paragraph-wrapper text-onahau">
            <p>
              <span className="text-bold">Wash your hands</span> often with soap and water for{' '}
              <span className="text-bold">at least 20 seconds</span> especially after you have been in a public place,
              or after blowing your nose, coughing, or sneezing.
            </p>
            <p>
              If soap and water are not readily available, <span className="text-bold">use a hand sanitizer</span> that
              contains <span className="text-bold">at least 60% alcohol</span>. Cover all surfaces of your hands and rub
              them together until they feel dry.
            </p>
            <p>
              <span className="text-bold">Avoid touching</span> your{' '}
              <span className="text-bold">eyes, nose, and mouth</span> with unwashed hands.
            </p>
          </div>
        </Col>
        <Col lg="6" sm="12" className="mt-5 mt-lg-0">
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/d914EnpU4Fo"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* <video width="440" height="315">
                    <source src="https://youtu.be/d914EnpU4Fo" />
                </video> */}
        </Col>
      </Row>

      <Row className="mt-5  align-items-center reverse-row">
        <Col lg="6" sm="12">
          <h5 className="prevention-topic">2. Maintain Social Distancing </h5>
          <div className="paragraph-wrapper text-onahau">
            <p>
              Maintain at least <span className="text-bold">1 metre (3 feet) distance</span> between yourself and anyone
              who is coughing or sneezing.
            </p>
            <p>
              Why? When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may
              contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the
              person coughing has the disease.
            </p>
          </div>
        </Col>

        <Col lg="5" sm="12" className="mt-5 mt-lg-0">
          <img className="img-fluid" src="/images/social_distancing.svg" alt="Social Distancing" />
        </Col>
      </Row>

      <Row className="mt-5 justify-content-between  align-items-center">
        <Col lg="6" sm="12">
          <h5 className="prevention-topic">3. Take Steps to Protect Others</h5>
          <div className="paragraph-wrapper text-onahau">
            <p>
              <span className="text-bold">Stay home</span> if you are sick, except when it’s an emergency to get the
              medical care. <span className="text-bold">Cover your mouth and nose</span> with a tissue when you cough or
              sneeze or use the inside of your elbow.
            </p>
            <p>
              Immediately{' '}
              <span className="text-bold">wash your hands with soap and water for at least 20 seconds.</span> If soap
              and water are not readily available, clean your hands with a hand sanitizer that contains at least 60%
              alcohol.
            </p>
            <h6 className="text-bold prevention-subtopic">Wear a facemask but when and how?</h6>
            <p>
              <span className="text-bold">If you are sick:</span> You should wear a facemask when you are around other
              people (e.g., sharing a room or vehicle) and before you enter a healthcare provider’s office. If you are
              not able to wear a facemask (for example, because it causes trouble breathing), then you should do your
              best to cover your coughs and sneezes, and people who are caring for you should wear a facemask if they
              enter your room. Learn what to do if you are sick.
            </p>
            <p>
              <span className="text-bold">If you are NOT sick:</span> You do not need to wear a facemask unless you are
              caring for someone who is sick (and they are not able to wear a facemask). Facemasks may be in short
              supply and they should be saved for caregivers.
            </p>
          </div>
        </Col>
        <Col lg="5" sm="12" className="mt-5 mt-lg-0">
          <img className="img-fluid" src="/images/staying_home.svg" alt="Stay Home" />
        </Col>
      </Row>

      <Row className="mt-5 justify-content-between reverse-row  align-items-center">
        <Col lg="6" sm="12">
          <h5 className="prevention-topic">4. WHO guidelines on how to Wear a Mask</h5>
          <div className="paragraph-wrapper text-onahau">
            <p>
              Before putting on a mask, <span className="text-bold">clean hands with alcohol-based hand rub</span> or
              soap and water.
            </p>
            <p>
              <span className="text-bold">Cover mouth and nose</span> with mask and make sure there are no gaps between
              your face and the mask.
            </p>
            <p>
              <span className="text-bold">Avoid touching the mask</span> while using it; if you do, clean your hands
              with alcohol-based hand rub or soap and water.
            </p>
            <p>Replace the mask with a new one as soon as it is damp and do not re-use single-use masks.</p>
            <p>
              To remove the mask: <span className="text-bold">remove it from behind</span> (do not touch the front of
              mask); discard immediately in a closed bin; clean hands with alcohol-based hand rub or soap and water.
            </p>
          </div>
        </Col>
        <Col lg="5" sm="12" className="mt-5 mt-lg-0">
          <img className="img-fluid" src="/images/wear_mask.svg" alt="wear mask" />
        </Col>
      </Row>

      <Row className="mt-5 justify-content-between align-items-center">
        <Col lg="6" sm="12">
          <h5 className="prevention-topic">5. Clean and disinfect</h5>
          <div className="paragraph-wrapper text-onahau">
            <p>
              <span className="text-bold">Clean and disinfect</span> frequently touched surfaces daily. This includes{' '}
              <span className="text-bold">
                tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and
                sinks.
              </span>
            </p>
            <p>If surfaces are dirty, clean them: Use detergent or soap and water prior to disinfection</p>
          </div>
        </Col>

        <Col lg="5" sm="12" className="mt-5 mt-lg-0">
          <img className="img-fluid" src="/images/cleaning.svg" alt="cleaning" />
        </Col>
      </Row>
    </div>
  </>
);

export default ProtectYourself;
