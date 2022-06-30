import { UseMutationResult, UseQueryResult, MutationFunction } from 'react-query';

export enum RoleEnum {
  ADMIN = 'admin',
  USER = 'user',
}

export type UserDto = { id: number; username: string; email: string; role: RoleEnum };
export type UseMe = UseQueryResult<UserDto>;

export type SignInArgs = { email: string; password: string };
export type SignInUserFunc = MutationFunction<SignInDto, SignInArgs>;
export type SignInDto = { accessToken: string } & UserDto;
export type UseLogin = UseMutationResult<SignInDto, any, SignInArgs>;
