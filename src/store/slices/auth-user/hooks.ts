import { useSelector } from 'react-redux';

import type { RootState } from '../../store';

export const useUser = () =>
  useSelector((state: RootState) => {
    return state.user.user;
  });

export const useAuthStatus = () =>
  useSelector((state: RootState) => {
    return state.user.authStatus;
  });

export const useUserChecked = () =>
  useSelector((state: RootState) => {
    return state.user.userChecked;
  });

export const useAuthErrors = () =>
  useSelector((state: RootState) => {
    return state.user.errors;
  });
