import React, { FC, useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

import LiveDataTable from './Table/LiveDataTable';
import LiveDataFilter from './Table/LiveDataFilter';
import { ILiveData, fetchLiveDataAPI } from 'src/services/liveData';
import { fetchDistrictListAPI, IFetchDistrictListAPIResponse } from 'src/services/contacts';
import { ProvinceOptions } from 'src/constants/options';

export interface ILiveDataTableContext {
  isLoaded: boolean;
  liveDataList: Array<ILiveData>;
}

interface ILiveDataFilters {
  province: string;
  district: string;
}

export const LiveDataTableContext = React.createContext({} as ILiveDataTableContext);

const initialLiveDataFiltersState = {
  province: ProvinceOptions[2].value,
  district: 'Kathmandu'
};

const LiveData: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [liveDataList, setLiveDataList] = useState<Array<ILiveData>>([]);
  const [filters, setFilters] = useState<ILiveDataFilters>(initialLiveDataFiltersState);

  useEffect(() => {
    fetchLiveData();
  }, []);

  const fetchLiveData = async () => {
    setIsLoaded(false);
    try {
      const response = await fetchLiveDataAPI();
      setLiveDataList(response.docs);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  };

  const fetchDistrictsByProvince = async () => {
    try {
      const response: IFetchDistrictListAPIResponse = await fetchDistrictListAPI(filters.province);
      // setDistrictList([
      //   {
      //     label: response.name,
      //     value: response.name
      //   }
      // ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Col md="12" lg="5" className="mt-2">
        <div className="rounded bg-bluelight p-3">
          <div className="h5 d-inline-block font-weight-bold mb-3">
            <div className="rec"></div> Live Data
          </div>

          <LiveDataFilter />

          <LiveDataTableContext.Provider value={{ isLoaded, liveDataList }}>
            <LiveDataTable />
          </LiveDataTableContext.Provider>
        </div>
      </Col>
    </>
  );
};

export default LiveData;
