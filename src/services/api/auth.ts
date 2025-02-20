import { t } from 'i18next';
import api from './api.ts';
import { showToast } from '../../utils/toast.tsx';

export const register = async (username: string, email: string, password: string) => {
  try {
    const response = await api.post('/auth/register', {
      username,
      email,
      password,
    });

    return response.data;
  } catch (error: any) {
    const message = error.response?.data?.message || 'An error occurred, please try again later';
    const translatedMessage = t(message);
    showToast('error', translatedMessage);
    return { error: error.response?.data?.message || 'An error occurred' };
  }
};
