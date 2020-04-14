import { AxiosResponse } from "axios";

import axios from "src/utils/axios";
import { IPagination } from "src/components/Pagination/Pagination";
import { ILanguage } from "src/interface/common";

export interface IHospital {
  _id: string;
  availableTime: Array<ILanguage>;
  coordinates: Array<number>;
  contact: Array<ILanguage>;
  name: ILanguage;
  isVerified: boolean;
  hospitalType: ILanguage;
  openDays: ILanguage;
  location: ILanguage;
  mapLink: string;
  totalBeds: number;
  availableBeds: number;
  covidTest: boolean;
  testingProcess: ILanguage;
  govtDesignated: boolean;
  numIsolationBeds: number;
  icu: number;
  nameSlug?: string;
  focalPoint: ILanguage;
  province: {
    code: number;
    name: ILanguage;
  };
  district: ILanguage;
  ventilators: number;
}

interface IHospitalCapaciyResponse extends IPagination {
  docs: Array<IHospital>;
}
export interface IFetchHospitalsAPIPayload {
  page: number;
  size: number;
  name?: string;
  province?: string;
  district?: string;
  tags?:string;
}

export async function fetchHospitalsAPI(payload: IFetchHospitalsAPIPayload) {
  try {
    const response: AxiosResponse<IHospitalCapaciyResponse> = await axios.get(`/hospitals`, { params: payload });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export interface IHospitalsCounts {
  totalBeds: number;
  totalHospitals: number;
  totalIcus: number;
  totalIsolationBeds: number;
  totalPending: number;
  totalVentilators: number;
  totalVerified: number;
}

export async function fetchHospitalsCountsAPI() {
  try {
    const response: AxiosResponse<IHospitalsCounts> = await axios.get(`/hospitals/count`);
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
