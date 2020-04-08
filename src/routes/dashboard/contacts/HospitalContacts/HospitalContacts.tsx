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
  province: IOptions;
  district: IOptions;
}

const initialFilters: IContactFilters = {
  province: ProvinceOptions[2],
  district: { label: 'Kathmandu', value: 'Kathmandu' }
};

const HospitalContacts: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hospitalContacts, setHospitalContacts] = useState<IContact[]>([] as IContact[]);
  const [districtDropdownOptions, setDistrictDropdownOptions] = useState<IOptions[]>([] as IOptions[]);
  const [filters, setFilters] = useState<IContactFilters>(initialFilters);

  useEffect(() => {
    fetchHospitalContacts();
  }, [filters.province, filters.district]);

  useEffect(() => {
    fetchDistrictsByProvince();
  }, [filters.province]);

  const fetchHospitalContacts = async () => {
    setIsLoaded(false);
    try {
      const response: IFetchContactsAPIResponse = await fetchHospitalContactsAPI({
        province: filters.province ? filters.province.value : '',
        district: filters.district ? filters.district.value : ''
      });
      setHospitalContacts(response.docs);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoaded(true);
    }
  };

  const fetchDistrictsByProvince = async () => {
    try {
      if (filters.province) {
        const response: IFetchDistrictListAPIResponse = await fetchDistrictListAPI(filters.province.value);

        let mappedOptions = response.docs.map(doc => {
          return { label: doc.name.en, value: doc.name.en };
        });

        mappedOptions.unshift({ label: 'All', value: '' });
        setDistrictDropdownOptions(mappedOptions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleProvinceFilterChange = (value: ValueType<IOptions>, action?: ActionMeta) => {
    const selectedField = value as IOptions;
    setFilters({ province: selectedField, district: { label: 'All', value: '' } });
  };

  const handleDistrictFilterChange = (value: ValueType<IOptions>, action?: ActionMeta) => {
    const selectedField = value as IOptions;
    setFilters({ ...filters, district: selectedField });
  };

  return (
    <>
      <div className="filter-wrapper px-3 py-4 d-md-flex">
        <HospitalContactsFilter
          filters={filters}
          districtOptions={districtDropdownOptions}
          handleProvinceFilterChange={handleProvinceFilterChange}
          handleDistrictFilterChange={handleDistrictFilterChange}
        />
      </div>

      <HospitalContactsRecords isLoaded={isLoaded} hospitalContacts={hospitalContacts} />
    </>
  );
};

export default HospitalContacts;
