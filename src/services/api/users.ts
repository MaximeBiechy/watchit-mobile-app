import api from './api.ts';

export const updateUserSettings = async (userId: string, settings: any) => {
  try {
    await api.patch(`/users/${userId}/settings`, {
      settings,
    });
    return { success: true };
  } catch (error: any) {
    // const errorCode = error.response?.data?.code || 'UnexpectedError';
    // const translatedMessage = t(`errors:${errorCode}`);
    // showToast('error', translatedMessage);
    return { error: error.response?.data?.message || 'An error occurred' };
  }
};

export const getUserWatchlist = async (userId: string) => {
  try {
    const response = await api.get(`/users/${userId}/watchlist`);
    return response.data;
  } catch (error: any) {
    // const errorCode = error.response?.data?.code || 'UnexpectedError';
    // const translatedMessage = t(`errors:${errorCode}`);
    // showToast('error', translatedMessage);
    return { error: error.response?.data?.message || 'An error occurred' };
  }
};

export const addToWatchlist = async (userId: string, mediaId: number, mediaType: string) => {
  try {
    const response = await api.post(`/users/${userId}/watchlist/${mediaId}`, {
      mediaType,
    });

    return response.data;
  } catch (error: any) {
    // const errorCode = error.response?.data?.code || 'UnexpectedError';
    // const translatedMessage = t(`errors:${errorCode}`);
    // showToast('error', translatedMessage);
    return { error: error.response?.data?.message || 'An error occurred' };
  }
};

export const removeFromWatchlist = async (userId: string, mediaId: number, mediaType: string) => {
  try {
    const response = await api.delete(`/users/${userId}/watchlist/${mediaId}`, {
      data: {
        mediaType,
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

export const getUserSeenMedia = async (userId: string) => {
  try {
    const response = await api.get(`/users/${userId}/seen`);

    return response.data;
  } catch (error: any) {
    // const errorCode = error.response?.data?.code || 'UnexpectedError';
    // const translatedMessage = t(`errors:${errorCode}`);
    // showToast('error', translatedMessage);
    return { error: error.response?.data?.message || 'An error occurred' };
  }
};

export const markAsSeen = async (userId: string, mediaId: number, mediaType: string) => {
  try {
    const response = await api.post(`/users/${userId}/seen/${mediaId}`, {
      mediaType,
    });

    return response.data;
  } catch (error: any) {
    // const errorCode = error.response?.data?.code || 'UnexpectedError';
    // const translatedMessage = t(`errors:${errorCode}`);
    // showToast('error', translatedMessage);
    return { error: error.response?.data?.message || 'An error occurred' };
  }
};

export const markAsUnseen = async (userId: string, mediaId: number, mediaType: string) => {
  try {
    const response = await api.delete(`/users/${userId}/seen/${mediaId}`, {
      data: {
        mediaType,
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
