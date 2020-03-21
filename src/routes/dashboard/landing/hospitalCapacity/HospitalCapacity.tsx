import React, { FC, useState, useEffect } from 'react';
import { Col, Table, Row } from 'react-bootstrap';

import HospitalCapacityTable from './Table/HospitalCapacityTable';
import HospitalCapacityFilter from './Table/HospitalCapacityFilter';
import { IHospitalCapacity, fetchHospitalCapacityAPI } from 'src/services/hospitals';
import { fetchDistrictListAPI, IFetchDistrictListAPIResponse } from 'src/services/contacts';
import { ProvinceOptions } from 'src/constants/options';
import { IOptions } from 'src/components/CustomSelectInput/CustomSelectInput';
import { ValueType } from 'react-select';

export interface IHospitalCapacityTableContext {
  isLoaded: boolean;
  hospitalCapacityList: Array<IHospitalCapacity>;
}

export interface IHospitalCapacityFiltersContext {
  districtDropdownOptions: Array<IOptions>;
  filters: IHospitalCapacityFilters;
  handleProvinceFilterChange: (value: ValueType<IOptions>) => void;
  handleDistrictFilterChange: (value: ValueType<IOptions>) => void;
}
interface IHospitalCapacityFilters {
  province: IOptions;
  district: IOptions;
}

export const HospitalCapacityTableContext = React.createContext({} as IHospitalCapacityTableContext);
export const HospitalCapacityFiltersContext = React.createContext({} as IHospitalCapacityFiltersContext);

const initialHospitalCapacityFiltersState = {
  province: ProvinceOptions[2],
  district: { label: 'Kathmandu', value: 'Kathmandu' }
};

const HospitalCapacity: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hospitalCapacityList, setHospitalCapacityList] = useState<Array<IHospitalCapacity>>([]);
  const [filters, setFilters] = useState<IHospitalCapacityFilters>(initialHospitalCapacityFiltersState);
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
    setFilters({ province: selectedField, district: { label: 'All', value: '' } });
  };

  const handleDistrictFilterChange = (value: ValueType<IOptions>) => {
    const selectedField = value as IOptions;
    setFilters({ ...filters, district: selectedField });
  };

  return (
    // <>
    //   <Col md="12" lg="5" className="mt-2">
    //     <div className="rounded bg-bluelight p-3">
    //       <div className="filter-wrapper mb-3 d-md-flex">
    //         <div className="h5 d-inline-block font-weight-bold">
    //           <div className="rec"></div> Live Data
    //         </div>

    //         <HospitalCapacityFiltersContext.Provider
    //           value={{ filters, districtDropdownOptions, handleProvinceFilterChange, handleDistrictFilterChange }}
    //         >
    //           <HospitalCapacityFilter />
    //         </HospitalCapacityFiltersContext.Provider>
    //       </div>
    //       <HospitalCapacityTableContext.Provider value={{ isLoaded, hospitalCapacityList: hospitalCapacityList }}>
    //         <HospitalCapacityTable />
    //       </HospitalCapacityTableContext.Provider>
    //     </div>
    //   </Col>
    // </>

    <Row className="mt-5">
      <Col sm="12">
        <div className="rounded bg-bluelight px-3 py-4">
          <div className="d-md-flex filter-wrapper mb-4">
            <div className="h5 font-weight-bold mb-3 mr-auto">Hospital Capacity Data</div>
            <div className="ml-auto">
              <div className="filter d-inline-block">
                <span>Provinance</span>
                <select className="custom-select form-control-sm filter-select">
                  <option>Kathmandu</option>
                  <option>Bhaktapur</option>
                </select>
              </div>
              <div className="filter d-inline-block">
                <span>Provinance</span>
                <select className="custom-select form-control-sm filter-select">
                  <option>Kathmandu</option>
                  <option>Bhaktapur</option>
                </select>
              </div>
              <div className="filter d-inline-block">
                <span>Provinance</span>
                <select className="custom-select form-control-sm filter-select">
                  <option>Kathmandu</option>
                  <option>Bhaktapur</option>
                </select>
              </div>
            </div>
          </div>
          {/* filter ended */}

          {/* table */}
          <Table responsive className="text-white">
            <thead>
              <tr>
                <th>Name of Hospital</th>
                <th>Address</th>
                <th>Contact</th>
                <th>No. of beds</th>
                <th>No. of ICU beds</th>
                <th>Covid-19 Test</th>
                <th>Isolation Rooms</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div>Bir Hospital</div>
                </td>
                <td>Ranipokhari, Kathmandu</td>
                <td>
                  <div className="badges">
                    <div className="badges-item m-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                        <path
                          id="Icon_material-call"
                          data-name="Icon material-call"
                          d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                          transform="translate(-1.75 -1.75)"
                          fill="#00c571"
                        />
                      </svg>
                      9851255839
                    </div>
                  </div>
                </td>
                <td>100</td>
                <td>20</td>
                <td>Available</td>
                <td>Available</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Col>
    </Row>
  );
};

export default HospitalCapacity;
