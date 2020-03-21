import React, { FC, useContext } from 'react';

import CustomSelectInput from 'src/components/CustomSelectInput';
import { ProvinceOptions, CovidTestOptions } from 'src/constants/options';
import { HospitalCapacityFiltersContext } from '../HospitalCapacity';

const HospitalCapacityFilter: FC<{}> = () => {
  const {
    districtDropdownOptions,
    filters,
    handleProvinceFilterChange,
    handleDistrictFilterChange,
    handleCovidTestFilterChange
  } = useContext(HospitalCapacityFiltersContext);

  return (
    <div className="ml-auto">
      <div className="filter d-inline-block">
        <span>Province</span>

        <CustomSelectInput
          name={'province-select'}
          options={ProvinceOptions}
          placeholder={'Select Province'}
          handleChange={handleProvinceFilterChange}
          className={'filter-select'}
          selectedValue={filters.province}
        />
      </div>
      <div className="filter d-inline-block">
        <span>District</span>
        <CustomSelectInput
          name={'district-select'}
          options={districtDropdownOptions}
          placeholder={'Select District'}
          handleChange={handleDistrictFilterChange}
          className={'filter-select'}
          selectedValue={filters.district}
        />
      </div>
      <div className="filter d-inline-block">
        <span>Covid Test</span>
        <CustomSelectInput
          name={'district-select'}
          options={CovidTestOptions}
          placeholder={'Select'}
          handleChange={handleCovidTestFilterChange}
          className={'filter-select'}
          selectedValue={filters.covidTest}
        />
      </div>
    </div>
  );
};

export default HospitalCapacityFilter;
