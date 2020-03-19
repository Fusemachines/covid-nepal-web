import axios, { AxiosRequestConfig } from 'axios';

import Config from 'src/config';
import parseErrorMessage from './error';

const axiosInstance = axios.create({
  baseURL: Config.ApiEnv.baseURL,
  timeout: Config.ApiEnv.timeout
});

interface IClientError {
  config: AxiosRequestConfig;
  request: XMLHttpRequest;
  response: undefined;
  message: string;
  stack: string;
}

function parseClientError(error: IClientError) {
  let parsedError = {
    message: 'Something went wrong',
    status: 'CLIENT_ERROR'
  };
  if (error.message === 'Network Error') {
    parsedError = {
      message: 'There seems to be no internet connection',
      status: 'CLIENT_ERROR'
    };
  }
  return parsedError;
}

axiosInstance.interceptors.response.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(
      error.response
        ? parseErrorMessage(error.response)
        : parseClientError(error)
    );
  }
);

export default axiosInstance;
