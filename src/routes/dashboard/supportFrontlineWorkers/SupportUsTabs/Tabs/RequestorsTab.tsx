import React, { useEffect, useState, FC } from "react";
import { IRequestor, fetchRequestorsAPI } from "src/services/frontline";
import Loader from "src/components/Loader";

const RequestorsTab = () => {
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
    <table className="table-supporter w-100" cellPadding="12">
      <thead>
        <tr>
          <th className="w-15">Requestor</th>
          <th className="w-25">Contact</th>
          <th className="w-60">Requested Support Items</th>
          <th className=""></th>
        </tr>
      </thead>
      <tbody>
        {isLoaded ? (
          requestorsList.length > 0 ? (
            requestorsList.map(requestor => <RequestorsTabTableRow key={requestor._id} requestor={requestor} />)
          ) : (
            <tr>
              <td colSpan={7}>No records found</td>
            </tr>
          )
        ) : (
          <tr>
            <td colSpan={7}>
              <Loader />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const RequestorsTabTableRow: FC<{ requestor: IRequestor }> = ({
  requestor: {
    name,
    contact: { email, landline, mobile },
    requestedItems,
    location
  }
}) => (
  <tr>
    <td className="text-bold">{name}</td>
    <td>
      {email ? (
        <>
          {email} <br />
        </>
      ) : (
        ""
      )}
      {landline ? (
        <>
          {landline} <br />
        </>
      ) : (
        ""
      )}
      {mobile ? (
        <>
          {mobile} <br />
        </>
      ) : (
        ""
      )}
      {location ? (
        <>
          {location} <br />
        </>
      ) : (
        ""
      )}
    </td>
    <td className="d-flex justify-content-between">
      {requestedItems.length > 0 ? <div className="w-70">{requestedItems.join(", ")}</div> : "-"}

      {/* <a href="#" className="btn btn-yellow text-upper text-bold btn-support">
        i/we can support
      </a> */}
    </td>
  </tr>
);

export default RequestorsTab;
