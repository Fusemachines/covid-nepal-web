import React, { FC } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { IHospitalsCount } from "src/services/hospitals";

interface IHospitalsCountProps {
  hospitalsCount: IHospitalsCount;
}

const HospitalsCount: FC<IHospitalsCountProps> = props => {
  const {
    hospitalsCount: { totalHospitals, totalVerified }
  } = props;
  return (
    <>
      <div className="mx-auto">
        <OverlayTrigger
          placement={"top"}
          overlay={
            <Tooltip id={`tooltip-total`} className="covid-hospital-count">
              The total number of hospitals listed in covidnepal.org
            </Tooltip>
          }
        >
          <div className="count-box yellow">
            <span>Total Hospitals </span> <span className="count">{typeof(totalHospitals) === "number" && totalHospitals > -1 ? totalHospitals : "NA"}</span>
          </div>
        </OverlayTrigger>

        <OverlayTrigger
          placement={"top"}
          overlay={
            <Tooltip id={`tooltip-verified`} className="covid-hospital-count">
              The number of hospitals we called and verified the information.
            </Tooltip>
          }
        >
          <div className="count-box green">
            <span>Total Verified </span> <span className="count">{typeof(totalVerified) === "number" && totalVerified > -1 ? totalVerified : "NA"}</span>
          </div>
        </OverlayTrigger>

        {/* <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip id={`tooltip-review`} className="covid-hospital-count">
                        The number of hospitals we are currently verifying the information.
                      </Tooltip>
                    }
                  >
                    <div className="count-box blue">
                      <span>In Review </span> <span className="count">60</span>
                    </div>
                  </OverlayTrigger> */}
      </div>
    </>
  );
};

export default HospitalsCount;
