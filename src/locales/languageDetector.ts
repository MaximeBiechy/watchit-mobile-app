import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ModuleType } from 'i18next';

const STORE_LANGUAGE_KEY = 'settings.language';

const languageDetector = {
  type: 'languageDetector' as ModuleType,
  async: true,
  init: () => {},
  async detect(callback: (lang: string) => void) {
    try {
      const storedLanguage = await AsyncStorage.getItem(STORE_LANGUAGE_KEY);

      if (storedLanguage) {
        callback(storedLanguage);
      } else {
        const locales = RNLocalize.getLocales();

        if (locales.length > 0) {
          const deviceLanguageCode = locales[0].languageCode;
          callback(deviceLanguageCode === 'en' ? 'en' : 'fr');
        } else {
          callback('en');
        }
      }
    } catch (error) {
      console.error('Failed to detect language:', error);
      callback('en');
    }
  },
  async cacheUserLanguage(lang: string) {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, lang);
    } catch (error) {
      console.error('Failed to cache language:', error);
    }
  },
};

export default languageDetector;
