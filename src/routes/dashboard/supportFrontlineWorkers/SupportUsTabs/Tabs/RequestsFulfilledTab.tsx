import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";

import { RequestorsContext } from "../SupportUsTabs";

const RequestsFulfilled = () => {
  const { isLoaded, requestorsList } = useContext(RequestorsContext);

  return (
    <Row className="request-fulfilled-wrapper">
      <Col md="6" className="image-wrapper">
        <img src="/images/thankyou.svg" alt="Image" />
      </Col>
      <Col md="6" className="table-fulfilled-wrapper">
        <table className="table-fulfilled w-100" cellPadding="12">
          <thead>
            <tr>
              <th>Requestor</th>
              <th>Supporter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="text-bold">Sam Pokheral</span>
                <br />
                Samriddhi Polyclinic
              </td>
              <td>
                <span className="text-bold">Sarojni Shrestha</span>
                <br />
                Swyambhu Pharmacy, Swyambhu
              </td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  );
};

export default RequestsFulfilled;
