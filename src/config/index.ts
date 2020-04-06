interface IApiEnvConfig {
  baseURL: string;
  timeout: number;
  googleAnalytics: string;
  googleTranslateKey: string;
}

interface IConfigValue {
  ApiEnv: IApiEnvConfig;
}

const {
  REACT_APP_BASE_URL,
  REACT_APP_GOOGLE_ANALYTICS,
  REACT_APP_GOOGLE_TRANSLATE_API_KEY
} = process.env;

const ApiEnv: IApiEnvConfig = {
  baseURL: REACT_APP_BASE_URL,
  timeout: 0,
  googleAnalytics: REACT_APP_GOOGLE_ANALYTICS || "UA-xxxxxxxxx-1",
  googleTranslateKey: REACT_APP_GOOGLE_TRANSLATE_API_KEY
};

const Config: IConfigValue = {
  ApiEnv
};

export default Config;
