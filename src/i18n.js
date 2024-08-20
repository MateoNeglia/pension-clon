import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import translation_es from './locale/Spanish.json'
import translation_en from './locale/English.json'
import translation_ptr from './locale/Portuguese.json'


const resources = {
    es: {
      translation: translation_es
    },
    en: {
      translation: translation_en
    },
    ptr: {
      translation: translation_ptr
    }
  };

i18n
  .use(initReactI18next) 
  .init({
    fallbackLng: 'es',
    resources
  });

  export default i18n;