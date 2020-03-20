import React, { FC } from 'react';
import CustomSelectInput from 'src/components/CustomSelectInput';
import { ProvinceOptions } from 'src/constants/options';
import { ValueType, ActionMeta } from 'react-select';
import { IOptions } from 'src/components/CustomSelectInput/CustomSelectInput';
import { IContactFilters } from './HospitalContacts';

interface IHospitalContactsFilterProps {
  filters: IContactFilters;
  districtOptions: IOptions[];
  handleProvinceFilterChange: (value: ValueType<IOptions>, action?: ActionMeta) => void;
  handleDistrictFilterChange: (value: ValueType<IOptions>, action?: ActionMeta) => void;
}

const HospitalContactsFilter: FC<IHospitalContactsFilterProps> = props => {
  return (
    <div className="ml-auto">
      <div className="filter d-inline-block">
        <span>Province</span>
        <CustomSelectInput
          name={'province-select'}
          options={ProvinceOptions}
          placeholder={'Select Province'}
          handleChange={props.handleProvinceFilterChange}
          className={'filter-select'}
          selectedValue={props.filters.province}
        />
      </div>

      <div className="filter d-inline-block">
        <span>District</span>
        <CustomSelectInput
          name={'district-select'}
          options={props.districtOptions}
          placeholder={'Select District'}
          handleChange={props.handleDistrictFilterChange}
          className={'filter-select'}
          selectedValue={props.filters.district}
        />
      </div>
    </div>
  );
};

export default HospitalContactsFilter;
