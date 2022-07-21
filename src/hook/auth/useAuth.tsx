import { useQuery, useMutation, useQueryClient } from 'react-query';
import * as SecureStore from 'expo-secure-store';

import { useMemo } from 'react';
import { SignInDto, UseLogin, UseLoginApple, UseWhoAmI, UseSignUpApple } from './types';
import { getUser, loginApple, signInUser, signUpApple } from './api';

export const useLogin = (): UseLogin => {
  const queryClient = useQueryClient();

  const handleSuccess = async (signInDto: SignInDto) => {
    const { accessToken, ...userInfo } = signInDto;

    await SecureStore.setItemAsync('accessToken', accessToken);
    queryClient.setQueryData('user', userInfo);
  };

  return useMutation(signInUser, {
    onSuccess: handleSuccess,
  });
};

export const useLoginApple = (): UseLoginApple => {
  const queryClient = useQueryClient();

  const handleSuccess = async (signInDto: SignInDto) => {
    const { accessToken, ...userInfo } = signInDto;

    await SecureStore.setItemAsync('accessToken', accessToken);
    queryClient.setQueryData(['user'], userInfo);
  };

  return useMutation(loginApple, {
    onSuccess: handleSuccess,
  });
};

export const useSignUpApple = (): UseSignUpApple => {
  const queryClient = useQueryClient();

  const handleSuccess = async (dto: SignInDto) => {
    const { accessToken, ...userInfo } = dto;

    await SecureStore.setItemAsync('accessToken', accessToken);
    queryClient.setQueryData(['user'], userInfo);
  };

  return useMutation(signUpApple, {
    onSuccess: handleSuccess,
  });
};

export const useWhoAmI = (): UseWhoAmI => {
  const useWhoAmI = useQuery('user', getUser, {
    retry: false,
    retryOnMount: false,
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const isAuthenticated = useMemo(() => !!useWhoAmI.data, [useWhoAmI.data]);

  return {
    useWhoAmI,
    isAuthenticated,
  };
};
