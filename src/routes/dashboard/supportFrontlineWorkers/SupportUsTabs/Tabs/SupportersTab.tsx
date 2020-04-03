import React, { useEffect, useState, FC } from "react";
import { fetchSupportersAPI, ISupporter } from "src/services/frontline";
import Loader from "src/components/Loader";
import CustomSelectInput from "src/components/CustomSelectInput";
import { SupportItemsOptions } from "src/constants/options";
import { ValueType } from "react-select";
import { IOptions } from "src/components/CustomSelectInput/CustomSelectInput";

interface ISupportersTabFilters {
  supportItems: IOptions;
}

const initialSupportersTabFiltersState: ISupportersTabFilters = {
  supportItems: SupportItemsOptions[0]
};

const SupportersTab = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filters, setFilters] = useState<ISupportersTabFilters>(initialSupportersTabFiltersState);
  const [supportersList, setSupportersList] = useState<Array<ISupporter>>([]);

  useEffect(() => {
    fetchSupporters();
  }, [filters.supportItems]);

  const fetchSupporters = async () => {
    setIsLoaded(false);
    try {
      const {supportItems} = filters;
      const payload = {
        supportItems : supportItems.value
      }
      const response = await fetchSupportersAPI(payload);
      setSupportersList(response.docs);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

  const handleSupportItemsFilterChange = (value: ValueType<IOptions>) => {
    const selectedField = value as IOptions;
    setFilters({ supportItems: selectedField });
  };

  return (
    <>
      <div className="filter-wrapper py-2">
        <div className="filter d-inline-block">
          <span>Support Items</span>
          <CustomSelectInput
            name={"support-items-select"}
            options={SupportItemsOptions}
            placeholder={"Select Support Items"}
            handleChange={handleSupportItemsFilterChange}
            selectedValue={filters.supportItems}
            isSearchable={false}
            className="filter-select"
          />
        </div>
      </div>

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
    </>
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
          <a href="#" className="btn btn-success text-upper text-bold">
            i/we need help
          </a>
        </div> */}
      </div>
    </td>
  </tr>
);

export default SupportersTab;
