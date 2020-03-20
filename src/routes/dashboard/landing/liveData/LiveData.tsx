import React, { FC, useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

import LiveDataTable from './Table/LiveDataTable';
import LiveDataFilter from './Table/LiveDataFilter';
import { ILiveData, fetchLiveDataAPI } from 'src/services/liveData';
import { fetchDistrictListAPI, IFetchDistrictListAPIResponse } from 'src/services/contacts';
import { ProvinceOptions } from 'src/constants/options';
import { IOptions } from 'src/components/CustomSelectInput/CustomSelectInput';
import { ValueType } from 'react-select';

export interface ILiveDataTableContext {
  isLoaded: boolean;
  liveDataList: Array<ILiveData>;
}

export interface ILiveDataFiltersContext {
  districtDropdownOptions: Array<IOptions>;
  filters: ILiveDataFilters;
  handleProvinceFilterChange: (value: ValueType<IOptions>) => void;
  handleDistrictFilterChange: (value: ValueType<IOptions>) => void;
}
interface ILiveDataFilters {
  province: IOptions | null;
  district: IOptions | null;
}

export const LiveDataTableContext = React.createContext({} as ILiveDataTableContext);
export const LiveDataFiltersContext = React.createContext({} as ILiveDataFiltersContext);

const initialLiveDataFiltersState = {
  province: ProvinceOptions[2],
  district: { label: 'Kathmandu', value: 'Kathmandu' }
};

const LiveData: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [liveDataList, setLiveDataList] = useState<Array<ILiveData>>([]);
  const [filters, setFilters] = useState<ILiveDataFilters>(initialLiveDataFiltersState);
  const [districtDropdownOptions, setDistrictDropdownOptions] = useState<IOptions[]>([] as IOptions[]);

  useEffect(() => {
    fetchLiveData();
  }, [filters.province, filters.district]);

  useEffect(() => {
    fetchDistrictsByProvince();
  }, [filters.province]);

  const fetchLiveData = async () => {
    setIsLoaded(false);
    try {
      const { province, district } = filters;
      let payload = {
        province: province ? province.value : '',
        district: district ? district.value : ''
      };
      const response = await fetchLiveDataAPI(payload);
      setLiveDataList(response.docs);
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

        const mappedOptions = response.docs.map(doc => {
          return { label: doc.name, value: doc.name };
        });

        setDistrictDropdownOptions(mappedOptions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleProvinceFilterChange = (value: ValueType<IOptions>) => {
    const selectedField = value as IOptions;
    setFilters({ province: selectedField, district: null });
  };

  const handleDistrictFilterChange = (value: ValueType<IOptions>) => {
    const selectedField = value as IOptions;
    setFilters({ ...filters, district: selectedField });
  };

  return (
    <>
      <Col md="12" lg="5" className="mt-2">
        <div className="rounded bg-bluelight p-3">
          <div className="h5 d-inline-block font-weight-bold mb-3">
            <div className="rec"></div> Live Data
          </div>

          <LiveDataFiltersContext.Provider
            value={{ filters, districtDropdownOptions, handleProvinceFilterChange, handleDistrictFilterChange }}
          >
            <LiveDataFilter />
          </LiveDataFiltersContext.Provider>

          <LiveDataTableContext.Provider value={{ isLoaded, liveDataList }}>
            <LiveDataTable />
          </LiveDataTableContext.Provider>
        </div>
      </Col>
    </>
  );
};

export default LiveData;
