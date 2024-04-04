import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import global_es from './es/global.json';
// import global_en from './en/global.json';

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    resources: {
      en: {
        translation: {
          home: 'Home',
          contact: 'Contact',
          donations: 'Donations',
          project: 'Proyect',
        },
      },
      es: {
        translation: {
          home: 'Inicio',
          contact: 'Contacto',
          donations: 'Donaciones',
          project: 'Proyecto',
        },
      },
    },
  });
