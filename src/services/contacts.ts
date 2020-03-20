import { AxiosResponse } from 'axios';

import axios from 'src/utils/axios';

export interface IContact {
  name: string;
  contactType: string;
  landLine: string[];
  mobile: string[];
  openingTime: string;
  closingTime: string;
  district: string;
  province: string;
  createdDate: string;
  updatedDate: string;
}

export interface IFetchContactsAPIResponse {
  docs: IContact[];
}

export async function fetchEmergencyContactsAPI() {
  try {
    const response: AxiosResponse<IFetchContactsAPIResponse> = await axios.get(`/contacts/emergency`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

interface IFetchEmergencyContactsAPIPayload {
  district: string[];
}

export async function fetchHospitalContactsAPI(payload: IFetchEmergencyContactsAPIPayload) {
  try {
    const districts = payload.district.join(',');
    const response: AxiosResponse<IFetchContactsAPIResponse> = await axios.get(
      `/contacts/hospitals?district=${districts}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchProvinceListAPI() {}

export async function fetchDistrictListAPI() {}
