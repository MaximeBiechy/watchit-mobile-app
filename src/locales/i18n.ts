import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import translations for each language
import en from './translations/en.json';
import fr from './translations/fr.json';

const LOCALES = ['en', 'fr'];
const LANGUAGES_STORAGE_KEY = 'userLanguage';

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
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = async (language: string) => {
  await AsyncStorage.setItem(LANGUAGES_STORAGE_KEY, language);
  await i18next.changeLanguage(language);
};

export default i18next;
