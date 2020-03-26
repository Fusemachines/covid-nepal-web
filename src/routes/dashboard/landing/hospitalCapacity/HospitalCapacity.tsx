import React, { FC, useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ValueType } from 'react-select';

import HospitalCapacityTable from './Table/HospitalCapacityTable';
import HospitalCapacityFilter from './Table/HospitalCapacityFilter';
import { fetchHospitalCapacityAPI, IHospital } from 'src/services/hospitals';
import { fetchDistrictListAPI, IFetchDistrictListAPIResponse } from 'src/services/contacts';
import { ProvinceOptions } from 'src/constants/options';
import { IOptions } from 'src/components/CustomSelectInput/CustomSelectInput';
import lo from 'src/i18n/locale.json'

export interface IHospitalCapacityTableContext {
  isLoaded: boolean;
  hospitalCapacityList: Array<IHospital>;
}

export interface IHospitalCapacityFiltersContext {
  districtDropdownOptions: Array<IOptions>;
  filters: IHospitalCapacityFilters;
  handleProvinceFilterChange: (value: ValueType<IOptions>) => void;
  handleDistrictFilterChange: (value: ValueType<IOptions>) => void;
  handleCovidTestFilterChange: (value: ValueType<IOptions>) => void;
}
interface IHospitalCapacityFilters {
  province: IOptions;
  district: IOptions;
  covidTest: IOptions;
}

export const HospitalCapacityTableContext = React.createContext({} as IHospitalCapacityTableContext);
export const HospitalCapacityFiltersContext = React.createContext({} as IHospitalCapacityFiltersContext);

const initialHospitalCapacityFiltersState = {
  province: ProvinceOptions[2],
  district: { label: 'Kathmandu', value: 'Kathmandu' },
  covidTest: { label: 'All', value: '' }
};

const HospitalCapacity: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hospitalCapacityList, setHospitalCapacityList] = useState<Array<IHospital>>([]);
  const [filters, setFilters] = useState<IHospitalCapacityFilters>(initialHospitalCapacityFiltersState);
  const [districtDropdownOptions, setDistrictDropdownOptions] = useState<IOptions[]>([] as IOptions[]);
  const [t] = useTranslation();

  useEffect(() => {
    fetchHospitalCapacityData();
  }, [filters]);

  useEffect(() => {
    fetchDistrictsByProvince();
  }, [filters.province]);

  const fetchHospitalCapacityData = async () => {
    setIsLoaded(false);
    try {
      const { province, district /* , covidTest */ } = filters;
      let payload = {
        province: province ? province.value : '',
        district: district ? district.value : ''
        // covidTest: covidTest ? covidTest.value : ''
      };
      const response = await fetchHospitalCapacityAPI(payload);
      setHospitalCapacityList(response.docs);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

  const fetchDistrictsByProvince = async () => {
    try {
      if (filters.province) {
        const response: IFetchDistrictListAPIResponse = await fetchDistrictListAPI(filters.province.value);

        let mappedOptions = response.docs.map(doc => {
          return { label: doc.name, value: doc.name };
        });

        mappedOptions.unshift({ label: 'All', value: '' });
        setDistrictDropdownOptions(mappedOptions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleProvinceFilterChange = (value: ValueType<IOptions>) => {
    const selectedField = value as IOptions;
    setFilters({ ...filters, province: selectedField, district: { label: 'All', value: '' } });
  };

  const handleDistrictFilterChange = (value: ValueType<IOptions>) => {
    const selectedField = value as IOptions;
    setFilters({ ...filters, district: selectedField });
  };

  const handleCovidTestFilterChange = (value: ValueType<IOptions>) => {
    const selectedField = value as IOptions;
    setFilters({ ...filters, covidTest: selectedField });
  };

  return (
    <Row className="mt-3">
      <Col sm="12">
        <div className="rounded bg-bluelight px-3 py-4">
          <div className="d-md-flex filter-wrapper">
            <div className="h5 font-weight-bold mb-3 mr-auto">{t(lo.contac_hospitalCapacityData)}</div>
            <HospitalCapacityFiltersContext.Provider
              value={{
                filters,
                districtDropdownOptions,
                handleProvinceFilterChange,
                handleDistrictFilterChange,
                handleCovidTestFilterChange
              }}
            >
              <HospitalCapacityFilter />
            </HospitalCapacityFiltersContext.Provider>
          </div>
          <HospitalCapacityTableContext.Provider value={{ isLoaded, hospitalCapacityList: hospitalCapacityList }}>
            <HospitalCapacityTable />
          </HospitalCapacityTableContext.Provider>
        </div>
      </Col>
    </Row>
  );
};

export default HospitalCapacity;
