// import { getSupportedLanguages, translate } from 'google-translate';

const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;

export const googleTranslate = require('google-translate')(apiKey);

export function getSupportedLanguate() {
  return googleTranslate.getSupportedLanguages('en', function(err: any, languageCodes: any) {
    // getLanguageCodes(languageCodes); // use a callback function to setState
  });
}

export async function translateLanguage(text: string) {
  // nepali - ne, hindi - hi
  return new Promise((resolve, reject) => {
    googleTranslate.translate(text, 'ne', function(err: any, translation: any) {
      if (err) reject(err);
      else resolve(translation.translatedText);
    });
  });
}
