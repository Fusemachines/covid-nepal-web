import React, { FC, useState, useEffect } from 'react';
import HospitalContactsFilter from './HospitalContactsFilter';
import HospitalContactsRecords from './HospitalContactsRecords';

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
    fetchProvinceList();
  }, []);

  const fetchProvinceList = async () => {};

  const fetchDistrictList = async () => {};

  const fetchHospitalContacts = async () => {
    try {
    } catch (error) {}
  };

  return (
    <>
      <div className="filter-wrapper px-4 py-4">
        <div className="h4 d-inline-block">Hospital Contacts</div>
        <HospitalContactsFilter />
      </div>
      <HospitalContactsRecords />
    </>
  );
};

export default HospitalContacts;
