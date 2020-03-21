import { AxiosResponse } from 'axios';

import axios from 'src/utils/axios';

interface IHospitalCapaciyResponse {
  docs: Array<IHospitalCapacity>;
}

export interface IHospitalCapacity {
  _id: string;
  nameOfHospital: string;
  numberOfBed: number;
  numberOfPatient: number;
  covid19Symptom: number;
  covid19SymptomPercentage: number;
  province: string;
  district: string;
}

export interface IFetchHospitalCapacityAPIPayload {
  district?: string;
  covidTest?: string;
}

export async function fetchHospitalCapacityAPI(payload: IFetchHospitalCapacityAPIPayload) {
  try {
    const response: AxiosResponse<IHospitalCapaciyResponse> = await axios.get(`/livedata`, { params: payload });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// TODO:pragyakar update after backend confirms
export interface IAllocatedHospital {
  id: string;
  name: string;
}

export interface IFetchAllocatedHospitalListAPIResponse {
  docs: IAllocatedHospital[];
}

// TODO:pragyakar update after backend confirms
export async function fetchAllocatedHospitalListAPI() {
  try {
    const response: AxiosResponse<IFetchAllocatedHospitalListAPIResponse> = await axios.get(`/allocatedHospitals`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
