import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

if (!Config.WATCHIT_API_URL) {
  throw new Error('WATCHIT_API_URL is not defined in the .env file');
}

const api = axios.create({
  baseURL: Config.WATCHIT_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ? Interceptors
api.interceptors.request.use(
  async (config) => {
    const userData = await AsyncStorage.getItem('user');
    if (userData) {
      const { accessToken } = JSON.parse(userData);
      if (accessToken && config.headers) {
        config.headers.set('Authorization', `Bearer ${accessToken}`);
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const refreshAccessToken = async () => {
  const userData = await AsyncStorage.getItem('user');
  if (!userData) {
    return null;
  }

  const { refreshToken } = JSON.parse(userData);
  if (!refreshToken) {
    return null;
  }

  try {
    const response = await api.post('/auth/refresh-token', {
      refreshToken,
    });

    const newAccessToken = response.data.user.accessToken;
    const newRefreshToken = response.data.user.refreshToken;
    const updatedUserData = { ...JSON.parse(userData), accessToken: newAccessToken, refreshToken: newRefreshToken };
    await AsyncStorage.setItem('user', JSON.stringify(updatedUserData));

    return newAccessToken;
  } catch (error) {
    return null;
  }
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (!error.response) {
      return Promise.reject(new Error('Network Error'));
    }

    const { status } = error.response;

    // ? Unauthorized
    if (status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;
      const newAccessToken = await refreshAccessToken();

      if (newAccessToken) {
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      }
    }

    // ? Forbidden
    if (status === 403) {
      return Promise.reject(new Error('You are not allowed to access this resource'));
    }

    // ? Not Found
    if (status === 404) {
      return Promise.reject(new Error('Resource Not Found'));
    }

    // ? Internal Server Error
    if (status === 500) {
      return Promise.reject(new Error('Internal Server Error'));
    }

    return Promise.reject(error);
  },
);

export default api;
