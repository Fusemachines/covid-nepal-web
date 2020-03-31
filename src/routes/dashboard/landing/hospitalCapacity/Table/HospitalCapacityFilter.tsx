import React, { FC, useContext } from "react";
import { useTranslation } from "react-i18next";

import CustomSelectInput from "src/components/CustomSelectInput";
import { ProvinceOptions } from "src/constants/options";
import { HospitalCapacityFiltersContext } from "../HospitalCapacity";
import lo from "src/i18n/locale.json";
import SearchIcon from "src/components/Icons/SearchIcon";

const HospitalCapacityFilter: FC<{}> = () => {
  const {
    districtDropdownOptions,
    filters,
    handleSearchKeywordChange,
    handleProvinceFilterChange,
    handleDistrictFilterChange
  } = useContext(HospitalCapacityFiltersContext);
  const [t] = useTranslation();

  return (
    <div className="ml-auto">
      <div className="search-wrapper">
        <input
          placeholder="Search by Name"
          type="text"
          className="form-control form-control-sm"
          value={filters.hospitalName}
          onChange={event => handleSearchKeywordChange(event)}
        />
        <i>
          <SearchIcon />
        </i>
      </div>
      <div className="filter d-inline-block">
        <span>{t(lo.fil_Province)}</span>

        <CustomSelectInput
          name={"province-select"}
          options={ProvinceOptions}
          placeholder={"Select Province"}
          handleChange={handleProvinceFilterChange}
          className={"filter-select"}
          selectedValue={filters.province}
          isSearchable={false}
        />
      </div>
      <div className="filter d-inline-block">
        <span>{t(lo.fil_District)}</span>
        <CustomSelectInput
          name={"district-select"}
          options={districtDropdownOptions}
          placeholder={"Select District"}
          handleChange={handleDistrictFilterChange}
          className={"filter-select"}
          selectedValue={filters.district}
        />
      </div>
      {/* <div className="filter d-inline-block">
        <span>Covid Test</span>
        <CustomSelectInput
          name={'district-select'}
          options={CovidTestOptions}
          placeholder={'Select'}
          handleChange={handleCovidTestFilterChange}
          className={'filter-select'}
          selectedValue={filters.covidTest}
        />
      </div> */}
    </div>
  );
};

export default HospitalCapacityFilter;
