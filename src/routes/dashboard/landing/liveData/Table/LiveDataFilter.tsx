import React, { FC, useContext } from 'react';

import CustomSelectInput from 'src/components/CustomSelectInput';
import { ProvinceOptions } from 'src/constants/options';
import { LiveDataFiltersContext } from '../LiveData';

const LiveDataFilter: FC<{}> = () => {
  const { districtDropdownOptions, filters, handleProvinceFilterChange, handleDistrictFilterChange } = useContext(
    LiveDataFiltersContext
  );

  return (
    <div className="search-wrapper">
      {/* <input className="form-control form-control-sm" placeholder="search" />
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" width="12.88" height="12.88" viewBox="0 0 12.88 12.88">
            <path
              id="Icon_map-search"
              data-name="Icon map-search"
              d="M9.985,8.271A5.094,5.094,0,1,0,8.27,9.984l3.456,3.456,1.714-1.715Zm-4.343.515a3.142,3.142,0,1,1,3.144-3.14A3.147,3.147,0,0,1,5.642,8.786Z"
              transform="translate(-0.56 -0.56)"
              fill="#2074b9"
            />
          </svg>
        </i> */}
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
    </div>
  );
};

export default LiveDataFilter;
