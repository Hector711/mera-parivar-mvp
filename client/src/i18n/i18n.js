import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import global_es from './es/global.json';
// import global_en from './en/global.json';

export default i18n
  // .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    // lng: getCurrentLang(),
    lng: 'es',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
          translation: {
              title: 'Multi-language app',
              label: "Select another language!",
              about: 'About',
              home: 'Home',
              user: 'My name is {{name}}'
          }
      },
      es: {
          translation: {
              title: 'Aplicación en varios idiomas',
              label: "Selecciona otro lenguaje!",
              about: 'Sobre mí',
              home: 'Inicio'
          }
      },
      it: {
          translation: {
              title: 'Applicazione multilingue',
              label: "Selezionare un'altra lingua ",
              about: 'Su di me',
              home: 'Casa'
          }
      },
  }
  });
