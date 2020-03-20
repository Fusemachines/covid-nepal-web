import React, { FC, useState, useEffect } from 'react';
import HospitalContactsFilter from './HospitalContactsFilter';
import HospitalContactsRecords from './HospitalContactsRecords';
import { IOptions } from 'src/components/CustomSelectInput/CustomSelectInput';

interface IContactFilters {
  province: string;
  districts: string[];
}

const initialFilters: IContactFilters = {
  province: '',
  districts: []
};

const HospitalContacts: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filters, setFilters] = useState<IContactFilters>(initialFilters);

  useEffect(() => {
    fetchHospitalContacts();
  }, []);

  const fetchHospitalContacts = async () => {
    try {
    } catch (error) {}
  };

  const handleProvinceFilterChange = (selected: IOptions) => {
    setFilters({ ...filters, province: selected.value });
  };

  return (
    <>
      <div className="filter-wrapper px-4 py-4">
        <div className="h4 d-inline-block">Hospital Contacts</div>
        <HospitalContactsFilter handleProvinceFilterChange={handleProvinceFilterChange} />
      </div>
      <HospitalContactsRecords />
    </>
  );
};

export default HospitalContacts;
