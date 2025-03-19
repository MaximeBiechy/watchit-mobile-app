import { t } from 'i18next';
import api from './api.ts';
import { showToast } from '../../utils/toast.tsx';
import i18n from '../../locales/i18n.ts';

export const getNowPlayingMovies = async () => {
  try {
    const response = await api.get('/movies/now_playing', {
      params: {
        region: i18n.language === 'en' ? 'US' : 'FR',
        language: i18n.language === 'en' ? 'en-US' : 'fr-FR', // ? API only supports these two languages for now.
      },
    });

    return response.data;
  } catch (error: any) {
    const errorCode = error.response?.data?.code || 'UnexpectedError';
    const translatedMessage = t(`errors:${errorCode}`);
    showToast('error', translatedMessage);
    return { error: error.response?.data?.message || 'An error occurred' };
  }
};

export const getMovieDetails = async (id: number) => {
  try {
    const response = await api.get(`/movies/${id}`, {
      params: {
        language: i18n.language === 'en' ? 'en-US' : 'fr-FR', // ? API only supports these two languages for now.
      },
    });

    return response.data;
  } catch (error: any) {
    const errorCode = error.response?.data?.code || 'UnexpectedError';
    const translatedMessage = t(`errors:${errorCode}`);
    showToast('error', translatedMessage);
    return { error: error.response?.data?.message || 'An error occurred' };
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await api.get('/movies/upcoming', {
      params: {
        region: i18n.language === 'en' ? 'US' : 'FR',
        language: i18n.language === 'en' ? 'en-US' : 'fr-FR', // ? API only supports these two languages for now.
      },
    });
    return response.data;
  } catch (error: any) {
    const errorCode = error.response?.data?.code || 'UnexpectedError';
    const translatedMessage = t(`errors:${errorCode}`);
    showToast('error', translatedMessage);
    return { error: error.response?.data?.message || 'An error occurred' };
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await api.get('/movies/popular', {
      params: {
        region: i18n.language === 'en' ? 'US' : 'FR',
        language: i18n.language === 'en' ? 'en-US' : 'fr-FR', // ? API only supports these two languages for now.
      },
    });
    return response.data;
  } catch (error: any) {
    const errorCode = error.response?.data?.code || 'UnexpectedError';
    const translatedMessage = t(`errors:${errorCode}`);
    showToast('error', translatedMessage);
    return { error: error.response?.data?.message || 'An error occurred' };
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await api.get('/movies/top_rated', {
      params: {
        region: i18n.language === 'en' ? 'US' : 'FR',
        language: i18n.language === 'en' ? 'en-US' : 'fr-FR', // ? API only supports these two languages for now.
      },
    });
    return response.data;
  } catch (error: any) {
    const errorCode = error.response?.data?.code || 'UnexpectedError';
    const translatedMessage = t(`errors:${errorCode}`);
    showToast('error', translatedMessage);
    return { error: error.response?.data?.message || 'An error occurred' };
  }
};

export const getMovieTrailer = async (id: number) => {
  try {
    const response = await api.get(`/movies/${id}/trailer`, {
      params: {
        language: i18n.language === 'en' ? 'en-US' : 'fr-FR',
      },
    });
    return response.data;
  } catch (error: any) {
    const errorCode = error.response?.data?.code || 'UnexpectedError';
    const translatedMessage = t(`errors:${errorCode}`);
    showToast('error', translatedMessage);
    return { error: error.response?.data?.message || 'An error occurred' };
  }
};
