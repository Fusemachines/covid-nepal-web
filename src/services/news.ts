import { AxiosResponse } from "axios";

import { strapiAxiosInstance } from "src/utils/axios";
import { getlocalStorage } from "src/utils/storage";

const strapiToken = getlocalStorage("strapi-token");
const headers = {
  headers: {
    Authorization: `Bearer ${strapiToken}`
  }
}
interface IFetchNewsPayload {
  type: string;
  start: number;
  limit: number;
}

interface IFetchNewsResponse {
  
}

export async function fetchNewsAPI(payload: IFetchNewsPayload) {
  try {
    const { type, start, limit } = payload;
    const URL = `/news-feeds?news_types.title=${type}&_start=${start}&_limit=${limit}`;
    const response: AxiosResponse<IFetchNewsResponse> = await strapiAxiosInstance.get(URL, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchTipsAPI() {
  try {
    const URL = `/news-feeds?news_types.title=tips`;
    const response: AxiosResponse<IFetchNewsResponse> = await strapiAxiosInstance.get(URL, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchTopNewsAPI() {
  try {
    const URL = `/news-feeds?news_types.title=top`;
    const response: AxiosResponse<IFetchNewsResponse> = await strapiAxiosInstance.get(URL, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
}