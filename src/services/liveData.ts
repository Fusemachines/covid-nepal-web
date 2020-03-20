import { AxiosResponse } from 'axios';

import axios from 'src/utils/axios';

interface ILiveDataResponse {
  docs: Array<ILiveData>;
}

export interface ILiveData {
  _id: string;
  nameOfHospital: string;
  numberOfBed: number;
  numberOfPatient: number;
  covid19Symptom: number;
  covid19SymptomPercentage: number;
  province: string;
  district: string;
}

export interface IFetchLiveDataAPIPayload {
  province?: string;
  district?: string;
}

export async function fetchLiveDataAPI(payload: IFetchLiveDataAPIPayload) {
  try {
    const response: AxiosResponse<ILiveDataResponse> = await axios.get(`/livedata`, { params: payload });
    return response.data;
  } catch (error) {
    throw error;
  }
}
