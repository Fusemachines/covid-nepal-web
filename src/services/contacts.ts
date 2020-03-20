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
  district: string;
}

export async function fetchHospitalContactsAPI(payload: IFetchEmergencyContactsAPIPayload) {
  try {
    const response: AxiosResponse<IFetchContactsAPIResponse> = await axios.get(
      `/contacts/hospitals?district=${payload.district}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export interface IFetchDistrictListAPIResponse {
  name: string;
  province: string;
}

export async function fetchDistrictListAPI(province: string) {
  try {
    const response: AxiosResponse<IFetchDistrictListAPIResponse> = await axios.get(`/districts?province=${province}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
