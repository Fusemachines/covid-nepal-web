import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import en from "./en";
import ne from './ne'
import detector from 'i18next-browser-languagedetector';
import { getlocalStorage } from "src/utils/storage";

const resources = {
  en: { translation: en },
  ne: { translation: ne }
}

const googtrans = getlocalStorage('googtrans') || 'en';
const lng = googtrans.includes('ne') ? 'ne' : 'en';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(detector)
  /*.use(backend) */
  .init({
    resources,
    lng,
    fallbackLng: "en",
    debug: true,

    keySeparator: false, // we do not use keys in form messages.welcome

    saveMissing: true, // send not translated keys to endpoint

    interpolation: {
      escapeValue: false, // react already safes from xss
      /* transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'b'] */
    }
  });
