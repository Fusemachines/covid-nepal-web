interface IApiEnvConfig {
  baseURL: string;
  timeout: number;
  googleAnalytics: string;
  googleTranslateKey: string;
  strapiURL: string;
  strapiUser: string;
  strapiPass: string;
}

interface IConfigValue {
  ApiEnv: IApiEnvConfig;
}

const {
  REACT_APP_BASE_URL,
  REACT_APP_GOOGLE_ANALYTICS,
  REACT_APP_GOOGLE_TRANSLATE_API_KEY,
  REACT_APP_STRAPI_URL,
  REACT_APP_STRAPI_USER,
  REACT_APP_STRAPI_PASS
} = process.env;

const ApiEnv: IApiEnvConfig = {
  baseURL: REACT_APP_BASE_URL,
  timeout: 0,
  googleAnalytics: REACT_APP_GOOGLE_ANALYTICS || "UA-xxxxxxxxx-1",
  googleTranslateKey: REACT_APP_GOOGLE_TRANSLATE_API_KEY,
  strapiURL: REACT_APP_STRAPI_URL,
  strapiUser: REACT_APP_STRAPI_USER,
  strapiPass: REACT_APP_STRAPI_PASS
};

const Config: IConfigValue = {
  ApiEnv
};

export default Config;
