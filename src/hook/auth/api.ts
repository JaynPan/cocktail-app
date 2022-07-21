import axios from 'axios';

import { UserDto, SignInUserFunc, SignUpAppleFunc, LoginAppleFunc, LoginGoogleFunc } from './types';

export const getUser = async (): Promise<UserDto> => {
  const res = await axios({
    method: 'GET',
    url: '/auth/whoami',
  });

  return res.data;
};

export const signInUser: SignInUserFunc = async (payload) => {
  const res = await axios({
    method: 'POST',
    url: '/auth/login',
    data: payload,
  });

  return res.data;
};

export const loginApple: LoginAppleFunc = async (payload) => {
  const res = await axios({
    method: 'POST',
    url: '/auth/login/apple',
    data: payload,
  });

  return res.data;
};

export const signUpApple: SignUpAppleFunc = async (payload) => {
  const res = await axios({
    method: 'POST',
    url: '/auth/signup/apple',
    data: payload,
  });

  return res.data;
};

export const loginGoogle: LoginGoogleFunc = async (payload) => {
  const res = await axios({
    method: 'POST',
    url: '/auth/login/google',
    data: payload,
  });

  return res.data;
};
