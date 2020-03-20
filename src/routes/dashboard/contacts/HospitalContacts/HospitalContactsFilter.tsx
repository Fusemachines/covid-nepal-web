import React, { FC } from 'react';

interface IHospitalContactsFilterProps {}

const HospitalContactsFilter: FC<{}> = props => {
  return (
    <>
      <div className="filter d-inline-block">
        <span>Province</span>
        <select className="custom-select form-control-sm">
          <option>Bagmati</option>
        </select>
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
