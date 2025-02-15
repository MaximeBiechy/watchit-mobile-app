import api from './api.ts';

export const register = async (username: string, email: string, password: string) => {
  try {
    const response = await api.post('/auth/register', {
      username,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    return null;
  }
};

