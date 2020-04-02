import { AxiosResponse } from "axios";

import axios from "src/utils/axios";

export interface ISupporter {
  name: string;
  contact: {
    email: string;
    mobile?: number;
    landline?: null;
  };
  providedItems: Array<string>;
  location? : string;
}

export interface IFetchSupportersAPIResponse{
  docs : Array<ISupporter>
}

export async function fetchSupportersAPI() {
  try {
    const response: AxiosResponse<IFetchSupportersAPIResponse> = await axios.get(``);
    return response.data;
  } catch (error) {
    throw error;
  }
}
