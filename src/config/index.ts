interface IApiEnvConfig {
  baseURL: string;
  timeout: number;
}

interface IConfigValue {
  ApiEnv: IApiEnvConfig;
}

const { REACT_APP_BASE_URL, REACT_APP_TIMEOUT } = process.env;

const ApiEnv: IApiEnvConfig = {
  baseURL: REACT_APP_BASE_URL,
  timeout: REACT_APP_TIMEOUT
};

const Config: IConfigValue = {
  ApiEnv
};

export default Config;
