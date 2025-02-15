import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: process.env.WATCHIT_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ? Interceptors
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const refreshAccessToken = async () => {
  const refreshToken = await AsyncStorage.getItem('refreshToken');
  if (!refreshToken) {
    return null;
  }

  try {
    // TODO: Replace with the correct endpoint
    const response = await api.post('/auth/refresh-token', {
      refreshToken,
    });

    const newAccessToken = response.data.accessToken;
    await AsyncStorage.setItem('accessToken', newAccessToken);

    return newAccessToken;
  } catch (error) {
    return null;
  }
};

api.interceptors.request.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (!error.response) {
      return Promise.reject(new Error('Network Error'));
    }

    const { status } = error.response;

    // ? Unauthorized
    if (status === 401) {
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
