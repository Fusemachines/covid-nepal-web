import { AxiosResponse } from 'axios';

import axios from 'src/utils/axios';

export interface ICovidCasesCounts {
  _id: string;
  testedToday: number;
  confirmedToday: number;
  recoveredToday: number;
  /* seriousToday: number;
  seriousTotal: number; */
  deathToday: number;
  testedTotal: number;
  confirmedTotal: number;
  recoveredTotal: number;
  deathTotal: number;
  /* district: string;
  province: string;
  testedGlobal: number;
  confirmedGlobal: number;
  recoveredGlobal: number;
  seriousGlobal: number;
  deathGlobal: number; */
  createdAt: string;
  updatedAt: string;
}

export async function fetchCovidCasesNepalCountsAPI() {
  try {
    const response: AxiosResponse<ICovidCasesCounts> = await axios.get(`/counts/nepal/latest`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCovidCasesGlobalCountsAPI() {
  try {
    const response: AxiosResponse<ICovidCasesCounts> = await axios.get(`/counts/global/latest`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
