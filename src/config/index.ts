interface IApiEnvConfig {
  baseURL: string;
  timeout: number;
  googleAnalytics: string;
}

interface IConfigValue {
  ApiEnv: IApiEnvConfig;
}

const { REACT_APP_BASE_URL, REACT_APP_TIMEOUT, REACT_APP_GOOGLE_ANALYTICS } = process.env;

const ApiEnv: IApiEnvConfig = {
  baseURL: REACT_APP_BASE_URL,
  timeout: 0,
  googleAnalytics: REACT_APP_GOOGLE_ANALYTICS || 'UA-xxxxxxxxx-1'
};

const Config: IConfigValue = {
  ApiEnv
};

export default Config;
