import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import JoinUsIcon from 'src/components/Icons/JoinUsIcon';
import { JOIN_US } from 'src/constants/routes';

const JoinUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container">
        <Row className="mt-4">
          <Col sm="12" className="my-3">
            <h1 className="text-center font-weight-bold">FAQ</h1>
          </Col>

          <Col sm="12" className="my-3">
            <div className="rounded bg-bluelight p-4">
              <ul className="numc">
                <li className="mb-4">
                  <div className="font-18 mb-2">
                    Is Teku Hospital is only the Hospital for testing Covid-19 in Nepal?
                  </div>
                  <p>
                    No- All hospitals can manage a case of COVID-19. Since there is n treatment per se case management
                    involves giving antivirals and antibacterial therapy to paitents with severe symptoms. 80% of people
                    get better themselves and do not require any treatment
                  </p>
                  <p>
                    yes, Teku hospital is a specialized hospital that has more experience dealing with the case of viral
                    diseases like this. they are also close to National Lab which is the only lan in Nepal (as of today)
                    that does nfirmatory testing for COVID-19. But please remember other hospitals can take a specimen
                    and send it to NPHL. Patients don not have to go to Teku hospital for it.{' '}
                  </p>
                </li>

                <li className="mb-4">
                  <div className="font-18 mb-2">How many Testing Kit is Currently present in Hospital?</div>
                  <p>
                    The last news suggests that we have about 1500 test kits left. 522 test were done till yesterday
                  </p>
                </li>

                <li className="mb-4">
                  <div className="font-18 mb-2">
                    IS Testing os Swab done in Nepal or is being Sent to Foreign Country & What is the means of
                    Transport?
                  </div>
                  <p>
                    Testing is done in Nepal; however, sometimes sample of positive cases are sent to a WHO reference
                    lab in the region for re-confirmation. The doctors are, however, immediately notified when a case
                    shows a positive result. It is transported in the Viral Transport Medium (VTM). You can uderstand it
                    as a tube with rubber seals and has chemicals inside it to prevent the specimen from disintegrating.
                    It is generally Tripple packed in virus transport package. Maintained a cold chain of 2-8 degrees.
                    Probably put in a puncture-resistant box and sent in a plane.
                  </p>
                </li>

                <li className="mb-4">
                  <div className="font-18 mb-2">
                    If incase sends to Foreign how many days it takes for the report to come?
                  </div>
                  <p>
                    It depends but its not not very quick. The test itself can be cone in two hours or so but it can
                    generally take a week. Again the positive cases are reported to doctors immediately so treatment and
                    isolation do not have to wait
                  </p>
                </li>

                <li>
                  <div className="font-18 mb-2">
                    What is the survival rate & time period of the virus outside the human body?
                  </div>
                  <p>
                    No one knows for sure. It depends on the environmental condition, but studies suggest it can survive
                    for thousands of years in the right scenario. Since they are not considering living and do not have
                    any metabolism they are either inactie or active. Not live or dead.
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default JoinUs;
