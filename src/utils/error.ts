import { AxiosResponse } from 'axios';

interface IAxiosErrorData {
  statusCode: string;
  status: string;
  timestamp: string;
  message: string;
  debugMessage: string;
}

interface IParsedError {
  message: string;
  status: number;
}

function parseClientError(error: AxiosResponse<IAxiosErrorData>): IParsedError {
  let parsedError = {
    message: 'Something is wrong in client end',
    status: error.status
  };
  if (error.status === 403) {
    parsedError.message = error.data.message;
  } else if (error.status === 400) {
    parsedError.message = error.data.message;
  } else if (error.status === 401) {
    // logout
    parsedError.message = error.data.message;
  } else if (error.status === 404) {
    parsedError.message = error.data.message;
  }
  return parsedError;
}

function parseServerError(error: AxiosResponse<IAxiosErrorData>): IParsedError {
  let parsedError = {
    message: 'Something is wrong with the server',
    status: error.status
  };
  return parsedError;
}

export default function parseErrorMessage(
  error: AxiosResponse<IAxiosErrorData>
): IParsedError {
  let parsedError = {
    message: 'Something went wrong',
    status: error.status
  };

  if (`${error.status}`.charAt(0) === '4') {
    parsedError = parseClientError(error);
  } else if (`${error.status}`.charAt(0) === '5') {
    parsedError = parseServerError(error);
  }

  return parsedError;
}
