import axios from 'axios';

import { UserDto, SignInUserFunc } from './types';

export const getUser = async (): Promise<UserDto> => {
  const res = await axios({
    method: 'GET',
    url: '/auth/whoami',
  });

  return res.data.data;
};

export const signInUser: SignInUserFunc = async (payload) => {
  const res = await axios({
    method: 'POST',
    url: '/auth/signin',
    data: payload,
  });

  return res.data;
};
