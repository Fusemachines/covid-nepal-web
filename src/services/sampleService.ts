import { AxiosResponse } from 'axios';

import axios from 'src/utils/axios';

export interface IFetchSampleAPIResponse {
  hits: Array<IHits>;
}

interface IHits {
  title: string;
  author: string;
}

export async function fetchSampleAPI() {
  try {
    const response: AxiosResponse<IFetchSampleAPIResponse> = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=corona`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
