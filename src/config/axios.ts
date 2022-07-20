import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

axios.defaults.baseURL = 'https://2458-1-163-238-241.ngrok.io';

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
