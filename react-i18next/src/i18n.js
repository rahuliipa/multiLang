import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// import translationEN from "./locales/en/translation.json";
// import translationDE from "./locales/de/translation.json";
// import translationZHS from "./locales/zhs/translation.json";
// import translationZHT from "./locales/zht/translation.json";

// the translations
// const resources = {
//   en: {
//     translation: translationEN,
//   },
//   de: {
//     translation: translationDE,
//   },
//   zhs: {
//     translation: translationZHS,
//   },
//   zht: {
//     translation: translationZHT,
//   },
// };
//const { cookies } = useCookies(['i18n_locale']);
let cookieValue = 'en'
const cookie=document.cookie.toString().split('; ').find(row => row.startsWith('i18n_locale'));
if(typeof cookie !=='undefined'){
  cookieValue=cookie.split('=')[1];
}
console.log('x',);
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    //resources: resources,
    fallbackLng: "en",
    lng: cookieValue,
    debug: true,
    // backend: {
    //   /* translation file path */
    //   loadPath: '/public/locales/{{ns}}/{{lng}}.json'
    // },
    // sets a custom cookie name to parse locale settings from
    //cookie: 'i18n_locale',    
    detection: {
      order: ['path', "querystring", "cookie"],
      cache: ["cookie"],
      lookupQuerystring: 'lng',
      lookupFromPathIndex: 0,
      cookie:'i18n_locale',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
