/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_BASE_URL: string;
    REACT_APP_GOOGLE_ANALYTICS: string;
    REACT_APP_GOOGLE_TRANSLATE_API_KEY: string;
  }
}
