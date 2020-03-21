import React, { FC, useContext } from 'react';

import CustomSelectInput from 'src/components/CustomSelectInput';
import { ProvinceOptions } from 'src/constants/options';
import { HospitalCapacityFiltersContext } from '../HospitalCapacity';

const HospitalCapacityFilter: FC<{}> = () => {
  const { districtDropdownOptions, filters, handleProvinceFilterChange, handleDistrictFilterChange } = useContext(
    HospitalCapacityFiltersContext
  );

  return (
    <div className="ml-auto">
      <div className="filter d-inline-block">
        <span>Provinance</span>
        <select className="custom-select form-control-sm filter-select">
          <option>Kathmandu</option>
          <option>Bhaktapur</option>
        </select>
      </div>
      <div className="filter d-inline-block">
        <span>Provinance</span>
        <select className="custom-select form-control-sm filter-select">
          <option>Kathmandu</option>
          <option>Bhaktapur</option>
        </select>
      </div>
      <div className="filter d-inline-block">
        <span>Provinance</span>
        <select className="custom-select form-control-sm filter-select">
          <option>Kathmandu</option>
          <option>Bhaktapur</option>
        </select>
      </div>
    </div>

    // <div className="d-inline-block ml-auto">
    //   <div className="filter d-inline-block">
    //     <span>Province</span>
    //     <CustomSelectInput
    //       name={'province-select'}
    //       options={ProvinceOptions}
    //       placeholder={'Select Province'}
    //       handleChange={handleProvinceFilterChange}
    //       className={'filter-select'}
    //       selectedValue={filters.province}
    //     />
    //   </div>

    //   <div className="filter d-inline-block">
    //     <span>District</span>
    //     <CustomSelectInput
    //       name={'district-select'}
    //       options={districtDropdownOptions}
    //       placeholder={'Select District'}
    //       handleChange={handleDistrictFilterChange}
    //       className={'filter-select'}
    //       selectedValue={filters.district}
    //     />
    //   </div>
    // </div>
  );
};

export default HospitalCapacityFilter;
