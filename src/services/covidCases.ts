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
  // "createdDate" : ISODate("2020-02-20T10:20:20.650+0000"),
  // "updatedDate" : ISODate("2020-03-20T10:20:20.650+0000"),
}

export async function fetchCovidCasesCountsAPI() {
  try {
    const response: AxiosResponse<ICovidCasesCounts> = await axios.get(`/virus-counts/today`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
