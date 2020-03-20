import React, { FC } from 'react';
import CustomSelectInput from 'src/components/CustomSelectInput';
import { ProvinceOptions } from 'src/constants/options';

interface IHospitalContactsFilterProps {
  handleProvinceFilterChange: () => void;
}

const HospitalContactsFilter: FC<IHospitalContactsFilterProps> = props => {
  return (
    <>
      <div className="filter d-inline-block">
        <span>Province</span>
        <CustomSelectInput
          name={'province-select'}
          options={ProvinceOptions}
          placeholder={'Select Province'}
          handleChange={props.handleProvinceFilterChange}
          className={''}
        />
      </div>

      <div className="filter d-inline-block">
        <span>District</span>
        <select className="custom-select form-control-sm">
          <option>Kathmandu</option>
        </select>
      </div>
    </>
  );
};

export default HospitalContactsFilter;
