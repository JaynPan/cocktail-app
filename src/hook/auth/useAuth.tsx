import { useQuery, useMutation, useQueryClient } from 'react-query';
import * as SecureStore from 'expo-secure-store';

import { useUser } from '@/context/user.provider';
import { SignInDto, UseLogin, UseMe } from './types';
import { getUser, loginApple, signInUser, signUpApple } from './api';

export const useLogin = (): UseLogin => {
  const { setAuthenticated } = useUser();

  const handleSuccess = async (signInDto: SignInDto) => {
    await SecureStore.setItemAsync('accessToken', signInDto.accessToken);
    setAuthenticated(true);
  };

  return useMutation(signInUser, {
    onSuccess: handleSuccess,
  });
};

export const useAppleLogin = () => {
  const { setAuthenticated } = useUser();

  const handleSuccess = async (signInDto: SignInDto) => {
    await SecureStore.setItemAsync('accessToken', signInDto.accessToken);
    setAuthenticated(true);
  };

  return useMutation(loginApple, {
    onSuccess: handleSuccess,
  });
};

export const useAppleSignUp = () => {
  const { setAuthenticated } = useUser();

  const handleSuccess = async (dto: SignInDto) => {
    await SecureStore.setItemAsync('accessToken', dto.accessToken);
    setAuthenticated(true);
  };

  return useMutation(signUpApple, {
    onSuccess: handleSuccess,
  });
};

export const useMe = (): UseMe => {
  const { setAuthenticated } = useUser();

  const handleSuccess = async () => {
    setAuthenticated(true);
  };

  return useQuery('user', getUser, {
    retry: false,
    retryOnMount: false,
    refetchOnWindowFocus: false,
    onSuccess: handleSuccess,
  });
};

// export const useAuth = (): UseAuthRto => {
//   const { pushApiResErrorToast, pushApiResSuccessToast } = useToast();

//   const handleLogoutSuccess = async (success: SuccessDto<string>) => {
//     pushApiResSuccessToast(success);
//     queryClient.setQueryData(USER, undefined);
//     await SecureStore.deleteItemAsync('token');
//   };

// const userQuery: UseAuthRto['userQuery'] = useQuery(USER, getUser, {
//   retry: false,
//   retryOnMount: false,
//   refetchOnWindowFocus: false,
// });

//   const userSignInMutation: UseAuthRto['userSignInMutation'] = useMutation(signInUser, {
//     onSuccess: handleSignInSuccess,
//     onError: pushApiResErrorToast,
//   });

//   const userLogoutMutation: UseAuthRto['userLogoutMutation'] = useMutation(logoutUser, {
//     onSuccess: handleLogoutSuccess,
//     onError: pushApiResErrorToast,
//   });

//   const isLoggedIn = useMemo(() => userQuery.data !== undefined, [userQuery.data]);

//   return {
//     userQuery,
//     userSignInMutation,
//     userLogoutMutation,
//     isLoggedIn,
//   };
// };
