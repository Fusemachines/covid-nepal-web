import { AxiosResponse } from 'axios';

import axios from 'src/utils/axios';

export interface IEmergencyContact {
  name: string;
  contactType: string;
  landline: string[];
  mobile: string[];
  openingTime: string;
  closingTime: string;
  district: string;
  province: string;
  createdDate: string;
  updatedDate: string;
}

export interface IFetchEmergencyContactsAPIResponse {
  docs: IEmergencyContact[];
}

export async function fetchEmergencyContactsAPI() {
  try {
    const response: AxiosResponse<IFetchEmergencyContactsAPIResponse> = await axios.get(`/contact`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
