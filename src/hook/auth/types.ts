import { UseMutationResult, UseQueryResult, MutationFunction } from 'react-query';

export enum RoleEnum {
  ADMIN = 'admin',
  USER = 'user',
}

export type UserDto = { id: number; username: string; email: string; role: RoleEnum };
export type Token = { accessToken: string };
export type UseWhoAmI = { useWhoAmI: UseQueryResult<UserDto>; isAuthenticated: boolean };

export type SignInArgs = { email: string; password: string };
export type SignInUserFunc = MutationFunction<SignInDto, SignInArgs>;
export type SignInDto = Token & UserDto;
export type UseLogin = UseMutationResult<SignInDto, any, SignInArgs>;

export type LoginAppleArgs = { identityToken: string };
export type LoginAppleFunc = MutationFunction<LoginAppleDto, LoginAppleArgs>;
export type LoginAppleDto = Token & UserDto;
export type UseLoginApple = UseMutationResult<LoginAppleDto, any, LoginAppleArgs>;

export type SignUpAppleArgs = { identityToken: string; name: string };
export type SignUpAppleFunc = MutationFunction<SignUpAppleDto, SignUpAppleArgs>;
export type SignUpAppleDto = Token & UserDto;
export type UseSignUpApple = UseMutationResult<SignUpAppleDto, any, SignUpAppleArgs>;
