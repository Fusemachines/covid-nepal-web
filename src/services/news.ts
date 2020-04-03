import axios from "src/utils/axios";
import { AxiosResponse } from "axios";
import { IMeta } from "src/interface/common";

export interface INews {
  title: string;
  description: string;
  source: string;
  url: string;
  imageUrl: string;
  uploadedAt: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

interface IFetchNewsPayload {
  type: string;
  page: number;
  size: number;
}

interface IFetchNewsResponse {
  meta: IMeta;
  docs: Array<INews>;
}

export async function fetchNewsAPI(payload: IFetchNewsPayload) {
  try {
    const { type, page, size } = payload;
    const URL = `news?type=${type}&page=${page}&size=${size}`;
    const response: AxiosResponse<IFetchNewsResponse> = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw error;
  }
}

interface IFetchTipsResponse {
  docs: Array<INews>;
}

export async function fetchTipsAPI() {
  try {
    const URL = `news/tips`;
    const response: AxiosResponse<IFetchTipsResponse> = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchTopNewsAPI() {
  try {
    const URL = `news/top`;
    const response: AxiosResponse<INews> = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw error;
  }
}
