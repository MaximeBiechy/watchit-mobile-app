import api from './api.ts';
import i18n from '../../locales/i18n.ts';

export const search = async (query: string): Promise<any> => {
  try {
    const response = await api.get(`/search?query=${query}`, {
      params: {
        language: i18n.language === 'en' ? 'en-US' : 'fr-FR', // ? API only supports these two languages for now.
      },
    });

    return response.data;
  } catch (error: any) {
    // const errorCode = error.response?.data?.code || 'UnexpectedError';
    // const translatedMessage = t(`errors:${errorCode}`);
    // showToast('error', translatedMessage);
    return { error: error.response?.data?.message || 'An error occurred' };
  }
};
