import React, { FC, useState, useEffect } from 'react';
import HospitalContactsFilter from './HospitalContactsFilter';
import HospitalContactsRecords from './HospitalContactsRecords';
import { IOptions } from 'src/components/CustomSelectInput/CustomSelectInput';
import {
  IFetchDistrictListAPIResponse,
  fetchDistrictListAPI,
  IFetchContactsAPIResponse,
  IContact,
  fetchHospitalContactsAPI
} from 'src/services/contacts';
import { ValueType, ActionMeta } from 'react-select';

interface IContactFilters {
  province: string;
  district: string;
}

const initialFilters: IContactFilters = {
  province: '',
  district: ''
};

const HospitalContacts: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hospitalContacts, setHospitalContacts] = useState<IContact[]>([] as IContact[]);
  const [districtList, setDistrictList] = useState<IOptions[]>([] as IOptions[]);
  const [filters, setFilters] = useState<IContactFilters>(initialFilters);

  useEffect(() => {
    fetchHospitalContacts();
  }, [filters]);

  const fetchHospitalContacts = async () => {
    try {
      const response: IFetchContactsAPIResponse = await fetchHospitalContactsAPI({ district: filters.district });
      setHospitalContacts(response.docs);
    } catch (error) {}
  };

  const fetchDistrictsByProvince = async () => {
    try {
      const response: IFetchDistrictListAPIResponse = await fetchDistrictListAPI(filters.province);
      setDistrictList([
        {
          label: response.name,
          value: response.name
        }
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProvinceFilterChange = (value: ValueType<IOptions>, action?: ActionMeta) => {
    const selectedField = value as IOptions;
    setFilters({ province: selectedField.value, district: '' });
    fetchDistrictsByProvince();
  };

  const handleDistrictFilterChange = (value: ValueType<IOptions>, action?: ActionMeta) => {
    const selectedField = value as IOptions;
    setFilters({ ...filters, district: selectedField.value });
    fetchDistrictsByProvince();
  };

  return (
    <>
      <div className="filter-wrapper px-4 py-4">
        <div className="h5 d-inline-block">Hospital Contacts</div>
        <HospitalContactsFilter
          districtOptions={districtList}
          handleProvinceFilterChange={handleProvinceFilterChange}
          handleDistrictFilterChange={handleDistrictFilterChange}
        />
      </div>
      <HospitalContactsRecords hospitalContacts={hospitalContacts} />
    </>
  );
};

export default HospitalContacts;
