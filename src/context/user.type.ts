import { Dispatch, SetStateAction } from 'react';

export interface UserContextState {
  isAuthenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}
