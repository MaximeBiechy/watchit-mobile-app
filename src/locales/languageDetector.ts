import { NativeModules, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ModuleType } from "i18next";

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLocale[0]
    : NativeModules.I18nManager.localeIdentifier;

const STORE_LANGUAGE_KEY = 'settings.language';

const languageDetector = {
  type: 'languageDetector' as ModuleType,
  async: true,
  init: () => {},
  async detect(callback: (lang: string) => void) {
    try {
      const language = await AsyncStorage.getItem(STORE_LANGUAGE_KEY);
      if (language) {
        // ? If the user has selected a language, we use it
        callback(language);
      } else {
        // ? Otherwise, we use the device's language
        const deviceLang = deviceLanguage.splice(0, 2);
        callback(deviceLang === 'en' ? 'en' : 'fr');
      }
    } catch (error) {
      console.error('Failed to detect language:', error);
    }
  },
  async cacheUserLanguage(lang: string) {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, lang);
    } catch (error) {
      /* empty */
    }
  },
};

export default languageDetector;
