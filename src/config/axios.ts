import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

axios.defaults.baseURL = 'https://21f0-118-167-129-39.ngrok.io';

axios.interceptors.request.use(
  async (config) => {
    const accessToken = await SecureStore.getItemAsync('accessToken');

    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
