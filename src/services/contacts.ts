import { AxiosResponse } from 'axios';

import axios from 'src/utils/axios';
import { ILanguage } from 'src/interface/common';

export interface IContact {
  name: ILanguage;
  contactType: string;
  landLine: Array<ILanguage>;
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
  province: string;
  district: string;
}

export async function fetchHospitalContactsAPI(payload: IFetchEmergencyContactsAPIPayload) {
  try {
    const response: AxiosResponse<IFetchContactsAPIResponse> = await axios.get(`/contacts/hospitals`, {
      params: payload
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export interface IFetchDistrictListAPIResponse {
  docs: IDistricts[];
}

export interface IDistricts {
  name: ILanguage;
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
