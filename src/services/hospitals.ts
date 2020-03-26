import { AxiosResponse } from 'axios';

import axios from 'src/utils/axios';

export interface IHospital {
  _id: string;
  availableTime: Array<string>;
  coordinates: Array<number>;
  contact: Array<string>;
  name: string;
  hospitalType: string;
  openDays: string;
  location: string;
  mapLink: string;
  totalBeds: number;
  availableBeds: number;
  covidTest: boolean;
  testingProcess: string;
  govtDesignated: boolean;
  numIsolationBeds: number;
  icu: number;
  nameSlug?: string;
  focalPoint: string;
  province: {
    code: number;
    name: string;
  };
  district: string;
  ventilators: number;
}
interface IHospitalCapaciyResponse {
  docs: Array<IHospital>;
}
export interface IFetchHospitalCapacityAPIPayload {
  province?: string;
  district?: string;
  covidTest?: string;
}

export async function fetchHospitalCapacityAPI(payload: IFetchHospitalCapacityAPIPayload) {
  try {
    const response: AxiosResponse<IHospitalCapaciyResponse> = await axios.get(`/hospitals`, { params: payload });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export interface IFetchAllocatedHospitalListAPIResponse {
  docs: IHospital[];
}

export async function fetchAllocatedHospitalListAPI() {
  try {
    const response: AxiosResponse<IFetchAllocatedHospitalListAPIResponse> = await axios.get(`/hospitals/covid`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchSingleHospitalDetailAPI(id: string) {
  try {
    const response: AxiosResponse<IHospital> = await axios.get(`/hospitals/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
