import React, { FC } from 'react';
import CustomSelectInput from 'src/components/CustomSelectInput';
import { IOptions } from 'src/components/CustomSelectInput/CustomSelectInput';

interface IHospitalContactsFilterProps {}

const dummyOptions: IOptions[] = [
  {
    label: 'Bagmati',
    value: 'Bagmati'
  },
  {
    label: 'Another Province',
    value: 'Another Province'
  }
];
const HospitalContactsFilter: FC<{}> = props => {
  return (
    <>
      <div className="filter d-inline-block">
        <span>Province</span>
        <CustomSelectInput
          name={'province-select'}
          options={dummyOptions}
          placeholder={'Province'}
          handleChange={() => {}}
          className={'filter-select'}
        />
      </div>

      <div className="filter d-inline-block">
        <span>District</span>
        <select className="custom-select filter-select form-control-sm">
          <option>Kathmandu</option>
        </select>
      </div>
    </>
  );
};

export default HospitalContactsFilter;
