import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations for each language
import en from './translations/en.json';
import fr from './translations/fr.json';

const LOCALES = ['en', 'fr'];

i18next.use(initReactI18next).init({
  supportedLngs: LOCALES,
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
  },
  fallbackLng: 'fr',
});

export const changeLanguage = async (language: string) => {
  await i18next.changeLanguage(language);
};

export default i18next;
