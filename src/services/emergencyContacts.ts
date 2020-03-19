import { AxiosResponse } from 'axios';

import axios from 'src/utils/axios';

export interface IFetchEmergencyContactsAPIResponse {
  hits: Array<IHits>;
}

interface IHits {
  title: string;
  author: string;
}

export async function fetchEmergencyContactsAPI() {
  try {
    const response: AxiosResponse<IFetchEmergencyContactsAPIResponse> = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=corona`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
