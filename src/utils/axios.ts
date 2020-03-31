import axios, { AxiosRequestConfig } from 'axios';

import Config from 'src/config';
import parseErrorMessage from './error';
import { getlocalStorage } from './storage';

const axiosInstance = axios.create({
  baseURL: Config.ApiEnv.baseURL,
  timeout: Config.ApiEnv.timeout
});

const strapiAxiosInstance = axios.create({
  baseURL: Config.ApiEnv.strapiURL,
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

axiosInstance.interceptors.request.use(
  function(config) {
    config.params = {
      ...config.params,
      lang: getlocalStorage('i18nextLng') === 'ne' ? 'np' : 'en'
    }
    return config;
  }, function(error) {
    return Promise.reject(error)
  }
);

strapiAxiosInstance.interceptors.response.use(
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

strapiAxiosInstance.interceptors.request.use(
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
export {strapiAxiosInstance};
