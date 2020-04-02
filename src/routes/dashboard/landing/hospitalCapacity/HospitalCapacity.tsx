import React, { FC, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ValueType } from "react-select";

import HospitalCapacityTable from "./Table/HospitalCapacityTable";
import HospitalCapacityFilter from "./Table/HospitalCapacityFilter";
import { fetchHospitalCapacityAPI, IHospital } from "src/services/hospitals";
import { fetchDistrictListAPI, IFetchDistrictListAPIResponse } from "src/services/contacts";
import { ProvinceOptions } from "src/constants/options";
import { IOptions } from "src/components/CustomSelectInput/CustomSelectInput";
import Pagination, { IPagination } from "src/components/Pagination/Pagination";
import lo from "src/i18n/locale.json";
import SearchIcon from "src/components/Icons/SearchIcon";

export interface IHospitalCapacityTableContext {
  isLoaded: boolean;
  hospitalCapacityList: Array<IHospital>;
}

export interface IHospitalCapacityFiltersContext {
  districtDropdownOptions: Array<IOptions>;
  filters: IHospitalCapacityFilters;
  handleSearchKeywordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleProvinceFilterChange: (value: ValueType<IOptions>) => void;
  handleDistrictFilterChange: (value: ValueType<IOptions>) => void;
}
interface IHospitalCapacityFilters {
  hospitalName: string;
  province: IOptions;
  district: IOptions;
}

export const HospitalCapacityTableContext = React.createContext({} as IHospitalCapacityTableContext);
export const HospitalCapacityFiltersContext = React.createContext({} as IHospitalCapacityFiltersContext);

const initialHospitalCapacityFiltersState: IHospitalCapacityFilters = {
  hospitalName: "",
  province: ProvinceOptions[2],
  district: { label: "Kathmandu", value: "Kathmandu" }
};

const initialPaginationState = {
  page: 1,
  size: 10
};

const HospitalCapacity: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hospitalCapacityList, setHospitalCapacityList] = useState<Array<IHospital>>([]);
  const [filters, setFilters] = useState<IHospitalCapacityFilters>(initialHospitalCapacityFiltersState);
  const [districtDropdownOptions, setDistrictDropdownOptions] = useState<IOptions[]>([] as IOptions[]);
  const [pagination, setPagination] = useState<IPagination>(initialPaginationState as IPagination);
  const [t] = useTranslation();

  useEffect(() => {
    fetchHospitalCapacityData();
  }, [filters, pagination.page]);

  useEffect(() => {
    fetchDistrictsByProvince();
  }, [filters.province]);

  const fetchHospitalCapacityData = async () => {
    setIsLoaded(false);
    try {
      const { hospitalName, province, district } = filters;
      let payload = {
        page: pagination.page,
        size: pagination.size,
        name: hospitalName,
        province: province ? province.value : "",
        district: district ? district.value : ""
      };
      const response = await fetchHospitalCapacityAPI(payload);
      const { docs, ...rest } = response;
      setHospitalCapacityList(docs);
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

        let mappedOptions = response.docs.map(doc => {
          return { label: doc.name.en, value: doc.name.en };
        });

        mappedOptions.unshift({ label: "All", value: "" });
        setDistrictDropdownOptions(mappedOptions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      hospitalName: event.currentTarget.value,
      province: { label: "All", value: "" },
      district: { label: "All", value: "" }
    });
  };

  const handleProvinceFilterChange = (value: ValueType<IOptions>) => {
    const selectedField = value as IOptions;
    setPagination(initialPaginationState as IPagination);
    setFilters({ ...filters, hospitalName: "", province: selectedField, district: { label: "All", value: "" } });
  };

  const handleDistrictFilterChange = (value: ValueType<IOptions>) => {
    const selectedField = value as IOptions;
    setPagination(initialPaginationState as IPagination);
    setFilters({ ...filters, hospitalName: "", district: selectedField });
  };

  const handlePageChange = (pageNumber: number) => {
    setPagination(prevPaginationState => ({ ...prevPaginationState, page: pageNumber }));
  };

  return (
    <>
      <Row className="mt-3">
        <Col sm="12">
          <div className="rounded bg-bluelight px-3 py-4">
            <div className="d-md-flex filter-wrapper">
              <div className="h5 font-weight-bold mb-3 mr-auto">{t(lo.contac_hospitalCapacityData)}</div>

              <HospitalCapacityFiltersContext.Provider
                value={{
                  filters,
                  districtDropdownOptions,
                  handleSearchKeywordChange,
                  handleProvinceFilterChange,
                  handleDistrictFilterChange
                }}
              >
                <HospitalCapacityFilter />
              </HospitalCapacityFiltersContext.Provider>
            </div>
            <HospitalCapacityTableContext.Provider value={{ isLoaded, hospitalCapacityList }}>
              <HospitalCapacityTable />
            </HospitalCapacityTableContext.Provider>
          </div>
        </Col>

        <Col sm="12">
          <Pagination {...pagination} handlePageChange={handlePageChange} />
        </Col>
      </Row>
    </>
  );
};

export default HospitalCapacity;
