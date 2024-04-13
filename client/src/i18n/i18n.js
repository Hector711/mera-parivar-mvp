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
    default: 'en',
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
          about_us: 'About Us',
          what_we_do: 'What We Do',
          get_involved: 'Get Involved',
          donate: 'Donate',
          contact: 'Contact',
        },
      },
      es: {
        translation: {
          home: 'Inicio',
          about_us: 'Quienes Somos',
          what_we_do: 'Nuestra Labor',
          get_involved: 'Participa',
          donate: 'Dona',
          contact: 'Contacto',
        },
      },
    },
  });
