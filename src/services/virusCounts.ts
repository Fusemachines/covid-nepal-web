import { AxiosResponse } from 'axios';

import axios from 'src/utils/axios';

export interface IFetchVirusCountsAPIResponse {
  docs: Array<IDocs>;
}

interface IDocs {
  confirmedToday: number;
  recoveredToday: number;
  seriousToday: number;
  deathToday: number;
  confirmedTotal: number;
  recoveredTotal: number;
  seriousTotal: number;
  deathTotal: number;
  district: string;
  province: string;
  createdDate: string;
  updatedDate: string;
}

const response = {
  docs: [
    {
      confirmedToday: 2,
      recoveredToday: 0,
      seriousToday: 1,
      deathToday: 0,
      confirmedTotal: 2,
      recoveredTotal: 0,
      seriousTotal: 1,
      deathTotal: 0,
      district: 'Kathmandu',
      province: 'Province-01',
      createdDate: '10-03-2020',
      updatedDate: '10-03-2020'
    },
    {
      confirmedToday: 3,
      recoveredToday: 2,
      seriousToday: 1,
      deathToday: 2,
      confirmedTotal: 5,
      recoveredTotal: 2,
      seriousTotal: 2,
      deathTotal: 2,
      district: 'Kathmandu',
      province: 'Province-01',
      createdDate: '11-03-2020',
      updatedDate: '11-03-2020'
    },
    {
      confirmedToday: 6,
      recoveredToday: 4,
      seriousToday: 3,
      deathToday: 5,
      confirmedTotal: 11,
      recoveredTotal: 6,
      seriousTotal: 5,
      deathTotal: 7,
      district: 'Kathmandu',
      province: 'Province-01',
      createdDate: '12-03-2020',
      updatedDate: '12-03-2020'
    }
  ]
};

export async function fetchVirusCountsAPI() {
  try {
    return response;
  } catch (error) {
    throw error;
  }
}
