import React, { useContext, FC } from "react";
import { Row, Col } from "react-bootstrap";

import { RequestorsContext } from "../SupportUsTabs";
import Loader from "src/components/Loader";
import { IRequestor } from "src/services/frontline";

const RequestsFulfilledTab = () => {
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
            {isLoaded ? "" : <Loader />}
            {requestorsList.map(requestor => requestor && <RowOfRequestsFulfilledTab requestor={requestor} />)}
          </tbody>
        </table>
      </Col>
    </Row>
  );
};

const RowOfRequestsFulfilledTab: FC<{ requestor: IRequestor }> = ({ requestor: { name, location, fulfilledBy } }) => {
  return (
    <tr>
      <td>
        {fulfilledBy && fulfilledBy.length > 0
          ? fulfilledBy.map(supporter => (
              <>
                <span className="text-bold">{supporter.name}</span>
                <br />
                {supporter.location}
                <br />
              </>
            ))
          : "N/A"}
      </td>
      <td>
        <span className="text-bold">{name}</span>
        <br />
        {location}
      </td>
    </tr>
  );
};

export default RequestsFulfilledTab;
