import { createContext } from 'react';
import { ValueType } from 'react-select';

import { IHospital } from 'src/services/hospitals';
import { IOptions } from 'src/components/CustomSelectInput/CustomSelectInput';

export interface IHospitalTableContext {
  isLoaded: boolean;
  hospitalsList: Array<IHospital>;
}

export interface IHospitalFiltersContext {
  districtDropdownOptions: Array<IOptions>;
  filters: IHospitalFilters;
  handleSearchKeywordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleProvinceFilterChange: (value: ValueType<IOptions>) => void;
  handleDistrictFilterChange: (value: ValueType<IOptions>) => void;
}
interface IHospitalFilters {
  hospitalName: string;
  province: IOptions;
  district: IOptions;
}

export const HospitalTableContext = createContext({} as IHospitalTableContext);
export const HospitalFiltersContext = createContext({} as IHospitalFiltersContext);
