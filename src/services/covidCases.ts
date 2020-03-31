import { AxiosResponse } from "axios";

import axios from "src/utils/axios";

export interface ICovidCasesCounts {
  _id: string;
  confirmedToday: number;
  confirmedTotal: number;
  deathToday: number;
  deathTotal: number;
  recoveredToday: number;
  recoveredTotal: number;
  testedToday: number;
  testedTotal: number;
  createdAt: string;
  updatedAt: string;
}

export async function fetchCovidCasesCountsOfNepalAPI() {
  try {
    const response: AxiosResponse<ICovidCasesCounts> = await axios.get(`/counts/nepal/latest`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCovidCasesCountsOfGlobalAPI() {
  try {
    const response: AxiosResponse<ICovidCasesCounts> = await axios.get(`/counts/global/latest`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
