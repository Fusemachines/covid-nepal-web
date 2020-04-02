import React, { useEffect, useState, FC } from "react";
import { fetchSupportersAPI, ISupporter, IFetchSupportersAPIResponse } from "src/services/support";
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
        {/* {isLoaded ? (
          supportersList.length > 0 ? (
            supportersList.map((supporter, index) => <SupportersTabTableRow key={index} supporter={supporter} />)
          ) : (
            <tr>
              <td>No records found</td>
            </tr>
          )
        ) : (
          <tr>
            <td colSpan={7}>
              <Loader />
            </td>
          </tr>
        )} */}

        <SupportersTabTableRow />
      </tbody>
    </table>
  );
};

const SupportersTabTableRow: FC<{}> = () => (
  <tr>
    <td className="text-bold"></td>
    <td>
      sarojni@gmail.com <br /> Swyambhu Pharmacy, Swyambhu{" "}
    </td>
    <td className="">
      <div className="d-flex justify-content-between">
        <div className="w-70">
          PPE, N95 Masks, Regular Masks, Gloves, Gown, Eye Protection Glasses, Face Shield, Hair Cap, Boots, Shoe
          Coverups, Sanitizer
        </div>
        <div className="">
          <a href="#" className="btn btn-green text-upper text-bold btn-help">
            i/we need help
          </a>
        </div>
      </div>
    </td>
  </tr>
);

export default SupportersTab;
