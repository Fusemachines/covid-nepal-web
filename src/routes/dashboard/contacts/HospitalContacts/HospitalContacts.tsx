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
import { ProvinceOptions } from 'src/constants/options';

export interface IContactFilters {
  province: IOptions | null;
  district: IOptions | null;
}

const initialFilters: IContactFilters = {
  province: ProvinceOptions[2],
  district: { label: 'Kathmandu', value: 'Kathmandu' }
};

const HospitalContacts: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hospitalContacts, setHospitalContacts] = useState<IContact[]>([] as IContact[]);
  const [districtList, setDistrictList] = useState<IOptions[]>([] as IOptions[]);
  const [filters, setFilters] = useState<IContactFilters>(initialFilters);

  useEffect(() => {
    fetchDistrictsByProvince();
    fetchHospitalContacts();
  }, [filters.province]);

  useEffect(() => {
    fetchHospitalContacts();
  }, [filters.district]);

  const fetchHospitalContacts = async () => {
    try {
      if (filters.district) {
        const response: IFetchContactsAPIResponse = await fetchHospitalContactsAPI({
          district: filters.district.value
        });
        setHospitalContacts(response.docs);
      }
    } catch (error) {}
  };

  const fetchDistrictsByProvince = async () => {
    try {
      if (filters.province) {
        const response: IFetchDistrictListAPIResponse = await fetchDistrictListAPI(filters.province.value);
        const dataArray: IOptions[] = [];
        response.docs.map(doc => {
          dataArray.push({
            label: doc.name,
            value: doc.name
          });
        });
        setDistrictList(dataArray);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleProvinceFilterChange = (value: ValueType<IOptions>, action?: ActionMeta) => {
    const selectedField = value as IOptions;
    setFilters({ province: selectedField, district: null });
  };

  const handleDistrictFilterChange = (value: ValueType<IOptions>, action?: ActionMeta) => {
    const selectedField = value as IOptions;
    setFilters({ ...filters, district: selectedField });
  };

  return (
    <>
      <div className="filter-wrapper px-4 py-4">
        <div className="h5 d-inline-block">Hospital Contacts</div>
        <HospitalContactsFilter
          filters={filters}
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
