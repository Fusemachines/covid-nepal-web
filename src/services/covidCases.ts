import { AxiosResponse } from 'axios';

import axios from 'src/utils/axios';

export interface ICovidCasesCounts {
  _id: string;
  testedToday: number;
  confirmedToday: number;
  recoveredToday: number;
  seriousToday: number;
  seriousTotal: number;
  deathToday: number;
  testedTotal: number;
  confirmedTotal: number;
  recoveredTotal: number;
  deathTotal: number;
  district: string;
  province: string;
  testedGlobal: number;
  confirmedGlobal: number;
  recoveredGlobal: number;
  seriousGlobal: number;
  deathGlobal: number;
  updatedAt: string;
}

export async function fetchCovidCasesCountsAPI() {
  try {
    const response: AxiosResponse<ICovidCasesCounts> = await axios.get(`/virus-counts/today`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
