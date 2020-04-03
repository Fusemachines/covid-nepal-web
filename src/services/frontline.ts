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
  isFulfilled?: boolean;
  fulfilledBy?: Array<ISupporter>;
}

interface IFetchSupportersAPIResponse {
  docs: Array<ISupporter>;
}

interface IFetchSupportersAPIPayload {
  supportItems: string;
}

export async function fetchSupportersAPI(payload: IFetchSupportersAPIPayload) {
  try {
    const response: AxiosResponse<IFetchSupportersAPIResponse> = await axios.get(`frontline/supporters`, {
      params: { items: payload.supportItems }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export interface IFetchRequestorsAPIResponse {
  docs: Array<IRequestor>;
}

interface IFetchRequestorsAPIPayload {
  supportItems?: string;
}

export async function fetchRequestorsAPI(payload?: IFetchRequestorsAPIPayload) {
  try {
    const response: AxiosResponse<IFetchRequestorsAPIResponse> = await axios.get(`/frontline/requests`, {
      params: { items: payload ? payload.supportItems : "" }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
