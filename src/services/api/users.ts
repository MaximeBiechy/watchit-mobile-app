import api from './api.ts';

export const updateUserSettings = async (userId: string, settings: any) => {
  try {
    await api.patch(`/users/${userId}/settings`, settings);
    return { success: true };
  } catch (error: any) {
    // const errorCode = error.response?.data?.code || 'UnexpectedError';
    // const translatedMessage = t(`errors:${errorCode}`);
    // showToast('error', translatedMessage);
    return { error: error.response?.data?.message || 'An error occurred' };
  }
};
