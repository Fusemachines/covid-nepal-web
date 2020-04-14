import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ValueType } from 'react-select';

import { fetchHospitalsAPI, IHospital, IFetchHospitalsAPIPayload } from 'src/services/hospitals';
import { fetchDistrictListAPI, IFetchDistrictListAPIResponse } from 'src/services/contacts';
import { ProvinceOptions } from 'src/constants/options';
import { IOptions } from 'src/components/CustomSelectInput/CustomSelectInput';
import Pagination, { IPagination } from 'src/components/Pagination/Pagination';
import HubHospitalsTable from './Table/HubHospitalsTable';
import {
  HospitalFiltersContext,
  HospitalTableContext,
} from 'src/routes/dashboard/landing/hospitals/common/hospitalContext';
import HospitalFilters from 'src/routes/dashboard/landing/hospitals/common/HospitalFilters';
import { tags } from 'src/constants/hospitals';

interface IHubHospitalsFilters {
  hospitalName: string;
  province: IOptions;
  district: IOptions;
}

const initialHubHospitalsFiltersState: IHubHospitalsFilters = {
  hospitalName: '',
  province: ProvinceOptions[2],
  district: { label: 'Kathmandu', value: 'Kathmandu' },
};

const initialPaginationState = {
  page: 1,
  size: 10,
};

const HubHospitals = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hubHospitalsList, setHubHospitalsList] = useState<Array<IHospital>>([]);
  const [filters, setFilters] = useState<IHubHospitalsFilters>(initialHubHospitalsFiltersState);
  const [districtDropdownOptions, setDistrictDropdownOptions] = useState<IOptions[]>([] as IOptions[]);
  const [pagination, setPagination] = useState<IPagination>(initialPaginationState as IPagination);
  const [t] = useTranslation();

  useEffect(() => {
    fetchHospitals();
  }, [filters, pagination.page]);

  useEffect(() => {
    fetchDistrictsByProvince();
  }, [filters.province]);

  const fetchHospitals = async () => {
    setIsLoaded(false);
    try {
      const { hospitalName, province, district } = filters;
      let payload : IFetchHospitalsAPIPayload = {
        page: pagination.page,
        size: pagination.size,
        name: hospitalName,
        province: province ? province.value : '',
        district: district ? district.value : '',
        tags: tags.HUB

      };
      const response = await fetchHospitalsAPI(payload);
      const { docs, ...rest } = response;
      setHubHospitalsList(docs);
      setPagination(rest);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

  const fetchDistrictsByProvince = async () => {
    try {
      if (filters.province.value) {
        const response: IFetchDistrictListAPIResponse = await fetchDistrictListAPI(filters.province.value);

        let mappedOptions = response.docs.map((doc) => {
          return { label: doc.name.en, value: doc.name.en };
        });

        mappedOptions.unshift({ label: 'All', value: '' });
        setDistrictDropdownOptions(mappedOptions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      hospitalName: event.currentTarget.value,
      province: { label: 'All', value: '' },
      district: { label: 'All', value: '' },
    });
  };

  const handleProvinceFilterChange = (value: ValueType<IOptions>) => {
    const selectedField = value as IOptions;
    setPagination(initialPaginationState as IPagination);
    setFilters({ ...filters, hospitalName: '', province: selectedField, district: { label: 'All', value: '' } });
  };

  const handleDistrictFilterChange = (value: ValueType<IOptions>) => {
    const selectedField = value as IOptions;
    setPagination(initialPaginationState as IPagination);
    setFilters({ ...filters, hospitalName: '', district: selectedField });
  };

  const handlePageChange = (pageNumber: number) => {
    setPagination((prevPaginationState) => ({ ...prevPaginationState, page: pageNumber }));
  };
  return (
    <>
      <Col sm={12}>
        <div className="d-md-flex filter-wrapper p-2">
          <HospitalFiltersContext.Provider
            value={{
              filters,
              districtDropdownOptions,
              handleSearchKeywordChange,
              handleProvinceFilterChange,
              handleDistrictFilterChange,
            }}
          >
            <HospitalFilters />
          </HospitalFiltersContext.Provider>
        </div>
      </Col>
      <div className="p-4">
        <HospitalTableContext.Provider value={{ isLoaded, hospitalsList : hubHospitalsList }}>
          <HubHospitalsTable />
        </HospitalTableContext.Provider>

        <Pagination {...pagination} handlePageChange={handlePageChange} />
      </div>
    </>
  );
};

export default HubHospitals;
