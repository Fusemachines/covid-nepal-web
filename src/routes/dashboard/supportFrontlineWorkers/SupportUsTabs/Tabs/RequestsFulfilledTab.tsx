import React, { useContext, FC, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import Loader from "src/components/Loader";
import { IRequestor, fetchRequestorsAPI } from "src/services/frontline";

const RequestsFulfilledTab = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [requestorsList, setRequestorsList] = useState<Array<IRequestor>>([]);

  useEffect(() => {
    fetchRequestors();
  }, []);

  const fetchRequestors = async () => {
    setIsLoaded(false);
    try {
      const response = await fetchRequestorsAPI();
      setRequestorsList(response.docs);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

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
            {isLoaded ? (
              requestorsList.length > 0 ? (
                requestorsList.map(requestor => requestor && <RowOfRequestsFulfilledTab requestor={requestor} />)
              ) : (
                <tr>
                  <td>No records found</td>
                </tr>
              )
            ) : (
              <Loader />
            )}
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
