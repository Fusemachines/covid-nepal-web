import React, { useEffect, useState, FC } from "react";
import { fetchSupportersAPI, ISupporter, IFetchSupportersAPIResponse } from "src/services/frontline";
import Loader from "src/components/Loader";

const SupportersTab = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [supportersList, setSupportersList] = useState<Array<ISupporter>>([]);
  useEffect(() => {
    fetchSupporters();
  }, []);

  const fetchSupporters = async () => {
    setIsLoaded(false);
    try {
      const response = await fetchSupportersAPI();
      setSupportersList(response.docs);
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
          <th className="w-15">Supporter</th>
          <th className="w-25">Contact</th>
          <th className="w-60">Provided Support Items</th>
          <th className=""></th>
        </tr>
      </thead>
      <tbody>
        {isLoaded ? (
          supportersList.length > 0 ? (
            supportersList.map(supporter => <SupportersTabTableRow key={supporter._id} supporter={supporter} />)
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

const SupportersTabTableRow: FC<{ supporter: ISupporter }> = ({
  supporter: {
    name,
    contact: { email, landline, mobile },
    location,
    providedItems
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
    <td className="">
      <div className="d-flex justify-content-between">
        {providedItems.length > 0 ? <div className="w-70">{providedItems.join(", ")}</div> : "-"}
        {/* <div className="">
          <a href="#" className="btn btn-green text-upper text-bold btn-help">
            i/we need help
          </a>
        </div> */}
      </div>
    </td>
  </tr>
);

export default SupportersTab;
