import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations/index.ts';
import languageDetector from './languageDetector.ts';

const LOCALES = ['en', 'fr'];

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    supportedLngs: LOCALES,
    resources: translations,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
