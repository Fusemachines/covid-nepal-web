import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import en from "./en.json";
import ne from './ne.json'
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';

const resources = {
  en: { translation: en },
  ne: { translation: ne }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(detector)
  /*.use(backend) */
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    debug: true,

    keySeparator: false, // we do not use keys in form messages.welcome

    saveMissing: true, // send not translated keys to endpoint

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
