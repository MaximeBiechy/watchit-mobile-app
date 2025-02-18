import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import translations from './translations/index.ts';

const LOCALES = ['en', 'fr'];
const LANGUAGES_STORAGE_KEY = 'userLanguage';

const getLanguage = async () => {
  const language = await AsyncStorage.getItem(LANGUAGES_STORAGE_KEY);
  return language || 'en';
};

getLanguage().then((language: string) => {
  i18next.use(initReactI18next).init({
    supportedLngs: LOCALES,
    resources: translations,
    fallbackLng: language,
    interpolation: {
      escapeValue: false,
    },
  });
});

export const changeLanguage = async (language: string) => {
  await AsyncStorage.setItem(LANGUAGES_STORAGE_KEY, language);
  await i18next.changeLanguage(language);
};

export default i18next;
