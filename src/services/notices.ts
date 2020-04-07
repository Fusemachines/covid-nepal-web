import axios from "src/utils/axios";
import { AxiosResponse } from "axios";
import { IMeta } from "src/interface/common";

export interface INotices {
  title: string;
  _id: string;
  tag: string;
  type: string;
  url: string;
  addedAt: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

interface IFetchNewsPayload {
  type: string;
  page: number;
  size: number;
}

interface IFetchNoticesResponse {
    docs: Array<INotices>;
}

export async function fetchNoticesAPI() {
    try {
        const URL = `notices/Notice`;
        const response: AxiosResponse<Array<INotices>> = await axios.get(URL);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export async function fetchResourcesAPI() {
    try {
        const URL = `notices/Resources`;
        const response: AxiosResponse<Array<INotices>> = await axios.get(URL);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function fetchSupportAPI() {
    try {
        const URL = `notices/Supports`;
        const response: AxiosResponse<Array<INotices>> = await axios.get(URL);
        return response.data;
    } catch (error) {
        throw error;
    }
}