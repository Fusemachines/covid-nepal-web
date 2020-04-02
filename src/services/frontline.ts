import { AxiosResponse } from "axios";

import axios from "src/utils/axios";

interface IFrontline {
  _id: string;
  name: string;
  contact: {
    email: string;
    mobile?: number;
    landline?: null;
  };
  location?: string;
}

export interface ISupporter extends IFrontline {
  providedItems: Array<string>;
}

export interface IRequestor extends IFrontline {
  requestedItems: Array<string>;
  isFulfilled? : boolean;
  fulfilledBy? : Array<ISupporter>;
}

export interface IFetchSupportersAPIResponse {
  docs: Array<ISupporter>;
}

export async function fetchSupportersAPI() {
  try {
    const response: AxiosResponse<IFetchSupportersAPIResponse> = await axios.get(`frontline/supporters`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export interface IFetchRequestorsAPIResponse {
  docs: Array<IRequestor>;
}

export async function fetchRequestorsAPI() {
  try {
    const response: AxiosResponse<IFetchRequestorsAPIResponse> = await axios.get(`/frontline/requests`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
