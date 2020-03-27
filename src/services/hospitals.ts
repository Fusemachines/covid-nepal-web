import { AxiosResponse } from "axios";

import axios from "src/utils/axios";
import { IPagination } from "src/components/Pagination/Pagination";

export interface ILanguage {
  en: string;
  np?: string;
}
export interface IHospital {
  _id: string;
  availableTime: Array<ILanguage>;
  coordinates: Array<number>;
  contact: Array<ILanguage>;
  name: ILanguage;
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

export interface IHospitalsCount {
  totalHospitals: number | null;
  totalPending: number | null;
  totalVerified: number | null;
}

interface IHospitalCapaciyResponse extends IPagination, IHospitalsCount {
  docs: Array<IHospital>;
}
export interface IFetchHospitalCapacityAPIPayload {
  page: number;
  size: number;
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
