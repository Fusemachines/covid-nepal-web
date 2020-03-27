import { AxiosResponse } from "axios";

import axios from "src/utils/axios";

// TODO:pragyakar Update endpoints and interfaces

interface IFetchTopNewsResponse {

}

export async function fetchTopNewsAPI() {
  try {
    const response: AxiosResponse<IFetchTopNewsResponse> = await axios.get(`/`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

interface IFetchTipsResponse {

}

export async function fetchTipsAPI() {
  try {
    const response: AxiosResponse<IFetchTipsResponse> = await axios.get(`/`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

interface IFetchNepalNewsResponse {

}

export async function fetchNepalNewsAPI() {
  try {
    const response: AxiosResponse<IFetchNepalNewsResponse> = await axios.get(`/`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

interface IFetchGlobalNewsResponse {

}

export async function fetchGlobalNewsAPI() {
try {
    const response: AxiosResponse<IFetchGlobalNewsResponse> = await axios.get(`/`);
    return response.data;
  } catch (error) {
    throw error;
  }
}